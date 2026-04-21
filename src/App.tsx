/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { 
  Menu, X, Phone, Mail, Instagram, Facebook, Youtube, Send, 
  CheckCircle2, TrendingUp, Users, Sprout, ShieldCheck, 
  Calculator, BookOpen, Clock, ShoppingCart, Award, ArrowRight,
  ExternalLink, ChevronDown, ChevronUp, MessageCircle, MapPin, Briefcase,
  Play, Download, Layers, Shield, Zap, Info, Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Constants & Types ---

const LOCATIONS = ["Jabalpur", "Sagar", "Damoh", "Indore"];
const STATES = [
  "Haryana", "Punjab", "Himachal Pradesh", "Uttarakhand", "Uttar Pradesh", 
  "Madhya Pradesh", "Rajasthan", "Bihar", "Maharashtra", "Karnataka", 
  "Tamil Nadu", "Telangana", "Andhra Pradesh", "Kerala"
];

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services", subItems: ["Compost Units", "Projects", "Farming Models"] },
  { name: "Resources", href: "#resources", subItems: ["Production Guide", "SOPs & Guides", "Knowledge Hub"] },
  { name: "Training", href: "#training" },
  { name: "Market", href: "#market" },
  { name: "Contact", href: "#contact" }
];

// --- Components ---

