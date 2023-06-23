import { NextResponse } from 'next/server'

import { GENRES } from '@/constants'

export async function GET() {
    return NextResponse.json(GENRES)
}