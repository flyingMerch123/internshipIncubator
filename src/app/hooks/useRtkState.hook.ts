import { useAppDispatch, useAppSelector } from '@/app/store/rtk.types'

export const useRtkStateHook = () => {
  const _dispatch = useAppDispatch()
  const _state = useAppSelector(state => state)

  return { _dispatch, _state }
}
