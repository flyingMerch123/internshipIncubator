import { RefObject, useEffect, useRef, useState } from 'react'

export const useInfiniteScroll = (
  data: any[],
  trigger: RefObject<HTMLDivElement>,
  callback: () => Promise<any[]>,
  limit: number
) => {
  const [content, setContent] = useState<any[]>(data)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const observer = useRef<IntersectionObserver>()

  useEffect(() => {
    if (isLoading) {
      return
    }
    if (observer.current) {
      observer.current.disconnect()
    }

    const request = async (entries: any[]) => {
      if (!entries[0].isIntersecting) {
        return
      }

      if (limit <= content.length) {
        return setIsLoading(false)
      }

      setIsLoading(true)

      try {
        const newContent = await callback()

        setContent([...content, ...newContent])
        setIsLoading(false)
      } catch (e) {
        setIsLoading(false)

        throw new Error('Something went wrong. Please refresh the page.')
      }
    }

    observer.current = new IntersectionObserver(request)
    observer.current.observe(trigger.current!)
  }, [isLoading])

  return { content, isLoading }
}
