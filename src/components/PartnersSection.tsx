import { Target, Users, Megaphone, Handshake, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useRef, useImperativeHandle, forwardRef } from 'react';
import siteConfig from '../config/siteConfig';
import InteractiveMap from './InteractiveMap';

const iconMap: Record<string, LucideIcon> = {
    Target,
    Users,
    Megaphone,
    Handshake,
    Award,
};

export interface PartnersSectionRef {
    scrollToMap: () => void;
}

const PartnersSection = forwardRef<PartnersSectionRef>((_, ref) => {
    const { partners } = siteConfig;
    const mapRef = useRef<HTMLDivElement>(null);

    const scrollToMap = () => {
        mapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    useImperativeHandle(ref, () => ({
        scrollToMap
    }));

    return (
        <div className="min-h-screen py-24 px-4 relative overflow-hidden bg-slate-900/30">
            {/* Background Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main Header - Map Section */}
                <div className="text-center mb-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-300 text-sm font-semibold mb-4 border border-blue-500/20 backdrop-blur-sm">
                        CARTE INTERACTIVE
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-sm">
                        Nos Adresses sur la Carte
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Découvrez notre sélection exclusive de 30 spots testés et approuvés à Marseille.
                        <br className="hidden md:block" /> Restaurants, bars et sorties en un clic.
                    </p>
                </div>

                {/* Interactive Map */}
                <div className="mb-32" ref={mapRef}>
                    <InteractiveMap onScrollToMap={scrollToMap} />
                </div>

                {/* Partners Section Header */}
                <div className="text-center mb-20">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-16"></div>
                    <span className="inline-block py-1 px-3 rounded-full bg-purple-500/10 text-purple-300 text-sm font-semibold mb-4 border border-purple-500/20 backdrop-blur-sm">
                        PARTENAIRES PREMIUM
                    </span>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-sm">
                        Nos Partenaires
                    </h3>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Ils nous font confiance et soutiennent notre communauté.
                    </p>
                </div>

                {/* Partner Logos */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24">
                    {partners.companies.map((partner, index) => (
                        <div
                            key={partner.id}
                            className="group glass p-8 flex flex-col items-center justify-center min-h-[160px] cursor-pointer hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 animate-scale-in border border-white/5 hover:border-white/20"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-w-full h-16 object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0 scale-95 group-hover:scale-110 mb-4"
                            />
                            <div className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${partner.tier === 'Premium' ? 'border-yellow-500/30 text-yellow-500 bg-yellow-500/5' :
                                partner.tier === 'Gold' ? 'border-amber-500/30 text-amber-500 bg-amber-500/5' :
                                    'border-slate-500/30 text-slate-400 bg-slate-500/5'
                                }`}>
                                {partner.tier}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Benefits Section */}
                <div className="mt-20">
                    <div className="flex items-center justify-center mb-16 gap-4">
                        <div className="h-px w-24 bg-gradient-to-r from-transparent to-slate-500/50"></div>
                        <h3 className="text-3xl font-bold text-center text-white">Pourquoi apparaître dans le guide ?</h3>
                        <div className="h-px w-24 bg-gradient-to-l from-transparent to-slate-500/50"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {partners.benefits.map((benefit, index) => {
                            const Icon = iconMap[benefit.icon];
                            return (
                                <div
                                    key={index}
                                    className="relative group p-8 rounded-3xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl blur-xl"></div>
                                    <div className="relative z-10">
                                        <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 shadow-lg shadow-black/20">
                                            <Icon size={28} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                                        </div>

                                        <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-200 transition-colors">
                                            {benefit.title}
                                        </h4>

                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-24 text-center">
                    <div className="glass rounded-3xl py-8 px-10 max-w-3xl mx-auto border border-blue-400/30 shadow-[inset_0_0_20px_rgba(59,130,246,0.1)] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-4">Vous tenez un établissement ?</h3>
                            <p className="text-slate-300 mb-8 max-w-lg mx-auto">
                                Rejoignez le réseau Citadingue et boostez votre visibilité auprès de la communauté étudiante.
                            </p>
                            <a
                                href="mailto:contact@lecitadingue.fr?subject=Demande de partenariat"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-xl font-bold hover:from-blue-500 hover:to-violet-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/20"
                            >
                                <Handshake size={20} />
                                Devenir Partenaire
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

PartnersSection.displayName = 'PartnersSection';

export default PartnersSection;
