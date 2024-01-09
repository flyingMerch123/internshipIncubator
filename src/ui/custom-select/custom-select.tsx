import React, { ChangeEvent, FocusEvent, useCallback, useRef, useState } from 'react'

import { clsx } from 'clsx'

import s from './custom-select.module.scss'

import { ChevronDown } from '@/app/assets/svg/chevron-down'
import { CustomSelectProps } from '@/ui/custom-select/custom-select.types'
import { useCustomSelect } from '@/ui/custom-select/useCustomSelect'

export const CustomSelect = ({
  options,
  label,
  value,
  placeholder,
  isClearable = false,
  onChange,
}: CustomSelectProps) => {
  const {
    isOpen,
    setIsOpen,
    closeSelectOnBlur,
    keyHandler,
    onSelectValueHandler,
    currentValue,
    clearHandler,
    optionsListRef,
    indexCurrent,
    filteredData,
    selectRef,
    inputRef,
    setFilterHandler,
    resetFilter,
    setIndexCurrent,
  } = useCustomSelect(options, onChange)

  const styles = {
    options: clsx(s.options, isOpen && s.show),
    chevron: clsx(s.chevron, isOpen && s.open),
  }

  return (
    <div className={s.container}>
      {label && <label className={s.label}>{label}</label>}
      <div
        className={s.select}
        tabIndex={0}
        onBlur={closeSelectOnBlur}
        ref={selectRef}
        onKeyDown={keyHandler}
        onClick={() => {
          !isOpen && setIsOpen(true)
        }}
      >
        {!isOpen && (value || currentValue) && (
          <div className={s.input}>{value || currentValue}</div>
        )}
        {(isOpen || !currentValue) && (
          <input
            tabIndex={-1}
            placeholder={placeholder || 'Select...'}
            type={'text'}
            className={s.input}
            onChange={e => {
              setIsOpen(true)
              setFilterHandler(e)
            }}
            ref={inputRef}
          />
        )}
        {isClearable && (
          <>
            <button className={s['close-button']} onClick={clearHandler} type={'button'}>
              &times;
            </button>
            <div className={s.divider}></div>
          </>
        )}

        <button
          tabIndex={-1}
          className={styles.chevron}
          onClick={() => {
            setIsOpen(!isOpen)
          }}
          type={'button'}
        >
          <ChevronDown />
        </button>
        <ul className={styles.options} ref={optionsListRef}>
          {filteredData?.map((option, index) => {
            return (
              <li
                className={clsx(s.option, index === indexCurrent && s.hovered)}
                key={index}
                onClick={() => {
                  onSelectValueHandler(option.label)
                  resetFilter()
                }}
                onMouseEnter={() => setIndexCurrent(index)}
              >
                {option.label}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
