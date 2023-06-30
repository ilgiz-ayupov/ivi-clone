import { GENRES } from '@/lib/constants';

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {
    const slug = params.slug;

    const foundGenre = GENRES.find(genre => genre.slug === slug);
    if (!foundGenre) {
        return new Response(
            JSON.stringify({ status: 404, message: 'Genre not found' }),
            { status: 404 }
        );
    }
    return new Response(JSON.stringify(foundGenre), { status: 200 });
}
