import { NextResponse } from 'next/server'

import { COUNTRIES } from '@/constants'

export async function GET() {
    return NextResponse.json(COUNTRIES)
}