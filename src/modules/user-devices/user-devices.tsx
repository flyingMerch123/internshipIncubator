import { toast } from 'react-toastify'

import s from './user-devices.module.scss'

import { useMatchMedia } from '@/app'
import { useGetGeolocationQuery } from '@/app/services/ipgeolocation/ipgeolocation.api'
import {
  useGetSessionsQuery,
  useTerminateAllSessionsMutation,
  useTerminateSessionByIdMutation,
} from '@/app/services/sessions/sessions.api'
import { DeviceInformationCard } from '@/components'
import { Button, Typography } from '@/ui'

export const UserDevices = () => {
  const { isMobile } = useMatchMedia()
  const apiKEY = (process.env.IP_GEOLOCATION_API_KEY as string) || ''
  const [terminateAll] = useTerminateAllSessionsMutation()
  const [terminateSession] = useTerminateSessionByIdMutation()
  const { data: sessions } = useGetSessionsQuery()
  const { data: location } = useGetGeolocationQuery(
    { apiKEY },
    { skip: !process.env.IP_GEOLOCATION_API_KEY }
  )

  // const sessionFallback = (
  //   <Typography as={'h2'} variant={'h2'} className={s.fallback}>
  //     You have not yet logged in from other devices
  //   </Typography>
  // )

  const terminateSessions = () => {
    terminateAll()
      .unwrap()
      .then(() => {
        toast.success('all sessions were terminated')
      })
  }
  const terminateSessionById = (sessionId: number) => {
    terminateSession({ deviceId: sessionId })
      .unwrap()
      .then(() => {
        toast.success('session was terminated')
      })
  }

  return (
    <section className={s.container}>
      <div className={s.device}>
        <Typography as={'h3'} variant={'h3'}>
          Current device
        </Typography>
      </div>
      {sessions && sessions[0] && (
        <DeviceInformationCard
          className={s.card}
          type={'DEVICE'}
          variant={'CHROME'}
          session={{ ...sessions[0], ip: location?.ip || sessions[0].ip }}
          currentIp={location?.ip}
        />
      )}

      <Button
        variant={'outlined'}
        fullWidth={isMobile}
        className={s.btn}
        onClick={terminateSessions}
      >
        Terminate all other session
      </Button>

      <Typography as={'h3'} variant={'h3'}>
        Active sessions
      </Typography>
      {sessions?.map(session => {
        return (
          <DeviceInformationCard
            className={s.card}
            key={session.deviceId}
            type={'SESSION'}
            variant={'DESKTOP'}
            session={session}
            getSessionId={terminateSessionById}
          />
        )
      })}
    </section>
  )
}
