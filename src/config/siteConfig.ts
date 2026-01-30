// ============================================
// CONFIGURATION CENTRALE DU SITE
// ============================================
// Modifiez ce fichier pour personnaliser tout le contenu, 
// les couleurs, les images et les textes du site.

export const siteConfig = {
    // ============================================
    // INFORMATIONS GÉNÉRALES
    // ============================================
    association: {
        name: "Citadingue",
        slogan: "Le guide des bonnes adresses marseillaises depuis 35 ans",
        description: "Découvrez les meilleurs restaurants, bars et boutiques de Marseille",
        email: "citadingue@kedgebs.com",
        phone: "06 70 63 99 50",
        address: "KEDGE BS, Rue Antoine Bourdelle, 13009 Marseille",
    },

    // ============================================
    // LIENS EXTERNES
    // ============================================
    links: {
        appStore: "https://apps.apple.com/fr/app/le-citadingue/id123456789",
        playStore: "https://play.google.com/store/apps/details?id=com.citadingue.app",
        helloAsso: "https://www.helloasso.com/associations/citadingue",

        // Le Citadingue (Institutionnel)
        citadingue: {
            instagram: "https://www.instagram.com/lecitadinguemarseille/?hl=fr",
            facebook: "https://www.facebook.com/citadingue/",
            linkedin: "https://www.linkedin.com/company/le-citadingue/",
        },

        // Crazy City (International / English Version)
        crazyCity: {
            instagram: "https://www.instagram.com/crazycitymarseille/",
            facebook: "https://www.facebook.com/Crazycitymarseille/",
        },
    },

    // ============================================
    // PALETTE DE COULEURS
    // ============================================
    colors: {
        // Couleurs principales - DA Citadingue
        primary: "#205E8C", // Bleu Citadingue (Marseille)
        primaryLight: "#3A7CA8",
        primaryDark: "#154263",

        // Couleurs secondaires
        secondary: "#50C8B3", // Turquoise/Menthe (Accent logo)
        secondaryLight: "#7ADVC9",

        // Accents
        accent: "#FCD34D", // Jaune Soleil
        accentLight: "#FDE68A",

        // Backgrounds
        bgDark: "#113046", // Bleu nuit profond (plus cohérent avec la DA)
        bgDarkSecondary: "#1A4560",

        // Glassmorphism (adapté au bleu)
        glassBg: "rgba(32, 94, 140, 0.2)", // Base bleue
        glassBgHover: "rgba(80, 200, 179, 0.15)", // Pointe de menthe au survol
        glassBorder: "rgba(255, 255, 255, 0.2)",
    },

    // ============================================
    // NAVIGATION
    // ============================================
    navigation: [
        { id: "home", label: "Accueil" },
        { id: "partners", label: "Nos Adresses" },
        { id: "events", label: "Événements" },
        { id: "blog", label: "Blog" },
        { id: "team", label: "L'Équipe" },
        { id: "contact", label: "Adhésion & Contact" },
    ],

    // ============================================
    // SECTION ACCUEIL
    // ============================================
    home: {
        hero: {
            title: "Le Citadingue",
            subtitle: "Votre guide gratuit des meilleures adresses de Marseille depuis 1987 - Restaurants, bars, boutiques et bien plus encore !",
            ctaButton: "Télécharger le guide",
            ctaLink: "#contact",
            backgroundImage: "/hero-bg.jpg", // Photo étudiants
        },

        keyFigures: [
            { icon: "BookOpen", number: "20 000", label: "Guides édités" },
            { icon: "Users", number: "30", label: "Membres de la rédaction" },
            { icon: "Award", number: "35 ans", label: "D'existence" },
            { icon: "MapPin", number: "100+", label: "Adresses référencées" },
        ],
    },

    // ============================================
    // SECTION ÉVÉNEMENTS
    // ============================================
    events: [
        {
            id: 1,
            title: "Le Grand Lancement",
            date: "Octobre 2026",
            location: "Marseille",
            description: "Le lancement officiel de la nouvelle édition du guide Citadingue ! Une soirée exceptionnelle pour découvrir les nouvelles adresses marseillaises et célébrer 35 ans de passion.",
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
            category: "Lancement",
            shotgunLink: "https://www.helloasso.com/grand-lancement",
            participants: 800,
        },
        {
            id: 2,
            title: "Soirée Loft",
            date: "Décembre 2026",
            location: "Marseille",
            description: "LA soirée incontournable de l'année ! Une ambiance unique dans un cadre exceptionnel pour fêter la fin d'année avec style.",
            image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
            category: "Soirée",
            shotgunLink: "https://www.helloasso.com/soiree-loft",
            participants: 1200,
        },
        {
            id: 3,
            title: "Tournage des Spots Publicitaires",
            date: "Toute l'année",
            location: "Marseille",
            description: "Découvrez les coulisses de la création de nos contenus ! Rejoignez l'équipe pour participer aux tournages de nos spots dans les plus beaux lieux de Marseille.",
            image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=600&fit=crop",
            category: "Production",
            shotgunLink: "#contact",
            participants: 50,
        },
    ],

    // ============================================
    // SECTION ÉQUIPE
    // ============================================
    team: [
        {
            id: 1,
            name: "Alexandre Martin",
            position: "Président",
            photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
            bio: "Leader passionné par l'innovation et le développement du guide",
            linkedin: "https://www.linkedin.com/",
        },
        {
            id: 2,
            name: "Thomas Dubois",
            position: "Vice-Président",
            photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
            bio: "Expert en gestion de projets événementiels",
            linkedin: "https://linkedin.com/in/thomas-dubois",
        },
        {
            id: 3,
            name: "Clara Rousseau",
            position: "Trésorière",
            photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
            bio: "Rigueur et transparence dans la gestion financière",
            linkedin: "https://linkedin.com/in/clara-rousseau",
        },
        {
            id: 4,
            name: "Lucas Bernard",
            position: "Responsable Communication",
            photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
            bio: "Créatif et stratège digital",
            linkedin: "https://linkedin.com/in/lucas-bernard",
        },
        {
            id: 5,
            name: "Emma Leroy",
            position: "Responsable Événements",
            photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
            bio: "Organisation et créativité pour des événements mémorables",
            linkedin: "https://linkedin.com/in/emma-leroy",
        },
        {
            id: 6,
            name: "Alexandre Petit",
            position: "Responsable Partenariats",
            photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
            bio: "Négociateur né, créateur de synergies entreprises-étudiants",
            linkedin: "https://linkedin.com/in/alexandre-petit",
        },
    ],

    // ============================================
    // SECTION PARTENAIRES
    // ============================================
    partners: {
        companies: [
            {
                id: 1,
                name: "Microsoft",
                logo: "/logos/microsoft.png",
                tier: "Premium",
            },
            {
                id: 2,
                name: "Google",
                logo: "/logos/google.png",
                tier: "Premium",
            },
            {
                id: 3,
                name: "Deloitte",
                logo: "/logos/deloitte.png",
                tier: "Gold",
            },
            {
                id: 4,
                name: "BNP Paribas",
                logo: "/logos/bnp.png",
                tier: "Gold",
            },
            {
                id: 5,
                name: "L'Oréal",
                logo: "/logos/loreal.png",
                tier: "Silver",
            },
            {
                id: 6,
                name: "Red Bull",
                logo: "/logos/redbull.png",
                tier: "Silver",
            },
        ],

        benefits: [
            {
                icon: "Target",
                title: "Visibilité locale",
                description: "Soyez vu par plus de 20 000 lecteurs à Marseille et ses alentours",
            },
            {
                icon: "Users",
                title: "Nouvelle Clientèle",
                description: "Attirez une clientèle jeune, dynamique et curieuse de nouvelles adresses",
            },
            {
                icon: "Megaphone",
                title: "Mise en avant digitale",
                description: "Présence sur notre site, nos réseaux sociaux et nos applications mobiles",
            },
            {
                icon: "Award",
                title: "Label de Qualité",
                description: "Rejoignez la sélection exclusive des meilleures adresses testées et approuvées",
            },
        ],
    },

    // ============================================
    // SECTION CONTACT
    // ============================================
    contact: {
        formTitle: "Contactez-nous",
        formDescription: "Vous souhaitez apparaître dans le guide ou nous proposer un partenariat ? Écrivez-nous !",

        membershipTitle: "Devenir Membre",
        membershipDescription: "Rejoignez-nous dès maintenant et profitez de tous les avantages : tarifs réduits sur les événements, accès prioritaire aux shotguns, goodies exclusifs...",
        membershipButtonLabel: "Adhérer sur HelloAsso",
        membershipPrice: "15€/an",

        socialTitle: "Suivez-nous",
    },

    // ============================================
    // BLOG & ACTUALITÉS
    // ============================================
    blog: {
        articles: [
            {
                id: 1,
                title: "1860 Le Palais : Salon de thé face au Vieux-Port",
                excerpt: "Découvrez 1860 Le Palais, un restaurant et salon de thé situé dans le mythique Palais de la Bourse. Cuisine raffinée de saison, pâtisseries d'exception et terrasse avec vue sur le Vieux-Port.",
                author: "Équipe Citadingue",
                date: "26 Jan 2026",
                image: "/images/1860-le-palais.png",
                category: "Nouveautés",
                link: "https://www.instagram.com/p/DT-Tl22CHUJ/",
            },
            {
                id: 2,
                title: "Nouveaux spots : La sélection du mois",
                excerpt: "4 nouvelles adresses viennent enrichir le guide Citadingue ce mois-ci. On vous dit tout sur ces pépites marseillaises.",
                author: "Thomas Dubois",
                date: "10 Jan 2026",
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
                category: "Guide",
                link: "https://www.instagram.com/lecitadinguemarseille/",
            },
            {
                id: 3,
                title: "Interview : Le chef du Petit Nice",
                excerpt: "Rencontre exclusive avec le chef étoilé qui fait rayonner la gastronomie marseillaise à travers le monde.",
                author: "Marie Laurent",
                date: "5 Jan 2026",
                image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
                category: "Portrait",
                link: "https://www.instagram.com/lecitadinguemarseille/",
            },
        ],
    },
};

export default siteConfig;
