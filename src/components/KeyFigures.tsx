import { Users, Calendar, Briefcase, Award, BookOpen, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import siteConfig from '../config/siteConfig';

const iconMap: Record<string, LucideIcon> = {
    Users,
    Calendar,
    Briefcase,
    Award,
    BookOpen,
    MapPin,
};

export default function KeyFigures() {
    const { keyFigures } = siteConfig.home;

    return (
        <div className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 text-white drop-shadow-md">
                    Nos Chiffres Clés
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {keyFigures.map((figure, index) => {
                        const Icon = iconMap[figure.icon];
                        return (
                            <motion.div
                                key={index}
                                className="glass rounded-2xl p-8 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
                                }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }}
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-citadingue-blue mb-4 shadow-lg">
                                    <Icon size={32} className="text-white" />
                                </div>

                                <div className="text-4xl font-bold mb-2 text-citadingue-mint drop-shadow-sm">
                                    {figure.number}
                                </div>

                                <div className="text-gray-300 font-medium">
                                    {figure.label}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
