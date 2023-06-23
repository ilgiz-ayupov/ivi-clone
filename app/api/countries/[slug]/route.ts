import { NextResponse, NextRequest } from 'next/server'

import { COUNTRIES } from '@/constants'

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
    const slug = params.slug

    const foundCountry = COUNTRIES.find((country) => country.slug === slug)
    if (foundCountry) {
        return NextResponse.json(foundCountry)
    }
    return NextResponse.json({ status: 400, message: 'Genre not found !' })
}