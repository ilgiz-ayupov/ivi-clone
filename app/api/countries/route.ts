import { COUNTRIES } from '@/constants';

export async function GET() {
    return new Response(JSON.stringify(COUNTRIES));
}
