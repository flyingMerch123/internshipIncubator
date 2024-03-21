import React from 'react'
import { ToastContainer } from 'react-toastify'

import { LoseButton } from '@/components'

import '@/app/styles/react-toastify.scss'

export const Toaster = () => {
  return (
    <ToastContainer
      autoClose={3500}
      closeButton={LoseButton}
      closeOnClick
      draggable
      hideProgressBar
      icon={false}
      newestOnTop
      pauseOnFocusLoss
      pauseOnHover
      position={'bottom-left'}
      rtl={false}
      theme={'colored'}
    />
  )
}
