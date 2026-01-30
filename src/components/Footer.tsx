import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import siteConfig from '../config/siteConfig';

interface FooterProps {
    setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, tabId: string) => {
        e.preventDefault();
        setActiveTab(tabId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="glass border-t border-white/20 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {siteConfig.association.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            {siteConfig.association.slogan}
                        </p>
                        <div className="space-y-2 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <Mail size={16} className="text-blue-400" />
                                <a href={`mailto:${siteConfig.association.email}`} className="hover:text-blue-400 transition-colors">
                                    {siteConfig.association.email}
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone size={16} className="text-purple-400" />
                                <a href={`tel:${siteConfig.association.phone}`} className="hover:text-purple-400 transition-colors">
                                    {siteConfig.association.phone}
                                </a>
                            </div>
                            <div className="flex items-start gap-2">
                                <MapPin size={16} className="text-green-400 mt-1" />
                                <span>{siteConfig.association.address}</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            {siteConfig.navigation.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        onClick={(e) => handleNavClick(e, item.id)}
                                        className="hover:text-white transition-colors cursor-pointer"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Le Citadingue */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Suivez le Guide</h3>
                        <p className="text-gray-400 text-sm mb-4">Le Citadingue</p>
                        <div className="flex gap-3">
                            <a
                                href={siteConfig.links.citadingue.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                                title="Instagram - Le Citadingue"
                            >
                                <Instagram size={20} />
                            </a>

                            <a
                                href={siteConfig.links.citadingue.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                                title="Facebook - Le Citadingue"
                            >
                                <Facebook size={20} />
                            </a>

                            <a
                                href={siteConfig.links.citadingue.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                                title="LinkedIn - Le Citadingue"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Crazy City - International */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Our English Page</h3>
                        <p className="text-gray-400 text-sm mb-4">Crazy City - International</p>
                        <div className="flex gap-3">
                            <a
                                href={siteConfig.links.crazyCity.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                                title="Instagram - Crazy City"
                            >
                                <Instagram size={20} />
                            </a>

                            <a
                                href={siteConfig.links.crazyCity.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                                title="Facebook - Crazy City"
                            >
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} {siteConfig.association.name}. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