const Background3D = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="blob blob-1 absolute w-[400px] h-[400px] bg-[#312e81] top-[-100px] left-[-100px] blur-[80px] opacity-40 rounded-full"></div>
    <div className="blob blob-2 absolute w-[350px] h-[350px] bg-[#4c1d95] bottom-[-50px] right-[-50px] blur-[80px] opacity-40 rounded-full"></div>
    <div className="absolute inset-0 bg-[#020617]"></div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-7xl z-50 glass py-4 px-6 md:px-10 transition-all duration-300 ${isScrolled ? 'shadow-2xl' : ''}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center font-bold text-lg text-white shadow-lg">
            O
          </div>
          <span className="text-xl font-bold tracking-tight text-white whitespace-nowrap">
            Organic <span className="gradient-text">Mushroom Farm</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <div key={item.name} className="relative group">
              <a href={item.href} className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1">
                {item.name}
              </a>
            </div>
          ))}
          <a href="#contact" className="btn-primary px-7 py-2.5 rounded-xl text-sm shadow-xl shadow-brand-blue/20">
            Join Workshop
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white p-2">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-full left-0 right-0 glass mt-4 p-6 border border-white/10"
          >
            <div className="flex flex-col gap-5">
              {NAV_ITEMS.map((item) => (
                <a key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white px-2">
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col gap-4 mt-2">
                <a href="tel:9203544140" className="btn-outline py-4 rounded-xl">9203544140</a>
                <a href="#contact" className="btn-primary py-4 rounded-xl">Get Quote</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const features = [
    "Complete Turnkey Project Setup",
    "Professional Training Programs",
    "Government Subsidy Documentation",
    "Lifetime Technical Support"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-[1.2fr,0.8fr] gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-xs md:text-sm font-bold text-green-500 uppercase tracking-[0.2em] mb-4">
            From empty shed to harvest-ready infrastructure – we handle everything.
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tighter">
            <span className="gradient-text">Build Your Mushroom Empire</span> with Experts
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
            Complete methodology, precision calculators, detailed SOPs, and turnkey solutions for profitable button mushroom farming across India.
          </p>

          <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-10 border-white/5 border-y py-8">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-primary-start" />
                <span className="text-sm font-bold text-slate-200 tracking-tight">{f}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#contact" className="btn-primary px-10 py-4 rounded-xl text-md shadow-2xl shadow-brand-blue/30">
              Get Free Quote
            </a>
            <a href="tel:9203544140" className="btn-outline px-10 py-4 rounded-xl text-md">
              9203544140
            </a>
          </div>
          <div className="flex gap-12 pt-4">
            <div>
              <div className="text-3xl font-bold text-white">1.2k+</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mt-1 font-black">Active Units</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mt-1 font-black">Success Rate</div>
            </div>
          </div>
        </motion.div>

        {/* 3D Visual Mock (Glass Card) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative lg:block hidden"
        >
          <div className="absolute inset-0 gradient-bg opacity-20 blur-[100px] rounded-full animate-pulse"></div>
          <div className="relative glass rounded-[2.5rem] p-8 border-white/20 shadow-2xl backdrop-blur-2xl">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <ShieldCheck className="text-accent" />
                </div>
                <div>
                  <div className="text-white font-bold">Turnkey Project</div>
                  <div className="text-xs text-slate-500">ISO 9001:2015 Approved</div>
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-widest">Active</div>
            </div>
            
            <div className="space-y-6">
              {[
                { label: "Room Size", value: "18 x 70 ft Standard", icon: Layers },
                { label: "Annual Yield", value: "35,000+ kg", icon: TrendingUp },
                { label: "Cooling Sys", value: "Daikin Industrial", icon: Zap },
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <stat.icon className="text-slate-400" size={18} />
                    <span className="text-sm text-slate-300 font-medium">{stat.label}</span>
                  </div>
                  <span className="text-sm text-white font-bold">{stat.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-3xl bg-linear-to-br from-white/10 to-transparent border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-slate-300">Phase 1 Cycle</span>
                <span className="text-[10px] text-accent font-bold">LIVE PROGRESS</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '65%' }}
                  transition={{ duration: 2, delay: 1 }}
                  className="h-full gradient-bg"
                ></motion.div>
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-slate-500 font-bold uppercase">
                <span>Composting</span>
                <span>Pasteurization</span>
                <span>Cropping</span>
              </div>
            </div>
          </div>
          
          {/* Floating Small Cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass p-4 rounded-2xl border-white/20 flex items-center gap-3 shadow-xl"
          >
            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
              <CheckCircle2 className="text-green-500" size={16} />
            </div>
            <div className="pr-4">
              <div className="text-[10px] text-slate-400 font-bold uppercase">ROI Verified</div>
              <div className="text-xs text-white font-bold">120% Yearly Avg</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const chooseItems = [
    {
      title: "Cost Efficiency (15–25% Savings)",
      subtitle: "Factory-direct manufacturing eliminates middlemen, ensuring 15–25% lower costs compared to market rates.",
      points: ["In-house PUF panel production", "Own rack fabrication unit", "Direct pricing advantage", "Strict quality control"],
      icon: TrendingUp,
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Smart B2B Pricing",
      subtitle: "Fair and transparent pricing for every farmer regardless of project size.",
      points: ["Wholesale pricing model", "Volume discounts", "Transparent breakdown", "No hidden costs"],
      icon: Briefcase,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Nationwide Execution",
      subtitle: "Seamless delivery and execution across India with expert teams.",
      points: ["Coverage across all states & UTs", "Consistent pricing nationwide", "Local installation teams", "End-to-end logistics"],
      icon: MapPin,
      color: "from-blue-600/20 to-cyan-500/20"
    },
    {
      title: "Price Match Guarantee",
      subtitle: "Get the best value without compromise.",
      points: ["Guaranteed lowest pricing", "Market comparison support", "Extra discount on matching quotes", "No quality compromise"],
      icon: ShieldCheck,
      color: "from-indigo-500/20 to-blue-500/20"
    },
    {
      title: "Certified Quality",
      subtitle: "Built on globally recognized standards.",
      points: ["ISO 9001:2015 processes", "Premium materials only", "Multi-level quality checks", "Long-term durability"],
      icon: Award,
      color: "from-amber-400/20 to-orange-500/20"
    },
    {
      title: "Reliable Partnership",
      subtitle: "We don’t just build farms — we build success.",
      points: ["Lifetime technical support", "Expert consultation", "Proven project success", "Farmer-first approach"],
      icon: Users,
      color: "from-emerald-500/20 to-teal-500/20"
    }
  ];

  return (
    <section id="why-us" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-start/10 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-end/10 blur-[120px] rounded-full pointer-events-none animate-pulse delay-700"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge mx-auto mb-6"
          >
            Infrastructure Leaders
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Why Choose <span className="gradient-text">Organic Mushroom?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            India’s most trusted mushroom infrastructure partner delivering unmatched value, transparency, and performance.
          </motion.p>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            className="h-1 bg-linear-to-r from-primary-start to-primary-end mx-auto mt-8 rounded-full shadow-[0_0_20px_rgba(79,70,229,0.5)]"
          ></motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chooseItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-linear-to-br transition-opacity opacity-50 group-hover:opacity-100 rounded-[2.5rem] blur-xl -z-10"
                   style={{ background: `linear-gradient(to bottom right, var(--color-primary-start), var(--color-primary-end))` }}></div>
              
              <div className="glass h-full p-10 rounded-[2.5rem] border border-white/5 group-hover:border-white/20 transition-all flex flex-col shadow-2xl relative overflow-hidden">
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-linear-to-br ${item.color} blur-[50px] pointer-events-none`}></div>
                
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
                  <item.icon className="text-primary-start group-hover:text-primary-end transition-colors" size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:gradient-text transition-all lowercase first-letter:uppercase">
                  {item.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                  {item.subtitle}
                </p>
                
                <ul className="space-y-3">
                  {item.points.map((pt, j) => (
                    <li key={j} className="flex items-center gap-3 text-xs font-semibold text-slate-500 group-hover:text-slate-300 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-start group-hover:animate-pulse"></div>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FarmingModels = () => {
  const models = [
    {
      name: "Starter Package",
      size: "18 x 30 ft",
      investment: "₹8-12 Lakh",
      yield: "800-1000 kg/cycle",
      features: ["Small Scale", "Manual Ops", "Local Markets"],
      label: "Beginner Choice",
      recommended: false
    },
    {
      name: "Standard Model",
      size: "18 x 70 ft",
      investment: "₹35-42 Lakh",
      yield: "3000-3500 kg/cycle",
      features: ["Automated Climate", "Export Ready", "High ROI"],
      label: "Most Popular",
      recommended: true
    },
    {
      name: "Industrial Unit",
      size: "Compost + 4 Rooms",
      investment: "₹1.5Cr - 2.5Cr",
      yield: "15,000+ kg/cycle",
      features: ["Full Ecosystem", "Full Automation", "B2B Supply"],
      label: "Business Pro",
      recommended: false
    }
  ];

  return (
    <section id="farming-models" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="badge mb-4">Investment Paths</div>
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Farming <span className="gradient-text">Models</span> & ROI</h2>
            <p className="text-slate-400">Scientifically designed grow rooms optimized for Indian climate conditions up to 50°C.</p>
          </div>
          <div className="glass p-1.5 rounded-2xl flex gap-2 w-fit">
            <button className="px-6 py-2 rounded-xl btn-primary text-sm shadow-lg">Fixed Models</button>
            <button className="px-6 py-2 rounded-xl text-slate-400 text-sm font-bold hover:text-white transition-colors">Custom Build</button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {models.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`relative glass p-10 flex flex-col ${m.recommended ? 'border-primary-mid/40 shadow-2xl scale-105 z-10' : 'border-white/5'}`}
            >
              {m.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full btn-primary text-[10px] font-black uppercase tracking-widest text-white shadow-xl">
                  Recommended Model
                </div>
              )}
              <div className="mb-8">
                <div className="text-primary-start text-[10px] font-black uppercase tracking-[0.2em] mb-2">{m.label}</div>
                <h3 className="text-3xl font-bold text-white tracking-tight">{m.name}</h3>
                <div className="mt-4 text-slate-500 text-sm font-medium">{m.size} Space Required</div>
              </div>
              
              <div className="space-y-4 mb-10 flex-1">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Estimated Investment</div>
                  <div className="text-2xl font-bold text-white">{m.investment}</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Expected Yield</div>
                  <div className="text-2xl font-bold text-white">{m.yield}</div>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {m.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-slate-400 text-sm">
                    <CheckCircle2 size={16} className="text-primary-start" /> {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${m.recommended ? 'btn-primary' : 'btn-outline'}`}>
                Get Full Quotation
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ROICalculator = () => {
  const [sellingPrice, setSellingPrice] = useState(120);
  const [operatingCost, setOperatingCost] = useState(30);
  const [productionCapacity, setProductionCapacity] = useState(3000); // kg

  const monthlyProfit = useMemo(() => {
    return (sellingPrice - operatingCost) * productionCapacity;
  }, [sellingPrice, operatingCost, productionCapacity]);

  const yearlyROI = useMemo(() => {
    const investment = 3500000;
    const yearlyProfit = monthlyProfit * 5; // 5 cycles a year usually
    return (yearlyProfit / investment * 100).toFixed(1);
  }, [monthlyProfit]);

  return (
    <section id="roi-calculator" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="glass p-10 md:p-14 border border-white/10 relative">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] bg-primary-start/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge mb-6">Profit Analytics</div>
              <h2 className="text-4xl font-bold text-white mb-6">Mushroom <span className="gradient-text">Profit Calculator</span></h2>
              <p className="text-slate-400 mb-12">Estimate your profits based on real-time market averages and operational efficiency.</p>
              
              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Selling Price (₹/kg)</label>
                    <span className="text-2xl font-bold text-white">₹{sellingPrice}</span>
                  </div>
                  <input 
                    type="range" min="80" max="250" value={sellingPrice} 
                    onChange={(e) => setSellingPrice(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-start"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Operating Cost (₹/kg)</label>
                    <span className="text-2xl font-bold text-white">₹{operatingCost}</span>
                  </div>
                  <input 
                    type="range" min="20" max="80" value={operatingCost} 
                    onChange={(e) => setOperatingCost(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-purple"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                { label: "Cycle Profit", value: `₹${monthlyProfit.toLocaleString()}`, color: "text-green-400", sub: "Est per 60 days" },
                { label: "Yearly ROI", value: `${yearlyROI}%`, color: "text-primary-start", sub: "Return on CapEx" },
                { label: "Payback Period", value: "18-24 Months", color: "text-white", sub: "Full recovery" },
                { label: "Success Odds", value: "High", color: "text-white", sub: "With our SOPs" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-8 border-white/5 flex flex-col justify-center text-center group"
                >
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2">{item.label}</div>
                  <div className={`text-2xl font-bold mb-2 ${item.color}`}>{item.value}</div>
                  <div className="text-[10px] text-slate-600 font-medium">{item.sub}</div>
                </motion.div>
              ))}
              <div className="col-span-2 mt-4">
                <button className="btn-primary w-full py-5 rounded-2xl shadow-2xl shadow-brand-blue/30 text-sm uppercase tracking-widest">
                  Download Full Financial DPR (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Timeline = () => {
  const steps = [
    { title: "Consultation", days: "Day 1-7", desc: "Site survey, feasibility study, and project proposal.", icon: Info },
    { title: "Setup & Build", days: "Day 15-60", desc: "Turnkey construction of grow rooms and compost tunnels.", icon: Zap },
    { title: "Training", days: "Day 61-75", desc: "Hands-on training on substrate preparation.", icon: BookOpen },
    { title: "Production Begins", days: "Day 76+", desc: "Casing, pinning, and first commercial harvest.", icon: Sprout },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <div className="badge mx-auto mb-6">Process Flow</div>
          <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-tight">Your <span className="gradient-text">Journey</span> to First Harvest</h2>
          <p className="text-slate-400 max-w-xl mx-auto">A data-driven, step-by-step approach to building a successful mushroom farm.</p>
        </div>
        
        <div className="relative">
          <div className="hidden lg:block absolute top-[4rem] left-0 right-0 h-px bg-white/5 z-0"></div>
          <div className="grid lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-brand-blue/30 group-hover:scale-110 transition-transform">
                  <s.icon className="text-white" size={28} />
                </div>
                <div className="text-primary-start text-[10px] font-black uppercase mb-2 tracking-widest">{s.days}</div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <div className="badge mb-6">Contact Us</div>
            <h2 className="text-5xl font-bold text-white mb-8 tracking-tighter">Ready to <span className="gradient-text">Scale Up?</span></h2>
            <p className="text-slate-400 text-lg mb-12">Connect with our specialists for a personalized project breakdown and quotation.</p>
            
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Call Us", value: "+91 92035 44140" },
                { icon: Mail, label: "Email Support", value: "support@mushroomtraining.online" },
                { icon: MapPin, label: "HQ Locations", value: "Jabalpur, Sagar, Indore (MP)" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 glass border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary-start">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">{item.label}</div>
                    <div className="text-lg font-bold text-white leading-none">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex gap-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/organic_mushroom_farm_jabalpur" },
                { icon: Facebook, href: "https://www.facebook.com/organic.mushroom.farm0" },
                { icon: Youtube, href: "https://www.youtube.com/@organicmushroomfarm" }
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-all group">
                  <social.icon size={18} className="text-slate-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          <div className="glass p-10 md:p-12 border border-white/10 shadow-2xl relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 gradient-bg opacity-10 blur-[60px] rounded-full"></div>
            <form action="https://formspree.io/f/xykldqdy" method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    name="name" required type="text" placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary-start transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    name="email" required type="email" placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary-start transition-all text-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  name="message" required rows={4} placeholder="Your project requirements..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary-start transition-all resize-none text-sm"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn-primary w-full py-5 rounded-xl shadow-2xl shadow-brand-blue/30 text-xs uppercase tracking-[0.2em] font-black"
              >
                Send Request <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="badge mx-auto mb-6">Service Area</div>
        <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-tight">Active Project <span className="gradient-text">Directory</span></h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-20 font-medium leading-relaxed">Pan-India operational presence with specialized installation teams in every major hub.</p>
        
        <div className="flex flex-wrap justify-center gap-3">
          {STATES.map(state => (
            <motion.div 
              key={state}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 glass border border-white/5 rounded-full text-xs font-bold text-slate-400 hover:text-white hover:border-white/20 transition-all cursor-pointer"
            >
              {state}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center font-bold text-white shadow-lg">
                O
              </div>
              <span className="text-xl font-bold tracking-tight text-white whitespace-nowrap">
                Organic <span className="gradient-text">Mushroom Farm</span>
              </span>
            </div>
            <p className="text-slate-500 max-w-sm text-md leading-relaxed mb-8">
              Empowering high-yield organic cultivation across India with precision systems.
            </p>
            <div className="flex items-center gap-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">
              {LOCATIONS.map((loc, i) => (
                <span key={loc} className="flex items-center gap-2">
                  {loc} {i !== LOCATIONS.length - 1 && <div className="w-1 h-1 rounded-full bg-white/10"></div>}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[10px]">Quick Links</h4>
            <ul className="space-y-4">
              {["Training Modules", "Production SOPs", "ROI Calculator", "Marketplace"].map(item => (
                <li key={item}><a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[10px]">Company</h4>
            <ul className="space-y-4">
              {["Privacy Policy", "Terms of Service", "Project Support", "Contact Info"].map(item => (
                <li key={item}><a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-12 text-[10px] font-black uppercase tracking-widest text-slate-600">
          <div>© 2024 Organic Mushroom. All rights reserved.</div>
          <div className="mt-4 md:mt-0 flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingButtons = () => {
  return (
    <>
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
        <a 
          href="https://wa.me/919203544140" 
          className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl shadow-green-500/40 hover:scale-110 active:scale-95 transition-all"
          target="_blank" rel="noopener noreferrer"
        >
          <MessageCircle size={32} />
        </a>
        <a 
          href="tel:9203544140" 
          className="w-16 h-16 rounded-full btn-primary text-white flex items-center justify-center shadow-2xl shadow-brand-blue/40 hover:scale-110 active:scale-95 transition-all"
        >
          <Phone size={28} />
        </a>
      </div>
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 left-8 w-12 h-12 glass rounded-xl text-slate-400 hover:text-white hover:border-white/20 transition-all shadow-xl z-[100] flex items-center justify-center"
      >
        <ChevronUp size={24} />
      </button>
    </>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="selection:bg-primary-start/30 selection:text-white">
      <Background3D />
      <Navbar />
      
      <main>
        <Hero />
        <WhyChooseUs />
        <FarmingModels />
        <ROICalculator />
        <Timeline />
        
        {/* Compost Units Section */}
        <section id="compost-units" className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <div className="badge mx-auto mb-6">Infrastructure</div>
              <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-tight">Standard <span className="gradient-text">Compost Units</span></h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Complete Phase-I + Phase-II infrastructure with 15-day cycles.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              {[
                { 
                  name: "2000-Bag Unit (20T)", 
                  desc: "14x30 System", 
                  investment: "₹15-17 Lakh",
                  stats: { bags: "2,000", cap: "20t", cycle: "15 Days" }
                },
                { 
                  name: "3000-Bag Unit (30T)", 
                  desc: "14x40 System", 
                  investment: "₹19-21 Lakh",
                  stats: { bags: "3,000", cap: "30t", cycle: "15 Days" },
                  recommended: true
                }
              ].map((comp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className={`glass p-10 rounded-3xl border border-white/5 relative ${comp.recommended ? 'shadow-2xl shadow-brand-blue/10 border-primary-mid/30' : ''}`}
                >
                  {comp.recommended && <div className="absolute top-4 right-8 badge">Best Value</div>}
                  <h3 className="text-2xl font-bold text-white mb-2">{comp.name}</h3>
                  <div className="text-slate-500 mb-8 font-medium">{comp.desc}</div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(comp.stats).map(([k, v]) => (
                      <div key={k} className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                        <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">{k}</div>
                        <div className="text-lg font-bold text-white">{v}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between p-6 rounded-xl bg-white/5 border border-white/5 mb-8">
                    <span className="text-sm font-semibold text-slate-400">Est. Investment</span>
                    <span className="text-xl font-bold text-white">{comp.investment}</span>
                  </div>
                  
                  <button className="btn-primary w-full py-4 rounded-xl">Get Unit Details</button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <div className="badge mx-auto mb-6">Testimonials</div>
              <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-tight">Real <span className="gradient-text">Voices</span>, Real Success</h2>
              <p className="text-slate-400">Join 5000+ farmers trained by our expert team across India.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Rahul S.", location: "Jabalpur", text: "The turnkey setup changed my perspective on farming. The technical support is outstanding even after 2 years.", avatar: "RS" },
                { name: "Deepak M.", location: "Indore", text: "Highly professional SOPs. My first crop yield exceeded expectations by 20% thanks to their climate control design.", avatar: "DM" },
                { name: "Suresh K.", location: "Sagar", text: "Organic Mushroom provides the most honest ROI analysis. No hidden costs, just pure business growth.", avatar: "SK" }
              ].map((t, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-3xl border border-white/5 flex flex-col h-full"
                >
                  <Quote size={28} className="text-primary-start mb-6 opacity-40" />
                  <p className="text-slate-300 text-sm italic mb-8 leading-relaxed flex-1">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full gradient-bg flex items-center justify-center font-bold text-white text-xs shadow-lg">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm tracking-tight">{t.name}</div>
                      <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{t.location}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-12">
            {["ISO 9001:2015", "NABARD Approved", "MSME Registered", "PMFME Partner", "Daikin Certified"].map(p => (
              <span key={p} className="text-xl font-display font-bold text-slate-400 tracking-tighter whitespace-nowrap">{p}</span>
            ))}
          </div>
        </section>
        
        {/* Marketplace Section Placeholder */}
        <section id="market" className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <div className="badge mx-auto mb-6">Market Linkage</div>
            <h2 className="text-4xl font-bold text-white mb-6">Mushroom <span className="gradient-text">Exchange</span> Marketplace</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-16 font-medium">Connect directly with verified buyers and sellers across India.</p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { type: "Seller", title: "Fresh Milky Mushrooms", locale: "West Bengal", price: "₹140/kg" },
                { type: "Buyer", title: "Oyster Spawn Needed", locale: "Madhya Pradesh", price: "Bulk Order" },
                { type: "Seller", title: "Dry Button Mushrooms", locale: "Punjab", price: "₹850/kg" },
              ].map((ad, i) => (
                <div key={i} className="glass p-6 rounded-3xl border border-white/5 relative group cursor-pointer hover:border-white/20 transition-all">
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${ad.type === 'Seller' ? 'bg-blue-500/20 text-blue-400' : 'bg-orange-500/20 text-orange-400'}`}>
                    {ad.type}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 mt-6 tracking-tight">{ad.title}</h3>
                  <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                    <MapPin size={12} className="text-primary-start" /> {ad.locale}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold text-lg">{ad.price}</span>
                    <button className="w-10 h-10 rounded-xl bg-white/5 text-slate-400 group-hover:bg-primary-start group-hover:text-white transition-all flex items-center justify-center">
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-outline mt-12 px-10 py-4 rounded-xl">
              Browse All Listings
            </button>
          </div>
        </section>

        {/* Resources & SOPs Section */}
        <section id="resources" className="py-24 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="badge mb-6">Documentation</div>
                <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-tight">Production <span className="gradient-text">SOPs & Guides</span></h2>
                <p className="text-slate-400 mb-12 leading-relaxed">Download our standard operating procedures used by specialists across India.</p>
                <div className="space-y-4">
                  {[
                    "Phase-II Pasteurization Tunnel Ops",
                    "Spawning & Incubation Checklist",
                    "Casing Material Preparation Guide",
                    "Disease Control & Hygiene Protocols"
                  ].map(sop => (
                    <div key={sop} className="flex items-center gap-4 p-5 glass rounded-2xl border border-white/5 group hover:bg-white/5 transition-all cursor-pointer">
                      <div className="w-10 h-10 rounded-xl bg-primary-start/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Download size={18} className="text-primary-start" />
                      </div>
                      <span className="text-sm font-bold text-slate-300">{sop}</span>
                      <ArrowRight className="ml-auto text-slate-700 group-hover:translate-x-1 transition-transform" size={16} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 gradient-bg opacity-10 blur-[80px] rounded-full"></div>
                <div className="relative glass p-10 rounded-[2.5rem] border border-white/10">
                  <div className="flex items-center gap-4 mb-8">
                    <BookOpen className="text-primary-start" size={24} />
                    <h3 className="text-xl font-bold text-white tracking-tight">Knowledge Hub</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Featured Video</span>
                        <div className="px-2 py-0.5 rounded bg-red-500/20 text-red-500 text-[10px] font-black uppercase">Youtube</div>
                      </div>
                      <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 group cursor-pointer">
                        <img src="https://picsum.photos/seed/mushroom/800/450" alt="Training Video" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center pl-1 shadow-2xl group-hover:scale-110 transition-transform">
                            <Play size={24} fill="currentColor" />
                          </div>
                        </div>
                      </div>
                      <h4 className="text-white font-bold text-sm tracking-tight">Industrial Composting Flow Explained</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ComparisonTable />
        <StatesSection />
        <ContactForm />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

const ComparisonTable = () => {
  const data = [
    { feature: "Primary Insulation", us: "80-100mm External PUF", others: "Standard 40-50mm" },
    { feature: "AC Systems", us: "Daikin Industrial Range", others: "Standard Split ACs" },
    { feature: "Racking Material", us: "MS Powder Coated / GI", others: "Bamboo or Local Steel" },
    { feature: "Tech Support", us: "Lifetime Video + On-site", others: "1 Year Limited" },
    { feature: "Subsidy Support", us: "Full Documentation Support", others: "Not Provided" },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="badge mx-auto mb-6">Comparison</div>
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tight uppercase">The <span className="gradient-text">Organic Edge</span></h2>
          <p className="text-slate-400 max-w-xl mx-auto">Why we are the preferred infrastructure partner across India.</p>
        </div>
        
        <div className="glass border border-white/10 overflow-hidden relative shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="px-8 py-10 text-[10px] font-black text-slate-500 uppercase tracking-widest">Key Features</th>
                  <th className="px-8 py-10 text-[10px] font-black text-white uppercase tracking-widest gradient-bg">Organic Mushroom</th>
                  <th className="px-8 py-10 text-[10px] font-black text-slate-500 uppercase tracking-widest">Other Entities</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {data.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-8 py-7 text-xs font-bold text-slate-400 uppercase tracking-wider">{row.feature}</td>
                    <td className="px-8 py-7 text-sm font-bold text-white">{row.us}</td>
                    <td className="px-8 py-7 text-sm font-medium text-slate-500">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
