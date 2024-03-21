import { useEffect } from 'react'
import { toast } from 'react-toastify'

import { useDisclose, useTranslation } from '@/app'
import { useLoadingSpinner } from '@/app/services/application/application.hooks'
import { useDeleteAvatarMutation, useGetProfileQuery } from '@/app/services/profile/profile.api'
import { showError } from '@/app/utils'
import { Avatar, AvatarPropsType, ConfirmationModal, LoadingSpinner } from '@/components'
import { Button, ButtonProps } from '@/ui'

import s from './account-image.module.scss'

type AccountImageProps = ButtonProps & AvatarPropsType
export const AccountImage = (props: AccountImageProps) => {
  const { isOpen, onClose, onOpen } = useDisclose()
  const { height = 192, onClick, width = 192, ...restProps } = props

  const { data, isLoading } = useGetProfileQuery()
  const [deleteAvatar, { isLoading: isDeleteLoading }] = useDeleteAvatarMutation()
  const { stopLoadingSpinner } = useLoadingSpinner({
    active: isLoading || isDeleteLoading,
    title: (isDeleteLoading && 'Saving...') || 'Loadasdasdaing...',
  })

  const { t } = useTranslation()
  const { profileImage } = t.profileSettings.generalSettings

  const onDeleteConfirmation = () => {
    deleteAvatar()
      .unwrap()
      .then(() => toast.success('Image deleted'))
      .catch(e => showError(e))
      .finally(() => {
        stopLoadingSpinner()
      })
  }

  return (
    <div className={s.container}>
      <Avatar
        height={height}
        onDelete={onOpen}
        rounded
        src={data?.avatars[0]?.url}
        width={width}
        {...restProps}
      />
      <Button onClick={onClick} variant={'outlined'}>
        {profileImage.btn.label}
      </Button>

      <ConfirmationModal
        isOpen={isOpen}
        onClose={onClose}
        onConfirmation={onDeleteConfirmation}
        translation={'deleteAvatar'}
      />
    </div>
  )
}
