import { pluralizeEn, pluralizeRu } from '@/app/helpers/pluralize'

export const CharacterPageTextModel = {
  en: {
    description: 'Character <1>name</1> relates to <2>species</2>',
    getCount(count: number) {
      const str = pluralizeEn(count)

      switch (str) {
        case 'one':
          return `${count} item`
        case 'other':
          return `${count} items`
      }
    },
    getDescription(name: string, species: string) {
      return `Character ${name} relates to ${species}`
    },
  },
  ru: {
    description: 'Персонаж <1>name</1> относится к разновидности <2>species</2>',
    getCount(count: number) {
      const str = pluralizeRu(count)

      switch (str) {
        case 'one':
          return `${count} товар`
        case 'few':
          return `${count} товара`
        case 'many':
          return `${count} товаров`
      }
    },
    getDescription(name: string, species: string) {
      return `Персонаж ${name} относится к разновидности ${species}`
    },
  },
}
