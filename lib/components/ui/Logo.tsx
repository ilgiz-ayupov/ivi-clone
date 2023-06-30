import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
    className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
    return (
        <Link href="/" className={className}>
            <Image src="/logo.svg" alt="Ivi logo" width={66} height={48} />
        </Link>
    );
};

export default Logo;
