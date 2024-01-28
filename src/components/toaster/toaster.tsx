import React from 'react'

import { ToastContainer } from 'react-toastify'

import '@/app/styles/react-toastify.scss'
import { LoseButton } from '@/components'

export const Toaster = () => {
  return (
    <ToastContainer
      position="bottom-left"
      autoClose={3500}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      icon={false}
      theme={'colored'}
      closeButton={LoseButton}
    />
  )
}
