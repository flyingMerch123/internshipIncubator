import { useState } from 'react'

export const useFindNext = (maxIndex: number) => {
  const [indexCurrent, setIndexCurrent] = useState<number>(0)

  const findUp = () => {
    if (indexCurrent > 0 && indexCurrent <= maxIndex) {
      setIndexCurrent(prevState => prevState - 1)
    }
  }

  const findDown = () => {
    if (indexCurrent < maxIndex - 1) {
      setIndexCurrent(prevState => prevState + 1)
    }
  }

  return { findDown, findUp, indexCurrent, setIndexCurrent }
}
