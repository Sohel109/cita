import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import siteConfig from '../config/siteConfig';

interface NavigationProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-20 md:h-24 relative transition-all duration-300">
                    {/* Logo - Top Left (Absolute to not disturb centering) */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 mt-6 md:mt-8 flex-shrink-0 flex items-center cursor-pointer z-50 ml-4 md:ml-8" onClick={() => setActiveTab('home')}>
                        <img
                            src="/logos/citadingue-logo-transparent.png"
                            alt="Citadingue"
                            className="h-20 md:h-36 w-auto object-contain hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
                        />
                    </div>

                    {/* Desktop Navigation - Centered */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-1">
                            {siteConfig.navigation.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-wide transition-all duration-300 ${activeTab === item.id
                                        ? 'bg-citadingue-mint text-white shadow-lg'
                                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Theme Toggle & Mobile menu button */}
                    <div className="flex items-center gap-2 absolute right-4">
                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="glass p-2 rounded-xl hover:bg-white/20 transition-all duration-300"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <Sun size={24} className="text-yellow-300 animate-scale-in" />
                            ) : (
                                <Moon size={24} className="text-blue-200 animate-scale-in" />
                            )}
                        </button>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="glass p-2 rounded-xl md:hidden"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden glass-hover animate-fade-in">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {siteConfig.navigation.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActiveTab(item.id);
                                    setMobileMenuOpen(false);
                                }}
                                className={`block w-full text-left px-3 py-2 rounded-xl text-base font-medium transition-all ${activeTab === item.id
                                    ? 'glass text-white'
                                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
