export const useActiveFilterChange = (changeFilterFn: (filter: string) => void) => {
  const changeActiveFilter = (filter: string) => {
    switch (filter) {
      case 'No filter':
        changeFilterFn('')
        break
      case 'Kyoto':
        changeFilterFn('contrast(90%) brightness(120%) saturate(160%) hue-rotate(-10deg)')
        break
      case 'Lark':
        changeFilterFn('grayscale(100%)')
        break
      case 'Gingham':
        changeFilterFn(
          'contrast(90%) brightness(110%) saturate(150%) sepia(30%) grayscale(37%) invert(10%) hue-rotate(20deg)'
        )
        break
      case 'Happy':
        changeFilterFn('contrast(110%) brightness(110%) saturate(130%)')
        break
      case 'Shabby':
        changeFilterFn('contrast(150%) saturate(110%)')
        break
      case 'Old school': {
        changeFilterFn(
          ' contrast(95%) brightness(95%) saturate(150%) sepia(25%) grayscale(2%) hue-rotate(28deg)'
        )
        break
      }
      case 'Silent Hill': {
        changeFilterFn('contrast(140%) sepia(50%) grayscale(3%) invert(2%) hue-rotate(15deg)')
        break
      }
      case 'Hudson': {
        changeFilterFn('saturate(3)')
        break
      }
      default: {
        changeFilterFn('')
        break
      }
    }
  }

  return changeActiveFilter
}
