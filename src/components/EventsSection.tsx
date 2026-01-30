import EventCard from './EventCard';
import siteConfig from '../config/siteConfig';

export default function EventsSection() {
    const { events } = siteConfig;

    return (
        <div className="min-h-screen py-24 px-4 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-300 text-sm font-semibold mb-4 border border-blue-500/20 backdrop-blur-sm">
                        AGENDA 2026-2027
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent drop-shadow-sm">
                        Nos Événements Phares
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Participez aux soirées les plus attendues de Marseille organisées par le Citadingue.
                        <br className="hidden md:block" /> Une ambiance unique, des lieux d'exception.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {events.map((event, index) => (
                        <div
                            key={event.id}
                            className="animate-scale-in h-full"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <EventCard
                                title={event.title}
                                date={event.date}
                                location={event.location}
                                description={event.description}
                                image={event.image}
                                category={event.category}
                                shotgunLink={event.shotgunLink}
                                participants={event.participants}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
