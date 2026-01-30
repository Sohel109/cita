import { useState, useEffect } from 'react';
import { Share, X, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IOSInstallGuide() {
    const [isIOS, setIsIOS] = useState(false);
    const [isStandalone, setIsStandalone] = useState(false);
    const [showGuide, setShowGuide] = useState(false);

    useEffect(() => {
        // Detect iOS
        const userAgent = window.navigator.userAgent.toLowerCase();
        const iOS = /iphone|ipad|ipod/.test(userAgent);

        // Detect if already installed (standalone mode)
        const standalone = window.matchMedia('(display-mode: standalone)').matches;

        setIsIOS(iOS);
        setIsStandalone(standalone);

        // Show guide on iOS if not installed and not dismissed
        if (iOS && !standalone && !sessionStorage.getItem('iosGuideShown')) {
            // Show after a short delay
            setTimeout(() => setShowGuide(true), 2000);
            sessionStorage.setItem('iosGuideShown', 'true');
        }
    }, []);

    const handleDismiss = () => {
        setShowGuide(false);
    };

    // Only render on iOS and if not in standalone mode
    if (!isIOS || isStandalone) {
        return null;
    }

    return (
        <AnimatePresence>
            {showGuide && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    className="fixed top-20 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50"
                >
                    <div className="glass border border-white/20 rounded-2xl p-5 shadow-2xl backdrop-blur-xl">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                                    <Plus size={20} className="text-white" />
                                </div>
                                Installer Citadingue
                            </h3>
                            <button
                                onClick={handleDismiss}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <p className="text-sm text-gray-300 mb-4">
                            Ajoutez Citadingue à votre écran d'accueil pour un accès rapide :
                        </p>

                        <div className="space-y-3">
                            {/* Step 1 */}
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                    1
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-200">
                                        Appuyez sur le bouton <span className="inline-flex items-center px-1.5 py-0.5 bg-white/10 rounded text-xs"><Share size={12} className="mr-1" />Partager</span>
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                    2
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-200">
                                        Sélectionnez <span className="font-semibold text-white">"Sur l'écran d'accueil"</span>
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                    3
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-200">
                                        Appuyez sur <span className="font-semibold text-white">"Ajouter"</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-white/10">
                            <button
                                onClick={handleDismiss}
                                className="w-full px-4 py-2 bg-white/10 text-gray-300 rounded-lg font-semibold text-sm hover:bg-white/20 transition-all duration-300"
                            >
                                Compris !
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
