import { Linkedin } from 'lucide-react';

interface TeamMemberProps {
    name: string;
    position: string;
    photo: string;
    bio: string;
    linkedin?: string;
}

export default function TeamMember({ name, position, photo, bio, linkedin }: TeamMemberProps) {
    return (
        <div className="glass glass-hover rounded-2xl p-6 text-center group h-full flex flex-col items-center">
            {/* Photo */}
            <div className="relative mb-4 inline-block">
                <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-blue-500/30 group-hover:ring-purple-500/50 transition-all duration-300">
                    <img
                        src={photo}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                </div>

                {linkedin && (
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-0 right-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors shadow-lg"
                    >
                        <Linkedin size={20} />
                    </a>
                )}
            </div>

            {/* Info */}
            <h3 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">
                {name}
            </h3>

            <p className="text-purple-400 font-semibold mb-3">
                {position}
            </p>

            <p className="text-gray-400 text-sm">
                {bio}
            </p>
        </div>
    );
}
