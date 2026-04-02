/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Car, Calendar, MapPin, ShieldCheck, Clock, Headphones, Star, 
  Phone, MessageCircle, Mail, Facebook, Instagram, Twitter, 
  Linkedin, ChevronRight, Menu, X, CheckCircle2, Plane, UserCheck, 
  Search, Filter, ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface CarItem {
  id: number;
  name: string;
  price: string;
  image: string;
  category: 'Économique' | 'SUV' | 'Luxe' | 'Affaires';
  type: 'rent' | 'sale';
  specs: string[];
}

// --- Data ---
const RENT_CARS: CarItem[] = [
  { id: 1, name: "Renault Symbol", price: "4500 DA", image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800", category: 'Économique', type: 'rent', specs: ["Manuelle", "Essence", "5 Places"] },
  { id: 2, name: "Dacia Duster 4x4", price: "7500 DA", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800", category: 'SUV', type: 'rent', specs: ["Manuelle", "Diesel", "AWD"] },
  { id: 3, name: "Hyundai Tucson", price: "12000 DA", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800", category: 'SUV', type: 'rent', specs: ["Automatique", "Diesel", "Toit Ouvrant"] },
  { id: 4, name: "Volkswagen Golf 8", price: "9000 DA", image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800", category: 'Affaires', type: 'rent', specs: ["Automatique", "Essence", "Sport"] },
  { id: 5, name: "Mercedes Classe E", price: "25000 DA", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800", category: 'Luxe', type: 'rent', specs: ["Automatique", "Diesel", "VIP"] },
  { id: 6, name: "Range Rover Velar", price: "35000 DA", image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800", category: 'Luxe', type: 'rent', specs: ["Automatique", "Diesel", "Prestige"] },
];

const SALE_CARS: CarItem[] = [
  { id: 7, name: "Kia Sportage 2024", price: "6.800.000 DA", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800", category: 'SUV', type: 'sale', specs: ["Neuf", "Automatique", "Garantie 5 ans"] },
  { id: 8, name: "Seat Leon FR", price: "5.200.000 DA", image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800", category: 'Affaires', type: 'sale', specs: ["Occasion", "Manuelle", "Full Options"] },
];

const TESTIMONIALS = [
  { name: "Ahmed Benali", role: "Client Fidèle", text: "Service impeccable à Oran. La voiture était propre et livrée à l'heure à l'aéroport Es-Sénia.", rating: 5 },
  { name: "Sarah Mansouri", role: "Touriste", text: "Réservation facile via WhatsApp. Très professionnel et prix compétitifs pour une location de 2 semaines.", rating: 5 },
  { name: "Karim Ziani", role: "Homme d'affaires", text: "La Mercedes Classe E était parfaite pour mes rendez-vous. Chauffeur discret et ponctuel.", rating: 4 },
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Accueil', href: '#home' },
    { name: 'Location', href: '#rent' },
    { name: 'Vente', href: '#sale' },
    { name: 'Services', href: '#services' },
    { name: 'À Propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/95 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2 group">
          <Car className="h-9 w-9 text-amber-500 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-black tracking-tighter text-white">LUXE<span className="text-amber-500">DRIVE</span></span>
        </a>
        
        <div className="hidden lg:flex items-center space-x-8">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-semibold text-gray-300 hover:text-amber-500 transition-colors uppercase tracking-widest">{link.name}</a>
          ))}
          <a href="#reservation" className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-amber-500/20">RÉSERVER</a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white"><Menu className="h-7 w-7" /></button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="lg:hidden bg-zinc-900 border-t border-white/10 absolute w-full left-0 p-6 space-y-4">
            {links.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block text-lg font-medium text-gray-300 hover:text-amber-500">{link.name}</a>
            ))}
            <a href="#reservation" onClick={() => setIsOpen(false)} className="block bg-amber-500 text-black text-center py-3 rounded-lg font-bold">RÉSERVER MAINTENANT</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920" alt="Location voiture Oran Algérie" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-zinc-950"></div>
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Location de voiture à Oran <br />
          <span className="text-amber-500">Vente & Location en Algérie</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Profitez d'un service premium pour vos déplacements à Oran. Large gamme de véhicules récents, 
          disponibles immédiatement avec ou sans chauffeur.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#reservation" className="bg-amber-500 hover:bg-amber-600 text-black px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105">Réserver maintenant</a>
          <a href="#rent" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg transition-all">Voir les voitures</a>
        </div>
      </motion.div>
    </div>
  </section>
);

const SearchSystem = () => (
  <section id="reservation" className="relative z-20 -mt-20 max-w-6xl mx-auto px-4">
    <div className="bg-zinc-900/90 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-amber-500 uppercase tracking-widest flex items-center gap-2"><MapPin className="h-3 w-3" /> Lieu de prise</label>
          <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-amber-500 outline-none">
            <option>Aéroport Oran Es-Sénia</option>
            <option>Centre Ville Oran</option>
            <option>Hôtel Sheraton / Méridien</option>
            <option>Gare Ferroviaire</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-amber-500 uppercase tracking-widest flex items-center gap-2"><Calendar className="h-3 w-3" /> Date Début</label>
          <input type="date" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-amber-500 outline-none" />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-amber-500 uppercase tracking-widest flex items-center gap-2"><Filter className="h-3 w-3" /> Type de véhicule</label>
          <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-amber-500 outline-none">
            <option>Tous les types</option>
            <option>Économique</option>
            <option>SUV / 4x4</option>
            <option>Luxe / Prestige</option>
          </select>
        </div>
        <div className="flex items-end">
          <button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 group">
            <Search className="h-5 w-5 group-hover:scale-110 transition-transform" /> RECHERCHER
          </button>
        </div>
      </div>
    </div>
  </section>
);

const CarCard = ({ car }: { car: CarItem, key?: React.Key }) => {
  const handleReserve = () => {
    const phoneNumber = "213794127441";
    const message = `Bonjour, je souhaite réserver la voiture suivante :\n\nModèle : ${car.name}\nCatégorie : ${car.category}\nPrix : ${car.price}${car.type === 'rent' ? ' par jour' : ''}\n\nMerci de me recontacter.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <motion.div whileHover={{ y: -10 }} className="bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden group shadow-lg">
      <div className="relative h-56 overflow-hidden">
        <img src={car.image} alt={car.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute top-4 left-4 bg-amber-500 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">{car.category}</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{car.name}</h3>
        <div className="flex gap-3 mb-6">
          {car.specs.map(s => <span key={s} className="text-[10px] text-gray-400 bg-white/5 px-2 py-1 rounded uppercase tracking-widest">{s}</span>)}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div>
            <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">À partir de</p>
            <p className="text-2xl font-black text-amber-500">{car.price}<span className="text-xs text-gray-400 font-normal ml-1">{car.type === 'rent' ? '/ jour' : ''}</span></p>
          </div>
          <button 
            onClick={handleReserve}
            className="bg-white hover:bg-amber-500 text-black px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
          >
            Réserver
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => (
  <section id="services" className="py-24 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-amber-500 font-bold tracking-[0.3em] uppercase mb-4">Nos Services</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white">Une Expérience Sur Mesure</h3>
      </div>
      <div className="grid md:grid-cols-4 gap-8">
        {[
          { icon: <UserCheck />, title: "Avec Chauffeur", desc: "Chauffeurs professionnels et bilingues pour vos déplacements VIP." },
          { icon: <Plane />, title: "Transfert Aéroport", desc: "Accueil personnalisé à l'aéroport d'Oran Es-Sénia 24h/24." },
          { icon: <ShieldCheck />, title: "Assurance Tous Risques", desc: "Roulez en toute sérénité avec nos contrats d'assurance complets." },
          { icon: <Headphones />, title: "Support 24/7", desc: "Une assistance technique et commerciale à votre écoute en permanence." }
        ].map((s, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 text-center">
            <div className="text-amber-500 mb-6 flex justify-center scale-150">{s.icon}</div>
            <h4 className="text-xl font-bold text-white mb-4">{s.title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-black">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-amber-500 font-bold tracking-[0.3em] uppercase mb-4">Témoignages</h2>
        <h3 className="text-4xl font-bold text-white">Ce Que Disent Nos Clients</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="bg-zinc-900 p-8 rounded-3xl border border-white/5 relative">
            <div className="flex text-amber-500 mb-4">
              {[...Array(t.rating)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="text-gray-300 italic mb-6">"{t.text}"</p>
            <div>
              <p className="text-white font-bold">{t.name}</p>
              <p className="text-amber-500 text-xs uppercase tracking-widest">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold text-white mb-8">Contactez-nous</h2>
          <p className="text-gray-400 mb-12">Notre équipe est à votre disposition pour toute demande de devis ou information complémentaire.</p>
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300"><Phone className="text-amber-500" /> +213 (0) 794 12 74 41</div>
            <div className="flex items-center gap-4 text-gray-300"><Mail className="text-amber-500" /> contact@luxedrive-oran.dz</div>
            <div className="flex items-center gap-4 text-gray-300"><MapPin className="text-amber-500" /> Boulevard Front de Mer, Oran, Algérie</div>
          </div>
          <div className="mt-12 h-64 rounded-3xl overflow-hidden grayscale opacity-50 border border-white/10">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103708.2325357303!2d-0.709322!3d35.6971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e636942371f95%3A0xca83688e433e3582!2sOran!5e0!3m2!1sfr!2sdz!4v1625123456789!5m2!1sfr!2sdz" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
        <div className="bg-zinc-900 p-10 rounded-3xl border border-white/5">
          <form className="space-y-6" onSubmit={e => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Nom Complet" className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-amber-500" />
              <input type="email" placeholder="Email" className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-amber-500" />
            </div>
            <input type="text" placeholder="Sujet" className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-amber-500" />
            <textarea rows={5} placeholder="Votre Message" className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-amber-500"></textarea>
            <button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20">ENVOYER LE MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black border-t border-white/5 py-16">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 mb-12">
      <div className="col-span-2">
        <div className="flex items-center space-x-2 mb-6">
          <Car className="h-8 w-8 text-amber-500" />
          <span className="text-2xl font-black tracking-tighter text-white">LUXE<span className="text-amber-500">DRIVE</span></span>
        </div>
        <p className="text-gray-500 max-w-sm mb-8">Leader de la location de voiture à Oran. Nous offrons des solutions de mobilité flexibles et premium pour particuliers et entreprises en Algérie.</p>
        <div className="flex gap-4">
          {[Facebook, Instagram, Twitter, Linkedin].map((I, i) => <a key={i} href="#" className="bg-white/5 p-3 rounded-full text-gray-400 hover:bg-amber-500 hover:text-black transition-all"><I className="h-5 w-5" /></a>)}
        </div>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Liens Utiles</h4>
        <ul className="space-y-4 text-gray-500 text-sm">
          <li><a href="#home" className="hover:text-amber-500">Accueil</a></li>
          <li><a href="#rent" className="hover:text-amber-500">Location de voitures</a></li>
          <li><a href="#sale" className="hover:text-amber-500">Vente de voitures</a></li>
          <li><a href="#services" className="hover:text-amber-500">Nos Services</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Horaires</h4>
        <ul className="space-y-4 text-gray-500 text-sm">
          <li>Samedi - Jeudi: 08:00 - 20:00</li>
          <li>Vendredi: 09:00 - 12:00</li>
          <li>Support: 24h/24 et 7j/7</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
      <p>© 2026 LuxeDrive Oran. Tous droits réservés. Location de voiture Oran Algérie.</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-white">Mentions Légales</a>
        <a href="#" className="hover:text-white">Politique de Confidentialité</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-zinc-950 min-h-screen font-sans selection:bg-amber-500 selection:text-black">
      <Navbar />
      <Hero />
      <SearchSystem />
      
      <main className="max-w-7xl mx-auto px-4">
        <section id="rent" className="py-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-amber-500 font-bold tracking-[0.3em] uppercase mb-4">Location</h2>
              <h3 className="text-4xl font-bold text-white">Nos Véhicules en Location</h3>
            </div>
            <a href="#" className="text-amber-500 font-bold flex items-center gap-2 hover:gap-4 transition-all">VOIR TOUT LE PARC <ArrowRight className="h-5 w-5" /></a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RENT_CARS.map(car => <CarCard key={car.id} car={car} />)}
          </div>
        </section>

        <section id="sale" className="py-24 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-amber-500 font-bold tracking-[0.3em] uppercase mb-4">Vente</h2>
              <h3 className="text-4xl font-bold text-white">Véhicules en Vente</h3>
            </div>
            <a href="#" className="text-amber-500 font-bold flex items-center gap-2 hover:gap-4 transition-all">DÉCOUVRIR LE SHOWROOM <ArrowRight className="h-5 w-5" /></a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SALE_CARS.map(car => <CarCard key={car.id} car={car} />)}
          </div>
        </section>
      </main>

      <Services />
      <Testimonials />
      <Contact />
      <Footer />

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/213794127441" target="_blank" rel="noreferrer" className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center">
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
