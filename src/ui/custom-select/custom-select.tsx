import React, { ChangeEvent } from 'react'

import { ChevronDown } from '@/app/assets/svg/chevron-down'
import { CustomSelectProps } from '@/ui/custom-select/custom-select.types'
import CustomSelectOptions from '@/ui/custom-select/custom-select-options'
import { useCustomSelect } from '@/ui/custom-select/useCustomSelect'
import { clsx } from 'clsx'

import s from './custom-select.module.scss'

export const CustomSelect = ({
  disabled,
  isClearable = false,
  isLoading,
  label,
  onChange,
  options,
  placeholder,
  value,
}: CustomSelectProps) => {
  const {
    clearHandler,
    closeSelectOnBlur,
    currentValue,
    filteredData,
    indexCurrent,
    inputRef,
    isOpen,
    keyHandler,
    onSelectValueHandler,
    optionsListRef,
    resetFilter,
    selectRef,
    setFilterHandler,
    setIndexCurrent,
    setIsOpen,
  } = useCustomSelect(options, onChange)

  const styles = {
    chevron: clsx(s.chevron, isOpen && s.open),
  }

  // useEffect(() => {
  //   inputRef.current?.focus()
  // }, [inputRef])

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setIsOpen(true)
    setFilterHandler(event)
  }
  const valueToShow = !isOpen && (value || currentValue) && (
    <div className={s.input} style={{ border: 'none' }}>
      {value || currentValue}
    </div>
  )
  const searchInput = isOpen && (value || currentValue) && (
    <input
      className={s.input}
      onChange={onChangeValue}
      placeholder={placeholder || 'Select...'}
      ref={inputRef}
      tabIndex={-1}
      type={'text'}
    />
  )

  const selectLabel = label && <label className={s.label}>{label}</label>

  const toggleOpen = () => {
    !isOpen && setIsOpen(true)
  }

  //setIsClearable does not work properly
  const setIsClearable = isClearable && (
    <>
      <button className={s['close-button']} onClick={clearHandler} type={'button'}>
        &times;
      </button>
      <div className={s.divider}></div>
    </>
  )

  const toggleButton = isLoading ? <div className={s.loader} /> : <ChevronDown />
  const onClickToggleButton = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={clsx(s.container, disabled && s.disabled)}>
      {selectLabel}
      <div
        className={s.select}
        onBlur={closeSelectOnBlur}
        onClick={toggleOpen}
        onKeyDown={keyHandler}
        ref={selectRef}
        tabIndex={0}
      >
        {valueToShow}
        {searchInput}
        {setIsClearable}

        <button
          className={styles.chevron}
          disabled={isLoading}
          onClick={onClickToggleButton}
          tabIndex={-1}
          type={'button'}
        >
          {toggleButton}
        </button>
        <CustomSelectOptions
          indexCurrent={indexCurrent}
          isOpen={isOpen}
          items={filteredData}
          onSelectValueHandler={onSelectValueHandler}
          ref={optionsListRef}
          resetFilter={resetFilter}
          setIndexCurrent={setIndexCurrent}
        />
      </div>
    </div>
  )
}
