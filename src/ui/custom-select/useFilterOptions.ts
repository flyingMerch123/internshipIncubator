import { ChangeEvent, useMemo, useState } from 'react'

import { SelectValue } from '@/ui/custom-select/custom-select.types'

export const useFilterOptions = (options: SelectValue[]) => {
  const [filter, setFilter] = useState('')

  const setFilterHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value.toLowerCase()

    setFilter(inputValue)
  }
  const filteredData = useMemo(() => {
    return options?.filter(item => {
      return item.label.toLowerCase().includes(filter)
    })
  }, [filter, options])
  const resetFilter = () => {
    setFilter('')
  }

  return { filteredData, resetFilter, setFilterHandler }
}
