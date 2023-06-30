'use client';

import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();
    router.replace('/ru');
};

export default page;
