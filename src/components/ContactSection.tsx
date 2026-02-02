import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Instagram, Linkedin, Facebook, CreditCard } from 'lucide-react';
import siteConfig from '../config/siteConfig';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            alert('Message envoyé ! Nous vous répondrons dans les plus brefs délais.');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setIsSubmitting(false);
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen py-24 px-4 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-green-500/10 text-green-300 text-sm font-semibold mb-4 border border-green-500/20 backdrop-blur-sm">
                        REJOIGNEZ L'AVENTURE
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                        Adhésion & Contact
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Une question ? Envie de rejoindre l'équipe ?
                        <br />Nous sommes à votre écoute.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Membership Card - Premium Design */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
                        <div className="glass rounded-3xl p-10 h-full flex flex-col relative overflow-hidden border border-white/10 group-hover:border-green-500/30 transition-colors">
                            {/* Card Decoration */}
                            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

                            <div className="text-center flex-1 flex flex-col items-center justify-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-green-900/20">
                                    <CreditCard size={40} className="text-white" />
                                </div>

                                <h3 className="text-3xl font-bold mb-4 text-white">
                                    {siteConfig.contact.membershipTitle}
                                </h3>

                                <p className="text-slate-300 mb-8 max-w-sm mx-auto leading-relaxed">
                                    {siteConfig.contact.membershipDescription}
                                </p>

                                <div className="flex items-baseline justify-center gap-2 mb-8">
                                    <span className="text-5xl font-bold text-white tracking-tight">{siteConfig.contact.membershipPrice}</span>
                                </div>

                                <a
                                    href={siteConfig.links.helloAsso}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full max-w-xs px-8 py-4 bg-white text-emerald-900 rounded-xl text-lg font-bold hover:bg-emerald-50 transition-all duration-300 hover:scale-105 shadow-xl shadow-green-900/10 flex items-center justify-center gap-2"
                                >
                                    J'adhère maintenant
                                    <CreditCard size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - Modern Design */}
                    <div className="glass rounded-3xl p-10 border border-white/10">
                        <h3 className="text-2xl font-bold mb-2">Envoyez-nous un message</h3>
                        <p className="text-slate-400 mb-8">Nous vous répondrons sous 24h ouvrées.</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Nom complet</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all placeholder:text-slate-600 text-white"
                                        placeholder="Jean Dupont"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all placeholder:text-slate-600 text-white"
                                        placeholder="jean@kedge.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-slate-300 ml-1">Objet</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all text-white appearance-none cursor-pointer"
                                >
                                    <option value="" className="bg-slate-900">Choississez un sujet...</option>
                                    <option value="partenariat" className="bg-slate-900">Proposition de Partenariat</option>
                                    <option value="redaction" className="bg-slate-900">Rejoindre la Rédaction</option>
                                    <option value="evenement" className="bg-slate-900">Question sur un Événement</option>
                                    <option value="autre" className="bg-slate-900">Autre demande</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-5 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all placeholder:text-slate-600 text-white resize-none"
                                    placeholder="Comment pouvons-nous vous aider ?"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                            >
                                {isSubmitting ? (
                                    <>Envoi en cours...</>
                                ) : (
                                    <>
                                        Envoyer le message
                                        <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Contact Info & Map */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Info Card */}
                    <div className="glass rounded-3xl p-10 flex flex-col justify-center border border-white/10">
                        <h3 className="text-2xl font-bold mb-8">Informations directes</h3>

                        <div className="space-y-8">
                            <a href={`mailto:${siteConfig.association.email}`} className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                    <Mail size={24} className="text-blue-400" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-400 font-medium mb-1">Email</div>
                                    <div className="text-lg text-white group-hover:text-blue-300 transition-colors">{siteConfig.association.email}</div>
                                </div>
                            </a>

                            <a href={`tel:${siteConfig.association.phone}`} className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                                    <Phone size={24} className="text-purple-400" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-400 font-medium mb-1">Téléphone</div>
                                    <div className="text-lg text-white group-hover:text-purple-300 transition-colors">{siteConfig.association.phone}</div>
                                </div>
                            </a>

                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center">
                                    <MapPin size={24} className="text-green-400" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-400 font-medium mb-1">Adresse</div>
                                    <div className="text-lg text-white">{siteConfig.association.address}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="glass rounded-3xl p-3 border border-white/10 h-[400px]">
                        <div className="w-full h-full rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.3688875347!2d5.438147!3d43.2318945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9b8e8e0e8e8e9%3A0x1e2f3a4b5c6d7e8f!2sKEDGE%20Business%20School%20-%20Campus%20de%20Marseille!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="KEDGE Business School Marseille - Localisation"
                            ></iframe>
                            {/* Overlay to disable scroll unless interacting */}
                            <div className="absolute inset-0 pointer-events-none shadow-inner rounded-2xl border border-white/5"></div>
                        </div>
                    </div>
                </div>

                {/* Social Media - Two Brands */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Le Citadingue (Institutionnel) */}
                    <div className="glass rounded-3xl p-8 flex items-center justify-between border border-white/10 group hover:border-blue-500/30 transition-colors">
                        <div>
                            <h3 className="text-xl font-bold mb-1 group-hover:text-blue-300 transition-colors">Suivez le Guide</h3>
                            <p className="text-slate-400 text-sm">Le Citadingue</p>
                        </div>

                        <div className="flex gap-3">
                            <a
                                href={siteConfig.links.citadingue.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-tr from-pink-600 to-purple-600 transition-all duration-300 hover:scale-110"
                            >
                                <Instagram size={22} className="text-white" />
                            </a>
                            <a
                                href={siteConfig.links.citadingue.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                            >
                                <Facebook size={22} className="text-white" />
                            </a>
                            <a
                                href={siteConfig.links.citadingue.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110"
                            >
                                <Linkedin size={22} className="text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Crazy City (Événementiel) */}
                    <div className="glass rounded-3xl p-8 flex items-center justify-between border border-white/10 group hover:border-purple-500/30 transition-colors">
                        <div>
                            <h3 className="text-xl font-bold mb-1 group-hover:text-purple-300 transition-colors">Go International</h3>
                            <p className="text-slate-400 text-sm">Crazy City</p>
                        </div>

                        <div className="flex gap-3">
                            <a
                                href={siteConfig.links.crazyCity.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-tr from-pink-600 to-purple-600 transition-all duration-300 hover:scale-110"
                            >
                                <Instagram size={22} className="text-white" />
                            </a>
                            <a
                                href={siteConfig.links.crazyCity.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                            >
                                <Facebook size={22} className="text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
