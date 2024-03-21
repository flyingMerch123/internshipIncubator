import { toast } from 'react-toastify'

import { useMatchMedia } from '@/app'
import { useGetGeolocationQuery } from '@/app/services/ipgeolocation/ipgeolocation.api'
import {
  useGetSessionsQuery,
  useTerminateAllSessionsMutation,
  useTerminateSessionByIdMutation,
} from '@/app/services/sessions/sessions.api'
import { DeviceInformationCard } from '@/components'
import { Button, Typography } from '@/ui'

import s from './user-devices.module.scss'

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
          currentIp={location?.ip}
          session={{ ...sessions[0], ip: location?.ip || sessions[0].ip }}
          type={'DEVICE'}
          variant={'CHROME'}
        />
      )}

      <Button
        className={s.btn}
        fullWidth={isMobile}
        onClick={terminateSessions}
        variant={'outlined'}
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
            getSessionId={terminateSessionById}
            key={session.deviceId}
            session={session}
            type={'SESSION'}
            variant={'DESKTOP'}
          />
        )
      })}
    </section>
  )
}
