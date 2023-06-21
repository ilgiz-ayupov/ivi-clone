import { HeroSection, SectionHeading, FilmCard } from '@/components'
import { FILMS } from '@/constants'

export default function Home() {
    return (
        <main>
            <HeroSection />

            <section id="collection:actions-trailers" className="my-8">
                <div className="custom-container">
                    <SectionHeading href="/collections/actions-trailers">
                        Боевики-триллеры
                    </SectionHeading>
                </div>

                <div className="custom-container">
                    <div className="pt-5 grid gap-5 grid-cols-2 min-[500px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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

            <section id="collection:historical-dramas" className="my-8">
                <div className="custom-container">
                    <SectionHeading href="/collections/historical-dramas">
                        Исторические драмы
                    </SectionHeading>
                </div>

                <div className="custom-container">
                    <div className="pt-5 grid gap-5 grid-cols-2 min-[500px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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

            <section id="collection:based-on-real-events" className="my-8">
                <div className="custom-container">
                    <SectionHeading href="/collections/based-on-real-events">
                        Основано на реальных событиях
                    </SectionHeading>
                </div>

                <div className="custom-container">
                    <div className="pt-5 grid gap-5 grid-cols-2 min-[500px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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
        </main >
    )
}
