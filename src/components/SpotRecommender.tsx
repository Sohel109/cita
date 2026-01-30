import { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Place {
    id: number;
    name: string;
    category: 'restaurant' | 'bar' | 'club';
    address: string;
    tags?: string[]; // Optional for compatibility
}

interface SpotRecommenderProps {
    places: Place[];
    onRecommendation: (placeId: number) => void;
}

interface QuizAnswers {
    mood?: string;
    budget?: string;
    cuisine?: string;
    vibe?: string;
}

export default function SpotRecommender({ places, onRecommendation }: SpotRecommenderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<QuizAnswers>({});
    const [recommendedPlace, setRecommendedPlace] = useState<Place | null>(null);
    const [isRevealing, setIsRevealing] = useState(false);

    const questions = [
        {
            id: 'mood',
            question: 'Quel est ton mood ce soir ? 🌙',
            options: [
                { value: 'chill', label: 'Détendu & Tranquille', keywords: ['chill'] },
                { value: 'festif', label: 'Festif & Animé', keywords: ['festif'] },
                { value: 'gourmand', label: 'Gourmand & Découverte', keywords: ['gourmand'] },
                { value: 'rapide', label: 'Rapide & Efficace', keywords: ['rapide'] }
            ]
        },
        {
            id: 'budget',
            question: 'Quel budget pour ce soir ? 💰',
            options: [
                { value: 'petit', label: '€ - Petit budget', keywords: ['petit'] },
                { value: 'moyen', label: '€€ - Budget moyen', keywords: ['moyen'] },
                { value: 'large', label: '€€€ - On se fait plaisir !', keywords: ['large'] }
            ]
        },
        {
            id: 'cuisine',
            question: 'Envie de quelle cuisine ? 🍽️',
            options: [
                { value: 'asiatique', label: 'Asiatique', keywords: ['asiatique'] },
                { value: 'italien', label: 'Italien', keywords: ['italien'] },
                { value: 'francais', label: 'Français / Méditerranéen', keywords: ['français', 'méditerranéen'] },
                { value: 'world', label: 'Cuisine du monde', keywords: ['world'] }
            ]
        },
        {
            id: 'vibe',
            question: 'Quelle ambiance tu cherches ? ✨',
            options: [
                { value: 'vieux-port', label: 'Vue sur le Vieux-Port', keywords: ['vieux-port'] },
                { value: 'quartier', label: 'Quartier authentique', keywords: ['quartier'] },
                { value: 'moderne', label: 'Moderne & Tendance', keywords: ['moderne'] },
                { value: 'terrasse', label: 'Terrasse au soleil', keywords: ['terrasse'] }
            ]
        }
    ];

    const findBestMatch = () => {
        const scores: { [key: number]: number } = {};

        places.forEach(place => {
            let score = 0;

            // Score based on each answer's keywords matching place tags
            Object.entries(answers).forEach(([questionId, answerValue]) => {
                const question = questions.find(q => q.id === questionId);
                const option = question?.options.find(o => o.value === answerValue);

                if (option?.keywords && place.tags) {
                    option.keywords.forEach(keyword => {
                        // Check if any of the place's tags match the keyword
                        if (place.tags?.some(tag => tag.toLowerCase().includes(keyword.toLowerCase()))) {
                            score += 10; // Each matching keyword adds points
                        }
                    });
                }
            });

            // Bonus for category match
            if (answers.mood === 'festif' && place.category === 'bar') score += 15;
            if (answers.mood === 'festif' && place.category === 'club') score += 20;
            if (answers.mood !== 'festif' && place.category === 'restaurant') score += 10;

            scores[place.id] = score;
        });

        // Find place with highest score
        const bestPlaceId = Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0];
        return places.find(p => p.id === parseInt(bestPlaceId));
    };

    const handleAnswer = (questionId: string, value: string) => {
        setAnswers({ ...answers, [questionId]: value });

        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            // Final step - reveal recommendation
            setIsRevealing(true);
            setTimeout(() => {
                const recommended = findBestMatch();
                setRecommendedPlace(recommended || null);
            }, 1000);
        }
    };

    const handleReset = () => {
        setStep(0);
        setAnswers({});
        setRecommendedPlace(null);
        setIsRevealing(false);
    };

    const handleViewOnMap = () => {
        if (recommendedPlace) {
            onRecommendation(recommendedPlace.id);
            setIsOpen(false);
            handleReset();
        }
    };

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 z-50 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-3 animate-pulse"
            >
                <Sparkles size={24} />
                <span className="hidden sm:inline">Trouve ton spot</span>
            </button>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="glass border border-white/20 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                                    <Sparkles className="text-yellow-400" />
                                    Trouve ton spot parfait
                                </h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <X size={28} />
                                </button>
                            </div>

                            {/* Progress Bar */}
                            {!recommendedPlace && (
                                <div className="mb-8">
                                    <div className="flex justify-between mb-2 text-sm text-gray-400">
                                        <span>Question {step + 1}/{questions.length}</span>
                                        <span>{Math.round(((step + 1) / questions.length) * 100)}%</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Content */}
                            {!recommendedPlace ? (
                                isRevealing ? (
                                    <div className="text-center py-20">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        >
                                            <Sparkles size={64} className="text-yellow-400 mx-auto" />
                                        </motion.div>
                                        <p className="text-2xl text-white mt-8 font-semibold">
                                            On analyse tes préférences...
                                        </p>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-semibold text-white mb-6">
                                            {questions[step].question}
                                        </h3>
                                        <div className="grid grid-cols-1 gap-4">
                                            {questions[step].options.map((option) => (
                                                <motion.button
                                                    key={option.value}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={() => handleAnswer(questions[step].id, option.value)}
                                                    className="p-6 glass-hover border border-white/20 rounded-2xl text-left hover:border-purple-400/50 transition-all duration-300"
                                                >
                                                    <span className="text-lg font-semibold text-white">
                                                        {option.label}
                                                    </span>
                                                </motion.button>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-8"
                                >
                                    <div className="mb-6">
                                        <Sparkles size={48} className="text-yellow-400 mx-auto mb-4" />
                                        <h3 className="text-xl text-gray-300 mb-2">Ton spot parfait est...</h3>
                                        <h2 className="text-4xl font-bold text-white mb-4">
                                            {recommendedPlace.name}
                                        </h2>
                                        <p className="text-gray-400">{recommendedPlace.address}</p>
                                    </div>

                                    <div className="flex gap-4 justify-center mt-8">
                                        <button
                                            onClick={handleViewOnMap}
                                            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:scale-105 transition-transform"
                                        >
                                            Voir sur la carte
                                        </button>
                                        <button
                                            onClick={handleReset}
                                            className="px-8 py-3 glass-hover border border-white/20 text-white rounded-xl font-semibold hover:scale-105 transition-transform"
                                        >
                                            Recommencer
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
