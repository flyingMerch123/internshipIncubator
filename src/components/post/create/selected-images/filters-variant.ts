type FiltersVariantsType = {
  filter: string
  name: string
}

export const filtersVariant: FiltersVariantsType[] = [
  {
    filter: '',
    name: 'No filter',
  },
  {
    filter: 'contrast(90%) brightness(120%) saturate(160%) hue-rotate(-10deg)',
    name: 'Kyoto',
  },
  {
    filter: 'grayscale(100%)',
    name: 'Lark',
  },
  {
    filter:
      'contrast(90%) brightness(110%) saturate(150%) sepia(30%) grayscale(37%) invert(10%) hue-rotate(20deg)',
    name: 'Gingham',
  },
  {
    filter: 'contrast(110%) brightness(110%) saturate(130%)',
    name: 'Happy',
  },
  {
    filter: 'contrast(150%) saturate(110%)',
    name: 'Shabby',
  },
  {
    filter:
      ' contrast(95%) brightness(95%) saturate(150%) sepia(25%) grayscale(2%) hue-rotate(28deg)',
    name: 'Old school',
  },
  {
    filter: 'contrast(140%) sepia(50%) grayscale(3%) invert(2%) hue-rotate(15deg)',
    name: 'Silent Hill',
  },
  {
    filter: 'saturate(3)',
    name: 'Hudson',
  },
]
