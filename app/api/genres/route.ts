import { GENRES } from '@/constants'

export async function GET() {
    return new Response(JSON.stringify(GENRES), { status: 200 })
}