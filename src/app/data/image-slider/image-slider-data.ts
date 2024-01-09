import { nanoid } from '@reduxjs/toolkit'

import img1 from '@/../public/assets/user-profile-data/1.jpg'
import img10 from '@/../public/assets/user-profile-data/10.jpg'
import img2 from '@/../public/assets/user-profile-data/2.jpg'
import img3 from '@/../public/assets/user-profile-data/3.jpg'
import img4 from '@/../public/assets/user-profile-data/4.jpg'
import img5 from '@/../public/assets/user-profile-data/5.jpg'
import img6 from '@/../public/assets/user-profile-data/6.jpg'
import img7 from '@/../public/assets/user-profile-data/7.jpg'
import img8 from '@/../public/assets/user-profile-data/8.jpg'
import img9 from '@/../public/assets/user-profile-data/9.jpg'

export const IMAGE_SLIDER_DATA = [
  { id: nanoid(), url: img1, alt: 'image_1' },
  { id: nanoid(), url: img2, alt: 'image_2' },
  { id: nanoid(), url: img3, alt: 'image_3' },
  { id: nanoid(), url: img4, alt: 'image_4' },
  { id: nanoid(), url: img5, alt: 'image_5' },
  { id: nanoid(), url: img6, alt: 'image_6' },
  { id: nanoid(), url: img7, alt: 'image_7' },
  { id: nanoid(), url: img8, alt: 'image_8' },
  { id: nanoid(), url: img9, alt: 'image_9' },
  { id: nanoid(), url: img10, alt: 'image_10' },
]
