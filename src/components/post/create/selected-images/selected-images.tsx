import React from 'react'

import airBalloon from '@/app/assets/image/airBalloonImage.jpg'
import { useActiveFilterChange } from '@/components/post/create/selected-images/useActiveFilterChange'
import { Typography } from '@/ui'
import ImageWithFilter, { StaticImageData } from 'next/image'

import s from './selected-images.module.scss'

import { filtersVariant } from './filters-variant'

type SelectedImagesProps = {
  setActiveFilter: (filter: string) => void
  url: StaticImageData | string
}

export const SelectedImages = ({ setActiveFilter, url }: SelectedImagesProps) => {
  const onActiveFilterChange = useActiveFilterChange(setActiveFilter)

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, filter: string) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      onActiveFilterChange(filter)
    }
  }

  return (
    <>
      <div className={s.filterContainer}>
        {filtersVariant.map(filterVariant => {
          const { filter, name } = filterVariant

          return (
            <div
              className={s.imgWithFilter}
              key={name}
              onClick={() => onActiveFilterChange(name)}
              onKeyDown={e => handleOnKeyDown(e, name)}
              tabIndex={0}
            >
              <ImageWithFilter
                alt={'image-with-filter'}
                className={s.image}
                height={108}
                objectFit={'contain'}
                src={url || airBalloon}
                style={{ filter }}
                width={108}
              />

              <div className={s.filterName}>
                <Typography variant={'h3'}>{name}</Typography>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
