import { useEffect, useState } from 'react'

import { MIME_TYPES, useTranslation } from '@/app'

export const errorMessage = {
  type(limit: string | string[], languageVersion: { text: string; preposition: string }): string {
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

        return `${languageVersion} ${type || fallbackText}`
      }
    }

    return upperCaseFormat()
  },

  size(limit: number, languageVersion: string): string {
    return `${languageVersion} ${limit} MB!`
  },
}

type ErrorValidationType = { typeLimit?: string | string[]; sizeLimit?: number } // sizeLimit => MB type

export const useImageValidation = () => {
  const [step, setStep] = useState<1 | 2>(1)
  const [blob, setBlob] = useState<Blob | null>(null)
  const [url, setUrl] = useState<string>('')
  const [errorText, setErrorText] = useState<string>('')

  const { JPG, PNG } = MIME_TYPES

  const { t } = useTranslation()
  const { errors } = t.profileSettings.generalSettings.profileImage

  const stepUp = (file: File) => {
    const blob: Blob = new Blob([file], { type: file?.type })

    setBlob(blob)
  }

  const stepBack = () => setStep(1)

  const clearError = () => setErrorText('')

  useEffect(() => {
    if (!blob) return
    const imageValidation = (
      blob: Blob,
      { typeLimit = [JPG, PNG], sizeLimit = 2 }: ErrorValidationType
    ) => {
      const { size, type } = blob
      const sizeMb = size / 1000 / 1000

      if (!typeLimit.includes(type)) {
        setUrl('')
        setErrorText(errorMessage.type(typeLimit, errors.format))

        return
      }

      if (sizeMb > sizeLimit) {
        setUrl('')
        setErrorText(errorMessage.size(sizeLimit, errors.size))

        return
      }

      const url = URL.createObjectURL(blob)

      setUrl(url)
      setErrorText('')
      setStep(2)
    }

    imageValidation(blob, {})
  }, [blob])

  return {
    step,
    stepUp,
    stepBack,
    url,
    blob,
    errorText,
    clearError,
  }
}
