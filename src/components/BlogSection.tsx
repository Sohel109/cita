import BlogCard from './BlogCard';
import siteConfig from '../config/siteConfig';

export default function BlogSection() {
    const { blog } = siteConfig;

    return (
        <div className="min-h-screen py-24 px-4 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-citadingue-mint/20 text-citadingue-mint text-sm font-semibold mb-4 border border-citadingue-mint/30">
                        ACTUALITÉS
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                        Blog & Actualités
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Découvrez les dernières nouvelles, conseils et témoignages de la communauté Citadingue
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blog.articles.map((article, index) => (
                        <BlogCard
                            key={article.id}
                            {...article}
                            index={index}
                        />
                    ))}
                </div>

                {/* Empty State */}
                {blog.articles.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-lg">
                            Aucun article pour le moment. Revenez bientôt ! 📰
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
