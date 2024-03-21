import img1 from '@/../public/assets/user-profile-data/1.jpg'
import img2 from '@/../public/assets/user-profile-data/2.jpg'
import img3 from '@/../public/assets/user-profile-data/3.jpg'
import img4 from '@/../public/assets/user-profile-data/4.jpg'
import img5 from '@/../public/assets/user-profile-data/5.jpg'
import img6 from '@/../public/assets/user-profile-data/6.jpg'
import img7 from '@/../public/assets/user-profile-data/7.jpg'
import img8 from '@/../public/assets/user-profile-data/8.jpg'
import img9 from '@/../public/assets/user-profile-data/9.jpg'
import img10 from '@/../public/assets/user-profile-data/10.jpg'
import img11 from '@/../public/assets/user-profile-data/11.jpg'
import img12 from '@/../public/assets/user-profile-data/12.jpg'
import img13 from '@/../public/assets/user-profile-data/13.jpg'
import img14 from '@/../public/assets/user-profile-data/14.jpg'
import img15 from '@/../public/assets/user-profile-data/15.jpg'
import img16 from '@/../public/assets/user-profile-data/16.jpg'
import img17 from '@/../public/assets/user-profile-data/17.jpg'
import img18 from '@/../public/assets/user-profile-data/18.jpg'
import img19 from '@/../public/assets/user-profile-data/19.jpg'
import img20 from '@/../public/assets/user-profile-data/20.jpg'
import { StaticImageData } from 'next/image'

const GALLERY_DATA: StaticImageData[] = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
]

for (let i = 0; i < GALLERY_DATA.length; i++) {
  const rndIndex = Math.floor(Math.random() * GALLERY_DATA.length)

  ;[GALLERY_DATA[i], GALLERY_DATA[rndIndex]] = [GALLERY_DATA[rndIndex], GALLERY_DATA[i]]
}

export { GALLERY_DATA }
