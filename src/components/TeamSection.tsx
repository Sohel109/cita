import TeamMember from './TeamMember';
import siteConfig from '../config/siteConfig';

export default function TeamSection() {
    const { team } = siteConfig;

    return (
        <div className="min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Notre Bureau
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Rencontrez l'équipe passionnée qui fait vivre l'association au quotidien
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <div
                            key={member.id}
                            className="animate-scale-in h-full"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <TeamMember
                                name={member.name}
                                position={member.position}
                                photo={member.photo}
                                bio={member.bio}
                                linkedin={member.linkedin}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
