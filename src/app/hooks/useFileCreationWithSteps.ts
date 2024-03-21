import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { MIME_TYPES, useTranslation } from '@/app'
import { useAppDispatch } from '@/app/store/rtk.types'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

export const errorMessage = {
  size(limit: number, languageVersion: string): string {
    return `${languageVersion} ${limit} MB!`
  },

  type(limit: string | string[], languageVersion: { preposition: string; text: string }): string {
    const format = /[^/]+$/
    const upperCaseFormat = (): string => {
      const fallbackText: string = 'defined.'

      if (Array.isArray(limit)) {
        const arrayOfTypes = limit.map(type => type.match(format)![0].toUpperCase())

        return `${languageVersion?.text} ${
          arrayOfTypes.length > 2
            ? arrayOfTypes.join(', ')
            : arrayOfTypes.join(` ${languageVersion?.preposition} `) || fallbackText
        }`
      } else {
        const type: string = limit.match(format)![0].toUpperCase()

        return `${languageVersion.text} ${type || fallbackText}`
      }
    }

    return upperCaseFormat()
  },
}

type ErrorValidationType = { sizeLimit?: number; typeLimit?: string | string[] } // sizeLimit => MB type

export const useFileCreationWithSteps = (
  initialStep?: number,
  actionCreator?: ActionCreatorWithPayload<any, any>,
  validationOptions?: ErrorValidationType
) => {
  const [step, setStep] = useState<number>(initialStep || 1)
  const [blob, setBlob] = useState<Blob | null>(null)
  const [url, setUrl] = useState<string>('')
  const [errorText, setErrorText] = useState<string>('')

  const dispatch = useAppDispatch()

  const { JPG, PNG } = MIME_TYPES

  const { t } = useTranslation()
  const { errors } = t.profileSettings.generalSettings.profileImage

  const initialStepWithValidation = (file: File) => {
    const blob: Blob = new Blob([file], { type: file?.type })

    setBlob(blob)
  }

  const stepBackward = () => setStep(step => step - 1)

  const stepForward = () => setStep(step => step + 1)

  const setPreferredStep = (step: number) => setStep(step)

  const clearError = () => setErrorText('')

  useEffect(() => {
    if (!blob) {
      return
    }
    const imageValidation = (
      blob: Blob,
      { sizeLimit = 2, typeLimit = [JPG, PNG] }: ErrorValidationType
    ) => {
      const { size, type } = blob
      const sizeMb = size / 1000 / 1000

      if (!typeLimit.includes(type)) {
        setUrl('')

        const errorText = errorMessage.type(typeLimit, errors.format)

        return toast.error(errorText, {
          autoClose: 1500,
        })
      }

      if (sizeMb > sizeLimit) {
        setUrl('')

        const errorText = errorMessage.size(sizeLimit, errors.size)

        return toast.error(errorText, {
          autoClose: 1500,
        })
      }

      const url = URL.createObjectURL(blob)

      if (actionCreator) {
        dispatch(actionCreator({ url }))
      }

      setUrl(url)
      setErrorText('')

      stepForward()
      toast.success(`Image added`, {
        autoClose: 1500,
      })
    }

    imageValidation(blob, validationOptions ?? {})
  }, [blob])

  return {
    blob,
    clearError,
    errorText,
    initialStepWithValidation,
    setPreferredStep,
    step,
    stepBackward,
    stepForward,
    url,
  }
}
