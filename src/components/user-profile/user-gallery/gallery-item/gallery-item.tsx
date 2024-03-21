import React from 'react'

import Image from 'next/image'

type GalleryItemProps = {
  alt: string
  height: number
  openPostModalHandler: (postId: number) => void
  postId: number
  src: string
  width: number
}

export const GalleryItem = ({ openPostModalHandler, postId, ...props }: GalleryItemProps) => {
  return <Image {...props} onClick={() => openPostModalHandler(postId)} />
}
