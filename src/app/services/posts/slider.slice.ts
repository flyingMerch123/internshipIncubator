import { IMAGE_SIZE } from '@/app/constants/enums'
import { ImageSlideType } from '@/app/services/posts/posts.types'
import { PostImageViewModel } from '@/app/services/public-posts/public-posts.types'
import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit'

const defaultState: ImageSlideType = {
  currentImageIndex: 0,
  description: '',
  images: [],
}

const postSlider = createSlice({
  initialState: defaultState,
  name: 'postSlider',
  reducers: {
    addCroppedImage(state, action: PayloadAction<{ croppedImage: string; index: number }>) {
      const { croppedImage, index } = action.payload

      state.images[index] = { ...state.images[index], url: croppedImage }
    },
    addImage(state, action: PayloadAction<{ url: string }>) {
      const newImage: PostImageViewModel = {
        alt: 'image',
        fileSize: 1,
        filter: '',
        height: 0,
        imageSize: IMAGE_SIZE.MEDIUM,
        uploadId: nanoid(),
        url: action.payload.url,
        width: 0,
      }

      state.images = [...state.images, newImage]
    },
    addMultipleImages(state, action: PayloadAction<PostImageViewModel[]>) {
      state.images = [...state.images, ...action.payload]
    },
    changeDescription(state, action: PayloadAction<{ text: string }>) {
      state.description = action.payload.text
    },
    deleteImage(state, action: PayloadAction<{ id: string }>) {
      state.images = state.images.filter(image => image.uploadId !== action.payload.id)
    },
    resetImagesToDefaultState(state, action: PayloadAction) {
      state.images = defaultState.images
      state.currentImageIndex = 0
      state.description = defaultState.description
    },
    setActiveImageFilter(state, action: PayloadAction<{ filter: string; id: number | string }>) {
      const { filter, id } = action.payload

      state.images = state.images.filter(image => {
        if (image.uploadId === id) {
          image.filter = filter
        }

        return image
      })
    },
    setCurrentImageIndex(state, action: PayloadAction<{ index: number }>) {
      state.currentImageIndex = action.payload.index
    },
  },
})

export const {
  addCroppedImage,
  addImage,
  addMultipleImages,
  changeDescription,
  deleteImage,
  resetImagesToDefaultState,
  setActiveImageFilter,
  setCurrentImageIndex,
} = postSlider.actions
export const postSliderSlice = postSlider.reducer
