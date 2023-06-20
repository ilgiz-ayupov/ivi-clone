import { HeroSection, SectionHeading, FilmCard } from '@/components'
import { FILMS } from '@/constants'

export default function Home() {
    return (
        <main>
            <HeroSection />

            <section id="collection:actions-trailers" className="mt-5">
                <div className="container mx-auto px-5">
                    <SectionHeading >
                        Боевики-триллеры
                    </SectionHeading>

                    <div className="mt-6 grid gap-5 grid-cols-2 min-[500px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {FILMS.map((film) => (
                            <FilmCard
                                key={film.id}
                                id={film.id}
                                nameRu={film.nameRu}
                                nameEn={film.nameEn}
                                preview={film.preview}
                                rating={film.rating}
                                year={film.year}
                                countries={film.countries}
                                genres={film.genres}
                                duration={film.duration}
                                status={film.status}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
