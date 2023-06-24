import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'

import { SectionHeadingProps } from '@/types/components'

import { MdKeyboardArrowRight } from 'react-icons/md'

const SectionHeading: FC<SectionHeadingProps> = ({ className, href, children }) => {
    return (
        <h2 className={cn("text-xl text-white font-bold md:text-2xl", className)}>
            <Link className="group inline-flex items-center leading-none" href={href}>
                {children}

                <MdKeyboardArrowRight className="w-7 h-7 duration-500 group-hover:translate-x-1.5" />
            </Link>
        </h2>
    )
}

export default SectionHeading