import { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Check, Navigation } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import SpotRecommender from './SpotRecommender';

// Fix for default marker icons in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface Place {
    id: number;
    name: string;
    category: 'restaurant' | 'bar' | 'club';
    lat: number;
    lng: number;
    address: string;
    tags: string[]; // For smart recommendations
}

const places: Place[] = [
    // Original spots
    { id: 1, name: 'La Caravelle', category: 'bar', lat: 43.2965, lng: 5.3720, address: '34 Quai du Port, 13002', tags: ['festif', 'moyen', 'français', 'méditerranéen', 'vieux-port'] },
    { id: 2, name: 'Le Petit Nice', category: 'restaurant', lat: 43.2803, lng: 5.3520, address: '17 Rue des Braves, 13007', tags: ['gourmand', 'large', 'français', 'méditerranéen', 'terrasse'] },
    { id: 3, name: 'Le Trolleybus', category: 'club', lat: 43.2924, lng: 5.3674, address: '24 Quai Rive Neuve, 13007', tags: ['festif', 'moyen', 'world', 'quartier'] },
    { id: 4, name: 'La Plage', category: 'bar', lat: 43.2907, lng: 5.3692, address: '45 Cours Julien', tags: ['festif', 'petit', 'world', 'quartier'] },
    { id: 5, name: 'Le Polikarpov', category: 'bar', lat: 43.2926, lng: 5.3731, address: '24 Cr Honoré d\'Estienne d\'Orves, 13001', tags: ['festif', 'moyen', 'world', 'terrasse'] },

    // New addresses
    { id: 6, name: '1860 Le Palais', category: 'restaurant', lat: 43.2961, lng: 5.3754, address: '9 La Canebière, 13001', tags: ['chill', 'moyen', 'français', 'méditerranéen', 'vieux-port'] },
    { id: 7, name: 'Tata Paulette', category: 'restaurant', lat: 43.2591, lng: 5.4103, address: '27 Boulevard De La Concorde, 13009', tags: ['gourmand', 'petit', 'world', 'quartier'] },
    { id: 8, name: 'Nina Sushi', category: 'restaurant', lat: 43.2580, lng: 5.3880, address: '9 Rue Borde, 13008', tags: ['rapide', 'moyen', 'asiatique', 'moderne'] },
    { id: 9, name: 'Oeuf', category: 'restaurant', lat: 43.2880, lng: 5.3810, address: '7 Place de Rome, 13006', tags: ['gourmand', 'moyen', 'français', 'méditerranéen', 'moderne'] },
    { id: 10, name: 'Seiko', category: 'restaurant', lat: 43.2926, lng: 5.3731, address: '27 Cr Honoré d\'Estienne d\'Orves, 13001', tags: ['chill', 'moyen', 'asiatique', 'moderne'] },
    { id: 11, name: 'Tortello', category: 'restaurant', lat: 43.2520, lng: 5.3950, address: '64 Avenue d\'Haïfa, 13008', tags: ['gourmand', 'moyen', 'italien', 'quartier'] },
    { id: 12, name: 'Les Terrasses du Phocéen', category: 'restaurant', lat: 43.2350, lng: 5.4380, address: 'Rue Henri Cochet, 13009', tags: ['festif', 'moyen', 'français', 'méditerranéen', 'terrasse'] },
    { id: 13, name: 'Yokae', category: 'restaurant', lat: 43.2995, lng: 5.3740, address: '63 Rue de la République, 13002', tags: ['rapide', 'petit', 'world', 'moderne'] },
    { id: 14, name: 'Hokis', category: 'restaurant', lat: 43.2928, lng: 5.3747, address: '48 Rue Francis Davso, 13001', tags: ['rapide', 'petit', 'asiatique', 'moderne'] },
    { id: 15, name: 'Come Papa', category: 'restaurant', lat: 43.2880, lng: 5.4820, address: '138 Bis Route des Camoins, 13011', tags: ['chill', 'moyen', 'italien', 'quartier'] },
    { id: 16, name: 'A&M Coffee Kitchen', category: 'restaurant', lat: 43.3050, lng: 5.3820, address: '18 Rue Melchior Guinot, 13003', tags: ['chill', 'petit', 'français', 'méditerranéen', 'moderne'] },

    // Additional spots from expanded list
    { id: 17, name: 'Au Bout du Quai', category: 'restaurant', lat: 43.2925, lng: 5.3645, address: '1 Avenue de Saint-Jean, 13002', tags: ['gourmand', 'moyen', 'français', 'méditerranéen', 'vieux-port'] },
    { id: 18, name: 'Ginseng', category: 'restaurant', lat: 43.2926, lng: 5.3731, address: '27 Cours d\'Estienne d\'Orves, 13001', tags: ['rapide', 'moyen', 'asiatique', 'terrasse'] },
    { id: 19, name: 'La Folie du Burger', category: 'restaurant', lat: 43.2895, lng: 5.3815, address: '144 Rue de Rome, 13006', tags: ['rapide', 'petit', 'world', 'moderne'] },
    { id: 20, name: 'Chez Pierrot Pizza', category: 'restaurant', lat: 43.3070, lng: 5.4602, address: '1 Rue du 10 Août, 13011', tags: ['chill', 'petit', 'italien', 'quartier'] },

    { id: 22, name: 'Marsatac', category: 'club', lat: 43.2598, lng: 5.3808, address: 'Parc Borély, Avenue du Parc Borély, 13008', tags: ['festif', 'large', 'world', 'terrasse'] },
    { id: 23, name: 'Chungchun', category: 'restaurant', lat: 43.2988, lng: 5.3795, address: '19 Rue de la Paix Marcel Paul, 13001', tags: ['rapide', 'petit', 'asiatique', 'moderne'] },
    { id: 24, name: 'Little Temple Bar', category: 'bar', lat: 43.2985, lng: 5.3800, address: '7 Rue de la Paix Marcel Paul, 13001', tags: ['festif', 'moyen', 'world', 'moderne'] },
    { id: 25, name: 'Mongelli', category: 'restaurant', lat: 43.3025, lng: 5.3622, address: '1 Bd Jacques Saadé, 13002', tags: ['gourmand', 'moyen', 'italien', 'terrasse'] },
    { id: 26, name: 'Le P\'tit Jardin', category: 'restaurant', lat: 43.2465, lng: 5.3745, address: '12 Avenue des Goumiers, 13008', tags: ['chill', 'moyen', 'français', 'méditerranéen', 'terrasse'] },
    { id: 27, name: 'Carmen', category: 'restaurant', lat: 43.2975, lng: 5.3755, address: '13 Rue Breteuil, 13001', tags: ['gourmand', 'moyen', 'français', 'méditerranéen', 'moderne'] },
    { id: 28, name: 'I Veri Gnocchi', category: 'restaurant', lat: 43.2945, lng: 5.3775, address: '10 Rue du Jeune Anacharsis, 13001', tags: ['chill', 'moyen', 'italien', 'quartier'] },
    { id: 29, name: 'Mamily', category: 'restaurant', lat: 43.2990, lng: 5.3758, address: '11 Rue Henri Barbusse, 13001', tags: ['gourmand', 'moyen', 'asiatique', 'moderne'] },
    { id: 30, name: 'Haiku Ramen', category: 'restaurant', lat: 43.2892, lng: 5.3838, address: '47 Boulevard Paul Peytral, 13006', tags: ['gourmand', 'moyen', 'asiatique', 'moderne'] },
];

