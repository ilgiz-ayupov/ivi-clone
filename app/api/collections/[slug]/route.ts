import { NextResponse, NextRequest } from 'next/server'

import { COLLECTIONS } from '@/constants'

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
    const slug = params.slug

    const foundCollection = COLLECTIONS.find((collection) => collection.slug === slug)
    if (foundCollection) {
        return NextResponse.json(foundCollection)
    }
    return NextResponse.json({ status: 400, message: 'Collection not found !' })
}