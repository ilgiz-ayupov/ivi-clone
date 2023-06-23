import { NextResponse } from 'next/server'

import { COLLECTIONS } from '@/constants'

export async function GET() {
    return NextResponse.json(COLLECTIONS)
}