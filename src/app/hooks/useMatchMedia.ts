import { useEffect, useState } from 'react'

import { MatchMedia } from '@/app'

const QUERIES = {
  DESKTOP: '(min-width: 1025px)',
  MOBILE: '(min-width: 320px) and (max-width: 420px)',
  TABLET: '(min-width: 421px) and (max-width: 1024px)',
}

const THROTTLED_TIME = 500

export const useMatchMedia = (): MatchMedia => {
  const isClient = typeof window !== 'undefined'
  const [values, setValues] = useState<MatchMedia>({
    isDesktop: false,
    isMobile: false,
    isTablet: false,
  })

  useEffect(() => {
    const getValues = () => {
      return {
        isDesktop: window.matchMedia(QUERIES.DESKTOP).matches,
        isMobile: window.matchMedia(QUERIES.MOBILE).matches,
        isTablet: window.matchMedia(QUERIES.TABLET).matches,
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
