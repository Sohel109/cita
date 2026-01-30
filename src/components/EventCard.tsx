import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';

interface EventCardProps {
    title: string;
    date: string;
    location: string;
    description: string;
    image: string;
    category: string;
    shotgunLink: string;
    participants: number;
}

export default function EventCard({
    title,
    date,
    location,
    description,
    image,
    category,
    shotgunLink,
    participants,
}: EventCardProps) {
    return (
        <div className="glass glass-hover rounded-2xl overflow-hidden group h-full flex flex-col">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* 1. Filtre Uniforme */}
                <div className="absolute inset-0 bg-blue-500/10 mix-blend-multiply z-10 transition-opacity duration-300 group-hover:opacity-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-20"></div>

                {/* 2. Badge FOMO (Conditionnel) */}
                {title.toLowerCase().includes('loft') && (
                    <div className="absolute top-4 left-4 z-30">
                        <span className="flex items-center px-3 py-1 bg-rose-600/90 backdrop-blur-sm rounded-full text-[10px] font-bold tracking-wider text-white shadow-lg animate-pulse">
                            PLACES LIMITÉES
                        </span>
                    </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-30">
                    <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-sm rounded-full text-xs font-semibold shadow-lg">
                        {category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {title}
                </h3>

                <div className="space-y-2 mb-4 text-gray-300">
                    <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-blue-400" />
                        <span className="text-sm">{date}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-purple-400" />
                        <span className="text-sm">{location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Users size={16} className="text-green-400" />
                        <span className="text-sm">{participants} participants attendus</span>
                    </div>
                </div>

                <p className="text-gray-400 mb-6 line-clamp-2 flex-1">
                    {description}
                </p>

                {/* Shotgun Button */}
                <a
                    href={shotgunLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                    Shotgun
                    <ExternalLink size={18} />
                </a>
            </div>
        </div>
    );
}
