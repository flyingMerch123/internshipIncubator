import React, { forwardRef } from 'react'

import { OptionsProps } from '@/ui/custom-select/custom-select.types'
import { clsx } from 'clsx'

import s from '@/ui/custom-select/custom-select.module.scss'

const CustomSelectOptions = forwardRef<HTMLUListElement, OptionsProps>(
  ({ indexCurrent, isOpen, items, onSelectValueHandler, resetFilter, setIndexCurrent }, ref) => {
    const styles = {
      options: clsx(s.options, isOpen && s.show),
    }

    return (
      <ul className={styles.options} ref={ref}>
        {items?.map((option, index) => {
          const onClick = () => {
            onSelectValueHandler(option.label)
            resetFilter()
          }
          const onMouseEnter = () => {
            setIndexCurrent(index)
          }
          const optionStyle = clsx(s.option, index === indexCurrent && s.hovered)

          return (
            <li className={optionStyle} key={index} onClick={onClick} onMouseEnter={onMouseEnter}>
              {option.label}
            </li>
          )
        })}
      </ul>
    )
  }
)

export default CustomSelectOptions
