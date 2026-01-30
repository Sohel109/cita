import siteConfig from '../config/siteConfig';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    const { hero } = siteConfig.home;

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${hero.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#266285] via-[#266285]/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#266285]/90 via-[#1a4560]/40 to-blue-900/10 mix-blend-multiply"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center animate-fade-in" style={{ marginTop: '-450px' }}>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-100 drop-shadow-xl animate-slide-up leading-tight" style={{ animationDelay: '0.2s' }}>
                    {hero.title}
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    {hero.subtitle}
                </p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <ChevronDown size={32} />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
}
