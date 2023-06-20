import { FC } from 'react'
import cn from 'classnames'

import type { ProgressBarProps } from '@/types/components'

const ProgressBar: FC<ProgressBarProps> = ({ className, progress }) => {
    return (
        <div className={cn("relative rounded-md overflow-hidden bg-[rgba(165,161,178,.32)]", className)}>
            <span className="absolute top-0 bottom-0 left-0 rounded-md overflow-hidden bg-red-600" style={{ width: `${progress}%` }}></span>
        </div>
    )
}

export default ProgressBar