import { useState, useLayoutEffect, useEffect } from 'react'

import { MatchMedia } from '@/app'

const QUERIES = {
  MOBILE: '(min-width: 320px) and (max-width: 420px)',
  TABLET: '(min-width: 421px) and (max-width: 1199px)',
  DESKTOP: '(min-width: 1200px)',
}

const THROTTLED_TIME = 500

export const useMatchMedia = (): MatchMedia => {
  const isClient = typeof window !== 'undefined'
  const [values, setValues] = useState<MatchMedia>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  })

  useEffect(() => {
    const getValues = () => {
      return {
        isMobile: window.matchMedia(QUERIES.MOBILE).matches,
        isTablet: window.matchMedia(QUERIES.TABLET).matches,
        isDesktop: window.matchMedia(QUERIES.DESKTOP).matches,
      }
    }

    const updateValues = () => {
      setValues(getValues())
    }

    let timer: number

    const throttledUpdate = () => {
      if (!timer) {
        // Гарантированный первый вызов
        updateValues()

        timer = window.setTimeout(() => {
          timer = 0
          updateValues()
        }, THROTTLED_TIME)
      }
    }

    if (isClient) {
      throttledUpdate()

      const handleResize = () => {
        throttledUpdate()
      }

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [isClient])

  return values
}
