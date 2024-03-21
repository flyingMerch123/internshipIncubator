import { toast } from 'react-toastify'

export const copyToClipboard = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      toast.success('Post link copied')
    })
    .catch(() => {
      toast.error('Failed to copy post link')
    })
}
