import { COUNTRIES } from '@/constants';

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {
    const slug = params.slug;

    const foundCountry = COUNTRIES.find(country => country.slug === slug);
    if (!foundCountry) {
        return new Response(
            JSON.stringify({ status: 404, message: 'Country not found' }),
            { status: 404 }
        );
    }
    return new Response(JSON.stringify(foundCountry), { status: 200 });
}
