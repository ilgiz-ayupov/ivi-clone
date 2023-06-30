import React, { FC, useCallback } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { AiOutlineBell } from 'react-icons/ai';

interface NotificationProps {
    count: number;
    className?: string;
}

const Notification: FC<NotificationProps> = ({ className, count }) => {
    const getNotificationsCount = useCallback((cnt: number) => {
        return cnt > 9 ? '9+' : cnt;
    }, []);

    return (
        <div className={cn('relative', className)}>
            <Link
                className="inline-block text-white"
                href="/notification"
                aria-label="Уведомления">
                <AiOutlineBell
                    className="h-[20px] w-[20px]"
                    data-testid="notification-icon"
                />

                <span className="absolute left-0 top-0 flex w-[22px] -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-[4px] bg-red-600 text-xs font-medium">
                    {getNotificationsCount(count)}
                </span>
            </Link>
        </div>
    );
};

export default Notification;
