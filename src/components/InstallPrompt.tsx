import { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {
        const handler = (e: Event) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Store the event so it can be triggered later
            setDeferredPrompt(e);
            // Show our custom install prompt
            setShowPrompt(true);
        };

        window.addEventListener('beforeinstallprompt', handler);

        // Check if already installed
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setShowPrompt(false);
        }

        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);

    const handleInstall = async () => {
        if (!deferredPrompt) return;

        // Show the install prompt
        deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;

        console.log(`User response to the install prompt: ${outcome}`);

        // Clear the deferredPrompt
        setDeferredPrompt(null);
        setShowPrompt(false);
    };

    const handleDismiss = () => {
        setShowPrompt(false);
        // Remember dismissal for this session
        sessionStorage.setItem('installPromptDismissed', 'true');
    };

    // Don't show if dismissed in this session
    useEffect(() => {
        if (sessionStorage.getItem('installPromptDismissed')) {
            setShowPrompt(false);
        }
    }, []);

    return (
        <AnimatePresence>
            {showPrompt && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
                >
                    <div className="glass border border-white/20 rounded-2xl p-4 shadow-2xl backdrop-blur-xl">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                                <Download size={24} className="text-white" />
                            </div>

                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-white mb-1">
                                    Installer Citadingue
                                </h3>
                                <p className="text-sm text-gray-300 mb-3">
                                    Accédez instantanément au guide depuis votre écran d'accueil
                                </p>

                                <div className="flex gap-2">
                                    <button
                                        onClick={handleInstall}
                                        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-sm hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105"
                                    >
                                        Installer
                                    </button>
                                    <button
                                        onClick={handleDismiss}
                                        className="px-4 py-2 bg-white/10 text-gray-300 rounded-lg font-semibold text-sm hover:bg-white/20 transition-all duration-300"
                                    >
                                        Plus tard
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={handleDismiss}
                                className="flex-shrink-0 text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
