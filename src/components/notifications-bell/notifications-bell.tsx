import { useState } from 'react'

import { ArrowDropdown } from '@/app'
import { Bell, Card, Typography } from '@/ui'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './notifications-bell.module.scss'

type Props = {
  notifications?: { date: string; text: string; title: string }[]
}

export const NotificationsBell = ({ notifications }: Props) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild className={s.bell}>
          <button className={s.button}>
            <Bell messageNumber={notifications?.length} />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content alignOffset={20} className={s.menu_content} sideOffset={4}>
            <DropdownMenu.Item>
              <Card className={s.card} onClick={event => event.stopPropagation()}>
                <Typography as={'div'} variant={'regular-16'}>
                  Уведомления
                </Typography>
                <DropdownMenu.Separator className={s.separator} />
                <div className={s.main_content}>
                  {notifications &&
                    notifications.map(({ date, text, title }, id, arr) => (
                      <div key={id}>
                        <Typography as={'div'} variant={'bold-14'}>
                          {title}
                        </Typography>
                        <Typography as={'p'} variant={'regular-14'}>
                          {text}
                        </Typography>
                        <Typography as={'div'} className={s.date} variant={'small'}>
                          {date}
                        </Typography>
                        <DropdownMenu.Separator className={s.separator} />
                      </div>
                    ))}
                </div>
              </Card>
              <DropdownMenu.Arrow asChild>
                <ArrowDropdown className={s.arrow} />
              </DropdownMenu.Arrow>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  )
}
