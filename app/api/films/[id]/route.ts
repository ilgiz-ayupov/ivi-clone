import { FILMS } from '@/lib/constants';
import { transformToFilm } from '@/lib/utils/api';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const foundFilm = FILMS.find(film => film.id === Number(params.id));
    if (!foundFilm) {
        return new Response(
            JSON.stringify({ status: 404, message: 'Film not found' }),
            { status: 404 }
        );
    }

    const filmAPI = transformToFilm(foundFilm);
    return new Response(JSON.stringify(filmAPI), { status: 200 });
}
