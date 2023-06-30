import { COUNTRIES } from '@/lib/constants';

export async function GET() {
    return new Response(JSON.stringify(COUNTRIES));
}