// Custom marker icons
const createCustomIcon = (color: string) => {
    return L.divIcon({
        className: 'custom-marker',
        html: `<div style="background-color: ${color}; width: 30px; height: 30px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 3px solid white; box-shadow: 0 4px 10px rgba(0,0,0,0.3);"></div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
    });
};

const categoryIcons = {
    restaurant: createCustomIcon('#3b82f6'), // Blue
    bar: createCustomIcon('#fbbf24'), // Yellow
    club: createCustomIcon('#a855f7'), // Purple
};

const highlightedIcon = createCustomIcon('#ff00ff'); // Bright pink for highlighted

const categoryLabels = {
    restaurant: { label: 'Manger', color: 'blue' },
    bar: { label: 'Boire', color: 'yellow' },
    club: { label: 'Sortir', color: 'purple' },
};

interface InteractiveMapProps {
    onScrollToMap?: () => void;
}

export default function InteractiveMap({ onScrollToMap }: InteractiveMapProps = {}) {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [highlightedPlace, setHighlightedPlace] = useState<number | null>(null);
    const mapRef = useRef<L.Map | null>(null);
    const markerRefs = useRef<{ [key: number]: L.Marker | null }>({});

    const filteredPlaces = activeCategory
        ? places.filter((place) => place.category === activeCategory)
        : places;

    const handleCategoryToggle = (category: string) => {
        setActiveCategory(activeCategory === category ? null : category);
    };

    const handleRecommendation = (placeId: number) => {
        // Scroll to map first
        onScrollToMap?.();

        setHighlightedPlace(placeId);
        const place = places.find(p => p.id === placeId);
        if (place && mapRef.current) {
            mapRef.current.setView([place.lat, place.lng], 15);

            // Open the popup for this marker after a short delay
            setTimeout(() => {
                const marker = markerRefs.current[placeId];
                if (marker) {
                    marker.openPopup();
                }
            }, 500);

            // Reset highlight after 5 seconds (longer to see the popup)
            setTimeout(() => setHighlightedPlace(null), 5000);
        }
    };

    const openDirections = (address: string) => {
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`, '_blank');
    };

    return (
        <div className="space-y-6">
            {/* Filters */}
            <div className="flex gap-4 justify-center flex-wrap">
                {Object.entries(categoryLabels).map(([key, { label, color }]) => (
                    <button
                        key={key}
                        onClick={() => handleCategoryToggle(key)}
                        className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${activeCategory === key
                            ? color === 'blue'
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50'
                                : color === 'yellow'
                                    ? 'bg-yellow-500 text-slate-900 shadow-lg shadow-yellow-500/50'
                                    : 'bg-purple-600 text-white shadow-lg shadow-purple-600/50'
                            : 'bg-white/10 text-slate-300 border border-white/20 hover:bg-white/20'
                            }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Map */}
            <div className="glass rounded-3xl overflow-hidden border border-white/10 h-[500px] relative">
                <MapContainer
                    center={[43.2965, 5.3698]}
                    zoom={13}
                    style={{ height: '100%', width: '100%' }}
                    zoomControl={true}
                    ref={(instance) => {
                        if (instance) {
                            mapRef.current = instance;
                        }
                    }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
                        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    />
                    {filteredPlaces.map((place) => (
                        <Marker
                            key={place.id}
                            position={[place.lat, place.lng]}
                            icon={highlightedPlace === place.id ? highlightedIcon : categoryIcons[place.category]}
                            ref={(ref) => {
                                if (ref) {
                                    markerRefs.current[place.id] = ref;
                                }
                            }}
                        >
                            <Popup className="custom-popup">
                                <div className="bg-slate-900/95 backdrop-blur-md rounded-xl p-4 border border-white/20 min-w-[200px]">
                                    <h3 className="text-lg font-bold text-white mb-2">{place.name}</h3>
                                    <p className="text-slate-400 text-sm mb-3">{place.address}</p>

                                    <div className="flex items-center gap-2 text-green-400 text-sm mb-4">
                                        <Check size={16} className="flex-shrink-0" />
                                        <span className="font-medium">Testé & Approuvé</span>
                                    </div>

                                    <button
                                        onClick={() => openDirections(place.address)}
                                        className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105"
                                    >
                                        <Navigation size={16} />
                                        Itinéraire
                                    </button>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>

            {/* Spot Recommender */}
            <SpotRecommender
                places={filteredPlaces}
                onRecommendation={handleRecommendation}
            />
        </div>
    );
}
