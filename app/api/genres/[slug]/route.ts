import { NextResponse, NextRequest } from 'next/server'

import { GENRES } from '@/constants'

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
    const slug = params.slug

    const foundGenre = GENRES.find((genre) => genre.slug === slug)
    if (foundGenre) {
        return NextResponse.json(foundGenre)
    }
    return NextResponse.json({ status: 400, message: 'Genre not found !' })
}