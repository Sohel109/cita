import { Calendar, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogCardProps {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    image: string;
    category: string;
    link: string;
    index: number;
}

export default function BlogCard({ title, excerpt, author, date, image, category, link, index }: BlogCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group glass rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
        >
            {/* Image */}
            <div className="relative h-64 overflow-hidden bg-gray-900">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-citadingue-mint text-white text-xs font-bold uppercase rounded-full">
                        {category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-citadingue-mint transition-colors line-clamp-2">
                    {title}
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{date}</span>
                    </div>
                </div>

                {/* Read More Button */}
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-citadingue-mint font-semibold group-hover:gap-3 transition-all"
                >
                    Voir la suite
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </motion.article>
    );
}
