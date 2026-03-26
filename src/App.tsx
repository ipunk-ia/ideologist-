/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coffee, 
  MapPin, 
  Clock, 
  Instagram, 
  Menu as MenuIcon, 
  X, 
  ChevronRight, 
  Users, 
  Briefcase, 
  Moon, 
  Camera,
  Calendar,
  ArrowRight
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Locations', href: '#locations' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-brand-beige py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2 text-zinc-900">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M14 0 H18 V14 H32 V18 H14 V0 Z" fill="#18181B"/>
            <path d="M0 14 H18 V32 H10 C4.477 32 0 27.523 0 22 V14 Z" fill="var(--color-brand-accent)"/>
          </svg>
          IDEOLOGIST
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-brand-accent transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#reservation" className="bg-zinc-900 text-brand-beige px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all">
            Book a Table
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-beige border-t border-zinc-200 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#reservation" 
              className="bg-zinc-900 text-brand-beige px-5 py-3 rounded-xl text-center font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Table
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with city vibe */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://drive.google.com/thumbnail?id=1cfdF06vwM3c0Aax662pzBWt4tk1IVcyo&sz=w1920" 
          alt="Semarang City Lights" 
          className="w-full h-full object-cover brightness-[0.4]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-beige/20 to-brand-beige"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-brand-accent text-xs font-bold uppercase tracking-widest mb-6 border-2 border-brand-accent">
            Sky View, Teras Sendja & Lake View
          </span>
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter text-white mb-8">
            Turn Moments <br />
            <span className="text-white">Into Experience</span>
          </h1>
          <p className="text-xl text-white max-w-xl mb-10 leading-relaxed">
            Elevate your coffee ritual with panoramic city views. A premium social hub and creative workspace designed for the modern urbanite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#reservation" className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Reserve a Spot <ArrowRight size={18} />
            </a>
            <a href="#menu" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-zinc-900 transition-all">
              View Menu
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://drive.google.com/thumbnail?id=1aw-yAOqPhBfgVXLcSbQF9VjG8qXq5cRO&sz=w1000" 
                alt="Ideologist Space Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-3xl overflow-hidden shadow-2xl border-8 border-brand-cream hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600" 
                alt="Coffee Detail" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 tracking-tight">
              Where Creativity <br /> Meets Community
            </h2>
            <div className="space-y-6 text-zinc-600 text-lg leading-relaxed">
              <p>
                Ideologist Space isn't just a café; it's a dual-concept environment born from the need for a productive yet social sanctuary in Semarang. Located on the heights of Gombel, we offer a perspective that shifts with the light.
              </p>
              <p>
                Whether you're looking for a focused morning with high-speed internet and ergonomic seating, or a vibrant evening surrounded by city lights and live music, we provide the space for your ideas to flourish.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <p className="text-3xl font-display font-bold text-zinc-900">01</p>
                <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mt-2">Social Hub</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-zinc-900">02</p>
                <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mt-2">Creative Lab</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "City Light View",
      desc: "Breathtaking panoramic views of Semarang's skyline, especially magical at sunset.",
      icon: <Moon className="text-brand-accent" />,
      image: "https://drive.google.com/thumbnail?id=1Uk3H4ZBSQi8KlnYdTr1I_3k4jsLfhAlG&sz=w1000"
    },
    {
      title: "Industrial Space",
      desc: "Modern industrial design featuring concrete textures, glass, and warm neon accents.",
      icon: <Camera className="text-brand-amber" />,
      image: "https://drive.google.com/thumbnail?id=1A4LD3DHZ9Rfvd9iVwM6gV78nh_eV1OjG&sz=w1000"
    },
    {
      title: "Work-Friendly",
      desc: "High-speed Wi-Fi, ample power outlets, and quiet zones for deep work sessions.",
      icon: <Briefcase className="text-brand-accent" />,
      image: "https://drive.google.com/thumbnail?id=1dBo-Qdn4v5nZahIGkxAlnSAqho4nqJSr&sz=w1000"
    },
    {
      title: "Heritage Menu",
      desc: "Indonesian comfort food reimagined with modern culinary techniques and presentation.",
      icon: <Coffee className="text-brand-amber" />,
      image: "https://drive.google.com/thumbnail?id=1L8P1FqGZCZgDikENddXDKZPBEASsN1Sg&sz=w1000"
    }
  ];

  return (
    <section className="py-24 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-display font-bold mb-4">Signature Experience</h2>
          <p className="text-zinc-500">Every detail at Ideologist Space is curated to inspire and connect.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square rounded-3xl overflow-hidden mb-6 relative">
                <img 
                  src={f.image} 
                  alt={f.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1">{f.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Locations = () => {
  const branches = [
    {
      city: "Semarang",
      name: "Ideologist Setiabudi",
      desc: "Signature sky view and premium social space for the modern urbanite.",
      image: "https://drive.google.com/thumbnail?id=1FrS5KjORXnvNLNkM5_VcydrteryGaOoj&sz=w1000",
      address: "Setiabudi, Semarang",
      mapUrl: "https://www.google.com/maps/place/Ideologist+Coffee+And+Social+Space/@-7.0384199,110.4185822,1088m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e708b45ec6b0d13:0x32475e4297b2dfd3!8m2!3d-7.0384252!4d110.4211571!16s%2Fg%2F11l8swrqzg?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D"
    },
    {
      city: "Semarang",
      name: "Ideologist x Maari BSB",
      desc: "Serene lake view with a modern collaborative environment.",
      image: "https://drive.google.com/thumbnail?id=1xjYkB1jCujXS2lI2y-nUjmg9kcocjkRT&sz=w1000",
      address: "BSB City, Semarang",
      mapUrl: "https://www.google.com/maps/place/Maari+Resto+Nusantara+BSB+Semarang/@-7.0392006,110.4165371,3660m/data=!3m1!1e3!4m6!3m5!1s0x2e708b4685ee5d41:0xbe22635e4f3b56f4!8m2!3d-7.0271189!4d110.3318519!16s%2Fg%2F11xlcbkpsg?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D"
    },
    {
      city: "Semarang",
      name: "Teras Sendja by Ideologist",
      desc: "The perfect spot to enjoy the sunset with our signature coffee.",
      image: "https://drive.google.com/thumbnail?id=1dpJxnMxzAt2TS7Q8HwohQ7L0Oq2-46o3&sz=w1000",
      address: "Ventura, Semarang",
      mapUrl: "https://www.google.com/maps/place/Teras+Sendja+by+Ideologist/@-6.9896388,110.4267015,1088m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e708db04c78df9f:0x149d238f57256546!8m2!3d-6.9896441!4d110.4292764!16s%2Fg%2F11yq59q1jf?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D"
    }
  ];

  return (
    <section id="locations" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-display font-bold">Our Spaces</h2>
            <p className="text-zinc-500 mt-2">Find your nearest Ideologist creative hub.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {branches.map((branch, i) => (
            <motion.a 
              href={branch.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              whileHover={{ y: -10 }}
              className="bg-brand-beige rounded-3xl overflow-hidden border border-zinc-200 group block hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={branch.image} alt={branch.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-900">
                  {branch.city}
                </div>
                <div className="absolute inset-0 bg-zinc-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-zinc-900">
                    <ChevronRight />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-accent transition-colors">{branch.name}</h3>
                <p className="text-zinc-500 text-sm mb-6 line-clamp-2">{branch.desc}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-zinc-900">
                  <MapPin size={16} className="text-brand-accent" />
                  {branch.address}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://drive.google.com/thumbnail?id=1CmrfjPica7uHKxmKM0ekwxUAoRiTTh6C&sz=w1000",
    "https://drive.google.com/thumbnail?id=1Uk3H4ZBSQi8KlnYdTr1I_3k4jsLfhAlG&sz=w1000",
    "https://drive.google.com/thumbnail?id=1FrS5KjORXnvNLNkM5_VcydrteryGaOoj&sz=w1000",
    "https://drive.google.com/thumbnail?id=1x0-VhGTdnR1inngqp0m4QteNsZNOjoJg&sz=w1000",
    "https://drive.google.com/thumbnail?id=1xjYkB1jCujXS2lI2y-nUjmg9kcocjkRT&sz=w1000",
    "https://drive.google.com/thumbnail?id=1cfdF06vwM3c0Aax662pzBWt4tk1IVcyo&sz=w1000",
    "https://drive.google.com/thumbnail?id=1gROVTZqPW4cQsJNg-gvo4ZmSqqvF4wMJ&sz=w1000",
    "https://drive.google.com/thumbnail?id=1dpJxnMxzAt2TS7Q8HwohQ7L0Oq2-46o3&sz=w1000"
  ];

  return (
    <section id="gallery" className="py-24 bg-brand-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-display font-bold">Atmosphere</h2>
          <p className="text-zinc-500 mt-2">A glimpse into our daily rhythm.</p>
        </div>
        <a href="https://www.instagram.com/ideologist.space/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold flex items-center gap-2 hover:text-brand-accent transition-colors">
          Follow @ideologist.space <Instagram size={16} />
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {images.map((img, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 0.98 }}
            className="rounded-2xl overflow-hidden"
          >
            <img 
              src={img} 
              alt={`Gallery ${i}`} 
              className="w-full h-full object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const MenuPreview = () => {
  const items = [
    { name: "Gombel Sunset Latte", price: "38k", desc: "Signature charcoal latte with vanilla cream." },
    { name: "Modern Nasi Goreng", price: "55k", desc: "Wagyu beef fried rice with truffle oil." },
    { name: "Klepon Cake 2.0", price: "42k", desc: "Traditional flavors in a modern mousse cake." },
    { name: "Urban Espresso", price: "28k", desc: "Our house blend of local Arabica beans." }
  ];

  return (
    <section id="menu" className="py-24 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold mb-8">Modern Heritage Menu</h2>
            <div className="space-y-8">
              {items.map((item, i) => (
                <div key={i} className="flex justify-between items-start border-b border-zinc-200 pb-6 group">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-brand-accent transition-colors">{item.name}</h3>
                    <p className="text-zinc-500 text-sm mt-1">{item.desc}</p>
                  </div>
                  <span className="font-display font-bold text-lg">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <h4 className="font-bold text-sm uppercase tracking-widest text-zinc-500 mb-4">View Full Menu by Branch</h4>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <a 
                  href="https://esborder.qs.esb.co.id/FRS/FRSS/home?mode=dinein&tableNumber=2-3&recommendationGroup=9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-zinc-900 text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-zinc-800 transition-colors flex items-center gap-2 group"
                >
                  Setiabudi <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://online.anyflip.com/htoef/lynj/mobile/index.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-zinc-900 text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-zinc-800 transition-colors flex items-center gap-2 group"
                >
                  Maari BSB <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://maariventura.groupfnb.com/MAA/MAA/TS-07" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-zinc-900 text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-zinc-800 transition-colors flex items-center gap-2 group"
                >
                  Teras Sendja <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=400" alt="Food 1" className="rounded-2xl w-full aspect-square object-cover" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=400" alt="Food 2" className="rounded-2xl w-full aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4 pt-8">
              <img src="https://drive.google.com/thumbnail?id=1L8P1FqGZCZgDikENddXDKZPBEASsN1Sg&sz=w1000" alt="Food 3" className="rounded-2xl w-full aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400" alt="Food 4" className="rounded-2xl w-full aspect-square object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Reservation = () => {
  const [branch, setBranch] = useState('Ideologist Setiabudi');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [smoking, setSmoking] = useState('Smoking');
  const [guests, setGuests] = useState('2 orang');

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    
    let phone = '';
    let message = '';

    if (branch === 'Ideologist Setiabudi') {
      phone = '6285640653786';
      message = `Hi, saya ingin reservasi di Ideologist\n*Nama:* ${name}\n*Hari, Tanggal:* ${date}\n*Jam Kedatangan:* ${time}\n*Smoking/Non-Smoking:* ${smoking}\n*Untuk:* ${guests}`;
    } else if (branch === 'Ideologist x Maari BSB') {
      phone = '6289629983124';
      message = `Halo, saya mau reservasi di Ideologist BSB. Mohon info ketersediaan tempatnya ya\n*Nama:* ${name}\n*Hari, Tanggal:* ${date}\n*Jam Kedatangan:* ${time}\n*Smoking/Non-Smoking:* ${smoking}\n*Untuk:* ${guests}`;
    } else if (branch === 'Teras Sendja by Ideologist') {
      phone = '6285929924286';
      message = `Halo, saya mau reservasi di Teras Senja by Ideologist. Mohon info ketersediaan tempatnya ya\n*Nama:* ${name}\n*Hari, Tanggal:* ${date}\n*Jam Kedatangan:* ${time}\n*Smoking/Non-Smoking:* ${smoking}\n*Untuk:* ${guests}`;
    }

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="reservation" className="py-24 bg-zinc-900 text-brand-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[40px] relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 blur-[100px] -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-amber/20 blur-[100px] -z-10"></div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">Reserve Your Experience</h2>
            <p className="text-brand-beige/60">Secure your spot for the best sunset and city light views.</p>
          </div>

          <form className="grid md:grid-cols-2 gap-6" onSubmit={handleReservation}>
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-bold uppercase tracking-widest text-brand-beige/40">Select Branch</label>
              <select 
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors appearance-none text-white"
              >
                <option value="Ideologist Setiabudi" className="text-zinc-900">Ideologist Setiabudi</option>
                <option value="Ideologist x Maari BSB" className="text-zinc-900">Ideologist x Maari BSB</option>
                <option value="Teras Sendja by Ideologist" className="text-zinc-900">Teras Sendja by Ideologist</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-brand-beige/40">Full Name</label>
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors text-white" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-brand-beige/40">Date</label>
              <input 
                type="date" 
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors text-white" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-brand-beige/40">Time</label>
              <input 
                type="time" 
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors text-white" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-brand-beige/40">Area Preference</label>
              <select 
                value={smoking}
                onChange={(e) => setSmoking(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors appearance-none text-white"
              >
                <option value="Smoking" className="text-zinc-900">Smoking Area</option>
                <option value="Non-Smoking" className="text-zinc-900">Non-Smoking Area</option>
              </select>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-bold uppercase tracking-widest text-brand-beige/40">Guests</label>
              <select 
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-accent transition-colors appearance-none text-white"
              >
                <option value="1 orang" className="text-zinc-900">1 Person</option>
                <option value="2 orang" className="text-zinc-900">2 People</option>
                <option value="3 orang" className="text-zinc-900">3 People</option>
                <option value="4 orang" className="text-zinc-900">4 People</option>
                <option value="5 orang" className="text-zinc-900">5 People</option>
                <option value="6+ orang" className="text-zinc-900">6+ People</option>
              </select>
            </div>

            <button type="submit" className="md:col-span-2 bg-brand-accent text-white py-4 rounded-xl font-bold hover:bg-brand-accent/90 transition-colors mt-4">
              Confirm Reservation via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Community = () => {
  return (
    <section className="py-24 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-display font-bold mb-4">Creative Community</h2>
            <p className="text-zinc-500">More than just a café, we are a hub for creators, thinkers, and doers in Semarang.</p>
          </div>
          <div className="flex gap-4">
            <div className="flex -space-x-4">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/150?u=${i}`} className="w-12 h-12 rounded-full border-4 border-brand-beige" alt="User" referrerPolicy="no-referrer" />
              ))}
            </div>
            <div className="text-sm">
              <p className="font-bold">500+ Members</p>
              <p className="text-zinc-400">Joined our hub</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Acoustic Nights", date: "Every Friday", icon: <Moon /> },
            { title: "Creative Meetups", date: "Twice a Month", icon: <Users /> },
            { title: "Workshops", date: "Weekend Series", icon: <Calendar /> }
          ].map((event, i) => (
            <div key={i} className="p-8 rounded-3xl bg-brand-cream border border-zinc-200 hover:border-brand-accent transition-colors">
              <div className="w-12 h-12 bg-zinc-900 text-brand-beige rounded-2xl flex items-center justify-center mb-6">
                {event.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-zinc-500 text-sm mb-4">{event.date}</p>
              <a href="#" className="text-sm font-bold text-brand-accent flex items-center gap-1">
                Learn More <ChevronRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-gray pt-24 pb-12 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <a href="#" className="text-3xl font-display font-bold tracking-tighter mb-6 block">
              IDEOLOGIST
            </a>
            <p className="text-zinc-500 max-w-sm mb-8">
              Premium social hub and creative workspace located in the heights of Gombel, Semarang.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/ideologist.space/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-brand-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@ideologist.space" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-brand-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Our Branches</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li className="flex gap-2"><MapPin size={18} className="shrink-0 text-zinc-900" /> <b>Setiabudi:</b> Semarang</li>
              <li className="flex gap-2"><MapPin size={18} className="shrink-0 text-zinc-900" /> <b>Maari BSB:</b> BSB City, Semarang</li>
              <li className="flex gap-2"><MapPin size={18} className="shrink-0 text-zinc-900" /> <b>Teras Sendja:</b> Ventura, Semarang</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#about" className="hover:text-zinc-900 transition-colors">About Experience</a></li>
              <li><a href="#menu" className="hover:text-zinc-900 transition-colors">Signature Menu</a></li>
              <li><a href="#gallery" className="hover:text-zinc-900 transition-colors">Atmosphere</a></li>
              <li><a href="#reservation" className="hover:text-zinc-900 transition-colors">Book a Table</a></li>
            </ul>
          </div>
        </div>

        {/* Map Integration Placeholder */}
        <div className="w-full h-64 rounded-3xl overflow-hidden mb-12 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.626210433615!2d110.420454!3d-7.030894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708c3866666667%3A0x6666666666666666!2sGombel%2C%20Semarang!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-200 text-xs text-zinc-400 font-bold uppercase tracking-widest">
          <p>© 2026 Ideologist Space. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Locations />
        <Gallery />
        <MenuPreview />
        <Reservation />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
