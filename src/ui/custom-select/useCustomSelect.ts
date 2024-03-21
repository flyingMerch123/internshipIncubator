import React, { FocusEvent, useEffect, useRef, useState } from 'react'

import { SelectValue } from '@/ui/custom-select/custom-select.types'
import { useFilterOptions } from '@/ui/custom-select/useFilterOptions'
import { useFindNext } from '@/ui/custom-select/useFindNext'

export const useCustomSelect = (
  options: SelectValue[] | undefined,
  onSelect?: (value: string | undefined) => void,
  value?: SelectValue
) => {
  const selectRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const optionsListRef = useRef<HTMLUListElement>(null)

  const [internalValue, setInternalValue] = useState<string | undefined>(value?.label || '')
  const [hoveredValue, setHoveredValue] = useState<SelectValue | undefined>()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const currentValue = value?.label || internalValue

  const { filteredData, resetFilter, setFilterHandler } = useFilterOptions(options || [])
  const { findDown, findUp, indexCurrent, setIndexCurrent } = useFindNext(filteredData?.length)

  const onSelectValueHandler = (value: string | undefined) => {
    if (onSelect) {
      onSelect(value)
    }
    setInternalValue(value)
    setIsOpen(false)
  }

  const onHoverValue = (value: SelectValue | undefined) => {
    value && setHoveredValue(value)
  }

  const clearHandler = () => {
    setInternalValue(undefined)
  }

  const keyHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.code) {
      case 'Space':
        setIsOpen(!isOpen)
        inputRef.current?.focus()
        break
      case 'ArrowUp':
        {
          findUp()
          e.preventDefault()
        }
        break
      case 'ArrowDown':
        {
          findDown()
          e.preventDefault()
        }
        break
      case 'Enter' || 'NumpadEnter':
        onSelectValueHandler(filteredData[indexCurrent].label)
        break
      default:
        break
    }
  }
  const closeSelectOnBlur = (e: FocusEvent<HTMLDivElement>) => {
    //if (!selectRef?.current?.contains(e.relatedTarget)) setIsOpen(false)
  }

  useEffect(() => {
    if (optionsListRef.current && indexCurrent !== undefined) {
      const listElement = optionsListRef.current
      const selectedElement = listElement.children[indexCurrent] as HTMLLIElement

      if (selectedElement) {
        const listHeight = listElement.clientHeight
        const selectedElementTop = selectedElement.offsetTop
        const selectedElementHeight = selectedElement.clientHeight

        if (selectedElementTop < listElement.scrollTop) {
          listElement.scrollTop = selectedElementTop
        } else if (
          selectedElementTop + selectedElementHeight >
          listElement.scrollTop + listHeight
        ) {
          listElement.scrollTop = selectedElementTop + selectedElementHeight - listHeight
        }
      }
    }
  }, [indexCurrent, filteredData])

  useEffect(() => {
    clearHandler()
  }, [options])

  return {
    clearHandler,
    closeSelectOnBlur,
    currentValue,
    filteredData,
    hoveredValue,
    indexCurrent,
    inputRef,
    isOpen,
    keyHandler,
    onHoverValue,
    onSelectValueHandler,
    optionsListRef,
    resetFilter,
    selectRef,
    setFilterHandler,
    setIndexCurrent,
    setInternalValue,
    setIsOpen,
  }
}
