import { FC, useCallback } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import { AiOutlineBell } from 'react-icons/ai'

import type { NotificationProps } from '@/types/components'

const Notification: FC<NotificationProps> = ({ className, count }) => {
    const getNotificationsCount = useCallback((cnt: number) => {
        return cnt > 9 ? '9+' : cnt
    }, [])

    return (
        <div className={cn('relative', className)}>
            <Link className="inline-block text-white" href="/notification" aria-label="Уведомления">
                <AiOutlineBell className="w-[20px] h-[20px]" data-testid="notification-icon" />

                <span className="absolute flex items-center justify-center top-0 left-0 translate-x-1/2 -translate-y-1/2 w-[22px] rounded-[4px] bg-red-600 text-xs font-medium">{getNotificationsCount(count)}</span>
            </Link>
        </div>
    )
}

export default Notification