import { Fragment, jsx, jsxs } from "react/jsx-runtime";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useEffect, useMemo } from "react";
import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  Navigate
} from "react-router-dom";
const ValidationError = ({ prefix, field, errors, className }) => null;
import {
  Menu,
  X,
  Phone,
  Mail,
  Youtube,
  CheckCircle2,
  TrendingUp,
  Users,
  Sprout,
  ShieldCheck,
  BookOpen,
  Clock,
  ShoppingCart,
  Award,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  MapPin,
  Briefcase,
  Play,
  Layers,
  Shield,
  Zap,
  Info,
  Quote,
  Home,
  Waves,
  Calendar,
  Globe,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence, useInView } from "motion/react";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ProcessDetailPage from "./pages/ProcessDetailPage";
import ModelDetailsPage from "./pages/ModelDetails";
import CompostUnitSpecsPage from "./pages/CompostUnitSpecs";
import TrainingCheckoutPage from "./pages/TrainingCheckoutPage";
import ContactFormPage from "./pages/ContactForm";
import SopsPage from "./pages/Sops";
import ExpertiseDetailsPage from "./pages/ExpertiseDetails";
import SpawnSeedPage from "./pages/SpawnSeed";
import BusinessPlan from "./pages/BusinessPlan";
import MushroomTypes from "./pages/MushroomTypes";
import MushroomTypeDetails from "./pages/MushroomTypeDetails";
import Equipment from "./pages/Equipment";
import BookConsultantPage from "./pages/BookConsultantPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import PaymentCancelledPage from "./pages/PaymentCancelledPage";
import ROICalculatorPage from "./pages/ROICalculatorPage";
import Subsidy from "./pages/Subsidy";
import Blog from "./pages/Blog";
import ArticlePage from "./pages/ArticlePage";
import SuccessStories from "./pages/SuccessStories";
import ProjectSpecsPage from "./pages/ProjectSpecs";
import ArticleBeginnerGuide from "./pages/ArticleBeginnerGuide";
import ArticleOysterMushroomCultivation from "./pages/ArticleOysterMushroomCultivation";
import ArticleMushroomSpawn from "./pages/ArticleMushroomSpawn";
import ArticleBusinessPlanHindi from "./pages/ArticleBusinessPlanHindi";
import ArticleTrainingGuideHindi from "./pages/ArticleTrainingGuideHindi";
import ArticleMushroomTrainingAffordable from "./pages/ArticleMushroomTrainingAffordable";
import ArticleGharParMushroomFarming from "./pages/ArticleGharParMushroomFarming";
import ArticleUltimateGuideHinglish from "./pages/ArticleUltimateGuideHinglish";
import ArticleUSAProfitGuide from "./pages/ArticleUSAProfitGuide";
import ArticleUSAMedicinalIncome from "./pages/ArticleUSAMedicinalIncome";
import ArticleUltimateGuideIndia from "./pages/ArticleUltimateGuideIndia";
import SEO from "./components/SEO";
import {
  generateGlobalFAQSchema,
  generateGlobalProductsSchema,
  generateGlobalServiceSchema
} from "./utils/seoSchemas";
import MetaPixelTracker from "./components/MetaPixelTracker";
import MushroomSEOSections from "./components/MushroomSEOSections";
import SiteVisitConsultationPage from "./pages/SiteVisitConsultationPage";
import SitemapPage from "./pages/SitemapPage";
import CareersPage from "./pages/CareersPage";
import MushroomPriceTodayPage from "./pages/MushroomPriceTodayPage";
import MushroomFranchisePage from "./pages/MushroomFranchisePage";
import WorkshopPage from "./pages/WorkshopPage";
import OperationsPage from "./pages/OperationsPage";
import MadhyaPradeshPage from "./pages/MadhyaPradeshPage";
import JabalpurPage from "./pages/JabalpurPage";
import JabalpurBlogPage from "./pages/JabalpurBlogPage";
import StatesPage from "./pages/StatesPage";
import MaharashtraPage from "./pages/MaharashtraPage";
import KarnatakaPage from "./pages/KarnatakaPage";
import TamilNaduPage from "./pages/TamilNaduPage";
import DelhiPage from "./pages/DelhiPage";
import TelanganaPage from "./pages/TelanganaPage";
import WestBengalPage from "./pages/WestBengalPage";
import BiharPage from "./pages/BiharPage";
import ChandigarhPage from "./pages/ChandigarhPage";
import ChhattisgarhPage from "./pages/ChhattisgarhPage";
import KeralaPage from "./pages/KeralaPage";
import GujaratPage from "./pages/GujaratPage";
import PunjabPage from "./pages/PunjabPage";
import RajasthanPage from "./pages/RajasthanPage";
import UttarPradeshPage from "./pages/UttarPradeshPage";
import HaryanaPage from "./pages/HaryanaPage";
import UttarakhandPage from "./pages/UttarakhandPage";
import AndhraPradeshPage from "./pages/AndhraPradeshPage";
import OdishaPage from "./pages/OdishaPage";
import JharkhandPage from "./pages/JharkhandPage";
import PunePage from "./pages/PunePage";
import PuneBlogPage from "./pages/PuneBlogPage";
import AssamPage from "./pages/AssamPage";
const ProductionSOP = () => {
  const steps = [
    {
      title: "Phase-I Composting",
      days: "8\u201310 Days",
      temp: "60\u201370\xB0C",
      param: "C:N Ratio Control",
      icon: Layers
    },
    {
      title: "Phase-II Pasteurization",
      days: "5\u20137 Days",
      temp: "57\u201360\xB0C",
      param: "Ammonia Level < 10ppm",
      icon: Shield
    },
    {
      title: "Filling & Spawning",
      days: "1\u20132 Days",
      temp: "25\u201328\xB0C",
      param: "Sterile Handling",
      icon: Sprout
    },
    {
      title: "Spawn Run",
      days: "14\u201316 Days",
      temp: "24\u201326\xB0C",
      param: "90% Rel. Humidity",
      icon: Clock
    },
    {
      title: "Casing Application",
      days: "1\u20132 Days",
      temp: "22\u201324\xB0C",
      param: "Soil pH 7.5-8.0",
      icon: Layers
    },
    {
      title: "Pinning Initiation",
      days: "7\u201310 Days",
      temp: "16\u201318\xB0C",
      param: "CO2 Flush < 800ppm",
      icon: Zap
    },
    {
      title: "Cropping",
      days: "25\u201330 Days",
      temp: "14\u201316\xB0C",
      param: "Peak Harvest Quality",
      icon: ShoppingCart
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "sop", className: "section-padding relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 md:mb-20", children: [
      /* @__PURE__ */ jsx("div", { className: "badge mx-auto mb-4", children: "60-Day Commercial Cycle" }),
      /* @__PURE__ */ jsxs("h2", { className: "mb-4 text-[18px] md:text-3xl uppercase tracking-tight", children: [
        "Commercial Mushroom Production Cycle",
        " ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "SOPs for India & Worldwide" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "max-w-lg mx-auto text-[11px] md:text-sm dark:text-slate-400 text-slate-600", children: "Standardized operational procedures for high-yield button and oyster mushroom cultivation globally." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "hidden md:flex gap-6 overflow-x-auto pb-12 snap-x scrollbar-hide", children: steps.map((s, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        whileHover: { scale: 1.02, y: -5 },
        className: "min-w-[300px] snap-center glass border dark:border-white/5 border-black/5 p-6 rounded-3xl relative group transition-all",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-4 font-black text-slate-800 text-4xl -z-10 group-hover:text-primary-start/10 transition-colors", children: i + 1 }),
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-primary-start/10 flex items-center justify-center mb-6 text-primary-start group-hover:bg-primary-start group-hover:dark:text-white text-slate-900 transition-all", children: /* @__PURE__ */ jsx(s.icon, { size: 20 }) }),
          /* @__PURE__ */ jsx("h3", { className: "dark:text-white text-slate-900 font-bold text-lg mb-4", children: s.title }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 mb-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[11px] font-bold", children: [
              /* @__PURE__ */ jsx("span", { className: "text-slate-500 uppercase tracking-widest", children: "Duration" }),
              /* @__PURE__ */ jsx("span", { className: "dark:text-white text-slate-900", children: s.days })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[11px] font-bold", children: [
              /* @__PURE__ */ jsx("span", { className: "text-slate-500 uppercase tracking-widest", children: "Temperature" }),
              /* @__PURE__ */ jsx("span", { className: "text-accent", children: s.temp })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-[11px] font-bold", children: [
              /* @__PURE__ */ jsx("span", { className: "text-slate-500 uppercase tracking-widest", children: "Key Param" }),
              /* @__PURE__ */ jsx("span", { className: "text-green-400", children: s.param })
            ] })
          ] })
        ]
      },
      i
    )) }),
    /* @__PURE__ */ jsx("div", { className: "md:hidden space-y-2", children: steps.map((s, i) => /* @__PURE__ */ jsx(Collapsible, { title: `${i + 1}. ${s.title}`, children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 py-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1", children: "Duration" }),
        /* @__PURE__ */ jsx("div", { className: "dark:text-white text-slate-900 font-bold", children: s.days })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1", children: "Temp" }),
        /* @__PURE__ */ jsx("div", { className: "text-accent font-bold", children: s.temp })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1", children: "Key Parameter" }),
        /* @__PURE__ */ jsx("div", { className: "text-green-400 font-bold", children: s.param })
      ] })
    ] }) }, i)) }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between mt-12 max-w-3xl mx-auto px-4", children: steps.map((_, i) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded-full gradient-bg flex items-center justify-center text-[10px] font-bold dark:text-white text-slate-900 shadow-lg", children: i + 1 }),
      i < steps.length - 1 && /* @__PURE__ */ jsx("div", { className: "flex-1 h-px dark:bg-white/10 bg-black/10 mx-2" })
    ] }, i)) })
  ] }) });
};
const Counter = ({
  value,
  duration = 1.5
}) => {
  const [displayValue, setDisplayValue] = useState("0");
  const nodeRef = React.useRef(null);
  const isInView = useInView(nodeRef, { once: true });
  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
      if (!isNaN(numericValue) && !value.includes("\u2013")) {
        let start = 0;
        const end = numericValue;
        const totalFrames = Math.min(60, duration * 60);
        let frame = 0;
        const timer = setInterval(() => {
          frame++;
          const progress = frame / totalFrames;
          const current = Math.round(end * progress);
          if (frame === totalFrames) {
            setDisplayValue(value);
            clearInterval(timer);
          } else {
            const prefix = value.match(/^[^\d]*/)?.[0] || "";
            setDisplayValue(`${prefix}${current}`);
          }
        }, 1e3 / 60);
        return () => clearInterval(timer);
      } else if (value.includes("\u2013")) {
        setDisplayValue(value);
      } else {
        setDisplayValue(value);
      }
    }
  }, [value, isInView, duration]);
  return /* @__PURE__ */ jsx(
    motion.span,
    {
      ref: nodeRef,
      initial: { opacity: 0, y: 10 },
      animate: isInView ? { opacity: 1, y: 0 } : {},
      className: "text-2xl md:text-4xl font-bold dark:text-white text-slate-900 tracking-tighter",
      children: displayValue
    }
  );
};
const CriticalParameters = () => {
  const params = [
    {
      label: "Production Temp",
      value: "14\u201318",
      unit: "\xB0C",
      icon: Zap,
      color: "text-blue-400"
    },
    {
      label: "Air Humidity",
      value: "85\u201395",
      unit: "%",
      icon: Waves,
      color: "text-cyan-400"
    },
    {
      label: "CO\u2082 Level",
      value: "< 1000",
      unit: "ppm",
      icon: Info,
      color: "text-green-400"
    },
    {
      label: "Spawn Run Temp",
      value: "24\u201326",
      unit: "\xB0C",
      icon: TrendingUp,
      color: "text-orange-400"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "section-padding relative", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("div", { className: "badge mx-auto mb-4", children: "Precision Metrics" }),
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-[18px] md:text-3xl uppercase tracking-tight", children: /* @__PURE__ */ jsxs(Link, { to: "/mushroom-types", className: "hover:text-current transition-colors", children: [
        "Critical",
        " ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Parameters for High-Yield Mushroom Production" })
      ] }) }),
      /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600 text-[13px] md:text-base", children: "Scientific boundaries for consistent commercial yields in organic mushroom farming across India and USA." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8", children: params.map((p, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        whileHover: { translateZ: 20 },
        className: "glass p-6 md:p-10 rounded-[2.5rem] border dark:border-white/5 border-black/5 text-center group",
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl dark:bg-white/5 bg-black/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-start group-hover:dark:text-white text-slate-900 transition-all", children: /* @__PURE__ */ jsx(p.icon, { size: 22, className: p.color }) }),
          /* @__PURE__ */ jsx("div", { className: "text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2", children: p.label }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-baseline justify-center gap-1", children: [
            /* @__PURE__ */ jsx(Counter, { value: p.value }),
            /* @__PURE__ */ jsx("span", { className: "text-[14px] font-black text-slate-500", children: p.unit })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 h-1 w-12 dark:bg-white/10 bg-black/10 rounded-full mx-auto overflow-hidden", children: /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { width: 0 },
              whileInView: { width: "100%" },
              transition: { duration: 1.5, delay: i * 0.2 },
              className: `h-full bg-linear-to-r ${i % 2 === 0 ? "from-primary-start to-primary-mid" : "from-accent to-brand-purple"}`
            }
          ) })
        ]
      },
      i
    )) })
  ] }) });
};
const EcosystemFlow = () => {
  const steps = [
    {
      label: "Raw Material",
      icon: ShoppingCart,
      href: "/process/raw-material"
    },
    {
      label: "Compost Prep",
      icon: Layers,
      href: "/process/compost-preparation"
    },
    { label: "Production Room", icon: Home, href: "/process/production-room" },
    {
      label: "Precision Harvest",
      icon: Sprout,
      href: "/process/precision-harvest"
    },
    { label: "Cold Chain", icon: Zap, href: "/process/cold-chain" },
    {
      label: "Market Linkage",
      icon: TrendingUp,
      href: "/process/market-linkage"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "section-padding relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("div", { className: "badge mx-auto mb-4", children: "Commercial Operation Model" }),
      /* @__PURE__ */ jsxs("h2", { className: "mb-4 text-[18px] md:text-3xl uppercase tracking-tight", children: [
        "Complete Commercial Farming",
        " ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Ecosystem Flow & Setup" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4 md:gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x", children: steps.map((s, i) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsx(Link, { to: s.href, children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          whileHover: { scale: 1.05 },
          className: "flex flex-col items-center gap-4 min-w-[140px] md:min-w-[160px] snap-center shrink-0 cursor-pointer group",
          children: [
            /* @__PURE__ */ jsx("div", { className: "icon-box w-16 h-16 md:w-20 md:h-20 rounded-3xl flex items-center justify-center transition-all", children: /* @__PURE__ */ jsx(s.icon, { size: 32 }) }),
            /* @__PURE__ */ jsx("span", { className: "text-[11px] md:text-[14px] font-bold dark:text-slate-300 text-slate-700 text-center uppercase tracking-wider group-hover:dark:text-white text-slate-900 transition-colors", children: s.label })
          ]
        }
      ) }),
      i < steps.length - 1 && /* @__PURE__ */ jsx("div", { className: "shrink-0 flex items-center justify-center mx-2 md:mx-4", children: /* @__PURE__ */ jsx(
        ArrowRight,
        {
          size: 24,
          className: "text-slate-400 dark:text-white/80"
        }
      ) })
    ] }, i)) })
  ] }) });
};
const MushroomComparison = () => {
  const mushrooms = [
    {
      name: "Button Mushroom",
      difficulty: "High Difficulty",
      speed: "Industrial",
      color: "bg-blue-500",
      text: "Premium market share, controlled environment commercial setup."
    },
    {
      name: "Oyster Mushroom",
      difficulty: "Low\u2013Medium",
      speed: "Easy Growth",
      color: "bg-green-500",
      text: "Low investment start, versatile substrate requirements. Ideal for beginners and detailed multi-page online training."
    },
    {
      name: "Milky Mushroom",
      difficulty: "Seasonal",
      speed: "High Velocity",
      color: "bg-yellow-500",
      text: "Regional demand focus, high temperature preference perfect for Indian climate."
    },
    {
      name: "Shiitake & Lion's Mane",
      difficulty: "Premium",
      speed: "Export Grade",
      color: "bg-amber-700",
      text: "High specialty value, intensive cycle management. Best for international markets like USA & Australia."
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "section-padding", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("div", { className: "badge mx-auto mb-4", children: "Top Searched Product Variants" }),
      /* @__PURE__ */ jsx("h2", { className: "mb-4 text-[18px] md:text-3xl uppercase tracking-tight", children: /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "hover:text-current transition-colors", children: [
        "High-Yield Commercial Mushroom",
        " ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Genetics & Types Table" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "hidden md:block glass border dark:border-white/5 border-black/5 rounded-3xl overflow-hidden", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left", children: [
      /* @__PURE__ */ jsx("thead", { className: "dark:bg-white/5 bg-black/5 border-b dark:border-white/10 border-black/10", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { className: "px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500", children: "Mushroom Type" }),
        /* @__PURE__ */ jsx("th", { className: "px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500", children: "Difficulty" }),
        /* @__PURE__ */ jsx("th", { className: "px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500", children: "Complexity" }),
        /* @__PURE__ */ jsx("th", { className: "px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500", children: "Market Segment" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-white/5", children: mushrooms.map((m, i) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-white/[0.02] transition-colors", children: [
        /* @__PURE__ */ jsx("td", { className: "px-8 py-5", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: `w-3 h-3 rounded-full ${m.color}` }),
          /* @__PURE__ */ jsx("span", { className: "font-bold dark:text-white text-slate-900 text-sm", children: m.name })
        ] }) }),
        /* @__PURE__ */ jsx("td", { className: "px-8 py-5 text-[12px] dark:text-slate-400 text-slate-600 font-medium", children: m.difficulty }),
        /* @__PURE__ */ jsx("td", { className: "px-8 py-5 text-[12px] dark:text-slate-400 text-slate-600 font-medium", children: m.speed }),
        /* @__PURE__ */ jsx("td", { className: "px-8 py-5 text-[12px] text-slate-500 leading-relaxed font-medium", children: m.text })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "md:hidden flex gap-4 overflow-x-auto pb-6 snap-x scrollbar-hide", children: mushrooms.map((m, i) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "min-w-[280px] snap-center glass border dark:border-white/10 border-black/10 p-6 rounded-2xl",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `w-4 h-4 rounded-full ${m.color} shadow-lg shadow-black/50`
              }
            ),
            /* @__PURE__ */ jsx("h3", { className: "dark:text-white text-slate-900 font-bold text-lg", children: m.name })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 mb-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5", children: [
              /* @__PURE__ */ jsx("div", { className: "text-[8px] font-black text-slate-500 uppercase mb-1", children: "Difficulty" }),
              /* @__PURE__ */ jsx("div", { className: "text-[11px] font-bold dark:text-slate-300 text-slate-700", children: m.difficulty })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5", children: [
              /* @__PURE__ */ jsx("div", { className: "text-[8px] font-black text-slate-500 uppercase mb-1", children: "Scale" }),
              /* @__PURE__ */ jsx("div", { className: "text-[11px] font-bold dark:text-slate-300 text-slate-700", children: m.speed })
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[13px] dark:text-slate-400 text-slate-600 leading-relaxed font-medium", children: m.text })
        ]
      },
      i
    )) })
  ] }) });
};
const CompanyProfile = () => {
  return /* @__PURE__ */ jsx("section", { id: "profile", className: "section-padding relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        className: "glass border dark:border-white/10 border-black/10 rounded-[3rem] p-8 md:p-12 relative shadow-2xl group overflow-hidden",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-20 -right-20 w-64 h-64 bg-primary-start/20 blur-[100px] rounded-full group-hover:bg-primary-start/30 transition-all" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 mb-10", children: [
            /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl overflow-hidden p-3 group-hover:scale-105 transition-all", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png",
                alt: "Organic Mushrooms Farm",
                className: "w-full h-full object-contain",
                referrerPolicy: "no-referrer"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold dark:text-white text-slate-900 mb-1", children: "Organic Mushrooms Farm" }),
              /* @__PURE__ */ jsx("p", { className: "text-primary-start font-black text-[10px] uppercase tracking-[0.3em]", children: "Premium Infrastructure Partner" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-6 mb-10", children: [
            {
              label: "Founder",
              value: "Tanish Soni",
              spanClass: "col-span-1"
            },
            {
              label: "Co-Founder",
              value: "Dwarka Prasad",
              spanClass: "col-span-1"
            },
            {
              label: "Established",
              value: "2021",
              spanClass: "col-span-1"
            },
            {
              label: "Base",
              value: "Pan India & Global Operations",
              spanClass: "col-span-1"
            },
            {
              label: "Business Type",
              value: "Leading Exporter, Manufacturer & Service Provider of Mushroom Farming, Spawn Supply, Training & Turnkey Farm Setup in India, USA, Australia",
              spanClass: "col-span-2"
            }
          ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: `space-y-1 ${item.spanClass || ""}`, children: [
            /* @__PURE__ */ jsx("div", { className: "text-[9px] font-black text-slate-500 uppercase tracking-widest", children: item.label }),
            /* @__PURE__ */ jsx("div", { className: "text-sm font-bold dark:text-white text-slate-900", children: item.value })
          ] }, i)) }),
          /* @__PURE__ */ jsx("div", { className: "p-6 rounded-3xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5 mb-8", children: /* @__PURE__ */ jsxs("p", { className: "dark:text-slate-400 text-slate-600 text-[14px] leading-relaxed font-medium", children: [
            "Established as India's leading mushroom ecosystem architect, we bridge the gap between traditional farming and industrial precision. Our mission is to democratize",
            " ",
            /* @__PURE__ */ jsx("span", { className: "dark:text-white text-slate-900 font-bold", children: "organic farming" }),
            " ",
            "across India and global markets with high-yield",
            " ",
            /* @__PURE__ */ jsx("span", { className: "dark:text-white text-slate-900 font-bold", children: "spawn quality" }),
            ", comprehensive",
            " ",
            /* @__PURE__ */ jsx("span", { className: "dark:text-white text-slate-900 font-bold", children: "training" }),
            " ",
            "modules, and unmatched",
            " ",
            /* @__PURE__ */ jsx("span", { className: "dark:text-white text-slate-900 font-bold", children: "India-wide & international support" }),
            " ",
            "systems."
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: [
            "Industrial Design",
            "Turnkey Builds",
            "Export Quality",
            "PAN-India Ops",
            "Global Setup Consultant"
          ].map((tag) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "px-4 py-2 rounded-full border dark:border-white/10 border-black/10 text-[10px] font-bold text-slate-500 dark:bg-white/5 bg-black/5",
              children: tag
            },
            tag
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsx("div", { className: "badge", children: "Our Technical Expertise" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-[18px] md:text-3xl tracking-tight leading-tight uppercase", children: [
        "Bridging Technology &",
        " ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Organic Cultivation Setup Worldwide" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-4", children: [
        {
          icon: Award,
          title: "Precision Engineering",
          desc: "Scientific mushroom grow room design optimized for specific climatic zones in India and globally."
        },
        {
          icon: Users,
          title: "Expert Training",
          desc: "Hands-on certification and online training courses from industry pioneers."
        },
        {
          icon: ShieldCheck,
          title: "Quality Guarantee",
          desc: "Standardized materials with long-term structural durability for button mushroom setups."
        }
      ].map((b, i) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/expertise-details",
          className: "flex gap-5 p-5 glass border dark:border-white/5 border-black/5 rounded-2xl group hover:dark:bg-white/5 bg-black/5 transition-all text-left",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl dark:bg-white/5 bg-black/5 flex items-center justify-center text-primary-start group-hover:scale-110 transition-all shrink-0", children: /* @__PURE__ */ jsx(b.icon, { size: 22 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "dark:text-white text-slate-900 font-bold text-[14px] mb-1", children: b.title }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-[12px] leading-snug", children: b.desc })
            ] })
          ]
        },
        i
      )) })
    ] })
  ] }) }) });
};
const COMP_DATA = [
  { label: "Insulation", us: "80-100mm PUF", others: "40-50mm" },
  { feature: "AC Systems", us: "Daikin Industrial", others: "Split ACs" },
  { feature: "Racking", us: "MS / GI", others: "Bamboo" },
  { feature: "Support", us: "Lifetime Video", others: "1 Year" },
  { feature: "Subsidy", us: "Full Document Support", others: "No Support" }
];
const LOCATIONS = [
  "Jabalpur",
  "Sagar",
  "Damoh",
  "Indore",
  "Mumbai",
  "Delhi",
  "Global"
];
const STATES = [
  "Haryana",
  "Punjab",
  "Himachal Pradesh",
  "Uttarakhand",
  "Uttar Pradesh",
  "Madhya Pradesh",
  "Rajasthan",
  "Bihar",
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu",
  "Telangana",
  "Andhra Pradesh",
  "Kerala"
];
const NAV_ITEMS = [
  { name: "Home", href: "/", isExternal: false, icon: Home },
  {
    name: "About",
    href: "/about",
    isExternal: false,
    icon: Info,
    subMenu: [
      { name: "Our Story", href: "/about" },
      { name: "Success Stories", href: "/success-stories" }
    ]
  },
  {
    name: "Training",
    href: "/training",
    isExternal: false,
    icon: Award
  },
  {
    name: "Learning",
    href: "/mushroom-types",
    isExternal: false,
    icon: BookOpen,
    subMenu: [
      { name: "Mushroom Types", href: "/mushroom-types" },
      { name: "Business Plan", href: "/business-plan" },
      { name: "ROI Calculator", href: "/roi-calculator" },
      { name: "Daily Prices", href: "/mushroom-price-today" },
      { name: "Careers", href: "/careers" }
    ]
  },
  {
    name: "Services",
    href: "/services",
    isExternal: false,
    icon: Layers,
    subMenu: [
      { name: "Spawn Supply", href: "/spawn-seed" },
      { name: "Compost Production", href: "/services/compost-production" },
      { name: "Consultancy", href: "/services/consultancy" },
      { name: "Marketing Support", href: "/services/marketing-support" },
      { name: "Cold Chain", href: "/services/cold-chain" },
      { name: "Government Subsidy", href: "/subsidy" },
      { name: "Grow Tech Equipment", href: "/equipment" },
      { name: "Franchise", href: "/mushroom-franchise" }
    ]
  },
  {
    name: "Turnkey Projects",
    href: "/turnkey-projects",
    isExternal: false,
    icon: ShieldCheck
  },
  {
    name: "Workshop",
    href: "/workshop",
    isExternal: false,
    icon: Calendar
  },
  { name: "Gallery", href: "/gallery", isExternal: false, icon: ShoppingCart },
  { name: "Blog", href: "/blog", isExternal: false, icon: BookOpen },
  { name: "FAQ", href: "/faq", isExternal: false, icon: MessageCircle },
  {
    name: "Contact",
    href: "/contact",
    isExternal: false,
    icon: Phone,
    subMenu: [
      { name: "Contact Us", href: "/contact" },
      { name: "On Site Visit", href: "/on-site-consultation" },
      { name: "Call Now", href: "tel:9203544140" }
    ]
  }
];
const Collapsible = ({
  title,
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "glass border dark:border-white/5 border-black/5 mb-3 overflow-hidden", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "w-full flex items-center justify-between p-4 text-left font-bold text-sm dark:text-white text-slate-900",
        children: [
          /* @__PURE__ */ jsx("span", { children: title }),
          isOpen ? /* @__PURE__ */ jsx(ChevronUp, { size: 18 }) : /* @__PURE__ */ jsx(ChevronDown, { size: 18 })
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        className: "p-4 pt-0 text-[13px] dark:text-slate-400 text-slate-600 border-t dark:border-white/5 border-black/5",
        children
      }
    ) })
  ] });
};
const Background3D = () => /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 -z-10 overflow-hidden pointer-events-none", children: [
  /* @__PURE__ */ jsx("div", { className: "blob blob-1 absolute w-[600px] h-[600px] bg-primary-start/10 top-[-100px] left-[-100px] blur-[120px] rounded-full" }),
  /* @__PURE__ */ jsx("div", { className: "blob blob-2 absolute w-[500px] h-[500px] bg-accent/10 bottom-[-50px] right-[-100px] blur-[120px] rounded-full" }),
  /* @__PURE__ */ jsx("div", { className: "blob blob-1 absolute w-[400px] h-[400px] bg-primary-start/5 top-[40%] left-[20%] blur-[100px] rounded-full" })
] });
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(
    null
  );
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    const handleScrollSpy = () => {
      setActiveSection(null);
    };
    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollSpy);
    };
  }, [location.pathname]);
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);
  if (location.pathname === "/workshop") return null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "nav",
      {
        className: `fixed top-3 md:top-6 left-1/2 -translate-x-1/2 w-[calc(100%-16px)] sm:w-[calc(100%-32px)] md:w-[calc(100%-48px)] max-w-7xl z-50 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] py-2.5 md:py-4 px-3 sm:px-5 md:px-6 lg:px-4 xl:px-8 transition-all duration-300 rounded-[2rem] ${isScrolled ? "translate-y-[-2px]" : ""}`,
        style: { background: "linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(59, 130, 246, 0.15) 33%, rgba(34, 197, 94, 0.15) 66%, rgba(234, 179, 8, 0.15) 100%)" },
        children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/",
              className: "flex items-center gap-1.5 sm:gap-3 group shrink-0",
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png",
                    alt: "Organic Mushrooms Farm",
                    className: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 shrink-0 object-contain group-hover:scale-110 transition-transform"
                  }
                ),
                /* @__PURE__ */ jsxs("span", { className: "text-[14px] xs:text-[16px] sm:text-lg md:text-xl lg:text-[12px] xl:text-[15px] 2xl:text-lg font-bold tracking-tight dark:text-white text-slate-900 whitespace-nowrap", children: [
                  "Organic ",
                  /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Mushroom Farm" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:flex items-center gap-0.5 xl:gap-1.5 overflow-x-auto no-scrollbar", children: NAV_ITEMS.map((item) => {
            const isHashLink = item.href.includes("#");
            const hash = isHashLink ? item.href.split("#")[1] : null;
            const isActive = isHashLink ? location.pathname === "/" && activeSection === hash : location.pathname === item.href && !location.hash && activeSection === null;
            const linkProps = isHashLink && location.pathname === "/" ? {
              href: `#${hash}`,
              onClick: (e) => {
                e.preventDefault();
                const element = document.getElementById(hash);
                if (element) {
                  const offset = 100;
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = element.getBoundingClientRect().top;
                  const elementPosition = elementRect - bodyRect;
                  const offsetPosition = elementPosition - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                  window.history.pushState(null, "", `/#${hash}`);
                }
              }
            } : { href: item.href };
            if (isHashLink) {
              return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                location.pathname === "/" ? /* @__PURE__ */ jsx(
                  "a",
                  {
                    ...linkProps,
                    className: `text-[9px] lg:text-[10px] xl:text-[12px] font-bold transition-all flex items-center gap-1 xl:gap-1.5 px-1.5 xl:px-2 py-1.5 rounded-lg whitespace-nowrap ${isActive ? "dark:text-white text-slate-900 dark:bg-white/5 bg-black/5" : "dark:text-slate-400 text-slate-600 hover:dark:text-white hover:text-slate-900"}`,
                    children: item.name
                  }
                ) : /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: item.href,
                    className: `text-[9px] lg:text-[10px] xl:text-[12px] font-bold transition-all flex items-center gap-1 xl:gap-1.5 px-1.5 xl:px-2 py-1.5 rounded-lg whitespace-nowrap ${isActive ? "dark:text-white text-slate-900 dark:bg-white/5 bg-black/5" : "dark:text-slate-400 text-slate-600 hover:dark:text-white hover:text-slate-900"}`,
                    children: item.name
                  }
                ),
                isActive && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    layoutId: "nav-active",
                    className: "absolute -bottom-1 left-2 right-2 xl:left-3 xl:right-3 h-0.5 gradient-bg rounded-full"
                  }
                )
              ] }, item.name);
            }
            const hasSubMenu = item.subMenu && item.subMenu.length > 0;
            return /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: item.href,
                  className: `text-[9px] lg:text-[10px] xl:text-[12px] font-bold transition-all flex items-center gap-1 xl:gap-1.5 px-1.5 xl:px-2 py-1.5 rounded-lg whitespace-nowrap ${isActive ? "dark:text-white text-slate-900 dark:bg-white/5 bg-black/5" : "dark:text-slate-400 text-slate-600 hover:dark:text-white hover:text-slate-900"}`,
                  children: [
                    item.name,
                    hasSubMenu && /* @__PURE__ */ jsx(
                      ChevronDown,
                      {
                        size: 14,
                        className: "group-hover:rotate-180 transition-transform"
                      }
                    )
                  ]
                }
              ),
              hasSubMenu && /* @__PURE__ */ jsx("div", { className: "absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all z-[100]", children: /* @__PURE__ */ jsx("div", { className: "glass p-2 min-w-[200px] rounded-xl border dark:border-white/10 border-black/10 shadow-[0_10px_40px_-10px_rgba(124,58,237,0.15)]", children: item.subMenu.map((sub) => /* @__PURE__ */ jsx(
                Link,
                {
                  to: sub.href,
                  className: "block px-4 py-2.5 text-[12px] font-bold dark:text-slate-400 text-slate-600 hover:dark:text-white text-slate-900 hover:dark:bg-white/10 bg-black/10 rounded-lg transition-all",
                  children: sub.name
                },
                sub.name
              )) }) }),
              isActive && /* @__PURE__ */ jsx(
                motion.div,
                {
                  layoutId: "nav-active",
                  className: "absolute -bottom-1 left-3 right-3 h-0.5 gradient-bg rounded-full"
                }
              )
            ] }, item.name);
          }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setMobileMenuOpen(true),
              className: "lg:hidden dark:text-white text-slate-900 p-2 focus:outline-none",
              "aria-label": "Open Menu",
              children: /* @__PURE__ */ jsx(Menu, { size: 24 })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: mobileMenuOpen && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[9998] lg:hidden", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.2, ease: "easeOut" },
          onClick: () => setMobileMenuOpen(false),
          className: "absolute inset-0 bg-black/70"
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          transition: {
            type: "tween",
            duration: 0.22,
            ease: [0.16, 1, 0.3, 1]
          },
          style: { willChange: "transform" },
          className: "absolute right-0 top-0 h-full w-[85%] sm:w-[380px] bg-slate-50 dark:bg-[#09090b] shadow-[-15px_0_40px_rgba(0,0,0,0.45)] rounded-l-[30px] border-l dark:border-white/10 border-black/10 flex flex-col items-center overflow-hidden z-[9999]",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-7 w-full border-b dark:border-white/5 border-black/5 dark:bg-white/5 bg-black/5 relative z-10", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg overflow-hidden p-1.5 shrink-0", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png",
                    alt: "Organic Mushrooms Farm",
                    className: "w-full h-full object-contain"
                  }
                ) }),
                /* @__PURE__ */ jsxs("span", { className: "text-xl font-bold tracking-tight dark:text-white text-slate-900", children: [
                  "Organic ",
                  /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Mushroom Farm" })
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setMobileMenuOpen(false),
                  className: "dark:text-white text-slate-900 p-2.5 dark:bg-white/10 bg-black/11 rounded-full hover:bg-black/15 dark:hover:bg-white/15 transition-all duration-200",
                  "aria-label": "Close Menu",
                  children: /* @__PURE__ */ jsx(X, { size: 24 })
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.16, duration: 0.25, ease: "easeOut" },
                style: { willChange: "transform, opacity" },
                className: "flex-1 w-full flex flex-col items-center justify-start gap-2 px-8 py-10 overflow-y-auto relative z-10",
                children: NAV_ITEMS.map((item, i) => {
                  const isHashLink = item.href.includes("#");
                  const hash = isHashLink ? item.href.split("#")[1] : null;
                  const isActive = isHashLink ? location.pathname === "/" && activeSection === hash : location.pathname === item.href && !location.hash && activeSection === null;
                  return /* @__PURE__ */ jsx("div", { className: "w-full", children: isHashLink && location.pathname === "/" ? /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: `#${hash}`,
                      onClick: (e) => {
                        setMobileMenuOpen(false);
                        e.preventDefault();
                        const element = document.getElementById(hash);
                        if (element) {
                          const offset = 80;
                          const bodyRect = document.body.getBoundingClientRect().top;
                          const elementRect = element.getBoundingClientRect().top;
                          const elementPosition = elementRect - bodyRect;
                          const offsetPosition = elementPosition - offset;
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                          });
                          window.history.pushState(null, "", `/#${hash}`);
                        }
                      },
                      className: `flex items-center gap-5 text-lg font-bold transition-all py-4 px-6 w-full rounded-2xl group hover:scale-[1.02] hover:dark:bg-white/5 bg-black/5 ${isActive ? "dark:bg-white/10 bg-black/10 text-primary-start shadow-[0_0_30px_rgba(56,189,248,0.25)]" : "dark:text-slate-300 text-slate-700 hover:dark:text-white text-slate-900"}`,
                      children: [
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: `w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isActive ? "bg-primary-start/20 text-primary-start border border-primary-start/30 backdrop-blur-md shadow-[0_0_15px_rgba(124,58,237,0.2)]" : "dark:bg-white/5 bg-black/5 text-slate-500 group-hover:text-primary-start group-hover:bg-primary-start/10 group-hover:border group-hover:border-primary-start/20"}`,
                            children: item.icon && /* @__PURE__ */ jsx(item.icon, { size: 20 })
                          }
                        ),
                        /* @__PURE__ */ jsx("span", { className: isActive ? "gradient-text" : "", children: item.name })
                      ]
                    }
                  ) : /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
                    item.subMenu ? /* @__PURE__ */ jsxs(
                      "button",
                      {
                        onClick: () => {
                          setExpandedMobileMenu(
                            (prev) => prev === item.name ? null : item.name
                          );
                        },
                        className: `flex items-center justify-between text-lg font-bold transition-all py-4 px-6 w-full rounded-2xl group hover:scale-[1.02] hover:dark:bg-white/5 bg-black/5 ${isActive ? "dark:bg-white/10 bg-black/10 text-primary-start shadow-[0_0_30px_rgba(56,189,248,0.25)]" : "dark:text-slate-300 text-slate-700 hover:dark:text-white text-slate-900"}`,
                        children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5", children: [
                            /* @__PURE__ */ jsx(
                              "div",
                              {
                                className: `w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isActive ? "bg-primary-start/20 text-primary-start border border-primary-start/30 backdrop-blur-md shadow-[0_0_15px_rgba(124,58,237,0.2)]" : "dark:bg-white/5 bg-black/5 text-slate-500 group-hover:text-primary-start group-hover:bg-primary-start/10 group-hover:border group-hover:border-primary-start/20"}`,
                                children: item.icon && /* @__PURE__ */ jsx(item.icon, { size: 20 })
                              }
                            ),
                            /* @__PURE__ */ jsx(
                              "span",
                              {
                                className: isActive ? "gradient-text" : "",
                                children: item.name
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsx(
                            ChevronDown,
                            {
                              size: 20,
                              className: `transition-transform duration-300 ${expandedMobileMenu === item.name ? "rotate-180" : ""}`
                            }
                          )
                        ]
                      }
                    ) : /* @__PURE__ */ jsxs(
                      Link,
                      {
                        to: item.href,
                        onClick: () => setMobileMenuOpen(false),
                        className: `flex items-center gap-5 text-lg font-bold transition-all py-4 px-6 w-full rounded-2xl group hover:scale-[1.02] hover:dark:bg-white/5 bg-black/5 ${isActive ? "dark:bg-white/10 bg-black/10 text-primary-start shadow-[0_0_30px_rgba(56,189,248,0.25)]" : "dark:text-slate-300 text-slate-700 hover:dark:text-white text-slate-900"}`,
                        children: [
                          /* @__PURE__ */ jsx(
                            "div",
                            {
                              className: `w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isActive ? "bg-primary-start/20 text-primary-start border border-primary-start/30 backdrop-blur-md shadow-[0_0_15px_rgba(124,58,237,0.2)]" : "dark:bg-white/5 bg-black/5 text-slate-500 group-hover:text-primary-start group-hover:bg-primary-start/10 group-hover:border group-hover:border-primary-start/20"}`,
                              children: item.icon && /* @__PURE__ */ jsx(item.icon, { size: 20 })
                            }
                          ),
                          /* @__PURE__ */ jsx("span", { className: isActive ? "gradient-text" : "", children: item.name })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(AnimatePresence, { children: item.subMenu && expandedMobileMenu === item.name && /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        initial: { height: 0, opacity: 0 },
                        animate: { height: "auto", opacity: 1 },
                        exit: { height: 0, opacity: 0 },
                        className: "overflow-hidden",
                        children: /* @__PURE__ */ jsx("div", { className: "ml-20 mt-1 space-y-1 mb-4 flex flex-col", children: item.subMenu.map((sub) => /* @__PURE__ */ jsx(
                          Link,
                          {
                            to: sub.href,
                            onClick: () => setMobileMenuOpen(false),
                            className: "py-2 text-sm font-bold text-slate-500 hover:text-primary-start transition-colors",
                            children: sub.name
                          },
                          sub.name
                        )) })
                      }
                    ) })
                  ] }) }, item.name);
                })
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "w-full p-8 border-t dark:border-white/5 border-black/5 bg-white/[0.02] text-center", children: /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase font-black tracking-[0.3em] text-slate-500 animate-pulse", children: "Organic Ecosystems India & Global" }) })
          ]
        }
      )
    ] }) })
  ] });
};
const Hero = () => {
  const features = [
    { text: "Complete Turnkey Project Setup", link: "/articles/turnkey-mushroom-farm-setup-india" },
    { text: "Mushroom Farming Training Programs" },
    { text: "Government Subsidy Documentation" },
    { text: "Technical Support India & Worldwide" }
  ];
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "home",
      className: "relative min-h-[90vh] md:min-h-screen flex items-center pt-32 pb-12 md:pt-40 md:pb-24 overflow-hidden section-padding",
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto w-full grid lg:grid-cols-[1.2fr,0.8fr] gap-8 md:gap-16 items-center", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -30 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.6 },
            viewport: { once: true },
            className: "text-center md:text-left",
            children: [
              /* @__PURE__ */ jsx("div", { className: "text-[10px] md:text-sm font-bold text-green-500 uppercase tracking-[0.2em] mb-4 md:mb-6", children: "Button, Oyster, Milky, Shiitake & More | Setup, Training & Business Support" }),
              /* @__PURE__ */ jsxs("h1", { className: "text-[1.5rem] md:text-4xl lg:text-5xl font-bold dark:text-white text-slate-900 leading-tight mb-4 md:mb-5 tracking-tighter", children: [
                /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Mushroom Farming in India & Worldwide" }),
                " ",
                /* @__PURE__ */ jsx("br", {}),
                "\u2013 Complete Solutions for All Mushroom Types"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-[0.8125rem] md:text-base dark:text-slate-400 text-slate-600 mb-5 md:mb-6 max-w-xl mx-auto md:mx-0 leading-relaxed", children: "Complete commercial methodology, calculators, and turnkey solutions for profitable button, oyster, and milky mushroom farming across India and worldwide." }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-3 gap-x-8 mb-6 dark:border-white/5 border-black/5 border-y py-4 md:py-5", children: features.map((f, i) => /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "flex items-center gap-3 justify-center md:justify-start",
                  children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { size: 16, className: "text-primary-start" }),
                    f.link ? /* @__PURE__ */ jsx(Link, { to: f.link, className: "text-[13px] md:text-sm font-bold text-slate-200 tracking-tight hover:text-primary-start transition-colors", children: f.text }) : /* @__PURE__ */ jsx("span", { className: "text-[13px] md:text-sm font-bold text-slate-200 tracking-tight", children: f.text })
                  ]
                },
                i
              )) }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 mb-6 max-w-md mx-auto md:mx-0", children: [
                /* @__PURE__ */ jsxs(
                  Link,
                  {
                    to: "/training",
                    className: "group flex items-center justify-between p-4 rounded-2xl border border-purple-500/30 bg-linear-to-r from-purple-500/5 via-fuchsia-400/5 to-indigo-500/5 dark:from-purple-900/10 dark:via-fuchsia-900/10 dark:to-indigo-900/10 hover:from-purple-500/15 hover:via-fuchsia-400/15 hover:to-indigo-500/15 transition-all duration-300 shadow-xs",
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx("div", { className: "p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-300", children: /* @__PURE__ */ jsx(Award, { size: 18 }) }),
                        /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                          /* @__PURE__ */ jsx("span", { className: "block text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors", children: "Mushroom Cultivation Training" }),
                          /* @__PURE__ */ jsx("span", { className: "block text-[10px] text-slate-500 dark:text-slate-400", children: "Comprehensive online & offline certification programs" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx(ArrowRight, { size: 16, className: "text-slate-400 group-hover:translate-x-1 group-hover:text-purple-500 transition-all" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Link,
                  {
                    to: "/turnkey-projects",
                    className: "group flex items-center justify-between p-4 rounded-2xl border border-emerald-500/30 bg-linear-to-r from-emerald-500/5 via-teal-400/5 to-cyan-500/5 dark:from-emerald-900/10 dark:via-teal-900/10 dark:to-cyan-900/10 hover:from-emerald-500/15 hover:via-teal-400/15 hover:to-cyan-500/15 transition-all duration-300 shadow-xs",
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx("div", { className: "p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-300", children: /* @__PURE__ */ jsx(CheckCircle2, { size: 18 }) }),
                        /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                          /* @__PURE__ */ jsx("span", { className: "block text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors", children: "Mushroom Farm Setup" }),
                          /* @__PURE__ */ jsx("span", { className: "block text-[10px] text-slate-500 dark:text-slate-400", children: "Turnkey commercial farm setup & consultancy" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx(ArrowRight, { size: 16, className: "text-slate-400 group-hover:translate-x-1 group-hover:text-emerald-500 transition-all" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row flex-wrap gap-4 mb-6 md:mb-8", children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20mushroom%20farming.%20Please%20provide%20details.",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "btn-primary w-full sm:w-auto px-10 min-h-[50px] rounded-xl text-sm shadow-2xl shadow-brand-blue/30 flex items-center justify-center",
                    children: "Get Free Quote"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "tel:9203544140",
                    className: "btn-outline w-full sm:w-auto px-10 min-h-[50px] rounded-xl text-sm",
                    children: "Call Now: 9203544140"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-center md:justify-start gap-12 pt-4", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "text-2xl md:text-3xl font-bold dark:text-white text-slate-900", children: "1.2k+" }),
                  /* @__PURE__ */ jsx("div", { className: "text-[9px] text-slate-500 uppercase tracking-[0.2em] mt-1 font-black", children: "Active Commercial Units" })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "text-2xl md:text-3xl font-bold dark:text-white text-slate-900", children: "98%" }),
                  /* @__PURE__ */ jsx("div", { className: "text-[9px] text-slate-500 uppercase tracking-[0.2em] mt-1 font-black", children: "Success Rate Globally" })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.8 },
            whileInView: { opacity: 1, scale: 1 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            className: "relative lg:block hidden",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 gradient-bg opacity-20 blur-[100px] rounded-full animate-pulse" }),
              /* @__PURE__ */ jsxs("div", { className: "relative glass rounded-[2.5rem] p-8 border-white/20 shadow-2xl backdrop-blur-2xl", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-10", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "text-accent" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("div", { className: "dark:text-white text-slate-900 font-bold", children: "Turnkey Setup Project" }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-500", children: "Quality Certified Infrastructure" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-widest", children: "Active" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-6", children: [
                  {
                    label: "Commercial Room Size",
                    value: "18 x 70 ft Standard",
                    icon: Layers
                  },
                  {
                    label: "Annual High Yield",
                    value: "35,000+ kg",
                    icon: TrendingUp
                  },
                  {
                    label: "Cooling Sys (India)",
                    value: "Daikin Industrial",
                    icon: Zap
                  }
                ].map((stat, i) => /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "flex items-center justify-between dark:bg-white/5 bg-black/5 p-4 rounded-2xl border dark:border-white/5 border-black/5",
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx(
                          stat.icon,
                          {
                            className: "dark:text-slate-400 text-slate-600",
                            size: 18
                          }
                        ),
                        /* @__PURE__ */ jsx("span", { className: "text-sm dark:text-slate-300 text-slate-700 font-medium", children: stat.label })
                      ] }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm dark:text-white text-slate-900 font-bold", children: stat.value })
                    ]
                  },
                  i
                )) }),
                /* @__PURE__ */ jsxs("div", { className: "mt-10 p-6 rounded-3xl bg-linear-to-br from-white/10 to-transparent border dark:border-white/10 border-black/10", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold dark:text-slate-300 text-slate-700", children: "Phase 1 Commercial Cycle" }),
                    /* @__PURE__ */ jsx("span", { className: "text-[10px] text-accent font-bold", children: "LIVE PROGRESS" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "h-2 w-full dark:bg-white/5 bg-black/5 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: { width: 0 },
                      whileInView: { width: "65%" },
                      transition: { duration: 2, delay: 1 },
                      className: "h-full gradient-bg"
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-2 text-[10px] text-slate-500 font-bold uppercase", children: [
                    /* @__PURE__ */ jsx("span", { children: "Composting" }),
                    /* @__PURE__ */ jsx("span", { children: "Pasteurization" }),
                    /* @__PURE__ */ jsx("span", { children: "Cropping" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  animate: { y: [0, -10, 0] },
                  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  className: "absolute -top-6 -right-6 glass p-4 rounded-2xl border-white/20 flex items-center gap-3 shadow-xl",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "text-green-500", size: 16 }) }),
                    /* @__PURE__ */ jsxs("div", { className: "pr-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-[10px] dark:text-slate-400 text-slate-600 font-bold uppercase", children: "Global ROI Verified" }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs dark:text-white text-slate-900 font-bold", children: "120% Yearly Avg" })
                    ] })
                  ]
                }
              )
            ]
          }
        )
      ] })
    }
  );
};
const WhyChooseUs = () => {
  const chooseItems = [
    {
      title: "Cost Efficiency (15\u201325% Savings)",
      subtitle: "Direct manufacturing eliminates middlemen, ensuring 15\u201325% lower setup costs.",
      points: [
        "In-house PUF panel production",
        "Own rack fabrication unit",
        "Direct pricing advantage",
        "Strict quality control"
      ],
      icon: TrendingUp,
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Smart B2B Pricing",
      subtitle: "Wholesale pricing model for every mushroom farmer regardless of project size.",
      points: [
        "Wholesale pricing model",
        "Volume discounts",
        "Transparent breakdown",
        "No hidden costs"
      ],
      icon: Briefcase,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Nationwide & Global Execution",
      subtitle: "Delivery and execution across India & worldwide with expert setup teams.",
      points: [
        "Coverage across all states & UTs in India",
        "International project support",
        "Local installation teams",
        "End-to-end logistics"
      ],
      icon: MapPin,
      color: "from-blue-600/20 to-cyan-500/20"
    },
    {
      title: "Price Match Guarantee",
      subtitle: "Lowest cost guarantee without compromising on commercial project quality.",
      points: [
        "Guaranteed lowest pricing",
        "Market comparison support",
        "Extra discount on matching quotes",
        "No quality compromise"
      ],
      icon: ShieldCheck,
      color: "from-indigo-500/20 to-blue-500/20"
    },
    {
      title: "Certified Quality",
      subtitle: "Built on international recognized standards for commercial mushroom cultivation.",
      points: [
        "Premium materials only",
        "Multi-level quality checks",
        "Standardized processes",
        "Long-term durability"
      ],
      icon: Award,
      color: "from-amber-400/20 to-orange-500/20"
    },
    {
      title: "Reliable Partnership",
      subtitle: "We help you build highly profitable commercial mushroom businesses.",
      points: [
        "Lifetime technical support",
        "Expert B2B consultation",
        "Proven project success",
        "Farmer-first approach"
      ],
      icon: Users,
      color: "from-emerald-500/20 to-teal-500/20"
    }
  ];
  return /* @__PURE__ */ jsxs("section", { id: "why-us", className: "section-padding relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-0 w-96 h-96 bg-primary-start/10 blur-[120px] rounded-full pointer-events-none animate-pulse" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 md:mb-20", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "badge mx-auto mb-4",
            children: "Mushroom Infrastructure Leaders"
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.h2,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "mb-4",
            children: [
              "Why Choose",
              " ",
              /* @__PURE__ */ jsx("span", { className: "gradient-text", children: /* @__PURE__ */ jsx(Link, { to: "/states", children: "Organic Mushrooms Farm for Your Project?" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "max-w-2xl mx-auto",
            children: "India\u2019s most trusted commercial mushroom farming infrastructure partner delivering unmatched value, transparency, and high-yield performance globally."
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8", children: chooseItems.map((item, i) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          className: "group relative",
          children: /* @__PURE__ */ jsxs("div", { className: "glass h-full card-padding rounded-2xl border dark:border-white/5 border-black/5 flex flex-col shadow-2xl relative overflow-hidden", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `absolute -top-20 -right-20 w-40 h-40 bg-linear-to-br ${item.color} blur-[50px] pointer-events-none opacity-20`
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx(item.icon, { className: "text-primary-start", size: 24 }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-3", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "mb-6 flex-1 italic text-slate-500", children: item.subtitle }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: item.points.map((pt, j) => /* @__PURE__ */ jsxs(
              "li",
              {
                className: "flex items-center gap-2 text-[12px] md:text-xs font-semibold dark:text-slate-400 text-slate-600",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "w-1 h-1 rounded-full bg-primary-start" }),
                  pt
                ]
              },
              j
            )) })
          ] })
        },
        i
      )) })
    ] })
  ] });
};
const FarmingModels = () => {
  const [activeTab, setActiveTab] = useState("fixed");
  const [customArea, setCustomArea] = useState(1e3);
  const [customBudget, setCustomBudget] = useState(5e5);
  const getRecommendedSetup = () => {
    if (customArea >= 5e3 || customBudget >= 5e6) {
      return {
        title: "Industrial Turnkey Mushroom Unit",
        desc: "Fully automated climate control with Phase-II bunker integration for high commercial yield."
      };
    }
    if (customArea >= 1500 || customBudget >= 15e5) {
      return {
        title: "Automated Climate Control Room",
        desc: "Ideal for year-round commercial button mushroom production with PUF panels."
      };
    }
    return {
      title: "Small-Scale Mushroom Tray System",
      desc: "Cost-effective manual setup for seasonal farming and beginners."
    };
  };
  const models = [
    {
      name: "Starter Package",
      size: "18 x 30 ft",
      investment: "\u20B92-12 Lakh",
      yield: "800-1000 kg/cycle",
      features: ["Small Scale", "Manual Ops", "Local Markets"],
      label: "Beginner Choice",
      recommended: false
    },
    {
      name: "Standard Commercial Model",
      size: "18 x 70 ft",
      investment: "\u20B915-42 Lakh",
      yield: "3000-3500 kg/cycle",
      features: ["Automated Climate", "Export Ready", "High ROI"],
      label: "Most Popular",
      recommended: true
    },
    {
      name: "Industrial Factory Unit",
      size: "Compost + 4 Rooms",
      investment: "\u20B91.5Cr - 2.5Cr",
      yield: "15,000+ kg/cycle",
      features: ["Full Ecosystem", "Full Automation", "Global B2B Supply"],
      label: "Business Pro",
      recommended: false
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "farming-models", className: "section-padding relative", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:items-end justify-between mb-10 md:mb-16 gap-6 text-center lg:text-left items-center lg:items-end", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsx("div", { className: "badge mb-4 mx-auto lg:mx-0", children: "Investment Paths" }),
        /* @__PURE__ */ jsxs("h2", { className: "mb-4", children: [
          "Commercial Farming ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Models" }),
          ", Setup Cost & ROI"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600", children: "Scientifically designed mushroom grow rooms optimized for Indian and diverse global climate conditions." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass p-1 rounded-xl flex gap-1 w-fit", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setActiveTab("fixed"),
            className: `px-4 py-2 rounded-lg text-[12px] font-bold transition-all ${activeTab === "fixed" ? "dark:bg-white/10 bg-black/10 dark:text-white text-slate-900" : "text-slate-500 hover:dark:text-white text-slate-900"}`,
            children: "Fixed Models"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setActiveTab("custom"),
            className: `px-4 py-2 rounded-lg text-[12px] font-bold transition-all ${activeTab === "custom" ? "dark:bg-white/10 bg-black/10 dark:text-white text-slate-900" : "text-slate-500 hover:dark:text-white text-slate-900"}`,
            children: "Custom Build"
          }
        )
      ] })
    ] }),
    activeTab === "fixed" ? /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-3 gap-6 md:gap-8", children: models.map((m, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        className: `relative glass card-padding flex flex-col ${m.recommended ? "border-primary-mid/40 shadow-2xl lg:scale-105 z-10" : "dark:border-white/5 border-black/5"}`,
        children: [
          m.recommended && /* @__PURE__ */ jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full btn-primary text-[9px] font-black uppercase tracking-widest dark:text-white text-slate-900 shadow-xl", children: "Recommended Model" }),
          /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "text-primary-start text-[9px] font-black uppercase tracking-[0.2em] mb-2", children: m.label }),
            /* @__PURE__ */ jsx("h3", { className: "dark:text-white text-slate-900 tracking-tight", children: m.name }),
            /* @__PURE__ */ jsxs("div", { className: "mt-2 text-slate-500 text-[12px] font-medium", children: [
              m.size,
              " Space Required"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 mb-8 flex-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5", children: [
              /* @__PURE__ */ jsx("div", { className: "text-[9px] text-slate-500 font-bold uppercase mb-1", children: "Investment Setup Cost" }),
              /* @__PURE__ */ jsx("div", { className: "text-xl font-bold dark:text-white text-slate-900", children: m.investment })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5", children: [
              /* @__PURE__ */ jsx("div", { className: "text-[9px] text-slate-500 font-bold uppercase mb-1", children: "Expected Yield" }),
              /* @__PURE__ */ jsx("div", { className: "text-xl font-bold dark:text-white text-slate-900", children: m.yield })
            ] })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-8", children: m.features.map((f) => /* @__PURE__ */ jsxs(
            "li",
            {
              className: "flex items-center gap-2 dark:text-slate-400 text-slate-600 text-[12px] md:text-sm",
              children: [
                /* @__PURE__ */ jsx(CheckCircle2, { size: 14, className: "text-primary-start" }),
                " ",
                f
              ]
            },
            f
          )) }),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/model-details",
              className: `w-full min-h-[44px] py-3 rounded-xl font-bold transition-all text-sm flex justify-center items-center ${m.recommended ? "btn-primary" : "btn-outline"}`,
              children: "Get Details"
            }
          )
        ]
      },
      i
    )) }) : /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "glass p-8 md:p-12 rounded-[3rem] border dark:border-white/10 border-black/10",
        children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold dark:text-white text-slate-900 mb-6", children: "Interactive Custom Mushroom Setup Builder" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("label", { className: "flex justify-between text-sm font-bold dark:text-slate-300 text-slate-700 mb-4", children: [
                  /* @__PURE__ */ jsx("span", { children: "Available Area" }),
                  /* @__PURE__ */ jsxs("span", { className: "text-primary-start", children: [
                    customArea,
                    " sq. ft."
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "range",
                    min: "100",
                    max: "10000",
                    step: "100",
                    value: customArea,
                    onChange: (e) => setCustomArea(Number(e.target.value)),
                    className: "w-full form-range"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("label", { className: "flex justify-between text-sm font-bold dark:text-slate-300 text-slate-700 mb-4", children: [
                  /* @__PURE__ */ jsx("span", { children: "Available Budget" }),
                  /* @__PURE__ */ jsxs("span", { className: "text-primary-start", children: [
                    "\u20B9",
                    (customBudget / 1e5).toFixed(1),
                    " Lakhs"
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "range",
                    min: "50000",
                    max: "10000000",
                    step: "50000",
                    value: customBudget,
                    onChange: (e) => setCustomBudget(Number(e.target.value)),
                    className: "w-full form-range"
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-8 rounded-[2rem] dark:bg-white/5 bg-black/5 border border-primary-start/20 text-center flex flex-col items-center justify-center", children: [
            /* @__PURE__ */ jsx(ShieldCheck, { size: 48, className: "text-primary-start mb-6" }),
            /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase font-black text-slate-500 tracking-widest mb-2", children: "Recommended Commercial Setup" }),
            /* @__PURE__ */ jsx("h4", { className: "text-2xl font-bold dark:text-white text-slate-900 mb-4 leading-tight", children: getRecommendedSetup().title }),
            /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600 text-sm leading-relaxed mb-8 max-w-sm", children: getRecommendedSetup().desc }),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/model-details",
                className: "btn-primary px-8 py-3 rounded-xl text-sm font-bold",
                children: "View Detailed Specs"
              }
            )
          ] })
        ] })
      }
    )
  ] }) });
};
const ROICalculator = () => {
  const [bags, setBags] = useState(2e3);
  const [sellingPrice, setSellingPrice] = useState(120);
  const [operatingCost, setOperatingCost] = useState(40);
  const yieldPerBag = 1.5;
  const estimatedInvestment = bags * 1200;
  const monthlyProfit = useMemo(() => {
    return (sellingPrice - operatingCost) * (bags * yieldPerBag);
  }, [sellingPrice, operatingCost, bags]);
  const paybackPeriod = useMemo(() => {
    const yearlyProfit = monthlyProfit * 5;
    if (yearlyProfit <= 0) return 0;
    return estimatedInvestment / yearlyProfit * 12;
  }, [monthlyProfit, estimatedInvestment]);
  const webmcpSchema = {
    "@context": "https://webmcp.dev",
    "@type": "WebMCP",
    tool: {
      name: "home_roi_estimator",
      description: "Estimate your mushroom farming profit, investment returns, and payback period on the home page.",
      inputSchema: {
        type: "object",
        properties: {
          bags: {
            type: "number",
            minimum: 500,
            maximum: 1e4,
            description: "Number of spawn bags or cultivation beds"
          },
          sellingPrice: {
            type: "number",
            minimum: 80,
            maximum: 250,
            description: "Market selling price per kg in Indian Rupees (INR)"
          },
          operatingCost: {
            type: "number",
            minimum: 20,
            maximum: 80,
            description: "Labor and electricity operating expense per kg in Indian Rupees (INR)"
          }
        },
        required: ["bags", "sellingPrice", "operatingCost"]
      }
    }
  };
  return /* @__PURE__ */ jsxs("section", { id: "roi-calculator", className: "section-padding overflow-hidden", children: [
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(webmcpSchema) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: "glass card-padding border dark:border-white/10 border-black/10 relative",
        "data-webmcp-tool": "home_roi_estimator",
        "data-webmcp-description": "Estimate commercial mushroom farming profits based on spawn bags count, selling price, and operating expenses.",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] bg-primary-start/10 blur-[120px] rounded-full pointer-events-none" }),
          /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-10 md:gap-16 items-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-left", children: [
              /* @__PURE__ */ jsx("div", { className: "badge mb-4 mx-auto lg:mx-0", children: "Profit Analytics" }),
              /* @__PURE__ */ jsx("h2", { className: "mb-4", children: /* @__PURE__ */ jsxs(Link, { to: "/roi-calculator", className: "hover:text-current transition-colors", children: [
                "Personalized Mushroom Business",
                " ",
                /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "ROI Estimator" })
              ] }) }),
              /* @__PURE__ */ jsx("p", { className: "mb-8 max-w-lg mx-auto lg:mx-0", children: "Estimate your mushroom farming profits based on real-time market averages." }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-8 text-left", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end", children: [
                    /* @__PURE__ */ jsx(
                      "label",
                      {
                        id: "bags-label",
                        htmlFor: "bags-range-input",
                        className: "text-[9px] font-bold text-slate-500 uppercase tracking-widest",
                        children: "Number of Bags/Beds"
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: "text-xl font-bold dark:text-white text-slate-900", children: bags })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      id: "bags-range-input",
                      "aria-labelledby": "bags-label",
                      "aria-label": "Number of Bags or Beds",
                      "data-webmcp-property": "bags",
                      "data-webmcp-description": "Number of spawn bags or cultivation beds",
                      type: "range",
                      min: "500",
                      max: "10000",
                      step: "500",
                      value: bags,
                      onChange: (e) => setBags(Number(e.target.value)),
                      className: "w-full h-1.5 dark:bg-white/10 bg-black/10 rounded-lg appearance-none cursor-pointer accent-primary-start"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end", children: [
                    /* @__PURE__ */ jsx(
                      "label",
                      {
                        id: "price-label",
                        htmlFor: "price-range-input",
                        className: "text-[9px] font-bold text-slate-500 uppercase tracking-widest",
                        children: "Market Selling Price (\u20B9/kg)"
                      }
                    ),
                    /* @__PURE__ */ jsxs("span", { className: "text-xl font-bold dark:text-white text-slate-900", children: [
                      "\u20B9",
                      sellingPrice
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      id: "price-range-input",
                      "aria-labelledby": "price-label",
                      "aria-label": "Market Selling Price per Kilogram",
                      "data-webmcp-property": "sellingPrice",
                      "data-webmcp-description": "Market selling price per kg of mushrooms in Indian Rupees (INR)",
                      type: "range",
                      min: "80",
                      max: "250",
                      step: "5",
                      value: sellingPrice,
                      onChange: (e) => setSellingPrice(Number(e.target.value)),
                      className: "w-full h-1.5 dark:bg-white/10 bg-black/10 rounded-lg appearance-none cursor-pointer accent-primary-start"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end", children: [
                    /* @__PURE__ */ jsx(
                      "label",
                      {
                        id: "cost-label",
                        htmlFor: "cost-range-input",
                        className: "text-[9px] font-bold text-slate-500 uppercase tracking-widest",
                        children: "Labor/Electricity Cost (\u20B9/kg)"
                      }
                    ),
                    /* @__PURE__ */ jsxs("span", { className: "text-xl font-bold dark:text-white text-slate-900", children: [
                      "\u20B9",
                      operatingCost
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      id: "cost-range-input",
                      "aria-labelledby": "cost-label",
                      "aria-label": "Labor and Electricity Cost per Kilogram",
                      "data-webmcp-property": "operatingCost",
                      "data-webmcp-description": "Labor and electricity operating cost per kg in Indian Rupees (INR)",
                      type: "range",
                      min: "20",
                      max: "80",
                      step: "2",
                      value: operatingCost,
                      onChange: (e) => setOperatingCost(Number(e.target.value)),
                      className: "w-full h-1.5 dark:bg-white/10 bg-black/10 rounded-lg appearance-none cursor-pointer accent-brand-purple"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "glass p-8 rounded-3xl border dark:border-white/10 border-black/10 text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase font-black text-slate-500 tracking-widest mb-2", children: "Cycle Net Profit" }),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: monthlyProfit > 0 ? "text-4xl font-black text-green-400" : "text-4xl font-black text-red-400",
                    children: [
                      "\u20B9",
                      monthlyProfit.toLocaleString()
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "glass p-8 rounded-3xl border dark:border-white/10 border-black/10 text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase font-black text-slate-500 tracking-widest mb-2", children: "Estimated Payback Period" }),
                /* @__PURE__ */ jsx("div", { className: "text-4xl font-black text-primary-start", children: paybackPeriod > 0 ? `${paybackPeriod.toFixed(1)} Months` : "N/A" })
              ] })
            ] })
          ] })
        ]
      }
    ) })
  ] });
};
const Timeline = () => {
  const steps = [
    {
      title: "Consultation",
      days: "Day 1-7",
      desc: "Site survey, feasibility study, and project proposal.",
      icon: Info
    },
    {
      title: "Setup & Build",
      days: "Day 15-60",
      desc: "Turnkey construction of grow rooms and compost tunnels.",
      icon: Zap
    },
    {
      title: "Training",
      days: "Day 61-75",
      desc: "Hands-on training on mushroom substrate preparation.",
      icon: BookOpen
    },
    {
      title: "Production Begins",
      days: "Day 76+",
      desc: "Casing, pinning, and first commercial harvest.",
      icon: Sprout
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "section-padding", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 md:mb-20", children: [
      /* @__PURE__ */ jsx("div", { className: "badge mx-auto mb-4", children: "Commercial Process Flow" }),
      /* @__PURE__ */ jsxs("h2", { className: "mb-4 uppercase", children: [
        "Your ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Journey" }),
        " to First Commercial Harvest"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "max-w-xl mx-auto", children: "A data-driven approach to building a highly successful mushroom farm." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute top-[3.5rem] left-0 right-0 h-px dark:bg-white/5 bg-black/5 z-0" }),
      /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-4 gap-8 md:gap-12 relative z-10", children: steps.map((s, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.2 },
          className: "text-center group",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-brand-blue/30 transition-transform", children: /* @__PURE__ */ jsx(
              s.icon,
              {
                className: "dark:text-white text-slate-900",
                size: 24
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "text-primary-start text-[9px] font-black uppercase mb-1 tracking-widest", children: s.days }),
            /* @__PURE__ */ jsx("h3", { className: "dark:text-white text-slate-900 mb-3 tracking-tight tracking-tight", children: s.title }),
            /* @__PURE__ */ jsx("p", { className: "text-[13px] text-slate-500 leading-relaxed max-w-xs mx-auto", children: s.desc })
          ]
        },
        i
      )) })
    ] })
  ] }) });
};
const CTASection = () => {
  const [formState, setFormState] = useState({
    submitting: false,
    succeeded: false,
    error: ""
  });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    mushroomType: "Button Mushroom",
    projectSize: "Medium Scale",
    message: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ submitting: true, succeeded: false, error: "" });
    try {
      const response = await fetch(
        "https://formspree.io/f/xykldqdy",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email || "N/A",
            mushroomType: formData.mushroomType,
            projectSize: formData.projectSize,
            message: formData.message,
            _subject: `New Home Page Inquiry from ${formData.name} (${formData.mushroomType})`
          })
        }
      );
      if (response.ok) {
        setFormState({ submitting: false, succeeded: true, error: "" });
        setFormData({
          name: "",
          phone: "",
          email: "",
          mushroomType: "Button Mushroom",
          projectSize: "Medium Scale",
          message: ""
        });
      } else {
        const errorText = await response.text();
        console.error("[FormSubmit] Server error:", errorText);
        setFormState({
          submitting: false,
          succeeded: false,
          error: "Failed to send. Please try again or contact support."
        });
      }
    } catch (err) {
      console.error("[FormSubmit] Submit error:", err);
      setFormState({
        submitting: false,
        succeeded: false,
        error: err.message || "An unexpected error occurred."
      });
    }
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "section-padding relative overflow-hidden",
      id: "home-inquiry",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 gradient-bg opacity-5 -z-10 blur-[120px]" }),
        /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "glass p-6 md:p-12 lg:p-16 rounded-[3rem] border dark:border-white/10 border-black/10 relative overflow-hidden group", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-24 -left-24 w-60 h-60 bg-primary-start/10 blur-[80px] rounded-full group-hover:bg-primary-start/20 transition-all duration-700" }),
          /* @__PURE__ */ jsx("div", { className: "absolute -bottom-24 -right-24 w-60 h-60 bg-brand-purple/10 blur-[80px] rounded-full group-hover:bg-brand-purple/20 transition-all duration-700" }),
          /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-12 items-center relative z-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 space-y-6 text-left", children: [
              /* @__PURE__ */ jsx("div", { className: "badge", children: "Direct Inquiry" }),
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold dark:text-white text-slate-900 tracking-tight leading-tight", children: [
                "Start Your Commercial",
                " ",
                /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Mushroom Project" }),
                " Today"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600 text-base leading-relaxed", children: "Connect directly with India's most trusted commercial mushroom agriculture consultants. Submit your details to get a customized site feasibility evaluation & project setup design model layout matching your resource availability." }),
              /* @__PURE__ */ jsx("div", { className: "space-y-4 pt-2", children: [
                "Free pre-feasibility site evaluation guidance",
                "Direct commercial G1 spawn delivery options",
                "Subsidy assistance (NHB, NABARD & State-wise)",
                "Complete HVAC, compost unit & lab setups"
              ].map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded-full bg-primary-start/10 flex items-center justify-center mt-0.5 shrink-0", children: /* @__PURE__ */ jsx(CheckCircle2, { size: 14, className: "text-primary-start" }) }),
                /* @__PURE__ */ jsx("span", { className: "text-sm dark:text-slate-300 text-slate-700 font-medium", children: item })
              ] }, idx)) }),
              /* @__PURE__ */ jsxs("div", { className: "border-t border-slate-700/20 pt-6 flex flex-col sm:flex-row gap-4 items-center", children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20starting%20mushroom%20farming.%20Please%20guide%20me.",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "btn-primary w-full sm:w-auto px-6 py-3 rounded-xl flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-black",
                    children: "Chat on WhatsApp"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "tel:+919203544140",
                    className: "btn-outline w-full sm:w-auto px-6 py-3 rounded-xl text-center text-xs uppercase tracking-widest font-black flex items-center justify-center gap-2",
                    children: "Call +91 9203544140"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsx("div", { className: "glass p-6 md:p-8 rounded-[2rem] border dark:border-white/5 border-black/5 dark:bg-slate-900/40 bg-white/40 backdrop-blur-xl", children: formState.succeeded ? /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                className: "text-center py-12 px-4 space-y-6",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto scale-110 border border-green-500/20", children: /* @__PURE__ */ jsx(CheckCircle2, { size: 36 }) }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold dark:text-white text-slate-900", children: "Inquiry Received!" }),
                    /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600 max-w-md mx-auto text-sm leading-relaxed", children: "Thank you for your response. Our commercial farming expert specialists will review your project scale and contact you within 2 to 4 working hours." })
                  ] }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => setFormState({
                        submitting: false,
                        succeeded: false,
                        error: ""
                      }),
                      className: "px-6 py-2.5 rounded-lg text-xs bg-primary-start/10 hover:bg-primary-start/20 text-primary-start transition-colors font-bold uppercase tracking-wider",
                      children: "Send Another Query"
                    }
                  )
                ]
              }
            ) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-5 text-left", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold dark:text-white text-slate-900", children: "Send Instant Inquiry" }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs font-semibold", children: "Fill the details below to receive expert call-back and custom catalog." })
              ] }),
              formState.error && /* @__PURE__ */ jsx("div", { className: "p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-xs font-semibold", children: formState.error }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("label", { className: "text-[10px] font-bold dark:text-slate-400 text-slate-600 uppercase tracking-widest pl-1", children: "Full Name *" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      name: "name",
                      required: true,
                      value: formData.name,
                      onChange: handleChange,
                      placeholder: "Your Name",
                      className: "w-full px-4 py-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 focus:border-primary-start focus:outline-none focus:ring-1 focus:ring-primary-start text-sm transition-all text-slate-900 dark:text-white"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("label", { className: "text-[10px] font-bold dark:text-slate-400 text-slate-600 uppercase tracking-widest pl-1", children: "Phone Number *" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "tel",
                      name: "phone",
                      required: true,
                      value: formData.phone,
                      onChange: handleChange,
                      placeholder: "Ex. 9876543210",
                      className: "w-full px-4 py-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 focus:border-primary-start focus:outline-none focus:ring-1 focus:ring-primary-start text-sm transition-all text-slate-900 dark:text-white"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("label", { className: "text-[10px] font-bold dark:text-slate-400 text-slate-600 uppercase tracking-widest pl-1", children: "Mushroom Focus *" }),
                  /* @__PURE__ */ jsxs(
                    "select",
                    {
                      name: "mushroomType",
                      value: formData.mushroomType,
                      onChange: handleChange,
                      className: "w-full px-4 py-3 rounded-xl dark:bg-[#1a2035] bg-white border dark:border-white/10 border-black/10 focus:border-primary-start focus:outline-none focus:ring-1 focus:ring-primary-start text-sm transition-all text-slate-900 dark:text-white cursor-pointer",
                      children: [
                        /* @__PURE__ */ jsx("option", { value: "Button Mushroom", children: "Button Mushroom (High Commercial)" }),
                        /* @__PURE__ */ jsx("option", { value: "Oyster Mushroom", children: "Oyster Mushroom (Easy/Medicinal)" }),
                        /* @__PURE__ */ jsx("option", { value: "Milky Mushroom", children: "Milky Mushroom (Fits Hot Climate)" }),
                        /* @__PURE__ */ jsx("option", { value: "Shiitake / Exotic", children: "Shiitake & Exotic Varieties" }),
                        /* @__PURE__ */ jsx("option", { value: "Others / Multiple", children: "Multiple Species Setup" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("label", { className: "text-[10px] font-bold dark:text-slate-400 text-slate-600 uppercase tracking-widest pl-1", children: "Planned Scale *" }),
                  /* @__PURE__ */ jsxs(
                    "select",
                    {
                      name: "projectSize",
                      value: formData.projectSize,
                      onChange: handleChange,
                      className: "w-full px-4 py-3 rounded-xl dark:bg-[#1a2035] bg-white border dark:border-white/10 border-black/10 focus:border-primary-start focus:outline-none focus:ring-1 focus:ring-primary-start text-sm transition-all text-slate-900 dark:text-white cursor-pointer",
                      children: [
                        /* @__PURE__ */ jsx("option", { value: "Small / Hobby", children: "Hobby / Small Scale (10-50 Bags)" }),
                        /* @__PURE__ */ jsx("option", { value: "Medium Scale", children: "Medium Scale / Farm Unit" }),
                        /* @__PURE__ */ jsx("option", { value: "Commercial Farm", children: "Commercial Scale (Air conditioned)" }),
                        /* @__PURE__ */ jsx("option", { value: "Industrial Turnkey", children: "Industrial Turnkey / Plant Project" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("label", { className: "text-[10px] font-bold dark:text-slate-400 text-slate-600 uppercase tracking-widest pl-1", children: "Email Address (Optional)" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "email",
                    name: "email",
                    value: formData.email,
                    onChange: handleChange,
                    placeholder: "Ex. name@example.com",
                    className: "w-full px-4 py-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 focus:border-primary-start focus:outline-none focus:ring-1 focus:ring-primary-start text-sm transition-all text-slate-900 dark:text-white"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("label", { className: "text-[10px] font-bold dark:text-slate-400 text-slate-600 uppercase tracking-widest pl-1", children: "Message / Requirements *" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    name: "message",
                    required: true,
                    value: formData.message,
                    onChange: handleChange,
                    rows: 3,
                    placeholder: "Please brief us about your land area, location, or dynamic questions...",
                    className: "w-full px-4 py-3 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 focus:border-primary-start focus:outline-none focus:ring-1 focus:ring-primary-start text-sm transition-all text-slate-900 dark:text-white resize-none"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  disabled: formState.submitting,
                  className: "btn-primary w-full py-4 rounded-xl shadow-2xl shadow-brand-blue/30 text-[11px] uppercase tracking-widest font-black flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50",
                  children: formState.submitting ? "Sending Inquiry..." : "Submit Inquiry Now"
                }
              )
            ] }) }) })
          ] })
        ] }) })
      ]
    }
  );
};
const TrainingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "pt-20", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Master Mushroom Farming in India | Online Cultivation Training",
        description: "Learn to grow Oyster, Button, and Milky mushrooms commercially or at home. Choose our Basic (\u20B9299) or Advanced (\u20B9699) online training. Start your farm today!",
        keywords: "Mushroom farming training India, learn oyster mushroom cultivation, button mushroom course, milky mushroom training, start mushroom farm online.",
        url: "/training"
      }
    ),
    /* @__PURE__ */ jsx(MushroomTraining, {}),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-black/40", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold dark:text-white text-slate-900 mb-8", children: "Ready to Start Your Commercial Mushroom Farming Journey?" }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/book-consultant",
          className: "btn-primary px-10 py-4 rounded-xl text-lg inline-flex items-center gap-3",
          children: [
            "Book Consultant ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 20 })
          ]
        }
      )
    ] }) })
  ] });
};
const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [state, setState] = useState({
    submitting: false,
    succeeded: false,
    errors: []
  });
  const navigate = useNavigate();
  const handleClose = () => {
    setState({ submitting: false, succeeded: false, errors: [] });
    navigate("/");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, submitting: true }));
    const form = e.currentTarget;
    const formData = new FormData(form);
    if (!formData.has("_subject")) {
      formData.append(
        "_subject",
        "Commercial Mushroom Setup Enquiry from " + formData.get("name")
      );
    }
    try {
      const response = await fetch(
        "https://formspree.io/f/xykldqdy",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        }
      );
      if (response.ok) {
        setState({ submitting: false, succeeded: true, errors: [] });
        form.reset();
      } else {
        const errorText = await response.text();
        console.error("[FormSubmit] Server error:", errorText);
        setState({
          submitting: false,
          succeeded: false,
          errors: [{ message: errorText }]
        });
        form.submit();
      }
    } catch (err) {
      console.error("[FormSubmit] Email submit failed:", err);
      setState({
        submitting: false,
        succeeded: false,
        errors: [{ message: err.message || String(err) }]
      });
      form.submit();
    }
  };
  const webmcpSchema = {
    "@context": "https://webmcp.dev",
    "@type": "WebMCP",
    tool: {
      name: "mushroom_farming_enquiry_form",
      description: "Submit a commercial mushroom farming business or factory setup enquiry. Available for states like Madhya Pradesh, Maharashtra, UP, Bihar, etc.",
      inputSchema: {
        type: "object",
        properties: {
          name: { type: "string", description: "Full name of the inquirer" },
          email: {
            type: "string",
            format: "email",
            description: "Email address for communications"
          },
          message: {
            type: "string",
            description: "Detailed requirements, farm capacity, or location questions for custom setup"
          }
        },
        required: ["name", "email", "message"]
      }
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-black overflow-x-hidden pt-24 md:pt-32 pb-12", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Contact Us for Mushroom Setup & Consultancy | Pan India",
        description: "Get a consultation for your custom mushroom farm setup. Expert advice on mushroom training, spawn supply, and turnkey projects across India.",
        schemas: [webmcpSchema]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "w-full max-w-7xl mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-10 md:mb-16", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          children: [
            /* @__PURE__ */ jsx("div", { className: "inline-block px-4 py-1.5 rounded-full bg-primary-start/10 border border-primary-start/20 text-[10px] font-black text-primary-start uppercase tracking-widest mb-4", children: "Contact Us" }),
            /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-6xl font-bold dark:text-white text-slate-900 mb-4 tracking-tight leading-tight", children: [
              "Start Your Commercial",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-primary-start", children: "Mushroom Farming" }),
              " ",
              "Business Worldwide"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600 text-sm md:text-lg max-w-2xl mx-auto font-medium px-2", children: "Ready to build a commercial factory or a small unit? Our specialists are here to guide you through every step of button and oyster mushroom production." })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 order-2 lg:order-1", children: [
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4", children: [
            {
              icon: Phone,
              label: "Call Operations",
              values: ["+91 9203544140", "+91 7440806690"],
              href: "tel:+919203544140"
            },
            {
              icon: MessageCircle,
              label: "WhatsApp Support",
              values: ["Chat with Expert"],
              isWhatsApp: true,
              href: "https://wa.me/919203544140"
            },
            {
              icon: Mail,
              label: "Email Support",
              values: ["support@organicmushroomsfarm.com"],
              href: "mailto:support@organicmushroomsfarm.com"
            }
          ].map((item, i) => /* @__PURE__ */ jsxs(
            "a",
            {
              href: item.href,
              target: item.isWhatsApp ? "_blank" : void 0,
              rel: item.isWhatsApp ? "noopener noreferrer" : void 0,
              className: `flex items-center gap-4 p-5 bg-white/[0.03] border dark:border-white/10 border-black/10 rounded-2xl group transition-all hover:bg-white/[0.06] ${item.isWhatsApp ? "ring-1 ring-green-500/30" : ""}`,
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.isWhatsApp ? "bg-green-500/20 text-green-400" : "bg-primary-start/20 text-primary-start"}`,
                    children: /* @__PURE__ */ jsx(
                      item.icon,
                      {
                        size: 22,
                        className: item.isWhatsApp ? "animate-pulse" : ""
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1", children: item.label }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm md:text-base font-bold dark:text-white text-slate-900 tracking-tight", children: item.values[0] })
                ] })
              ]
            },
            i
          )) }),
          /* @__PURE__ */ jsx("div", { className: "rounded-2xl border dark:border-white/10 border-black/10 overflow-hidden h-44 md:h-64 dark:bg-white/5 bg-black/5 relative", children: /* @__PURE__ */ jsx(
            "iframe",
            {
              src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6593645366115!2d79.86616429726563!3d23.186307199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ae1a0dbcbb97%3A0x15f3810ec56063b4!2sJabalpur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1713881900000!5m2!1sen!2sin",
              width: "100%",
              height: "100%",
              style: { border: 0 },
              allowFullScreen: true,
              loading: "lazy"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "p-5 bg-white/[0.03] border dark:border-white/10 border-black/10 rounded-2xl flex items-start gap-4", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "text-primary-start shrink-0", size: 20 }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5", children: "Office Address" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm font-bold dark:text-white text-slate-900 tracking-tight leading-snug", children: "Katangi Road, Jabalpur, Madhya Pradesh \u2013 483105, India" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "order-1 lg:order-2", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            className: "bg-white/[0.02] border dark:border-white/10 border-black/10 p-6 md:p-10 rounded-3xl",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-8 text-center md:text-left", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-bold dark:text-white text-slate-900 mb-2", children: "Mushroom Farming Setup Enquiry Form" }),
                /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600 text-sm font-medium", children: "Please fill in your details for a callback regarding commercial mushroom setups." })
              ] }),
              /* @__PURE__ */ jsxs(
                "form",
                {
                  action: "https://formspree.io/f/xykldqdy",
                  method: "POST",
                  onSubmit: handleSubmit,
                  className: "space-y-5",
                  "data-webmcp-tool": "mushroom_farming_enquiry_form",
                  "data-webmcp-description": "Submit a commercial mushroom farming business or factory setup enquiry. Available for states like Madhya Pradesh, Maharashtra, UP, Bihar, etc.",
                  "data-mcp-tool": "mushroom_farming_enquiry_form",
                  "data-mcp-description": "Submit a commercial mushroom farming business or factory setup enquiry. Available for states like Madhya Pradesh, Maharashtra, UP, Bihar, etc.",
                  children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "hidden",
                        name: "_date",
                        value: (/* @__PURE__ */ new Date()).toLocaleDateString()
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsx(
                        "label",
                        {
                          htmlFor: "name",
                          className: "text-[10px] font-black dark:text-slate-400 text-slate-600 uppercase tracking-widest ml-1",
                          children: "Full Name *"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          id: "name",
                          name: "name",
                          required: true,
                          type: "text",
                          placeholder: "Your Name",
                          className: "w-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-xl px-4 py-4 dark:text-white text-slate-900 focus:outline-none focus:border-primary-start transition-all text-sm font-medium placeholder:text-slate-700 h-12 md:h-14",
                          "data-webmcp-property": "name",
                          "data-webmcp-description": "Full name of the inquirer",
                          "data-mcp-property": "name",
                          "data-mcp-description": "Full name of the inquirer"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        ValidationError,
                        {
                          prefix: "Name",
                          field: "name",
                          errors: state.errors,
                          className: "text-red-500 text-[10px] mt-1 ml-1"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsx(
                        "label",
                        {
                          htmlFor: "email",
                          className: "text-[10px] font-black dark:text-slate-400 text-slate-600 uppercase tracking-widest ml-1",
                          children: "Email Address *"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          id: "email",
                          name: "email",
                          required: true,
                          type: "email",
                          placeholder: "yourname@example.com",
                          className: "w-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-xl px-4 py-4 dark:text-white text-slate-900 focus:outline-none focus:border-primary-start transition-all text-sm font-medium placeholder:text-slate-700 h-12 md:h-14",
                          "data-webmcp-property": "email",
                          "data-webmcp-description": "Email address for communications",
                          "data-mcp-property": "email",
                          "data-mcp-description": "Email address for communications"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        ValidationError,
                        {
                          prefix: "Email",
                          field: "email",
                          errors: state.errors,
                          className: "text-red-500 text-[10px] mt-1 ml-1"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                      /* @__PURE__ */ jsx(
                        "label",
                        {
                          htmlFor: "message",
                          className: "text-[10px] font-black dark:text-slate-400 text-slate-600 uppercase tracking-widest ml-1",
                          children: "Your Requirements / Message *"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "textarea",
                        {
                          id: "message",
                          name: "message",
                          required: true,
                          rows: 4,
                          placeholder: "Briefly describe your mushroom farm requirements...",
                          className: "w-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-xl px-4 py-4 dark:text-white text-slate-900 focus:outline-none focus:border-primary-start transition-all resize-none text-sm font-medium placeholder:text-slate-700 min-h-[100px]",
                          "data-webmcp-property": "message",
                          "data-webmcp-description": "Detailed requirements, farm capacity, or location questions for custom setup",
                          "data-mcp-property": "message",
                          "data-mcp-description": "Detailed requirements, farm capacity, or location questions for custom setup"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        ValidationError,
                        {
                          prefix: "Message",
                          field: "message",
                          errors: state.errors,
                          className: "text-red-500 text-[10px] mt-1 ml-1"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        type: "submit",
                        disabled: state.submitting,
                        className: `w-full py-5 rounded-xl bg-primary-start dark:text-white text-slate-900 text-[12px] uppercase tracking-widest font-black transition-all hover:brightness-110 active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/20 ${state.submitting ? "opacity-70 cursor-not-allowed" : ""}`,
                        children: state.submitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
                          /* @__PURE__ */ jsx("div", { className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" }),
                          "Sending..."
                        ] }) : /* @__PURE__ */ jsx(Fragment, { children: "Send Enquiry" })
                      }
                    )
                  ]
                }
              )
            ]
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(CompanyProfile, {}),
    /* @__PURE__ */ jsx(AnimatePresence, { children: state.succeeded && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[200] flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className: "absolute inset-0 bg-black/95 backdrop-blur-sm",
          onClick: handleClose
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9, y: 10 },
          animate: { opacity: 1, scale: 1, y: 0 },
          exit: { opacity: 0, scale: 0.9, y: 10 },
          className: "relative glass p-8 md:p-12 rounded-3xl border dark:border-white/10 border-black/10 max-w-md w-full text-center shadow-2xl",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-6 border border-green-500/30", children: /* @__PURE__ */ jsx(CheckCircle2, { size: 32 }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold dark:text-white text-slate-900 mb-4", children: "Enquiry Received" }),
            /* @__PURE__ */ jsxs("p", { className: "dark:text-slate-400 text-slate-600 text-sm mb-8 leading-relaxed font-medium", children: [
              "Thank you! Your commercial setup enquiry has been received. Our expert will call you within",
              " ",
              /* @__PURE__ */ jsx("span", { className: "dark:text-white text-slate-900 font-bold underline decoration-primary-start underline-offset-4", children: "24 hours" }),
              "."
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleClose,
                className: "w-full py-4 rounded-xl btn-primary font-bold text-xs uppercase tracking-widest transition-all shadow-xl",
                children: "Close"
              }
            )
          ]
        }
      )
    ] }) })
  ] });
};
const StatesSection = () => {
  const allStates = [
    "Madhya Pradesh",
    "Maharashtra",
    "Uttar Pradesh",
    "Bihar",
    "Delhi",
    "Rajasthan",
    "Gujarat",
    "Punjab",
    "Haryana",
    "Chhattisgarh",
    "Jharkhand",
    "West Bengal",
    "Uttarakhand",
    "Karnataka",
    "Tamil Nadu",
    "Telangana",
    "Andhra Pradesh",
    "Kerala",
    "Himachal Pradesh"
  ];
  return /* @__PURE__ */ jsx("section", { className: "section-padding relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "badge mx-auto mb-4", children: "Global & National Service Area" }),
    /* @__PURE__ */ jsxs("h2", { className: "mb-4 uppercase tracking-tight", children: [
      "Active Commercial Project",
      " ",
      /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Hubs Across India, USA, Australia & Global Regions" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "max-w-3xl mx-auto mb-10 font-medium leading-relaxed dark:text-slate-400 text-slate-600", children: "We provide commercial mushroom farming training and turnkey setup services across all states of India and key international markets, ensuring precision and high yield for every climate zone globally." }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-2 mb-12", children: allStates.map((state) => /* @__PURE__ */ jsx(
      "a",
      {
        href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(state + " India")}`,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "px-4 py-2 glass border dark:border-white/5 border-black/5 rounded-full text-[10px] font-bold text-slate-500 hover:dark:text-white text-slate-900 hover:border-primary-start hover:bg-primary-start/20 transition-all",
        children: state
      },
      state
    )) }),
    /* @__PURE__ */ jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/pan-india-global-operations",
        className: "inline-flex items-center gap-2 px-8 py-3.5 rounded-full gradient-bg font-extrabold text-sm text-white shadow-lg shadow-primary-start/20 hover:scale-105 transition-all",
        children: [
          /* @__PURE__ */ jsx(Globe, { size: 16, className: "animate-spin-slow" }),
          /* @__PURE__ */ jsx("span", { children: "Pan India & Global Operations" }),
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "sr-only absolute w-1 h-1 p-0 -m-1 overflow-hidden clip-rect-0 border-0 pointer-events-none opacity-0",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ jsxs("p", { children: [
            "Our expert teams provide ",
            /* @__PURE__ */ jsx("strong", { children: "mushroom training in India" }),
            " ",
            "and ",
            /* @__PURE__ */ jsx("strong", { children: "mushroom farm setup India" }),
            " services in Madhya Pradesh, Maharashtra, Uttar Pradesh, Bihar, Delhi, Rajasthan, Gujarat, Punjab, Haryana, Chhattisgarh, Jharkhand, and other major regions. We are committed to building the most successful",
            " ",
            /* @__PURE__ */ jsx("strong", { children: "button mushroom farming business" }),
            " network globally."
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Serving Pan India Cities, Towns & Villages for Commercial Mushroom Setups:" }),
            " ",
            "Mumbai, Delhi, Bangalore, Hyderabad, Ahmedabad, Chennai, Kolkata, Surat, Pune, Jaipur, Lucknow, Kanpur, Nagpur, Indore, Thane, Bhopal, Visakhapatnam, Pimpri-Chinchwad, Patna, Vadodara, Ghaziabad, Ludhiana, Agra, Nashik, Faridabad, Meerut, Rajkot, Kalyan-Dombivli, Vasai-Virar, Varanasi, Srinagar, Aurangabad, Dhanbad, Amritsar, Navi Mumbai, Allahabad, Howrah, Ranchi, Gwalior, Jabalpur, Coimbatore, Vijayawada, Jodhpur, Madurai, Raipur, Kota, Guwahati, Chandigarh, Solapur, Hubli-Dharwad, Bareilly, Moradabad, Mysore, Gurgaon, Aligarh, Jalandhar, Tiruchirappalli, Bhubaneswar, Salem, Mira-Bhayandar, Warangal, Thiruvananthapuram, Bhiwandi, Saharanpur, Guntur, Amravati, Bikaner, Noida, Jamshedpur, Bhilai, Cuttack, Firozabad, Kochi, Nellore, Bhavnagar, Dehradun, Durgapur, Asansol, Rourkela, Nanded, Kolhapur, Ajmer, Akola, Gulbarga, Jamnagar, Ujjain, Loni, Siliguri, Jhansi, Ulhasnagar, Jammu, Sangli-Miraj-Kupwad, Mangalore, Erode, Belgaum, Kurnool, Ambattur, Rajahmundry, Tirunelveli, Malegaon, Gaya, Udaipur, Kakinada, Davanagere, Kozhikode, Maheshtala, Rajpur Sonarpur, Bokaro, South Dumdum, Bellary, Patiala, Gopalpur, Agartala, Bhagalpur, Muzaffarnagar, Bhatpara, Panihati, Latur, Dhule, Rohtak, Korba, Bhilwara, Brahmapur, Muzaffarpur, Ahmednagar, Mathura, Kollam, Avadi, Kadapa, Rajahmundry, Bilaspur, Shahjahanpur, Satara, Bijapur, Rampur, Shivamogga, Chandrapur, Junagadh, Thrissur, Alwar, Bardhaman, Kulti, Nizamabad, Parbhani, Tumkur, Khammam, Uzhavarkarai, Bihar Sharif, Panipat, Darbhanga, Bally, Aizawl, Dewas, Ichalkaranji, Karnal, Bathinda, Jalna, Eluru, Barasat, Kirari Suleman Nagar, Purnia, Satna, Mau, Sonipat, Farrukhabad, Sagar, Rourkela, Durg, Imphal, Ratlam, Hapur, Arrah, Anantapur, Karimnagar, Etawah, Ambernath, North Dumdum, Bharatpur, Begusarai, New Delhi, Gandhidham, Baranagar, Tiruvottiyur, Pondicherry, Sikar, Thoothukudi, Rewa, Mirzapur, Raichur, Pali, Ramagundam, Silchar, Haridwar, Vijayanagaram, Tenali, Nagercoil, Sri Ganganagar, Karawal Nagar, Mango, Thanjavur, Bulandshahr, Uluberia, Katni, Sambhal, Singrauli, Nadiad, Secunderabad, Naihati, Yamunanagar, Bidhannagar, Pallavaram, Bidar, Munger, Panchkula, Burhanpur, Raurkela Industrial Township, Kharagpur, Dindigul, Gandhinagar, Hospet, Nangloi Jat, Malda, Ongole, Deoghar, Chapra, Haldia, Khandwa, Nandyal, Morena, Amroha, Anand, Bhind, Bhusawal, Orai, Bahraich, Vellore, Mehsana, Raiganj, Sirsa, Danapur, Serampore, Sultan Pur Majra, Guna, Jaunpur, Panvel, Shivpuri, Surendranagar Dudhrej, Unnao, Chinsurah, Alappuzha, Kottayam, Machilipatnam, Shimla, Adoni, Udupi, Katihar, Proddatur, Mahbubnagar, Saharsa, Dibrugarh, Jorhat, Hazaribagh, Hindupur, Nagaon, Sasaram, Hajipur, including all tier-2, tier-3 cities, localized rural towns and villages across Madhya Pradesh, Uttar Pradesh, Maharashtra, Bihar, Rajasthan, Gujarat, Punjab, Haryana, and South India."
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Global Reach & International Mushroom Farming Consultancy:" }),
            " ",
            "USA (United States of America), Australia, UK (United Kingdom), Canada, UAE (Dubai, Abu Dhabi), Saudi Arabia, South Africa, Kenya, Nigeria, Europe, Germany, France, Italy, Spain, Netherlands, New Zealand, Singapore, Malaysia, Philippines, Vietnam, Japan, South Korea, and emerging agricultural hubs worldwide. Supplying organic spawn, industrial setup consultancy, and B2B market linkage globally."
          ] })
        ]
      }
    )
  ] }) });
};
const Footer = () => {
  const location = useLocation();
  if (location.pathname === "/workshop") return null;
  return /* @__PURE__ */ jsx("footer", { className: "pt-20 pb-24 md:pb-12 bg-black/50 border-t dark:border-white/5 border-black/5", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-16 p-8 rounded-2xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-6 items-start md:items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-16 h-16 rounded-full bg-primary-start/20 flex items-center justify-center text-primary-start", children: /* @__PURE__ */ jsx(ShieldCheck, { size: 32 }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold dark:text-white text-slate-900 mb-2", children: "Certified E-E-A-T Excellence" }),
        /* @__PURE__ */ jsxs("p", { className: "text-slate-500 text-sm leading-relaxed max-w-4xl", children: [
          /* @__PURE__ */ jsx("strong", { className: "dark:text-slate-300 text-slate-700", children: "Experience & Expertise:" }),
          " ",
          "With years of hands-on cultivation of over 10 mushroom varieties (Button, Oyster, Milky, Cordyceps) and world-class commercial infrastructure setups pan-India.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("strong", { className: "dark:text-slate-300 text-slate-700", children: "Authoritativeness & Trust:" }),
          " ",
          "Certified by leading agricultural bodies, led by agri-tech expert Tanish Soni, and highly rated by thousands of trained farmers globally. Verified operations in Jabalpur, MP."
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-5 gap-10 mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-1 md:col-span-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1782269097/IMG_1329_optimized_30_c6qtnw.png",
              alt: "Organic Mushrooms Farm",
              className: "w-14 h-14 object-contain"
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "text-lg font-bold tracking-tight dark:text-white text-slate-900", children: [
            "Organic ",
            /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Mushroom Farm" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 max-w-sm text-[13px] leading-relaxed mb-6 font-medium", children: "Empowering high-yield organic button & oyster mushroom cultivation across India and the globe through standardized SOPs, expert commercial training, and industrial-grade turnkey projects." }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-2 text-[8px] font-black text-slate-600 uppercase tracking-[0.3em]", children: LOCATIONS.map((loc, i) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
          loc,
          " ",
          i !== LOCATIONS.length - 1 && /* @__PURE__ */ jsx("div", { className: "w-1 h-1 rounded-full dark:bg-white/10 bg-black/10" })
        ] }, loc)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 mt-8", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://www.youtube.com/@organicmushroomfarm",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center gap-2 px-4 py-2 dark:bg-white/5 bg-black/5 hover:bg-red-500/10 border dark:border-white/5 border-black/5 hover:border-red-500/30 rounded-lg text-sm dark:text-slate-300 text-slate-700 hover:dark:text-white text-slate-900 transition-all group",
              children: [
                /* @__PURE__ */ jsx(
                  Youtube,
                  {
                    size: 16,
                    className: "text-red-500 group-hover:scale-110 transition-transform"
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: "YouTube" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://maps.app.goo.gl/z7oQHSoLbCL9H4ov8?g_st=ic",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center gap-2 px-4 py-2 dark:bg-white/5 bg-black/5 hover:bg-blue-500/10 border dark:border-white/5 border-black/5 hover:border-blue-500/30 rounded-lg text-sm dark:text-slate-300 text-slate-700 hover:dark:text-white text-slate-900 transition-all group",
              children: [
                /* @__PURE__ */ jsx(
                  MapPin,
                  {
                    size: 16,
                    className: "text-blue-500 group-hover:scale-110 transition-transform"
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Google Profile" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://www.pinterest.com/organicmushroomfarm",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center gap-2 px-4 py-2 dark:bg-white/5 bg-black/5 hover:bg-pink-500/10 border dark:border-white/5 border-black/5 hover:border-pink-500/30 rounded-lg text-sm dark:text-slate-300 text-slate-700 hover:dark:text-white text-slate-900 transition-all group",
              children: [
                /* @__PURE__ */ jsx(
                  ShieldCheck,
                  {
                    size: 16,
                    className: "text-pink-500 group-hover:scale-110 transition-transform"
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Pinterest" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "dark:text-white text-slate-900 font-bold mb-6 uppercase tracking-widest text-[9px] border-l-2 border-primary-start pl-3", children: "Explore" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
          { name: "About Us", href: "/about" },
          { name: "Services", href: "/services" },
          { name: "Training", href: "/training" },
          { name: "Franchise", href: "/mushroom-franchise" },
          { name: "Mushroom Types", href: "/mushroom-types" },
          { name: "Careers", href: "/careers" },
          { name: "Mushroom Prices", href: "/mushroom-price-today" }
        ].map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            to: item.href,
            className: "text-slate-500 hover:dark:text-white text-slate-900 transition-colors text-sm font-medium",
            children: item.name
          }
        ) }, item.name)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "dark:text-white text-slate-900 font-bold mb-6 uppercase tracking-widest text-[9px] border-l-2 border-primary-start pl-3", children: "Resources" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
          { name: "Gallery", href: "/gallery" },
          { name: "Business Plan", href: "/business-plan" },
          { name: "Government Subsidy", href: "/subsidy" },
          { name: "Spawn Supply", href: "/spawn-seed" },
          { name: "Blog", href: "/blog" },
          { name: "FAQ", href: "/faq" },
          { name: "Cities Pages", href: "/states" }
        ].map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            to: item.href,
            className: "text-slate-500 hover:dark:text-white text-slate-900 transition-colors text-sm font-medium",
            children: item.name
          }
        ) }, item.name)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "dark:text-white text-slate-900 font-bold mb-6 uppercase tracking-widest text-[9px] border-l-2 border-primary-start pl-3", children: "Support & Legal" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
          { name: "Contact", href: "/contact" },
          { name: "Customer Support", href: "/support" },
          { name: "Terms of Service", href: "/terms" },
          { name: "Privacy Policy", href: "/privacy" },
          { name: "Refund Policy", href: "/refund-policy" },
          { name: "Shipping Policy", href: "/shipping-policy" }
        ].map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            to: item.href,
            className: "text-slate-500 hover:dark:text-white text-slate-900 transition-colors text-sm font-medium",
            children: item.name
          }
        ) }, item.name)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between border-t dark:border-white/5 border-black/5 pt-10 text-[10px] font-bold uppercase tracking-widest text-slate-600", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-6 md:mb-0", children: "\xA9 2026 Organic Mushrooms Farm. All Rights Reserved." }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-6 flex-wrap justify-center", children: [
        {
          label: "Instagram",
          href: "https://www.instagram.com/organic_mushroom_farm_jabalpur"
        },
        {
          label: "Facebook",
          href: "https://www.facebook.com/organic.mushroom.farm0"
        },
        {
          label: "YouTube",
          href: "https://www.youtube.com/@organicmushroomfarm"
        },
        {
          label: "Pinterest",
          href: "https://www.pinterest.com/organicmushroomfarm"
        }
      ].map((social) => /* @__PURE__ */ jsxs(
        "a",
        {
          href: social.href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "hover:text-primary-start transition-colors flex items-center gap-2 group",
          children: [
            social.label,
            /* @__PURE__ */ jsx(
              ArrowRight,
              {
                size: 10,
                className: "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-bold"
              }
            )
          ]
        },
        social.label
      )) })
    ] })
  ] }) });
};
const StickyRazorpayButton = ({
  size = "normal"
}) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setShowModal(true),
        type: "button",
        className: `relative overflow-hidden flex items-center justify-center rounded-full group transition-all backdrop-blur-md shadow-[0_8px_32px_rgba(167,139,250,0.15)] hover:shadow-[0_8px_32px_rgba(167,139,250,0.3)] border border-purple-400/40 dark:border-purple-300/30 bg-linear-to-r from-purple-500/10 via-fuchsia-400/10 to-indigo-500/10 dark:from-purple-900/30 dark:via-fuchsia-900/20 dark:to-indigo-900/30 hover:from-purple-500/20 hover:via-fuchsia-400/20 hover:to-indigo-500/20 dark:hover:from-purple-900/40 dark:hover:via-fuchsia-900/30 dark:hover:to-indigo-900/40 text-purple-950 dark:text-purple-100 ${size === "small" ? "h-full w-full p-1.5" : "h-9 w-full md:w-auto md:min-w-[140px] md:px-4"}`,
        children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: `font-bold z-10 flex items-center justify-center gap-1 whitespace-nowrap ${size === "small" ? "text-[11px] absolute inset-0 w-full" : "text-[11px] md:text-[12px]"}`,
              children: [
                /* @__PURE__ */ jsx(BookOpen, { size: size === "small" ? 12 : 14, className: "shrink-0 text-purple-700 dark:text-purple-300" }),
                /* @__PURE__ */ jsx("span", { children: "Join Training" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: showModal && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[999999] flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          onClick: () => setShowModal(false),
          className: "absolute inset-0 bg-black/80 backdrop-blur-md"
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { scale: 0.95, opacity: 0, y: 15 },
          animate: { scale: 1, opacity: 1, y: 0 },
          exit: { scale: 0.95, opacity: 0, y: 15 },
          className: "relative w-full max-w-4xl dark:bg-slate-950 bg-white border border-purple-500/20 rounded-[2rem] p-6 md:p-8 shadow-2xl max-h-[90vh] overflow-y-auto z-10",
          children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setShowModal(false),
                className: "absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 transition-colors dark:text-slate-400 text-slate-500 z-50",
                children: /* @__PURE__ */ jsx(X, { size: 18 })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "text-center mb-8 pr-6 pl-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-1 px-3 py-1 rounded-full dark:bg-purple-500/10 bg-purple-500/5 text-purple-600 dark:text-purple-400 border border-purple-500/10 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3", children: [
                /* @__PURE__ */ jsx(Sparkles, { size: 12 }),
                " Live Your Farming Dream"
              ] }),
              /* @__PURE__ */ jsxs("h3", { className: "text-xl md:text-3xl font-black dark:text-white text-slate-900 tracking-tight uppercase", children: [
                "Select ",
                /* @__PURE__ */ jsx("span", { className: "gradient-text font-black", children: "Your Training Plan" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-500 text-xs md:text-sm font-medium mt-1", children: "Choose the plan that suits you best. Secure checkout with Razorpay." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-1.5 xs:gap-2.5 md:gap-4 max-w-2xl mx-auto mb-6", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => {
                    setShowModal(false);
                    navigate("/training-checkout", { state: { productType: "training_basic", price: "\u20B9299" } });
                  },
                  className: "flex items-center justify-between p-1.5 xs:p-2.5 md:p-3.5 rounded-lg xs:rounded-xl md:rounded-2xl border border-blue-500/25 bg-blue-500/5 hover:bg-blue-500/10 transition-all text-left group/btn cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 xs:gap-2 md:gap-3 overflow-hidden", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-5 h-5 xs:w-7 xs:h-7 md:w-8 md:h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(BookOpen, { size: 11, className: "xs:size-3.5 md:size-4" }) }),
                      /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-[7px] xs:text-[9px] md:text-[10px] uppercase font-black tracking-wider text-blue-500", children: "Basic" }),
                        /* @__PURE__ */ jsx("div", { className: "text-[9px] xs:text-[11px] md:text-sm font-extrabold dark:text-white text-slate-900 leading-tight", children: "Mushroom \u20B9299" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-0.5 font-bold text-[8px] xs:text-[10px] md:text-[11px] text-blue-600 dark:text-blue-400 shrink-0 ml-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Join" }),
                      /* @__PURE__ */ jsx(ArrowRight, { size: 10, className: "group-hover/btn:translate-x-0.5 transition-transform" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => {
                    setShowModal(false);
                    navigate("/training-checkout", { state: { productType: "training_advanced", price: "\u20B9699" } });
                  },
                  className: "flex items-center justify-between p-1.5 xs:p-2.5 md:p-3.5 rounded-lg xs:rounded-xl md:rounded-2xl border border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 transition-all text-left group/btn cursor-pointer ring-1 ring-purple-500/20",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 xs:gap-2 md:gap-3 overflow-hidden", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-5 h-5 xs:w-7 xs:h-7 md:w-8 md:h-8 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Sparkles, { size: 11, className: "xs:size-3.5 md:size-4 animate-pulse" }) }),
                      /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-[7px] xs:text-[9px] md:text-[10px] uppercase font-black tracking-wider text-purple-500", children: "Advanced" }),
                        /* @__PURE__ */ jsx("div", { className: "text-[9px] xs:text-[11px] md:text-sm font-extrabold dark:text-white text-slate-900 leading-tight", children: "Training \u20B9699" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-0.5 font-bold text-[8px] xs:text-[10px] md:text-[11px] text-purple-600 dark:text-purple-400 shrink-0 ml-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Join" }),
                      /* @__PURE__ */ jsx(ArrowRight, { size: 10, className: "group-hover/btn:translate-x-0.5 transition-transform" })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col p-5 md:p-6 rounded-2xl dark:bg-white/[0.02] bg-slate-50 border dark:border-white/5 border-slate-200", children: [
                /* @__PURE__ */ jsx("span", { className: "badge bg-blue-500/10 text-blue-500 text-[9px] font-bold uppercase tracking-widest mb-2 self-start py-0.5 px-2 rounded-full", children: "Beginner" }),
                /* @__PURE__ */ jsx("h4", { className: "text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-1", children: "Basic Cultivation Training" }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-1.5 mb-4", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-2xl md:text-3xl font-black gradient-text", children: "\u20B9299" }),
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider", children: "One-Time Fee" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 dark:text-slate-400 mb-4 min-h-[32px]", children: "Perfect for students and hobbyists looking to grow mushrooms at a small home scale." }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 mb-6", children: [
                  /* @__PURE__ */ jsx("h5", { className: "text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2.5", children: "What's Included:" }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-xs", children: [
                    "**Oyster & Button** cultivation step-by-step tutorial.",
                    "**Home Setup**: Perfect climate parameters for rooms/backyards.",
                    "**Substrate Preparation**: Boiling, sterilization & bag packing.",
                    "**Contamination Prevention**: Simple hygiene controls."
                  ].map((bullet, i) => {
                    const parts = bullet.split("**");
                    return /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-1.5 dark:text-slate-300 text-slate-600 font-medium", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { size: 13, className: "text-blue-500 shrink-0 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: parts.map((p, idx) => idx % 2 === 1 ? /* @__PURE__ */ jsx("strong", { className: "font-bold dark:text-white text-slate-900", children: p }, idx) : p) })
                    ] }, i);
                  }) })
                ] }),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => {
                      setShowModal(false);
                      navigate("/training-checkout", { state: { productType: "training_basic", price: "\u20B9299" } });
                    },
                    className: "w-full bg-slate-950 text-white hover:bg-slate-900 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 py-3 rounded-xl text-xs font-extrabold tracking-wide transition-all active:scale-95 hover:scale-[1.01] flex items-center justify-center gap-1",
                    children: [
                      "Join Mushroom Training ",
                      /* @__PURE__ */ jsx(ArrowRight, { size: 13 })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col p-5 md:p-6 rounded-2xl dark:bg-purple-950/5 bg-purple-50/5 border-2 border-purple-500/80 shadow-[0_4px_25px_rgba(168,85,247,0.15)]", children: [
                /* @__PURE__ */ jsxs("div", { className: "absolute top-3 right-3 text-[10px] text-purple-500 font-extrabold tracking-widest uppercase flex items-center gap-0.5", children: [
                  /* @__PURE__ */ jsx(Sparkles, { size: 10, className: "animate-pulse" }),
                  " RECOMMENDED"
                ] }),
                /* @__PURE__ */ jsx("span", { className: "badge bg-purple-500/10 text-purple-400 text-[9px] font-bold uppercase tracking-widest mb-2 self-start py-0.5 px-2 rounded-full", children: "Entrepreneur" }),
                /* @__PURE__ */ jsx("h4", { className: "text-lg md:text-xl font-bold dark:text-white text-slate-900 mb-1", children: "Advanced Commercial Training" }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-1.5 mb-4", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-2xl md:text-3xl font-black text-purple-500", children: "\u20B9699" }),
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider", children: "One-Time Fee" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 dark:text-slate-400 mb-4 min-h-[32px]", children: "Ideal for entrepreneurs and farmers wanting to establish commercial operations and scale." }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 mb-6", children: [
                  /* @__PURE__ */ jsx("h5", { className: "text-[9px] font-black text-purple-400 uppercase tracking-widest mb-2.5", children: "What's Included:" }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-xs", children: [
                    "**Everything in Basic** plus additional advanced guides.",
                    "**Advanced Varieties**: Milky (Summer), Oyster & Button Mushrooms.",
                    "**Commercial Shed Setup**: Layout design and low-cost shed options.",
                    "**Automated Climate Systems**: Foggers, AC, & humidity tools.",
                    "**Disease Management**: Treat green mold, flies & bacterial blotch.",
                    "**Marketing & Sales**: Tie-ups, wholesale market selling, ads & social media.",
                    "**Exclusive Perks**: Certified Certificate & active private community support."
                  ].map((bullet, i) => {
                    const parts = bullet.split("**");
                    return /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-1.5 dark:text-slate-300 text-slate-600 font-medium", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { size: 13, className: "text-purple-500 shrink-0 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: parts.map((p, idx) => idx % 2 === 1 ? /* @__PURE__ */ jsx("strong", { className: "font-bold dark:text-white text-slate-900", children: p }, idx) : p) })
                    ] }, i);
                  }) })
                ] }),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => {
                      setShowModal(false);
                      navigate("/training-checkout", { state: { productType: "training_advanced", price: "\u20B9699" } });
                    },
                    className: "w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] py-3 rounded-xl text-xs font-extrabold tracking-wide transition-all active:scale-95 hover:scale-[1.01] flex items-center justify-center gap-1",
                    children: [
                      "Join Mushroom Training ",
                      /* @__PURE__ */ jsx(ArrowRight, { size: 13 })
                    ]
                  }
                )
              ] })
            ] })
          ]
        }
      )
    ] }) })
  ] });
};
const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [currentHash, setCurrentHash] = useState("");
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || "");
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    const onScroll = () => {
      if (location.pathname !== "/") return;
      const sections = ["farming-models", "compost-units", "market"];
      let active = "";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 150) {
            active = "#" + section;
            break;
          }
        }
      }
      if (active) {
        setCurrentHash(active);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", onScroll);
    };
  }, [location.pathname]);
  const isTrainingPage = location.pathname === "/training";
  const showTrainingCTA = ![
    "/training-checkout",
    "/payment-success",
    "/payment-cancelled",
    "/workshop"
  ].includes(location.pathname);
  if (location.pathname === "/workshop") return null;
  const mobileNavItems = [
    { label: "Book Consultant", href: "/book-consultant", icon: Calendar },
    { label: "Spawn (Seed)", href: "/spawn-seed", icon: Sprout },
    { label: "Training", href: "/training", icon: BookOpen },
    { label: "Setup (Turnkey)", href: "/#farming-models", icon: Home },
    { label: "Bags", href: "/#compost-units", icon: Layers },
    { label: "Fresh Mushroom", href: "/#market", icon: ShoppingCart },
    { label: "Call Us", href: "tel:+919203544140", icon: Phone }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "fixed right-3 md:right-[30px] z-[99999] flex flex-col gap-2 md:gap-4 items-end pointer-events-none bottom-[65px] md:bottom-[20px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1.5 pointer-events-auto", children: [
        /* @__PURE__ */ jsxs(
          motion.a,
          {
            href: "https://wa.me/919203544140",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Contact Organic Mushrooms Farm on WhatsApp",
            initial: { scale: 0, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            whileHover: { scale: 1.1 },
            className: "w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] transition-all z-10 shrink-0 group relative",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40" }),
              /* @__PURE__ */ jsx(MessageCircle, { size: 24, className: "md:w-[32px] md:h-[32px] relative z-10" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-[9px] md:text-[11px] font-bold text-slate-800 dark:text-slate-200 shadow-sm whitespace-nowrap bg-white/70 dark:bg-black/70 px-2.5 py-1 rounded-full backdrop-blur-md border border-black/10 dark:border-white/20", children: "Chat on WhatsApp" })
      ] }),
      showScrollTop && /* @__PURE__ */ jsx(
        motion.button,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
          className: "w-10 h-10 md:w-12 md:h-12 glass rounded-full dark:text-slate-400 text-slate-600 flex items-center justify-center hover:dark:bg-white/10 bg-black/10 transition-all hidden md:flex pointer-events-auto",
          children: /* @__PURE__ */ jsx(ChevronUp, { size: 20 })
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `fixed left-3 md:left-[30px] z-[99999] flex flex-col gap-2 md:gap-4 items-start pointer-events-none bottom-[65px] md:bottom-[20px]`,
        children: showTrainingCTA ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5 md:gap-3 items-start pointer-events-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "hidden md:flex flex-col gap-3 items-start", children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/book-consultant",
                className: "glass backdrop-blur-md border dark:border-white/10 border-black/10 dark:text-white text-slate-900 font-bold px-3 py-1.5 rounded-full text-[11px] hover:bg-black/5 dark:hover:bg-white/5 active:bg-primary-start/20 active:text-primary-start active:border-primary-start/30 transition-all flex items-center gap-1.5 shadow-lg shadow-black/5 dark:shadow-white/5",
                children: [
                  /* @__PURE__ */ jsx(Calendar, { size: 12 }),
                  " Book Consultant"
                ]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "w-[140px] md:w-auto", children: /* @__PURE__ */ jsx(StickyRazorpayButton, { size: "normal" }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-1 w-full justify-start md:hidden", children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/book-consultant",
              className: "flex-1 flex px-2 h-7.5 rounded-full glass border dark:border-white/10 border-black/10 dark:text-white text-slate-900 items-center justify-center shadow-md font-bold tracking-wide gap-1 text-[8px] active:bg-primary-start/20 active:text-primary-start active:border-primary-start/30 transition-all",
              children: [
                /* @__PURE__ */ jsx(Calendar, { size: 10 }),
                " Consult"
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { scale: 0, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              className: "h-7.5 w-auto min-w-[100px] max-w-[130px] md:hidden relative z-[99998]",
              children: /* @__PURE__ */ jsx(StickyRazorpayButton, { size: "small" })
            }
          )
        ] }) : /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-1.5 md:gap-3 items-start pointer-events-auto", children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/book-consultant",
            className: "flex px-3 md:px-5 h-8 md:h-10 rounded-full glass backdrop-blur-md dark:text-white text-slate-900 items-center justify-center shadow-xl hover:bg-black/5 dark:hover:bg-white/5 active:bg-primary-start/20 active:text-primary-start active:border-primary-start/30 transition-all border dark:border-white/20 border-black/10 font-bold tracking-wide whitespace-nowrap gap-1.5 text-[10px] md:text-[13px] order-1 md:order-none",
            children: [
              /* @__PURE__ */ jsx(Calendar, { size: 12, className: "md:w-4 md:h-4" }),
              /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: "Book Consultant" }),
              /* @__PURE__ */ jsx("span", { className: "md:hidden", children: "Book Now" })
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `fixed bottom-0 left-0 right-0 z-[110] md:hidden backdrop-blur-xl border-t dark:border-white/20 border-black/10 shadow-[0_-8px_32px_0_rgba(31,38,135,0.1)]`,
        style: { background: "linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(59, 130, 246, 0.15) 33%, rgba(34, 197, 94, 0.15) 66%, rgba(234, 179, 8, 0.15) 100%)" },
        children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: `overflow-x-auto scrollbar-hide snap-x flex items-center ${isTrainingPage ? "gap-1.5 p-2 px-3" : "gap-2 p-3 px-4"}`,
              children: [
                mobileNavItems.map((item, i) => {
                  const isExternal = item.href.startsWith("tel:") || item.href.startsWith("http");
                  const isHashLink = item.href.includes("#");
                  let isActive = false;
                  if (isHashLink) {
                    const hash = item.href.split("#")[1];
                    isActive = location.pathname === "/" && currentHash === "#" + hash;
                  } else {
                    isActive = location.pathname === item.href;
                  }
                  const className = `snap-start shrink-0 flex items-center justify-center rounded-full border transition-all active:scale-95 ${isActive ? "bg-primary-start/20 text-primary-start border-primary-start/30 backdrop-blur-md shadow-[0_0_15px_rgba(124,58,237,0.2)] font-bold" : "bg-linear-to-r from-blue-600/10 to-purple-600/10 dark:border-white/10 border-black/10 dark:text-white text-slate-900 hover:border-primary-start/40 active:bg-primary-start/20"} ${isTrainingPage ? "gap-1 px-3 py-1.5" : "gap-1.5 px-3.5 py-2"}`;
                  const content = /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(
                      item.icon,
                      {
                        size: isTrainingPage ? 11 : 13,
                        className: isActive ? "text-primary-start" : "text-primary-start"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: `whitespace-nowrap tracking-tight font-semibold ${isTrainingPage ? "text-[9px]" : "text-[10px]"}`,
                        children: item.label
                      }
                    )
                  ] });
                  const handleItemClick = (e) => {
                    if (isHashLink) {
                      e.preventDefault();
                      const hash = item.href.split("#")[1];
                      if (location.pathname === "/") {
                        const element = document.getElementById(hash);
                        if (element) {
                          const offset = 100;
                          const bodyRect = document.body.getBoundingClientRect().top;
                          const elementRect = element.getBoundingClientRect().top;
                          const elementPosition = elementRect - bodyRect;
                          const offsetPosition = elementPosition - offset;
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                          });
                          setCurrentHash("#" + hash);
                          window.history.pushState(null, "", `/#${hash}`);
                        }
                      } else {
                        navigate("/");
                        setTimeout(() => {
                          const element = document.getElementById(hash);
                          if (element) {
                            const offset = 100;
                            const bodyRect = document.body.getBoundingClientRect().top;
                            const elementRect = element.getBoundingClientRect().top;
                            const elementPosition = elementRect - bodyRect;
                            const offsetPosition = elementPosition - offset;
                            window.scrollTo({
                              top: offsetPosition,
                              behavior: "smooth"
                            });
                            setCurrentHash("#" + hash);
                          }
                        }, 400);
                      }
                    }
                  };
                  if (isExternal) {
                    return /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: item.href,
                        target: item.href.startsWith("http") ? "_blank" : void 0,
                        rel: item.href.startsWith("http") ? "noopener noreferrer" : void 0,
                        className,
                        children: content
                      },
                      i
                    );
                  }
                  if (isHashLink) {
                    return /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: item.href,
                        onClick: handleItemClick,
                        className,
                        children: content
                      },
                      i
                    );
                  }
                  return /* @__PURE__ */ jsx(Link, { to: item.href, className, children: content }, i);
                }),
                /* @__PURE__ */ jsx("div", { className: "shrink-0 w-4" }),
                " "
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "h-[env(safe-area-inset-bottom,0px)] bg-black/20" })
        ]
      }
    )
  ] });
};
const RazorpayPaymentButton = () => {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: () => navigate("/training-checkout", { state: { productType: "training_basic", price: "\u20B9299" } }),
      type: "button",
      className: "relative overflow-hidden rounded-2xl group w-full min-h-[64px] bg-linear-to-r from-blue-600 to-indigo-600 shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-transform hover:scale-[1.02] flex items-center justify-center cursor-pointer",
      children: /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex items-center justify-center text-white font-bold text-lg md:text-xl z-10 gap-2", children: [
        "Enroll Now - \u20B9",
        /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "299" }),
        " ",
        /* @__PURE__ */ jsx(ExternalLink, { size: 20 })
      ] })
    }
  );
};
const MushroomTraining = () => {
  const navigate = useNavigate();
  const faqs = [
    {
      q: "What is the duration of training?",
      a: "Online training is self-paced with lifetime access. Offline training is typically 3-5 days of intensive hands-on workshop."
    },
    {
      q: "Is it beginner friendly?",
      a: "Absolutely! Our courses are designed from scratch, making them perfect for students, entrepreneurs, and hobbyists with zero farming background."
    },
    {
      q: "Will I get support after training?",
      a: "Yes, we provide lifetime technical support for both online and offline students. You also get access to our private community for ongoing guidance."
    }
  ];
  const curriculum = [
    {
      title: "Oyster Mushroom",
      desc: "Comprehensive guide to substrates, spawning, incubation, and cropping for high-yield Oyster cultivation."
    },
    {
      title: "Button Mushroom",
      desc: "Step-by-step commercial method covering composting, casing, pinning, and temperature-controlled harvesting."
    },
    {
      title: "Low-Cost Setup",
      desc: "Smart, budget-friendly infrastructure designs using locally available materials without compromising yield."
    },
    {
      title: "Fogger System",
      desc: "Automation of humidity controls, nozzle selection, and installation layouts for maintaining ideal moisture levels."
    },
    {
      title: "Temperature Control",
      desc: "Efficient insulation techniques and cooling/heating methods tailored for seasonal and round-the-year farming."
    },
    {
      title: "Spawn Making",
      desc: "Scientific process of grain selection, sterilization, inoculation, and pure culture maintenance for high-quality seeds."
    },
    {
      title: "Marketing",
      desc: "Strategic insights on target markets, B2B/B2C sales, branding, local vendor tie-ups, and digital positioning."
    },
    {
      title: "Dry Mushroom",
      desc: "Standard solar and mechanical dehydration protocols to increase shelf-life and maintain premium color/quality."
    },
    {
      title: "Mushroom Powder",
      desc: "Processing value-added products, grinding standards, packaging, and capturing health-supplement markets."
    },
    {
      title: "Farm Setup",
      desc: "Commercial layout planning, ventilation design, rack systems, and hygiene protocols to minimize contamination."
    }
  ];
  const whatYouGet = [
    {
      title: "Lifetime Support",
      desc: "Continuous community and expert assistance to solve your ongoing farming doubts anytime.",
      icon: ShieldCheck
    },
    {
      title: "Live Training",
      desc: "Interactive live sessions with real-time Q&A, plus lifetime access to session recordings.",
      icon: Play
    },
    {
      title: "WhatsApp Group",
      desc: "Access to an exclusive, active community of growers for real-time networking and knowledge sharing.",
      icon: MessageCircle
    },
    {
      title: "Practical Guidance",
      desc: "Actionable, real-world insights from live farm operations rather than just textbook theory.",
      icon: TrendingUp
    },
    {
      title: "Farm Setup Help",
      desc: "Personalized consultancy on designing blueprints and choosing the right equipment for your farm.",
      icon: Home
    }
  ];
  const galleryImages = [
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378182/Screenshot_2026-02-22_165327_bfm4pv.png",
      alt: "Mushroom farming setup and commercial turnkey project in Jabalpur Madhya Pradesh India"
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777382178/Screenshot_2026-04-24_201138_wcjrml.png",
      alt: "Commercial mushroom training session online and offline India"
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777382179/Screenshot_2026-04-24_201116_b29aci.png",
      alt: "Students learning organic button and oyster mushroom farming"
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378181/Screenshot_2026-02-22_165318_cyla5n.png",
      alt: "High yield oyster and button mushroom growth facility"
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378147/img_5794_tjestw.png",
      alt: "Indoor climate controlled mushroom farm setup India USA"
    }
  ];
  return /* @__PURE__ */ jsxs("section", { id: "training", className: "relative pb-24 lg:pb-0 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "py-2 md:py-8 text-center px-2 md:px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 15 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsx("div", { className: "badge mx-auto mb-2 md:mb-3 text-[10px] md:text-xs", children: "Expert-Led Courses" }),
          /* @__PURE__ */ jsxs("h1", { className: "text-xl md:text-3xl lg:text-4xl font-black dark:text-white text-slate-900 mb-1 tracking-tight uppercase max-w-4xl mx-auto", id: "training-h1", children: [
            /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Mushroom Cultivation" }),
            " Training"
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        id: "options",
        className: "py-6 md:py-12 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent border-y border-purple-500/10 px-2 md:px-4",
        children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", id: "pricing-plans", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-6 md:mb-10", children: [
            /* @__PURE__ */ jsx("div", { className: "badge mx-auto mb-2 md:mb-4 text-[10px] md:text-xs", children: "Simple & Transparent Models" }),
            /* @__PURE__ */ jsxs("h3", { className: "text-xl md:text-3xl font-extrabold dark:text-white text-slate-900 mb-1.5 md:mb-3 tracking-tight uppercase", children: [
              "Choose Your ",
              /* @__PURE__ */ jsx("span", { className: "gradient-text font-black", children: "Training Program" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600 text-[10px] md:text-sm max-w-xl mx-auto font-medium leading-relaxed", children: "Start with self-paced online courses or gain hands-on commercial experience at our practical farm workshops." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
            /* @__PURE__ */ jsxs("h4", { className: "text-base md:text-xl font-black text-slate-800 dark:text-slate-200 mb-4 uppercase tracking-wider flex items-center justify-center gap-2 border-b dark:border-white/10 border-slate-200 pb-2", children: [
              /* @__PURE__ */ jsx(Globe, { className: "text-purple-500 animate-spin-slow shrink-0", size: 18 }),
              /* @__PURE__ */ jsx("span", { children: "1. Online Cultivation Programs (Self-Paced)" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full max-w-5xl mx-auto items-stretch", children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  whileHover: { y: -4 },
                  className: "glass relative flex flex-col p-4 md:p-6 lg:p-8 rounded-[1.5rem] border border-slate-200 dark:border-white/10 dark:bg-black/40 bg-white/50 backdrop-blur-md shadow-lg",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "badge mb-3 self-start bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-[10px] md:text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full", children: "Beginner Friendly" }),
                    /* @__PURE__ */ jsx("h4", { className: "text-lg md:text-2xl font-black dark:text-white text-slate-900 mb-1.5 text-left tracking-tight", children: "Basic Online Training" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-4 text-left font-medium min-h-[36px]", children: "Perfect for beginners, students, and hobbyists looking to start growing mushrooms at a home scale." }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-1.5 mb-4 border-b border-dashed border-slate-200 dark:border-white/10 pb-4 text-left", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-3xl md:text-4xl font-black gradient-text", children: "\u20B9299" }),
                      /* @__PURE__ */ jsx("span", { className: "text-[10px] md:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider", children: "One-Time Fee" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-1 text-left mb-5", children: [
                      /* @__PURE__ */ jsx("h5", { className: "text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2.5", children: "What You Will Learn:" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-xs md:text-sm", children: [
                        "**Introduction to Fungi**: The basics of how mushrooms grow and thrive.",
                        "**Variety Focus**: Step-by-step cultivation guide for **Oyster** and **Button** mushrooms.",
                        "**Home Setup**: How to create the right environment in a small room or backyard.",
                        "**Substrate Preparation**: Boiling, chemical sterilization, and preparing the perfect base for your seeds (spawn).",
                        "**Spawning & Bagging**: The correct techniques to mix spawn and pack bags to avoid contamination.",
                        "**Basic Climate Control**: Simple ways to maintain moisture and temperature for healthy fruiting."
                      ].map((item, i) => {
                        const parts = item.split("**");
                        return /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-slate-700 dark:text-slate-300 font-medium", children: [
                          /* @__PURE__ */ jsx(CheckCircle2, { size: 14, className: "text-blue-500 shrink-0 mt-0.5" }),
                          /* @__PURE__ */ jsx("span", { children: parts.map((p, idx) => idx % 2 === 1 ? /* @__PURE__ */ jsx("strong", { className: "font-extrabold text-slate-900 dark:text-white", children: p }, idx) : p) })
                        ] }, i);
                      }) })
                    ] }),
                    /* @__PURE__ */ jsxs(
                      "button",
                      {
                        onClick: () => navigate("/training-checkout", { state: { productType: "training_basic", price: "\u20B9299" } }),
                        className: "relative overflow-hidden w-full flex items-center justify-center rounded-xl group transition-all backdrop-blur-md shadow-[0_8px_32px_rgba(167,139,250,0.15)] hover:shadow-[0_8px_32px_rgba(167,139,250,0.3)] border border-purple-400/40 dark:border-purple-300/30 bg-linear-to-r from-purple-500/10 via-fuchsia-400/10 to-indigo-500/10 dark:from-purple-900/30 dark:via-fuchsia-900/20 dark:to-indigo-900/30 hover:from-purple-500/20 hover:via-fuchsia-400/20 hover:to-indigo-500/20 dark:hover:from-purple-900/40 dark:hover:via-fuchsia-900/30 dark:hover:to-indigo-900/40 text-purple-950 dark:text-purple-100 font-black tracking-wide py-3 hover:scale-[1.01] active:scale-95 text-xs md:text-sm",
                        children: [
                          /* @__PURE__ */ jsxs("span", { className: "z-10 flex items-center justify-center gap-1.5", children: [
                            "Join Mushroom Training ",
                            /* @__PURE__ */ jsx(ArrowRight, { size: 14, className: "text-purple-700 dark:text-purple-300" })
                          ] }),
                          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" })
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  whileHover: { y: -4 },
                  className: "relative flex flex-col p-4 md:p-6 lg:p-8 rounded-[1.5rem] border-2 border-purple-500 dark:border-purple-400 dark:bg-purple-950/10 bg-purple-50/10 backdrop-blur-md shadow-2xl overflow-hidden",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-3", children: [
                      /* @__PURE__ */ jsx("span", { className: "badge bg-purple-500 text-white dark:bg-purple-500 text-[10px] md:text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full", children: "Highly Recommended" }),
                      /* @__PURE__ */ jsxs("span", { className: "text-[10px] md:text-xs text-purple-600 dark:text-purple-400 font-black uppercase tracking-widest flex items-center gap-1", children: [
                        /* @__PURE__ */ jsx(Sparkles, { size: 11, className: "animate-spin-slow" }),
                        " BEST VALUE"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("h4", { className: "text-lg md:text-2xl font-black dark:text-white text-slate-900 mb-1.5 text-left tracking-tight", children: "Advanced Commercial Training" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-4 text-left font-medium min-h-[36px]", children: "Designed for future entrepreneurs, commercial farmers, and serious business owners wanting to scale." }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-1.5 mb-4 border-b border-dashed border-purple-500/20 pb-4 text-left", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-3xl md:text-4xl font-black text-purple-600 dark:text-purple-400", children: "\u20B9699" }),
                      /* @__PURE__ */ jsx("span", { className: "text-[10px] md:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider", children: "One-Time Fee" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-1 text-left mb-5", children: [
                      /* @__PURE__ */ jsx("h5", { className: "text-[10px] md:text-[11px] font-bold text-purple-400 uppercase tracking-widest mb-2.5", children: "What You Will Learn:" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-xs md:text-sm", children: [
                        "**Everything in the Basic Plan**, fully covered.",
                        "**Advanced Variety Focus**: Master **Oyster**, **Button**, AND the high-temperature **Milky Mushroom** (perfect for Indian summers).",
                        "**Commercial Farm Setup**: Designing layout, constructing low-cost sheds, and setting up heavy-duty racks.",
                        "**Advanced Climate Infrastructure**: Installing & managing foggers, humidifiers, exhaust, and AC units for year-round production.",
                        "**Disease & Pest Management**: How to identify, prevent, and treat common green mold, flies, and bacterial blotch.",
                        "**Harvesting & Packaging**: Best practices to extend shelf life and package your mushrooms professionally.",
                        "**Marketing & Sales Strategies**: Sell in local wholesale markets, tie up with hotels/restaurants, run social media ads, and handle export inquiries.",
                        "**Bonus Benefits**: Verified Certificate of Completion and ongoing private community support access."
                      ].map((item, i) => {
                        const parts = item.split("**");
                        return /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-slate-700 dark:text-slate-300 font-medium", children: [
                          /* @__PURE__ */ jsx(CheckCircle2, { size: 14, className: "text-purple-500 shrink-0 mt-0.5" }),
                          /* @__PURE__ */ jsx("span", { children: parts.map((p, idx) => idx % 2 === 1 ? /* @__PURE__ */ jsx("strong", { className: "font-extrabold text-slate-900 dark:text-white", children: p }, idx) : p) })
                        ] }, i);
                      }) })
                    ] }),
                    /* @__PURE__ */ jsxs(
                      "button",
                      {
                        onClick: () => navigate("/training-checkout", { state: { productType: "training_advanced", price: "\u20B9699" } }),
                        className: "w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] text-white font-black tracking-wide py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 hover:scale-[1.01] active:scale-95 text-xs md:text-sm",
                        children: [
                          "Join Mushroom Training ",
                          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
                        ]
                      }
                    )
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h4", { className: "text-base md:text-xl font-black text-slate-800 dark:text-slate-200 mb-4 uppercase tracking-wider flex items-center justify-center gap-2 border-b dark:border-white/10 border-slate-200 pb-2", children: [
              /* @__PURE__ */ jsx(Users, { className: "text-emerald-500 shrink-0", size: 18 }),
              /* @__PURE__ */ jsx("span", { children: "2. Offline Practical Workshops (Hands-on Training at Farm)" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full max-w-5xl mx-auto items-stretch", children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  whileHover: { y: -4 },
                  className: "glass relative flex flex-col p-4 md:p-6 lg:p-8 rounded-[1.5rem] border border-slate-200 dark:border-white/10 dark:bg-black/40 bg-white/50 backdrop-blur-md shadow-lg",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "badge mb-3 self-start bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] md:text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full", children: "Focus: Button Mushroom Only" }),
                    /* @__PURE__ */ jsx("h4", { className: "text-lg md:text-2xl font-black dark:text-white text-slate-900 mb-1.5 text-left tracking-tight", children: "Standard Button Mushroom Workshop" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-4 text-left font-medium min-h-[36px]", children: "Intensive hands-on training focusing exclusively on commercial Button Mushroom farming." }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-1.5 mb-4 border-b border-dashed border-slate-200 dark:border-white/10 pb-4 text-left", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-3xl md:text-4xl font-black text-emerald-600 dark:text-emerald-400", children: "\u20B93000" }),
                      /* @__PURE__ */ jsx("span", { className: "text-[10px] md:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider", children: "Per Person" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-1 text-left mb-5", children: [
                      /* @__PURE__ */ jsx("h5", { className: "text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2.5", children: "What You Will Get:" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-xs md:text-sm", children: [
                        "**Practical Hands-On training** on compost preparation and casing soil.",
                        "**Live Demonstration** of compost bed layout & spawning procedures.",
                        "**Farm Visit & Live Demo** of our state-of-the-art Button Mushroom growing facilities.",
                        "**Temperature & Moisture Management** practical setup protocols.",
                        "**Standard Setup Guidance** and local market sales tips to launch your venture.",
                        "**Direct Q&A Session** with senior farm experts during the workshop."
                      ].map((item, i) => {
                        const parts = item.split("**");
                        return /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-slate-700 dark:text-slate-300 font-medium", children: [
                          /* @__PURE__ */ jsx(CheckCircle2, { size: 14, className: "text-emerald-500 shrink-0 mt-0.5" }),
                          /* @__PURE__ */ jsx("span", { children: parts.map((p, idx) => idx % 2 === 1 ? /* @__PURE__ */ jsx("strong", { className: "font-extrabold text-slate-900 dark:text-white", children: p }, idx) : p) })
                        ] }, i);
                      }) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 mt-auto", children: [
                      /* @__PURE__ */ jsxs(
                        "a",
                        {
                          href: "tel:9203544140",
                          className: "flex items-center justify-center gap-1.5 py-3 rounded-xl border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all text-xs font-bold uppercase tracking-wider",
                          children: [
                            /* @__PURE__ */ jsx(Phone, { size: 14 }),
                            " Call"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "a",
                        {
                          href: "https://wa.me/919203544140?text=I%20am%20interested%20in%203000%20Offline%20Button%20Mushroom%20Training",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white transition-all text-xs font-bold uppercase tracking-wider shadow-md",
                          children: [
                            /* @__PURE__ */ jsx(MessageCircle, { size: 14 }),
                            " WhatsApp"
                          ]
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  whileHover: { y: -4 },
                  className: "relative flex flex-col p-4 md:p-6 lg:p-8 rounded-[1.5rem] border-2 border-emerald-500 dark:border-emerald-400 dark:bg-emerald-950/10 bg-emerald-50/10 backdrop-blur-md shadow-2xl overflow-hidden",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" }),
                    /* @__PURE__ */ jsx("div", { className: "badge mb-3 self-start bg-emerald-500 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full", children: "Button, Oyster & Milky Mushrooms" }),
                    /* @__PURE__ */ jsx("h4", { className: "text-lg md:text-2xl font-black dark:text-white text-slate-900 mb-1.5 text-left tracking-tight", children: "Master Commercial Workshop" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-4 text-left font-medium min-h-[36px]", children: "Our ultimate 3-day premium practical training covers the entire commercial cultivation spectrum of all three major varieties." }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-1.5 mb-4 border-b border-dashed border-emerald-500/20 pb-4 text-left", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-3xl md:text-4xl font-black text-emerald-600 dark:text-emerald-400", children: "\u20B96000" }),
                      /* @__PURE__ */ jsx("span", { className: "text-[10px] md:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider", children: "Per Person" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-1 text-left mb-5", children: [
                      /* @__PURE__ */ jsx("h5", { className: "text-[10px] md:text-[11px] font-bold text-emerald-500 uppercase tracking-widest mb-2.5", children: "What You Will Get:" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-xs md:text-sm", children: [
                        "**Multi-Variety Mastery**: Hands-on practicals for **Button**, **Oyster**, and high-yield summer **Milky** mushrooms.",
                        "**Turnkey Laboratory Visit**: Real-world study of spawn production, sterilization, and inoculation processes.",
                        "**Advanced Climate Setup Demo**: Learn installation of automatic foggers, humidifiers, exhausts, and AC units.",
                        "**Commercial Packaging & Cold Chain**: Packaging techniques to double the shelf-life of harvested mushrooms.",
                        "**Exclusive Market Tie-Ups**: Step-by-step strategies to sell in wholesale markets, tie up with local premium hotels & explore exports.",
                        "**1-on-1 Consultancy Project**: Get expert validation on your farm blueprint design and site viability assessment.",
                        "**Certification & Lifetime Access**: Master completion certificate and premium offline grower network membership."
                      ].map((item, i) => {
                        const parts = item.split("**");
                        return /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-slate-700 dark:text-slate-300 font-medium", children: [
                          /* @__PURE__ */ jsx(CheckCircle2, { size: 14, className: "text-emerald-500 shrink-0 mt-0.5" }),
                          /* @__PURE__ */ jsx("span", { children: parts.map((p, idx) => idx % 2 === 1 ? /* @__PURE__ */ jsx("strong", { className: "font-extrabold text-slate-900 dark:text-white", children: p }, idx) : p) })
                        ] }, i);
                      }) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 mt-auto", children: [
                      /* @__PURE__ */ jsxs(
                        "a",
                        {
                          href: "tel:9203544140",
                          className: "flex items-center justify-center gap-1.5 py-3 rounded-xl border border-emerald-300 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all text-xs font-bold uppercase tracking-wider",
                          children: [
                            /* @__PURE__ */ jsx(Phone, { size: 14 }),
                            " Call"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "a",
                        {
                          href: "https://wa.me/919203544140?text=I%20am%20interested%20in%206000%20Offline%20Master%20Mushroom%20Training",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white transition-all text-xs font-bold uppercase tracking-wider shadow-md",
                          children: [
                            /* @__PURE__ */ jsx(MessageCircle, { size: 14 }),
                            " WhatsApp"
                          ]
                        }
                      )
                    ] })
                  ]
                }
              )
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "py-4 md:py-16 px-2 md:px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-4 md:mb-12", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-md md:text-3xl font-bold dark:text-white text-slate-900 uppercase tracking-tight mb-1 md:mb-4", children: [
          "What You Will ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Get" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600 max-w-xl mx-auto text-[9px] md:text-sm", children: "Everything you need to succeed in commercial mushroom farming." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-5 gap-1.5 md:gap-5", children: whatYouGet.map((item, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: i * 0.1 },
          viewport: { once: true },
          className: `glass p-2 md:p-6 rounded-lg md:rounded-3xl border dark:border-white/5 border-black/5 group hover:dark:bg-white/5 bg-black/5 transition-colors flex flex-col justify-start ${i === 4 ? "col-span-2 lg:col-span-1 mx-auto w-1/2 lg:w-full" : ""}`,
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-5 h-5 md:w-14 md:h-14 rounded-md md:rounded-2xl dark:bg-white/10 bg-black/10 flex items-center justify-center mb-1 bg-primary-start/10 text-primary-start group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(item.icon, { className: "w-3 h-3 md:w-6 md:h-6" }) }),
            /* @__PURE__ */ jsx("h4", { className: "text-[10px] md:text-xl font-bold dark:text-white text-slate-900 mb-0.5 md:mb-2 leading-tight", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600 text-[8px] md:text-sm leading-tight md:leading-relaxed", children: item.desc })
          ]
        },
        i
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "py-4 md:py-16 dark:bg-white/5 bg-black/5 px-2 md:px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1400px] mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-4 md:mb-12", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-md md:text-3xl font-bold dark:text-white text-slate-900 uppercase tracking-tight mb-1 md:mb-4", children: [
          "Training ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Curriculum" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600 max-w-xl mx-auto text-[9px] md:text-sm", children: "Master every aspect of the commercial cultivation ecosystem." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-5 gap-1.5 md:gap-5", children: curriculum.map((item, i) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "glass p-2 md:p-6 rounded-lg md:rounded-2xl border dark:border-white/5 border-black/5 flex flex-col md:flex-row gap-1.5 md:gap-4 items-start hover:dark:bg-white/5 hover:bg-black/5 transition-colors",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-4 h-4 md:w-10 md:h-10 shrink-0 rounded-full dark:bg-white/10 bg-black/10 flex items-center justify-center font-black dark:text-white text-slate-900 opacity-50 text-[8px] md:text-base mb-0 md:mb-0", children: i + 1 }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-[10px] md:text-xl font-bold dark:text-white text-slate-900 mb-0.5 md:mb-2 leading-tight", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600 text-[8px] md:text-sm leading-tight md:leading-relaxed", children: item.desc })
            ] })
          ]
        },
        i
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "py-4 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-2 md:px-4 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "badge mx-auto mb-1 md:mb-6 text-[8px] md:text-sm", children: "Commercial Farming Essentials" }),
      /* @__PURE__ */ jsxs("h3", { className: "text-md md:text-4xl font-bold dark:text-white text-slate-900 mb-1 md:mb-6 uppercase tracking-tight", children: [
        "Need High-Yield Commercial",
        " ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Mushroom Seed?" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600 mb-3 md:mb-6 max-w-lg mx-auto text-[9px] md:text-sm leading-normal", children: "High-quality lab-grown F1 hybrid spawn for Button, Oyster, and Milky mushrooms. Bulk delivery across India & global export." }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/spawn-seed",
          className: "btn-primary px-4 md:px-10 py-2 md:py-4 rounded-lg md:rounded-xl text-[10px] md:text-lg inline-flex items-center gap-1.5 md:gap-3",
          children: [
            "Explore Organic Spawn & Seeds",
            " ",
            /* @__PURE__ */ jsx(Sprout, { size: 12, className: "md:w-5 md:h-5" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "py-4 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-2 md:px-4", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-4 md:mb-16", children: /* @__PURE__ */ jsxs("h3", { className: "text-md md:text-3xl font-bold dark:text-white text-slate-900 uppercase tracking-tight", children: [
        "Why Choose ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Our Training?" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-1.5 md:gap-6", children: [
        {
          title: "Expert Trainers",
          desc: "Learn from industry pioneers with years of commercial success in India and abroad.",
          icon: Award
        },
        {
          title: "Practical Knowledge",
          desc: "No fluff, only commercial standard operating procedures that work globally.",
          icon: BookOpen
        },
        {
          title: "Business Guidance",
          desc: "Expert tips on global marketing, B2B scaling, and ROI management.",
          icon: TrendingUp
        },
        {
          title: "Training Support",
          desc: "Lifetime technical guidance for button and oyster mushroom setup.",
          icon: ShieldCheck
        }
      ].map((item, i) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "glass p-2 md:p-8 rounded-lg md:rounded-3xl border dark:border-white/5 border-black/5 text-center group hover:dark:bg-white/5 bg-black/5 transition-all",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-6 h-6 md:w-16 md:h-16 rounded-md md:rounded-2xl dark:bg-white/5 bg-black/5 flex items-center justify-center mx-auto mb-1.5 md:mb-6 text-primary-start group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(item.icon, { className: "w-3 h-3 md:w-7 md:h-7" }) }),
            /* @__PURE__ */ jsx("h4", { className: "dark:text-white text-slate-900 font-bold text-[10px] md:text-lg mb-0.5 md:mb-3 leading-tight", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-[8px] md:text-sm leading-tight md:leading-relaxed", children: item.desc })
          ]
        },
        i
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "py-4 md:py-24 pt-0 md:pt-0", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-2 md:px-4", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-3 md:mb-12", children: /* @__PURE__ */ jsxs("h3", { className: "text-md md:text-3xl font-bold dark:text-white text-slate-900 mb-0.5 md:mb-4 uppercase tracking-tight", children: [
        "Experience our Commercial",
        " ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Ecosystem" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-5 gap-1 md:gap-4 overflow-hidden", children: galleryImages.map((img, i) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          whileInView: { opacity: 1, scale: 1 },
          transition: { delay: i * 0.1 },
          className: "aspect-square rounded-md md:rounded-2xl overflow-hidden glass border dark:border-white/10 border-black/10",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              loading: "lazy",
              src: img.src,
              alt: img.alt,
              className: "w-full h-full object-cover transition-transform hover:scale-110 duration-500"
            }
          )
        },
        i
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "py-4 md:py-24 dark:bg-white/5 bg-black/5 px-2 md:px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto prose prose-invert", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-sm md:text-2xl font-bold dark:text-white text-slate-900 mb-2 md:mb-8 border-l-2 md:border-l-4 border-primary-start pl-2 md:pl-6 uppercase tracking-tight", children: [
        "Start Your Commercial",
        " ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Mushroom Farming Journey" }),
        " in India & Globally"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "dark:text-slate-400 text-slate-600 space-y-2 md:space-y-6 leading-tight md:leading-relaxed text-[9px] md:text-base", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "Looking for the best",
          " ",
          /* @__PURE__ */ jsx("span", { className: "dark:text-white text-slate-900 font-bold", children: "mushroom farming training in India" }),
          "? At Organic Mushrooms Farm, we provide the most comprehensive",
          " ",
          /* @__PURE__ */ jsx("span", { className: "dark:text-white text-slate-900 font-bold", children: "button mushroom training course" }),
          " ",
          "designed specifically for the Indian climate and international global market standards. Our modules cover everything from raw substrate preparation to precision climate control."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Our",
          " ",
          /* @__PURE__ */ jsx("span", { className: "dark:text-white text-slate-900 font-bold", children: "online mushroom farming training" }),
          " ",
          "is perfect for those who want to learn at their own pace. We comprehensively cover technical aspects of high-yield milky mushroom and oyster mushroom growing in detailed multi-page formats as well, ensuring you have a diverse commercial portfolio."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "If you're wondering",
          " ",
          /* @__PURE__ */ jsx("span", { className: "dark:text-white text-slate-900 font-bold", children: "how to start mushroom farming business" }),
          " ",
          "in USA, Australia, or India, our training is the ultimate first step. We provide the blueprint for building an indoor commercial mushroom plant that yields high-quality produce consistently. From students learning farming basics to established entrepreneurs scaling their units across Pan India, our curriculum caters to all."
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "py-4 md:py-24 px-2 md:px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-4 md:mb-12", children: /* @__PURE__ */ jsxs("h3", { className: "text-md md:text-2xl font-bold dark:text-white text-slate-900 mb-1 md:mb-4 uppercase tracking-tight", children: [
        "Common Commercial Farming",
        " ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Queries" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "space-y-1.5 md:space-y-4", children: faqs.map((faq, i) => /* @__PURE__ */ jsx(Collapsible, { title: faq.q, children: /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600 leading-tight md:leading-relaxed text-[9px] md:text-base", children: faq.a }) }, i)) })
    ] }) })
  ] });
};
const HomePage = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Organic Mushrooms Farm | Commercial Mushroom Setup, Spawn, Training, Fresh & Dry Mushroom",
        description: "Buy premium organic mushroom spawn, join commercial mushroom farming training online/offline, get fresh & dry mushrooms. Complete turnkey mushroom setup available Pan India, USA, Australia. Based in Jabalpur, MP.",
        schemas: [
          generateGlobalFAQSchema(),
          generateGlobalProductsSchema(),
          generateGlobalServiceSchema()
        ]
      }
    ),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(EcosystemFlow, {}),
    /* @__PURE__ */ jsx(WhyChooseUs, {}),
    /* @__PURE__ */ jsx(FarmingModels, {}),
    /* @__PURE__ */ jsx(MushroomComparison, {}),
    /* @__PURE__ */ jsx(ROICalculator, {}),
    /* @__PURE__ */ jsx(CriticalParameters, {}),
    /* @__PURE__ */ jsx(ProductionSOP, {}),
    /* @__PURE__ */ jsx(
      "section",
      {
        id: "compost-units",
        className: "section-padding relative overflow-hidden",
        children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("div", { className: "badge mx-auto mb-4", children: "Commercial Infrastructure" }),
            /* @__PURE__ */ jsx("h2", { className: "mb-4 uppercase", children: /* @__PURE__ */ jsxs(Link, { to: "/equipment", className: "hover:text-current transition-colors", children: [
              "Standard Commercial",
              " ",
              /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Compost Units" })
            ] }) }),
            /* @__PURE__ */ jsx("p", { className: "max-w-xl mx-auto text-xs md:text-sm text-slate-500 dark:text-slate-400", children: "Complete Phase-I + Phase-II commercial infrastructure with 15-day cycles." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6 md:gap-10", children: [
            {
              name: "2000-Bag Commercial Unit (20T)",
              desc: "14x30 System",
              investment: "\u20B915-17 Lakh",
              stats: { bags: "2,000", cap: "20t", cycle: "15d" }
            },
            {
              name: "3000-Bag Industrial Unit (30T)",
              desc: "14x40 System",
              investment: "\u20B919-21 Lakh",
              stats: { bags: "3,000", cap: "30t", cycle: "15d" },
              recommended: true
            }
          ].map((comp, i) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
              className: `glass card-padding rounded-3xl border dark:border-white/5 border-black/5 relative ${comp.recommended ? "shadow-2xl shadow-brand-blue/10 border-primary-mid/30" : ""}`,
              children: [
                comp.recommended && /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-5 badge text-[8px]", children: "Best Value" }),
                /* @__PURE__ */ jsx("h3", { className: "dark:text-white text-slate-900 mb-2", children: comp.name }),
                /* @__PURE__ */ jsx("div", { className: "text-slate-500 mb-6 font-medium text-[13px]", children: comp.desc }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-3 mb-6", children: Object.entries(comp.stats).map(([k, v]) => /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "p-2 md:p-4 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5 text-center",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "text-[8px] text-slate-500 font-bold uppercase mb-1", children: k }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm md:text-lg font-bold dark:text-white text-slate-900", children: v })
                    ]
                  },
                  k
                )) }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 shadow shadow-brand-blue/10 ring-1 ring-white/10 ring-inset mb-6", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[11px] font-semibold dark:text-slate-400 text-slate-600", children: "Est. CapEx" }),
                  /* @__PURE__ */ jsx("span", { className: "text-lg font-bold dark:text-white text-slate-900", children: comp.investment })
                ] }),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: "/compost-unit-specs",
                    className: "btn-primary w-full py-3.5 rounded-xl text-[12px] font-bold min-h-[44px] flex items-center justify-center",
                    children: "Get Details"
                  }
                )
              ]
            },
            i
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "section-padding", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("div", { className: "badge mx-auto mb-4", children: "Farmer Testimonials" }),
        /* @__PURE__ */ jsxs("h2", { className: "mb-4 uppercase", children: [
          "Real Commercial ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Voices" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Join 5000+ commercial farmers trained by our expert team." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-5", children: [
        {
          name: "Rahul S.",
          location: "Bhopal",
          text: "Turnkey setup changed my perspective. Outstanding support even after 2 years.",
          avatar: "RS"
        },
        {
          name: "Deepak M.",
          location: "Indore",
          text: "Professional SOPs. Yield exceeded expectations by 20% due to climate design.",
          avatar: "DM"
        },
        {
          name: "Suresh K.",
          location: "Sagar",
          text: "Honest ROI analysis. No hidden costs, just pure business growth.",
          avatar: "SK"
        }
      ].map((t, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "glass p-6 rounded-3xl border dark:border-white/5 border-black/5 flex flex-col h-full",
          children: [
            /* @__PURE__ */ jsx(
              Quote,
              {
                size: 20,
                className: "text-primary-start mb-4 opacity-40"
              }
            ),
            /* @__PURE__ */ jsxs("p", { className: "dark:text-slate-300 text-slate-700 text-[13px] italic mb-6 leading-relaxed flex-1", children: [
              '"',
              t.text,
              '"'
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-full gradient-bg flex items-center justify-center font-bold dark:text-white text-slate-900 text-[10px] shadow-lg", children: t.avatar }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "dark:text-white text-slate-900 font-bold text-[12px] tracking-tight", children: t.name }),
                /* @__PURE__ */ jsx("div", { className: "text-[8px] text-slate-500 font-black uppercase tracking-widest", children: t.location })
              ] })
            ] })
          ]
        },
        i
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "market", className: "section-padding relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "badge mx-auto mb-4", children: "Global Market Linkage" }),
      /* @__PURE__ */ jsxs("h2", { className: "mb-4 uppercase tracking-tight", children: [
        "Global",
        " ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Mushroom B2B Marketplace" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "max-w-xl mx-auto mb-12 font-medium", children: "Connect directly with verified commercial buyers and sellers worldwide." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-left p-2", children: [
        {
          type: "Seller",
          title: "Mushroom Spawn (Seed)",
          desc: "Lab-grade organic F1 hybrid spawn.",
          price: "Bulk Order",
          linkType: "page",
          to: "/spawn-seed"
        },
        {
          type: "Seller",
          title: "Fresh Organic Mushrooms",
          desc: "A-grade commercial button mushrooms.",
          price: "Live Market Rate",
          linkType: "external",
          to: "https://wa.me/919203544140?text=I%20am%20interested%20in%20Fresh%20Mushrooms"
        },
        {
          type: "Seller",
          title: "Dry Mushrooms Export",
          desc: "Long shelf life, premium export quality.",
          price: "Wholesale Only",
          linkType: "external",
          to: "https://wa.me/919203544140?text=I%20am%20interested%20in%20Dry%20Mushrooms"
        }
      ].map((ad, i) => {
        const CardWrapper = ad.linkType === "page" ? Link : "a";
        return /* @__PURE__ */ jsxs(
          CardWrapper,
          {
            to: ad.linkType === "page" ? ad.to : void 0,
            href: ad.linkType === "external" ? ad.to : void 0,
            target: ad.linkType === "external" ? "_blank" : void 0,
            rel: ad.linkType === "external" ? "noopener noreferrer" : void 0,
            className: "glass p-5 rounded-2xl border dark:border-white/5 border-black/5 relative group cursor-pointer block",
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `absolute top-4 right-4 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest bg-blue-500/20 text-blue-400`,
                  children: ad.type
                }
              ),
              /* @__PURE__ */ jsx("h3", { className: "dark:text-white text-slate-900 mb-1 mt-4 tracking-tight", children: ad.title }),
              /* @__PURE__ */ jsx("div", { className: "text-[12px] text-slate-500 mb-6", children: ad.desc }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx("span", { className: "dark:text-white text-slate-900 font-bold text-sm dark:bg-white/5 bg-black/5 px-3 py-2 rounded-xl", children: ad.price }),
                /* @__PURE__ */ jsx("span", { className: "w-9 h-9 rounded-lg dark:bg-white/5 bg-black/5 dark:text-slate-400 text-slate-600 flex items-center justify-center group-hover:bg-primary-start group-hover:dark:text-white text-slate-900 transition-all", children: /* @__PURE__ */ jsx(ArrowRight, { size: 16 }) })
              ] })
            ]
          },
          i
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "resources", className: "section-padding bg-white/[0.01]", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-start", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "badge mb-6 mx-auto lg:mx-0", children: "Documentation & Resources" }),
        /* @__PURE__ */ jsx("h2", { className: "mb-6 uppercase text-center lg:text-left", children: /* @__PURE__ */ jsxs(Link, { to: "/cities", className: "hover:text-current transition-colors", children: [
          "Commercial Production",
          " ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "SOPs & Guides" })
        ] }) }),
        /* @__PURE__ */ jsx("p", { className: "mb-10 text-center lg:text-left", children: "Standard operating procedures used by commercial mushroom specialists nationwide and internationally." }),
        /* @__PURE__ */ jsx("div", { className: "md:hidden", children: [
          {
            title: "Tunnel Ops",
            content: "Details for Phase-II Pasteurization Tunnel operations and parameters.",
            id: "tunnel-ops"
          },
          {
            title: "Spawning",
            content: "Comprehensive checklist for spawning and incubation stages.",
            id: "spawning"
          },
          {
            title: "Casing",
            content: "Material preparation guide for optimal casing layer.",
            id: "casing"
          },
          {
            title: "Hygiene",
            content: "Disease control protocols and farm hygiene standards.",
            id: "hygiene"
          }
        ].map((sop, i) => /* @__PURE__ */ jsxs(Collapsible, { title: sop.title, children: [
          sop.content,
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: `/sops#${sop.id}`,
              className: "flex items-center gap-2 text-primary-start font-bold mt-3",
              children: [
                "Get Details ",
                /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
              ]
            }
          )
        ] }, i)) }),
        /* @__PURE__ */ jsx("div", { className: "hidden md:block space-y-4", children: [
          {
            name: "Phase-II Commercial Pasteurization Tunnel Ops",
            id: "tunnel-ops"
          },
          { name: "Spawning & Incubation Checklist", id: "spawning" },
          { name: "Casing Material Preparation Guide", id: "casing" },
          {
            name: "Disease Control & Commercial Farm Hygiene Protocols",
            id: "hygiene"
          }
        ].map((sop) => /* @__PURE__ */ jsxs(
          Link,
          {
            to: `/sops#${sop.id}`,
            className: "flex items-center gap-4 p-5 glass rounded-2xl border dark:border-white/5 border-black/5 group hover:dark:bg-white/5 bg-black/5 transition-all cursor-pointer",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-primary-start/10 flex items-center justify-center group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(BookOpen, { size: 18, className: "text-primary-start" }) }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-bold dark:text-slate-300 text-slate-700", children: sop.name }),
              /* @__PURE__ */ jsx(
                ArrowRight,
                {
                  className: "ml-auto text-slate-700 group-hover:translate-x-1 transition-transform",
                  size: 16
                }
              )
            ]
          },
          sop.name
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 gradient-bg opacity-10 blur-[80px] rounded-full" }),
        /* @__PURE__ */ jsxs("div", { className: "relative glass p-6 md:p-10 rounded-[2.5rem] border dark:border-white/10 border-black/10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-8 justify-center lg:justify-start", children: [
            /* @__PURE__ */ jsx(BookOpen, { className: "text-primary-start", size: 24 }),
            /* @__PURE__ */ jsx("h3", { className: "dark:text-white text-slate-900 tracking-tight", children: "Commercial Knowledge Hub" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/articles/mushroom-farming-beginner-guide-india-2026-2027",
                className: "p-4 md:p-6 rounded-3xl bg-primary-start/10 border border-primary-start/20 block group hover:scale-[1.02] transition-transform",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-[9px] text-primary-start font-black uppercase tracking-widest", children: "Ultimate Guide 2026-2027" }),
                    /* @__PURE__ */ jsx("div", { className: "px-2 py-0.5 rounded bg-green-500/20 text-green-500 text-[8px] font-black uppercase", children: "Article" })
                  ] }),
                  /* @__PURE__ */ jsx("h4", { className: "dark:text-white text-slate-900 font-bold text-lg mb-2", children: "Mushroom Farming Beginner Guide India 2026-2027" }),
                  /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600 text-xs leading-relaxed", children: "Complete guide on how to start mushroom farming (mushroom ki kheti) from scratch for beginners." })
                ]
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "p-4 md:p-6 rounded-3xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[9px] text-slate-500 font-black uppercase tracking-widest", children: "Featured" }),
                /* @__PURE__ */ jsx("div", { className: "px-2 py-0.5 rounded bg-red-500/20 text-red-500 text-[8px] font-black uppercase", children: "Video" })
              ] }),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "https://youtube.com/shorts/wxLiU3nNZmM?si=6VmH86DPYKoQ72P6",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "relative aspect-video rounded-2xl overflow-hidden mb-4 group cursor-pointer inline-block w-full",
                  children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        loading: "lazy",
                        src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378071/IMG_6265_svucsm.jpg",
                        alt: "Mushroom Farming Training Video - Commercial Cultivation SOPs India",
                        className: "w-full h-full object-cover opacity-60"
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-white text-black flex items-center justify-center pl-1 shadow-2xl", children: /* @__PURE__ */ jsx(Play, { size: 20, fill: "currentColor" }) }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("h4", { className: "dark:text-white text-slate-900 font-bold text-[13px] tracking-tight", children: "Commercial Composting Flow Explained" })
            ] })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(MushroomSEOSections, {}),
    /* @__PURE__ */ jsx(ComparisonTable, {}),
    /* @__PURE__ */ jsx(StatesSection, {}),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
};
const PageHero = ({
  title,
  description,
  badge
}) => /* @__PURE__ */ jsx("section", { className: "pt-32 pb-16 md:pt-48 md:pb-24 relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 text-center", children: /* @__PURE__ */ jsxs(
  motion.div,
  {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    children: [
      badge && /* @__PURE__ */ jsx("div", { className: "badge mx-auto mb-6", children: badge }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-7xl font-bold dark:text-white text-slate-900 mb-6 tracking-tight", children: title.split(" ").map((word, i) => /* @__PURE__ */ jsx(React.Fragment, { children: i === 1 ? /* @__PURE__ */ jsxs("span", { className: "gradient-text", children: [
        word,
        " "
      ] }) : word + " " }, i)) }),
      /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-medium", children: description })
    ]
  }
) }) });
const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const whatWeDo = [
    {
      title: "Commercial Mushroom Production",
      desc: "We produce premium quality button and oyster mushrooms using scientific organic methods in our state-of-the-art facility.",
      icon: Sprout
    },
    {
      title: "Online Mushroom Training",
      desc: "Comprehensive digital modules for beginners. Start your commercial journey for just \u20B9399 with lifetime access.",
      icon: Play,
      price: "\u20B9399"
    },
    {
      title: "Offline Practical Training",
      desc: "Hands-on practical sessions in our Jabalpur farm. Intensive commercial workshop at \u20B93000 per person.",
      icon: Users,
      price: "\u20B93000"
    },
    {
      title: "Commercial Farm Setup",
      desc: "Complete turnkey solutions from shed insulation to climate control and global marketing support.",
      icon: Home
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "About Organic Mushrooms Farm | Leading Commercial Infrastructure & Training Partner",
        description: "Learn about Organic Mushrooms Farm, India's leading mushroom ecosystem architect. We provide quality spawn, expert training, and turnkey farming solutions India-wide and globally."
      }
    ),
    /* @__PURE__ */ jsx(
      PageHero,
      {
        badge: "Our Commercial Journey",
        title: "About Organic Mushrooms Farm | Global Setup Experts",
        description: "Empowering modern India and global markets through sustainable, high-yield organic mushroom cultivation."
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "section-padding", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsx("div", { className: "badge mb-4", children: "Who We Are" }),
            /* @__PURE__ */ jsxs("h2", { className: "mb-6 uppercase tracking-tight", children: [
              "Our Mission &",
              " ",
              /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Global Vision for Organic Agriculture" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "glass p-6 border dark:border-white/5 border-black/5 rounded-2xl relative overflow-hidden group", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(Briefcase, { size: 60 }) }),
                /* @__PURE__ */ jsx("h3", { className: "dark:text-white text-slate-900 text-lg font-bold mb-2", children: "Our Mission" }),
                /* @__PURE__ */ jsxs("p", { className: "dark:text-slate-400 text-slate-600 text-sm leading-relaxed", children: [
                  "Our startup is dedicated to",
                  " ",
                  /* @__PURE__ */ jsx("strong", { children: "helping people start commercial mushroom farming businesses" }),
                  " ",
                  "with minimal risk and maximum precision. We bridge the gap between theoretical knowledge and commercial success in button and oyster mushroom production."
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "glass p-6 border dark:border-white/5 border-black/5 rounded-2xl relative overflow-hidden group", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(ShieldCheck, { size: 60 }) }),
                /* @__PURE__ */ jsx("h3", { className: "dark:text-white text-slate-900 text-lg font-bold mb-2", children: "Our Vision" }),
                /* @__PURE__ */ jsxs("p", { className: "dark:text-slate-400 text-slate-600 text-sm leading-relaxed", children: [
                  "We aim to lead the revolution in",
                  " ",
                  /* @__PURE__ */ jsx("strong", { children: "promoting organic agriculture and self-employment" }),
                  " ",
                  "across Madhya Pradesh, India, and internationally. Our vision is to make every farmer a successful global agri-entrepreneur through sustainable practices."
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 pt-4", children: /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20mushroom%20farming.%20Please%20provide%20details.",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "btn-primary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2",
                    children: [
                      /* @__PURE__ */ jsx(MessageCircle, { size: 20 }),
                      " Contact Us on WhatsApp"
                    ]
                  }
                ) })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 gradient-bg opacity-10 blur-[100px] rounded-full" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "training images/trainingmushroom.jpg",
            alt: "Who We Are - Leading Organic Mushrooms Farm Training and Commercial Turnkey Setup Experts in India, USA, Australia",
            className: "relative z-10 rounded-[2.5rem] border dark:border-white/10 border-black/10 shadow-2xl opacity-80"
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-white/[0.02]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("div", { className: "badge mx-auto mb-4", children: "What We Do" }),
        /* @__PURE__ */ jsxs("h2", { className: "uppercase tracking-tight", children: [
          "Core",
          " ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Mushroom Farming Operations & Consultancy" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "dark:text-slate-400 text-slate-600 mt-4 max-w-2xl mx-auto", children: [
          "Providing end-to-end support for commercial",
          " ",
          /* @__PURE__ */ jsx("strong", { children: "button mushroom farming in India and globally" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: whatWeDo.map((item, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          whileHover: { y: -10 },
          className: "glass p-8 rounded-3xl border dark:border-white/5 border-black/5 text-center flex flex-col",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary-start/10 text-primary-start flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx(item.icon, { size: 26 }) }),
            /* @__PURE__ */ jsx("h3", { className: "dark:text-white text-slate-900 font-bold text-lg mb-3", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs leading-relaxed mb-6 flex-grow", children: item.desc }),
            item.price && /* @__PURE__ */ jsx("div", { className: "text-xl font-black gradient-text mb-4", children: item.price }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20mushroom%20farming.%20Please%20provide%20details.",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-primary-start font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2",
                children: [
                  "Enquire Now ",
                  /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
                ]
              }
            )
          ]
        },
        i
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "order-2 lg:order-1", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "training images/mushroomgrowth.jpg",
          alt: "Why Choose Us - High Yield Button Mushroom Growth and Organic Cultivation Training in Jabalpur India",
          className: "rounded-[2.5rem] border dark:border-white/10 border-black/10 shadow-2xl"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "order-1 lg:order-2", children: [
        /* @__PURE__ */ jsx("div", { className: "badge mb-4", children: "The Commercial Advantage" }),
        /* @__PURE__ */ jsxs("h2", { className: "mb-8 uppercase tracking-tight", children: [
          "Why Choose",
          " ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Us for Turnkey Projects Pan India & Abroad?" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-6", children: [
          {
            title: "Expert Guidance",
            desc: "Scientific methods and professional mentorship for high commercial yield.",
            icon: Award
          },
          {
            title: "Beginner Friendly",
            desc: "No background required. We train you from scratch for commercial success.",
            icon: BookOpen
          },
          {
            title: "Affordable Pricing",
            desc: "Best-in-class commercial training and setup at competitive rates globally.",
            icon: Zap
          },
          {
            title: "Lifetime Support",
            desc: "Continuous technical guidance even after commercial farm setup.",
            icon: ShieldCheck
          }
        ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl dark:bg-white/5 bg-black/5 flex items-center justify-center text-primary-start mb-4", children: /* @__PURE__ */ jsx(item.icon, { size: 20 }) }),
          /* @__PURE__ */ jsx("h4", { className: "dark:text-white text-slate-900 font-bold text-sm", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs leading-relaxed", children: item.desc })
        ] }, i)) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-black/40", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 prose prose-invert text-center", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-xl md:text-2xl font-bold dark:text-white text-slate-900 mb-8 uppercase tracking-tight leading-loose", children: [
        "Pioneering Commercial",
        " ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Organic Mushrooms Farm Katangi" }),
        " ",
        "& ",
        /* @__PURE__ */ jsx(Link, { to: "/cities/madhya-pradesh/jabalpur", className: "text-primary-start hover:underline", children: "Jabalpur" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "dark:text-slate-400 text-slate-600 text-sm md:text-base leading-relaxed", children: [
        "Our commercial ",
        /* @__PURE__ */ jsx("strong", { children: "organic mushrooms farm in Katangi" }),
        " ",
        "road, Jabalpur, serves as a model for aspiring farmers across the region and globe. We are proud to provide the most reliable",
        " ",
        /* @__PURE__ */ jsx("strong", { children: "mushroom training in Madhya Pradesh" }),
        ", focusing on the specific environmental needs of Central India and international exports. From climate-controlled grow rooms to industrial compost preparation, our ",
        /* @__PURE__ */ jsx("strong", { children: /* @__PURE__ */ jsx(Link, { to: "/cities/madhya-pradesh/jabalpur", className: "text-primary-start hover:underline", children: "mushroom farming in Jabalpur" }) }),
        " ",
        "solutions ensure that you enter the global market with a competitive edge. Join us to build a sustainable commercial future with professional ",
        /* @__PURE__ */ jsx("strong", { children: "button mushroom farming in India" }),
        "."
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
};
const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Commercial Mushroom Farming Services & Turnkey Solutions | Pan India Experts",
        description: "Explore our end-to-end commercial mushroom farming services: organic hybrid spawn supply, industrial compost production, and technical turnkey consultancy in India & Worldwide.",
        url: "/services"
      }
    ),
    /* @__PURE__ */ jsx(
      PageHero,
      {
        badge: "Expert Setup Solutions",
        title: "Our Comprehensive Commercial Services",
        description: "Tailored commercial infrastructure and support systems for the modern mushroom farmer globally."
      }
    ),
    /* @__PURE__ */ jsx(EcosystemFlow, {}),
    /* @__PURE__ */ jsx("section", { className: "section-padding pt-0", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [
      {
        id: "spawn-supply",
        title: "Organic Hybrid Spawn Supply",
        desc: "Top-tier genetics for maximum yield and disease resistance.",
        icon: Sprout
      },
      {
        id: "compost-production",
        title: "Industrial Compost Production",
        desc: "Standardized Phase II & Phase III compost for commercial success.",
        icon: Layers
      },
      {
        id: "consultancy",
        title: "Technical Setup Consultancy",
        desc: "Expert guidance from climate control to disease management.",
        icon: Info
      },
      {
        id: "marketing-support",
        title: "Global Marketing Support",
        desc: "Connecting farmers with B2B buyers and export channels.",
        icon: TrendingUp
      },
      {
        id: "cold-chain",
        title: "Cold Chain Logistics",
        desc: "Ensuring freshness from farm to market with specialized storage.",
        icon: Zap
      },
      {
        id: "subsidy",
        title: "Subsidy Guidance",
        desc: "Legal and documentation support for government schemes.",
        icon: ShieldCheck
      }
    ].map((s, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        whileHover: { y: -10 },
        className: "glass p-8 rounded-3xl border dark:border-white/5 border-black/5 group hover:dark:bg-white/5 bg-black/5 transition-all",
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary-start/10 text-primary-start flex items-center justify-center mb-6 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(s.icon, { size: 26 }) }),
          /* @__PURE__ */ jsx("h3", { className: "dark:text-white text-slate-900 font-bold text-xl mb-4", children: s.title }),
          /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600 text-sm leading-relaxed mb-6 font-medium", children: s.desc }),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: `/services/${s.id}`,
              className: "text-primary-start font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all",
              children: [
                "Learn More ",
                /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
              ]
            }
          )
        ]
      },
      i
    )) }) }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
};
const TurnkeyProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formState, setFormState] = useState({
    submitting: false,
    succeeded: false,
    error: null
  });
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormState({ submitting: true, succeeded: false, error: null });
    const form = e.currentTarget;
    const formData = new FormData(form);
    if (!formData.has("_subject")) {
      formData.append(
        "_subject",
        "Commercial Turnkey Mushroom Farm Enquiry - " + formData.get("name")
      );
    }
    try {
      const response = await fetch(
        "https://formspree.io/f/xykldqdy",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        }
      );
      if (response.ok) {
        setFormState({ submitting: false, succeeded: true, error: null });
        form.reset();
      } else {
        const errorText = await response.text();
        setFormState({
          submitting: false,
          succeeded: false,
          error: errorText || "Failed to submit form"
        });
      }
    } catch (err) {
      setFormState({
        submitting: false,
        succeeded: false,
        error: err.message || String(err)
      });
    }
  };
  const mushroomSetups = [
    {
      type: "Button Mushroom Setup (Agaricus bisporus)",
      description: "Our state-of-the-art commercial high-yield climate controlled units. Tailored for industrial scale, utilizing dense 80-100mm PUF panel walls, fully automated air handling units (AHU), and sophisticated chiller plants to maintain a constant 14-18\xB0C temperature with automated composting support.",
      cost: "\u20B915 Lakhs - \u20B91.5 Crore",
      keySpecs: [
        "Double tier MS/GI growing racks",
        "100mm Insulated PUF panel cold room doors",
        "High-pressure fogging humification",
        "Expert market and packing linkage"
      ],
      badge: "High Yield & Popular",
      icon: Layers
    },
    {
      type: "Oyster Mushroom Setup (Pleurotus ostreatus)",
      description: "Elegant, cost-friendly, and perfect for highly rapid cultivation cycles. Features a low-overhead vertical structure utilizing suspension rope/hanging bags or modular compact steel frames. Highly productive with natural ventilation systems or basic air-cooling units for quick regional crops.",
      cost: "\u20B92 Lakhs - \u20B910 Lakhs",
      keySpecs: [
        "Foliage suspended grow chambers",
        "Evaporative humidifier grids",
        "Optimal light diffusion layouts",
        "Extremely quick 28-day harvest cycles"
      ],
      badge: "Fast ROI",
      icon: Sprout
    },
    {
      type: "Milky Mushroom Setup (Calocybe indica)",
      description: "Specially engineered for tropical and high-temperature regions. Uses durable agricultural row polyhouses, custom soil casing beds, and regional crop patterns. High temperature tolerance up to 35\xB0C makes it extremely budget-friendly in power consumption and solar cooling designs.",
      cost: "\u20B93 Lakhs - \u20B912 Lakhs",
      keySpecs: [
        "Naturally insulated crop polyhouse",
        "Sand-and-soil base casing parameters",
        "High solar ambient light design",
        "Long shelf-life post-harvest structure"
      ],
      badge: "Heat Tolerant",
      icon: Home
    },
    {
      type: "Shiitake Mushroom Setup (Lentinula edodes)",
      description: "Advanced premium setup including autoclave sterilization chambers, specialized substrate bagging, and sterile laboratory inoculation rooms. High-yield production on sawdust blocks under precision photoperiod lighting (LED) and localized fine-mist water supply.",
      cost: "\u20B98 Lakhs - \u20B935 Lakhs",
      keySpecs: [
        "High-pressure thermal autoclave unit",
        "HEPA filtered sterile inoculation booth",
        "Programmable humidity/irrigation controls",
        "Premium luxury market segment placement"
      ],
      badge: "Premium Margin",
      icon: ShieldCheck
    },
    {
      type: "Enoki & Exotic Specialty Setup",
      description: "Precision-grade vertical bottle farming. Employs advanced smart environmental control units, sophisticated automated bottle-filling machinery, automated harvest cutting tools, and ultra-cooling sterilization setups. Intended for local luxury restaurants and worldwide commercial export channels.",
      cost: "\u20B925 Lakhs - \u20B91.2 Crore",
      keySpecs: [
        "Sophisticated bottle culture mechanics",
        "Ultra-pure clean room air filters",
        "Dynamic temperature shock incubation",
        "Automated robot packing compatibility"
      ],
      badge: "Ultra Tech",
      icon: Zap
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Commercial Turnkey Mushroom Farm Setup India | Complete Setup Service",
        description: "Build your industrial mushroom unit with our commercial turnkey solutions. Expert project setups for button mushroom farming in Jabalpur, across India, USA, and Australia.",
        url: "/turnkey-projects"
      }
    ),
    /* @__PURE__ */ jsx(
      PageHero,
      {
        badge: "Commercial Turnkey Solutions",
        title: "Commercial Farm Infrastructure",
        description: "Ready-to-harvest mushroom units designed for high-yield precision and global export."
      }
    ),
    /* @__PURE__ */ jsx(CriticalParameters, {}),
    /* @__PURE__ */ jsx(WhyChooseUs, {}),
    /* @__PURE__ */ jsx("section", { className: "section-padding", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-4", children: "Infrastructure Models" }),
        /* @__PURE__ */ jsxs("h2", { className: "mb-4 uppercase tracking-tight", children: [
          "Our Commercial",
          " ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Farming Models" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600 max-w-2xl mx-auto", children: "Scale your operations and maximize your mushroom farm setup with our top-tier turnkey commercial structural designs." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [
        {
          title: "Standard Commercial Unit",
          cap: "10-15 tons/yr",
          investment: "\u20B915-20 Lakhs",
          icon: Home
        },
        {
          title: "Industrial Unit",
          cap: "50+ tons/yr",
          investment: "\u20B960-80 Lakhs",
          icon: Layers
        },
        {
          title: "Global Export Factory",
          cap: "200+ tons/yr",
          investment: "\u20B92 Cr+",
          icon: ShieldCheck
        }
      ].map((model, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          whileHover: { scale: 1.05 },
          className: "glass p-8 rounded-[2.5rem] border dark:border-white/5 border-black/5 text-center group",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-2xl dark:bg-white/5 bg-black/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-start group-hover:dark:text-white text-slate-900 transition-all", children: /* @__PURE__ */ jsx(model.icon, { size: 28 }) }),
            /* @__PURE__ */ jsx("h3", { className: "dark:text-white text-slate-900 font-bold text-xl mb-2", children: model.title }),
            /* @__PURE__ */ jsxs("div", { className: "text-primary-start font-black text-xs uppercase tracking-widest mb-6", children: [
              "Commercial Capacity: ",
              model.cap
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-2xl dark:bg-white/5 bg-black/5 border dark:border-white/5 border-black/5 mb-8", children: [
              /* @__PURE__ */ jsx("div", { className: "text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1", children: "Est. Investment" }),
              /* @__PURE__ */ jsx("div", { className: "text-lg font-bold dark:text-white text-slate-900", children: model.investment })
            ] }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20commercial%20turnkey%20mushroom%20farming.%20Please%20provide%20details.",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "btn-outline w-full py-3 rounded-xl text-xs font-bold uppercase tracking-widest block text-center",
                children: "Enquire Details"
              }
            )
          ]
        },
        i
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding bg-slate-950/40 border-t border-b border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-4", children: "A to Z Project Portfolios" }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-4 tracking-tight leading-tight uppercase", children: [
          "All Types of",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-primary-start", children: "Mushroom Farm Setup" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600 max-w-2xl mx-auto", children: "Our high-yield custom layouts focus on extreme climate automation, PUF panel cold rooms, and dynamic humification systems to guarantee max return on your commercial investment." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-10", children: mushroomSetups.map((setup, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.1 },
          className: "glass p-6 md:p-10 rounded-[2.5rem] border dark:border-white/5 border-black/5 flex flex-col lg:flex-row gap-8 items-center hover:border-emerald-500/20 transition-all group",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center text-primary-start group-hover:scale-110 transition-all", children: /* @__PURE__ */ jsx(setup.icon, { size: 36 }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
                /* @__PURE__ */ jsx("span", { className: "badge text-[9px] uppercase tracking-widest", children: setup.badge }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-bold dark:text-white text-slate-900 tracking-tight", children: setup.type })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600 text-sm md:text-base leading-relaxed", children: setup.description }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 pt-2", children: setup.keySpecs.map((spec, sIdx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2.5", children: [
                /* @__PURE__ */ jsx(
                  CheckCircle2,
                  {
                    size: 16,
                    className: "text-emerald-500 shrink-0 mt-0.5"
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold dark:text-slate-300 text-slate-700", children: spec })
              ] }, sIdx)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-auto shrink-0 bg-white/5 border border-white/10 rounded-[2rem] p-6 text-center space-y-4 lg:min-w-[240px]", children: [
              /* @__PURE__ */ jsx("div", { className: "text-[10px] font-black text-slate-500 uppercase tracking-widest", children: "Setup Investment Cost" }),
              /* @__PURE__ */ jsx("div", { className: "text-xl font-extrabold text-primary-start", children: setup.cost }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `https://wa.me/919203544140?text=Hi,%20I%20am%20interested%20in%20setting%20up%20a%20${encodeURIComponent(setup.type)}.%20Please%20share%20quotation.`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "btn bg-primary-start hover:brightness-110 dark:text-white text-slate-900 w-full py-3 rounded-xl text-xs font-black uppercase tracking-widest block text-center transition-all",
                  children: "Get Quotation"
                }
              )
            ] })
          ]
        },
        i
      )) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "section-padding bg-black relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.05),transparent_40%)]" }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-block px-4 py-1.5 rounded-full bg-primary-start/10 border border-primary-start/20 text-[10px] font-black text-primary-start uppercase tracking-widest mb-4", children: "Instant Quotation & Project Planning" }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-bold dark:text-white text-slate-900 mb-4 tracking-tight leading-tight uppercase", children: "Turnkey Plant Setup Inquiry" }),
          /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600 max-w-xl mx-auto text-sm md:text-base", children: "Submit your project specifications below. Our tech specialists will outline custom layouts, calculate full machinery costs, and provide a comprehensive project brief." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "glass border dark:border-white/10 border-black/10 p-6 md:p-10 rounded-[2.5rem] shadow-2xl relative", children: formState.succeeded ? /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            className: "text-center py-12 space-y-6",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-xl", children: /* @__PURE__ */ jsx(CheckCircle2, { size: 44 }) }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold dark:text-white text-slate-900", children: "Enquiry Submitted Successfully!" }),
                /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600 text-sm max-w-sm mx-auto font-medium", children: "Thank you for submitting your project layout requirements. Our lead engineer Tanish Soni will contact you via phone or email shortly." })
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setFormState({
                    submitting: false,
                    succeeded: false,
                    error: null
                  }),
                  className: "btn-outline px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest",
                  children: "Send Another Enquiry"
                }
              )
            ]
          }
        ) : /* @__PURE__ */ jsxs("form", { onSubmit: handleFormSubmit, className: "space-y-6", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "hidden",
              name: "_date",
              value: (/* @__PURE__ */ new Date()).toLocaleDateString()
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "name",
                  className: "text-[10px] font-black dark:text-slate-400 text-slate-600 uppercase tracking-widest ml-1",
                  children: "Full Name *"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  id: "name",
                  name: "name",
                  required: true,
                  type: "text",
                  placeholder: "Your Name",
                  className: "w-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-xl px-4 py-4 dark:text-white text-slate-900 focus:outline-none focus:border-primary-start transition-all text-sm font-medium placeholder:text-slate-700 h-12"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "phone",
                  className: "text-[10px] font-black dark:text-slate-400 text-slate-600 uppercase tracking-widest ml-1",
                  children: "Phone Number (with WhatsApp) *"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  id: "phone",
                  name: "phone",
                  required: true,
                  type: "tel",
                  placeholder: "e.g. +91 9203544140",
                  className: "w-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-xl px-4 py-4 dark:text-white text-slate-900 focus:outline-none focus:border-primary-start transition-all text-sm font-medium placeholder:text-slate-700 h-12"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "email",
                  className: "text-[10px] font-black dark:text-slate-400 text-slate-600 uppercase tracking-widest ml-1",
                  children: "Email Address *"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  id: "email",
                  name: "email",
                  required: true,
                  type: "email",
                  placeholder: "yourname@domain.com",
                  className: "w-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-xl px-4 py-4 dark:text-white text-slate-900 focus:outline-none focus:border-primary-start transition-all text-sm font-medium placeholder:text-slate-700 h-12"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "setup_type",
                  className: "text-[10px] font-black dark:text-slate-400 text-slate-600 uppercase tracking-widest ml-1",
                  children: "Mushroom Setup Model *"
                }
              ),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  id: "setup_type",
                  name: "setup_type",
                  required: true,
                  className: "w-full dark:bg-zinc-900 bg-zinc-100 border dark:border-white/10 border-black/10 rounded-xl px-4 dark:text-white text-slate-900 focus:outline-none focus:border-primary-start transition-all text-sm font-medium h-12",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "Button Mushroom Setup", children: "Button Mushroom Setup (Standard or Industrial)" }),
                    /* @__PURE__ */ jsx("option", { value: "Oyster Mushroom Setup", children: "Oyster Mushroom Setup" }),
                    /* @__PURE__ */ jsx("option", { value: "Milky Mushroom Setup", children: "Milky Mushroom Setup" }),
                    /* @__PURE__ */ jsx("option", { value: "Shiitake Mushroom Setup", children: "Shiitake Mushroom Setup" }),
                    /* @__PURE__ */ jsx("option", { value: "Enoki or Exotic Setup", children: "Enoki & Exotic Specialty Setup" }),
                    /* @__PURE__ */ jsx("option", { value: "Multiple Setup Models", children: "Interested in Multiple Models" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "location",
                  className: "text-[10px] font-black dark:text-slate-400 text-slate-600 uppercase tracking-widest ml-1",
                  children: "Proposed Location (City / State) *"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  id: "location",
                  name: "location",
                  required: true,
                  type: "text",
                  placeholder: "e.g. Pune, Maharashtra",
                  className: "w-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-xl px-4 py-4 dark:text-white text-slate-900 focus:outline-none focus:border-primary-start transition-all text-sm font-medium placeholder:text-slate-700 h-12"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: "estimated_budget",
                  className: "text-[10px] font-black dark:text-slate-400 text-slate-600 uppercase tracking-widest ml-1",
                  children: "Investment Budget Range *"
                }
              ),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  id: "estimated_budget",
                  name: "estimated_budget",
                  required: true,
                  className: "w-full dark:bg-zinc-900 bg-zinc-100 border dark:border-white/10 border-black/10 rounded-xl px-4 dark:text-white text-slate-900 focus:outline-none focus:border-primary-start transition-all text-sm font-medium h-12",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "\u20B92L - \u20B910 Lakhs", children: "\u20B92 Lakhs - \u20B910 Lakhs" }),
                    /* @__PURE__ */ jsx("option", { value: "\u20B910L - \u20B925 Lakhs", children: "\u20B910 Lakhs - \u20B925 Lakhs" }),
                    /* @__PURE__ */ jsx("option", { value: "\u20B925L - \u20B950 Lakhs", children: "\u20B925 Lakhs - \u20B950 Lakhs" }),
                    /* @__PURE__ */ jsx("option", { value: "\u20B950L - \u20B91 Crore", children: "\u20B950 Lakhs - \u20B91 Crore" }),
                    /* @__PURE__ */ jsx("option", { value: "\u20B91 Crore+", children: "\u20B91 Crore +" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "message",
                className: "text-[10px] font-black dark:text-slate-400 text-slate-600 uppercase tracking-widest ml-1",
                children: "Specific requirements / Message *"
              }
            ),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                id: "message",
                name: "message",
                required: true,
                rows: 4,
                placeholder: "e.g. Requirement of PUF panel insulation dimensions, custom HVAC system, water parameters, etc.",
                className: "w-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-xl px-4 py-4 dark:text-white text-slate-900 focus:outline-none focus:border-primary-start transition-all resize-none text-sm font-medium placeholder:text-slate-700 min-h-[100px]"
              }
            )
          ] }),
          formState.error && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs font-semibold", children: formState.error }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              disabled: formState.submitting,
              className: `w-full py-5 rounded-xl bg-primary-start dark:text-white text-slate-900 text-[12px] uppercase tracking-widest font-black transition-all hover:brightness-110 active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/20 ${formState.submitting ? "opacity-70 cursor-not-allowed" : ""}`,
              children: formState.submitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("div", { className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" }),
                "Submitting Project Setup enquiry..."
              ] }) : /* @__PURE__ */ jsx(Fragment, { children: "Submit Proposal & Get Consultation" })
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
};
const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378182/Screenshot_2026-02-22_165327_bfm4pv.png",
      category: "Commercial Infrastructure",
      alt: "Commercial Infrastructure Setup Mushroom Farm"
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378071/IMG_6265_svucsm.jpg",
      category: "All Types Mushroom",
      alt: "All Types High Yield Mushroom Farm"
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378173/Screenshot_2026-01-17_125022_nvavd2.png",
      category: "Mushroom Harvesting",
      alt: "Mushroom Harvesting Process Commercial"
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378147/img_5794_tjestw.png",
      category: "Enoki Setup",
      alt: "Indoor Mushroom Farming Enoki Setup"
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378183/Screenshot_2026-01-17_141353_v8rgpt.png",
      category: "Organic Spawn",
      alt: "Organic Quality Spawn Seed Supply"
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777382179/Screenshot_2026-04-24_201116_b29aci.png",
      category: "Commercial Training",
      alt: "Mushroom Farming Training Students Offline"
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378173/Screenshot_2026-01-17_125022_nvavd2.png",
      category: "Harvest Process",
      alt: "Mushroom Harvest India"
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378144/img_9856_er5mbe.png",
      category: "Turnkey Infrastructure",
      alt: "Turnkey Project Mushroom Facility India"
    },
    {
      src: "https://res.cloudinary.com/dtpktdkqw/image/upload/v1777378148/img_6985_inr8qh.png",
      category: "Industrial Compost",
      alt: "Industrial Mushroom Compost Production"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Commercial Organic Mushrooms Farm Gallery | Project Photos & Setup",
        description: "View photos of our commercial button mushroom farm in Katangi Road, Jabalpur, training sessions, and successful turnkey farming project setups across India.",
        url: "/gallery"
      }
    ),
    /* @__PURE__ */ jsx(
      PageHero,
      {
        badge: "Commercial Ecosystem Tour",
        title: "Visualizing Success",
        description: "A glimpse into our commercial farms, expert training sessions, and high-quality organic produce."
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "section-padding pt-0", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: images.map((img, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
        transition: { delay: i * 0.1 },
        className: "group relative aspect-[4/3] rounded-3xl overflow-hidden glass border dark:border-white/10 border-black/10",
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              loading: "lazy",
              src: img.src,
              alt: img.alt,
              className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsx("div", { className: "absolute bottom-6 left-6", children: /* @__PURE__ */ jsx("span", { className: "badge text-[10px]", children: img.category }) }) })
        ]
      },
      i
    )) }) }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
};
const FAQPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const faqs = [
    {
      q: "What is commercial mushroom farming and how to start?",
      a: "Mushroom farming is the white revolution in Indian agriculture. To start commercially, you need a controlled indoor space, quality spawn, and standardized substrate. We provide a complete commercial button mushroom farming course to help you start from scratch."
    },
    {
      q: "How to start commercial mushroom farming in India?",
      a: "Starting mushroom farming in India requires understanding regional climates. You can start with our online mushroom farming training which covers site selection, climate control, and step-by-step SOPs for Pan India and global success."
    },
    {
      q: "What is the cost of commercial mushroom farming setup?",
      a: "A small-scale organic mushrooms farm India setup for beginners starts around \u20B92-5 Lakhs. For commercial units (20T-30T), investment ranges from \u20B915-25 Lakhs. We assist with cost-effective commercial turnkey solutions."
    },
    {
      q: "Do you provide mushroom training in all states of India?",
      a: "Yes, we provide mushroom training in Madhya Pradesh, Maharashtra, Uttar Pradesh, Bihar, Delhi, Rajasthan, Gujarat, Punjab, Haryana, Chhattisgarh, Jharkhand, and all other states across India via our digital platforms and site visits."
    },
    {
      q: "Is online commercial mushroom training available in India?",
      a: "Yes, we offer the most affordable online mushroom training in India for just \u20B9399. It includes lifetime access to commercial video modules, marketing tips, and technical support."
    },
    {
      q: "What is the profit in a commercial mushroom farming business?",
      a: "The commercial mushroom farming business India is highly profitable. With proper management, you can expect an ROI of 70% to 120% per year. Fresh button mushrooms often sell for \u20B9120-180/kg in wholesale markets."
    },
    {
      q: "How much space is required for commercial mushroom farming?",
      a: "For a commercial 18x70 ft room, you need about 1260 sq. ft. of space. However, small home units can start in as little as 100-200 sq. ft."
    },
    {
      q: "Do you provide turnkey farm setup across India & Globally?",
      a: "Yes, we are a leading commercial turnkey project consultant providing farm setup services in MP, Maharashtra, UP, Bihar, across Pan India, and for international clients in USA and Australia."
    },
    {
      q: "Which mushroom is best for commercial beginners?",
      a: "Oyster mushrooms are easiest for beginners due to lower tech requirements. However, Button mushrooms have a much larger market share in India, which we cover in our professional commercial training."
    },
    {
      q: "Is commercial mushroom farming profitable in India?",
      a: "Absolutely. With the rising global demand for organic protein sources, commercial mushroom farming in India is one of the fastest-growing agri-business sectors."
    },
    {
      q: "What government subsidies are available?",
      a: "Various state governments and the National Horticulture Board (NHB) provide 40-50% subsidies for industrial mushroom units. We provide full documentation support for your subsidy application."
    },
    {
      q: "Where can I sell my commercial harvested mushrooms?",
      a: "We provide global and domestic market linkage support. You can sell to local wholesale markets, hotels, supermarkets, or through our network of verified commercial B2B buyers across India and abroad."
    },
    {
      q: "\u092A\u0941\u0923\u094D\u092F\u093E\u092E\u0927\u094D\u092F\u0947 \u092E\u0936\u0930\u0942\u092E \u0936\u0947\u0924\u0940 \u0938\u0941\u0930\u0942 \u0915\u0930\u0923\u094D\u092F\u093E\u0938\u093E\u0920\u0940 \u0915\u093F\u0924\u0940 \u0917\u0941\u0902\u0924\u0935\u0923\u0942\u0915 \u0932\u093E\u0917\u0924\u0947?",
      a: "\u092A\u0941\u0923\u094D\u092F\u093E\u0924 \u092E\u0936\u0930\u0942\u092E \u0936\u0947\u0924\u0940 \u0938\u0941\u0930\u0942 \u0915\u0930\u0923\u094D\u092F\u093E\u0938\u093E\u0920\u0940 \u0932\u093E\u0917\u0923\u093E\u0930\u0940 \u0917\u0941\u0902\u0924\u0935\u0923\u0942\u0915 \u0924\u0941\u092E\u091A\u094D\u092F\u093E \u0938\u094D\u0924\u0930\u093E\u0935\u0930 (scale) \u0905\u0935\u0932\u0902\u092C\u0942\u0928 \u0905\u0938\u0924\u0947. \u0918\u0930\u0917\u0941\u0924\u0940 \u0938\u094D\u0924\u0930\u093E\u0935\u0930 (Small scale) \u0924\u0941\u092E\u094D\u0939\u0940 \u092B\u0915\u094D\u0924 \u20B910,000 \u0924\u0947 \u20B925,000 \u092E\u0927\u094D\u092F\u0947 \u0911\u092F\u0938\u094D\u091F\u0930 \u092E\u0936\u0930\u0942\u092E \u0915\u0932\u094D\u091F\u093F\u0935\u094D\u0939\u0947\u0936\u0928 \u0938\u0941\u0930\u0942 \u0915\u0930\u0942 \u0936\u0915\u0924\u093E. \u0935\u094D\u092F\u093E\u0935\u0938\u093E\u092F\u093F\u0915 \u0938\u094D\u0924\u0930\u093E\u0935\u0930 (Commercial Unit Setup) \u0939\u0947 \u0938\u0941\u0930\u0942 \u0915\u0930\u0923\u094D\u092F\u093E\u0938\u093E\u0920\u0940 \u20B91.5 \u0932\u093E\u0916 \u0924\u0947 \u20B95 \u0932\u093E\u0916 \u0915\u093F\u0902\u0935\u093E \u0924\u094D\u092F\u093E\u0939\u0942\u0928 \u0905\u0927\u093F\u0915 \u0917\u0941\u0902\u0924\u0935\u0923\u0942\u0915 \u0932\u093E\u0917\u0924\u0947."
    },
    {
      q: "Pune mushroom farming training center near me?",
      a: "\u091C\u0930 \u0924\u0941\u092E\u094D\u0939\u0940 \u092A\u0941\u0923\u0947, \u092A\u093F\u0902\u092A\u0930\u0940-\u091A\u093F\u0902\u091A\u0935\u0921 \u0915\u093F\u0902\u0935\u093E \u0906\u0938\u092A\u093E\u0938\u091A\u094D\u092F\u093E \u092D\u093E\u0917\u093E\u0924 \u0909\u0924\u094D\u0915\u0943\u0937\u094D\u091F \u092A\u094D\u0930\u0936\u093F\u0915\u094D\u0937\u0923 \u0915\u0947\u0902\u0926\u094D\u0930 \u0936\u094B\u0927\u0924 \u0905\u0938\u093E\u0932, \u0924\u0930 'Organic Mushrooms Farm' \u0939\u0947 \u0938\u0930\u094D\u0935\u093E\u0924 \u0935\u093F\u0936\u094D\u0935\u0938\u0928\u0940\u092F \u0928\u093E\u0935 \u0906\u0939\u0947. \u0906\u092E\u094D\u0939\u0940 \u0938\u0902\u092A\u0942\u0930\u094D\u0923 \u0915\u0932\u094D\u091F\u093F\u0935\u094D\u0939\u0947\u0936\u0928, \u0938\u094D\u092A\u0949\u0928 \u092C\u0928\u0935\u0923\u0947, \u092E\u093E\u0930\u094D\u0915\u0947\u091F\u093F\u0902\u0917 \u0906\u0923\u093F \u092C\u0901\u0915 \u0938\u092C\u0938\u093F\u0921\u0940 \u0915\u0928\u094D\u0938\u0932\u094D\u091F\u0928\u094D\u0938\u0940\u091A\u0947 \u0911\u0928\u0932\u093E\u0908\u0928 \u0935 \u0911\u092B\u0932\u093E\u0908\u0928 \u092A\u094D\u0930\u0945\u0915\u094D\u091F\u093F\u0915\u0932 \u091F\u094D\u0930\u0947\u0928\u093F\u0902\u0917 \u0926\u0947\u0924\u094B."
    },
    {
      q: "\u0911\u0928\u0932\u093E\u0908\u0928 \u092E\u0936\u0930\u0942\u092E \u092A\u094D\u0930\u0936\u093F\u0915\u094D\u0937\u0923 \u0909\u092A\u0932\u092C\u094D\u0927 \u0906\u0939\u0947 \u0915\u093E?",
      a: "\u0939\u094B\u092F! \u0906\u092E\u091A\u0947 \u0905\u0924\u093F\u0936\u092F \u0938\u0935\u093F\u0938\u094D\u0924\u0930 \u0921\u093F\u091C\u093F\u091F\u0932 \u0911\u0928\u0932\u093E\u0908\u0928 \u092E\u0936\u0930\u0942\u092E \u092A\u094D\u0930\u0936\u093F\u0915\u094D\u0937\u0923 \u092A\u0941\u0923\u094D\u092F\u093E\u0924 \u0918\u0930\u092C\u0938\u0932\u094D\u092F\u093E \u0909\u092A\u0932\u092C\u094D\u0927 \u0906\u0939\u0947. \u0905\u0935\u0918\u094D\u092F\u093E \u20B9399 \u092E\u0927\u094D\u092F\u0947 \u0932\u093E\u0908\u092B\u091F\u093E\u0908\u092E \u0935\u094D\u0939\u093F\u0921\u093F\u0913 \u0972\u0915\u094D\u0938\u0947\u0938, \u091F\u094D\u0930\u0947\u0928\u093F\u0902\u0917 \u0938\u0930\u094D\u091F\u093F\u092B\u093F\u0915\u0947\u091F \u0906\u0923\u093F \u0924\u091C\u094D\u091C\u094D\u091E \u091F\u0940\u092E\u091A\u093E \u0935\u094D\u0939\u0949\u091F\u094D\u0938\u0972\u092A \u0938\u092A\u094B\u0930\u094D\u091F \u0926\u093F\u0932\u093E \u091C\u093E\u0924\u094B."
    },
    {
      q: "\u0911\u092B\u0932\u093E\u0907\u0928 \u092A\u094D\u0930\u0945\u0915\u094D\u091F\u093F\u0915\u0932 \u092A\u094D\u0930\u0936\u093F\u0915\u094D\u0937\u0923 \u0926\u093F\u0932\u0947 \u091C\u093E\u0924\u0947 \u0915\u093E?",
      a: "\u0939\u094B\u092F, \u0925\u0947\u091F \u092A\u094D\u0930\u0945\u0915\u094D\u091F\u093F\u0915\u0932 \u0906\u0923\u093F \u0939\u093E\u0924\u093E\u0928\u0947 \u0915\u093E\u092E \u0915\u0930\u0942\u0928 \u0936\u093F\u0915\u0923\u094D\u092F\u093E\u0938\u093E\u0920\u0940 \u0906\u092E\u091A\u0947 \u092E\u0941\u0916\u094D\u092F \u0915\u0932\u094D\u091F\u093F\u0935\u094D\u0939\u0947\u0936\u0928 \u092B\u093E\u0930\u094D\u092E \u0909\u092A\u0932\u092C\u094D\u0927 \u0906\u0939\u0947, \u091C\u093F\u0925\u0947 \u0930\u093E\u0939\u0923\u094D\u092F\u093E\u091A\u0940 \u0906\u0923\u093F \u091C\u0947\u0935\u0923\u093E\u091A\u0940 \u0938\u0930\u094D\u0935 \u0938\u094B\u092F\u0940\u0902\u092F\u0941\u0915\u094D\u0924 \u0935\u094D\u092F\u0935\u0938\u094D\u0925\u093E \u0915\u0947\u0932\u0940 \u091C\u093E\u0924\u0947."
    },
    {
      q: "Oyster Mushroom Farming in Pune profitable \u0906\u0939\u0947 \u0915\u093E?",
      a: "\u0939\u094B\u092F, \u092A\u0941\u0923\u094D\u092F\u093E\u0924 \u0911\u092F\u0938\u094D\u091F\u0930 \u092E\u0936\u0930\u0942\u092E \u0936\u0947\u0924\u0940 \u0905\u0924\u094D\u092F\u0902\u0924 \u092B\u093E\u092F\u0926\u0947\u0936\u0940\u0930 (highly profitable) \u0906\u0939\u0947. \u092A\u0941\u0923\u094D\u092F\u093E\u0924 \u0905\u0938\u0923\u093E\u0931\u094D\u092F\u093E \u092E\u094B\u0920\u094D\u092F\u093E \u0939\u0949\u091F\u0947\u0932\u094D\u0938, \u0930\u0947\u0938\u094D\u091F\u0949\u0930\u0902\u091F\u094D\u0938 \u0906\u0923\u093F \u0906\u0930\u094B\u0917\u094D\u092F\u093E\u0935\u093F\u0937\u092F\u0940 \u091C\u093E\u0917\u0930\u0942\u0915 \u0932\u094B\u0915\u093E\u0902\u091A\u094D\u092F\u093E \u0935\u093E\u0922\u0924\u094D\u092F\u093E \u0938\u0902\u0916\u094D\u092F\u0947\u092E\u0941\u0933\u0947 \u0924\u093E\u091C\u094D\u092F\u093E \u0906\u0923\u093F \u0938\u0941\u0915\u094D\u092F\u093E \u0911\u092F\u0938\u094D\u091F\u0930 \u092E\u0936\u0930\u0942\u092E\u0932\u093E \u0916\u0942\u092A \u091A\u093E\u0902\u0917\u0932\u093E \u092C\u093E\u091C\u093E\u0930\u092D\u093E\u0935 \u092E\u093F\u0933\u0924\u094B."
    },
    {
      q: "Mushroom Spawn Supplier in Pune \u0915\u0941\u0920\u0947 \u092E\u093F\u0933\u0947\u0932?",
      a: "Organic Mushrooms Farm \u092A\u0941\u0923\u0947 \u0906\u0923\u093F \u0906\u0938\u092A\u093E\u0938\u091A\u094D\u092F\u093E \u0938\u0930\u094D\u0935 \u091C\u093F\u0932\u094D\u0939\u094D\u092F\u093E\u0902\u092E\u0927\u094D\u092F\u0947 \u0909\u091A\u094D\u091A \u092A\u094D\u0930\u0924\u0940\u091A\u0947, \u0932\u0945\u092C-\u0938\u0930\u094D\u091F\u093F\u092B\u093E\u0907\u0921 \u0906\u0923\u093F \u0926\u0930\u094D\u091C\u0947\u0926\u093E\u0930 \u092E\u0936\u0930\u0942\u092E \u0938\u094D\u092A\u0949\u0928 (Oyster, Milky, Button & Medicinal F1 Spawn) \u0918\u0930\u092A\u094B\u091A \u0921\u093F\u0932\u093F\u0935\u094D\u0939\u0930\u0940 \u0926\u094D\u0935\u093E\u0930\u0947 \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924\u092A\u0923\u0947 \u092A\u0941\u0930\u0935\u0924\u0947."
    },
    {
      q: "Button Mushroom Farming Pune \u092E\u0927\u094D\u092F\u0947 \u0915\u0930\u0924\u093E \u092F\u0947\u0924\u0947 \u0915\u093E?",
      a: "\u0939\u094B\u092F, \u092A\u0941\u0923\u094D\u092F\u093E\u0924 \u092C\u091F\u0928 \u092E\u0936\u0930\u0942\u092E \u0915\u0932\u094D\u091F\u093F\u0935\u094D\u0939\u0947\u0936\u0928 \u0938\u0939\u091C \u0936\u0915\u094D\u092F \u0906\u0939\u0947. \u0909\u0928\u094D\u0939\u093E\u0933\u094D\u092F\u093E\u0924 \u092F\u093E\u0938\u093E\u0920\u0940 \u090F\u0938\u0940 \u0915\u093F\u0902\u0935\u093E \u0924\u093E\u092A\u092E\u093E\u0928 \u0928\u093F\u092F\u0902\u0924\u094D\u0930\u093F\u0924 \u0915\u0930\u0923\u094D\u092F\u093E\u0938\u093E\u0920\u0940 \u0916\u093E\u0938 \u0907\u0928\u094D\u0938\u0941\u0932\u0947\u0936\u0928 \u0930\u0942\u092E\u091A\u0940 \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E \u0905\u0938\u0924\u0947, \u0924\u0930 \u0939\u093F\u0935\u093E\u0933\u094D\u092F\u093E\u091A\u094D\u092F\u093E \u092E\u094B\u0938\u092E\u093E\u0924 \u0939\u0947 \u0905\u0917\u0926\u0940 \u0928\u0948\u0938\u0930\u094D\u0917\u093F\u0915 \u0935\u093E\u0924\u093E\u0935\u0930\u0923\u093E\u0924\u0939\u0940 \u0909\u0924\u094D\u0924\u092E \u092A\u094D\u0930\u0915\u093E\u0930\u0947 \u0918\u0947\u0924\u093E \u092F\u0947\u0924\u0947."
    },
    {
      q: "Milky Mushroom cultivation Maharashtra \u0938\u093E\u0920\u0940 \u092F\u094B\u0917\u094D\u092F \u0906\u0939\u0947 \u0915\u093E?",
      a: "\u0939\u094B\u092F, \u092E\u093F\u0932\u094D\u0915\u0940 \u092E\u0936\u0930\u0942\u092E \u0909\u0937\u094D\u0923 \u0939\u0935\u093E\u092E\u093E\u0928\u093E\u092E\u0927\u094D\u092F\u0947 \u0935\u0947\u0917\u093E\u0928\u0947 \u0935\u093E\u0922\u0923\u093E\u0930\u0947 \u0905\u0938\u0932\u094D\u092F\u093E\u092E\u0941\u0933\u0947 \u092E\u0939\u093E\u0930\u093E\u0937\u094D\u091F\u094D\u0930\u093E\u0924\u0940\u0932 \u0906\u0923\u093F \u092A\u0941\u0923\u094D\u092F\u093E\u091A\u094D\u092F\u093E \u0909\u0928\u094D\u0939\u093E\u0933\u094D\u092F\u093E\u091A\u094D\u092F\u093E \u0939\u0935\u093E\u092E\u093E\u0928\u093E\u0938\u093E\u0920\u0940 \u0939\u0947 \u0915\u0932\u094D\u091F\u093F\u0935\u094D\u0939\u0947\u0936\u0928 \u0905\u0924\u094D\u092F\u0902\u0924 \u0909\u0924\u094D\u0924\u092E \u0906\u0923\u093F \u092B\u093E\u092F\u0926\u0947\u0936\u0940\u0930 \u092E\u093E\u0928\u0932\u0947 \u091C\u093E\u0924\u0947."
    },
    {
      q: "Medicinal Mushroom Training \u0909\u092A\u0932\u092C\u094D\u0927 \u0906\u0939\u0947 \u0915\u093E?",
      a: "\u0939\u094B\u092F, \u0906\u092E\u094D\u0939\u0940 Cordyceps Militaris (\u0915\u093F\u0921\u093E \u091C\u0921\u0940), Reishi (\u0917\u0945\u0928\u094B\u0921\u0930\u094D\u092E\u093E), Lion's Mane, \u0906\u0923\u093F Turkey Tail \u0938\u093E\u0930\u0916\u094D\u092F\u093E \u0905\u0924\u094D\u092F\u0902\u0924 \u092E\u094C\u0932\u094D\u092F\u0935\u093E\u0928 \u092E\u0947\u0921\u093F\u0938\u093F\u0928\u0932 \u092E\u0936\u0930\u0942\u092E\u091A\u0947 \u0939\u093E\u092F-\u091F\u0947\u0915 \u0915\u0932\u094D\u091F\u093F\u0935\u094D\u0939\u0947\u0936\u0928 \u092A\u094D\u0930\u0936\u093F\u0915\u094D\u0937\u0923 \u0906\u0923\u093F \u092A\u094D\u0930\u0945\u0915\u094D\u091F\u093F\u0915\u0932 \u092E\u093E\u0930\u094D\u0917\u0926\u0930\u094D\u0936\u0928 \u0926\u0947\u0924\u094B."
    },
    {
      q: "Lion\u2019s Mane Mushroom cultivation \u0915\u0938\u0947 \u0938\u0941\u0930\u0942 \u0915\u0930\u093E\u0935\u0947?",
      a: "Lion's Mane \u0939\u0947 \u092C\u094D\u0930\u0947\u0928 \u0939\u0947\u0932\u094D\u0925\u0938\u093E\u0920\u0940 \u0905\u0924\u094D\u092F\u0902\u0924 \u0917\u0941\u0923\u0915\u093E\u0930\u0940 \u092E\u0936\u0930\u0942\u092E \u0906\u0939\u0947. \u0939\u0947 \u0932\u093E\u0915\u0921\u093E\u091A\u094D\u092F\u093E \u092D\u0941\u0936\u093E\u092A\u093E\u0938\u0942\u0928 (sawdust blocks) \u092C\u0928\u0935\u0932\u0947\u0932\u094D\u092F\u093E \u0938\u092C\u0938\u094D\u091F\u094D\u0930\u0947\u091F \u092C\u0945\u0917\u094D\u0938\u092E\u0927\u094D\u092F\u0947 \u0928\u093F\u092F\u0902\u0924\u094D\u0930\u093F\u0924 \u0924\u093E\u092A\u092E\u093E\u0928 \u0906\u0923\u093F \u0906\u0930\u094D\u0926\u094D\u0930\u0924\u0947\u092E\u0927\u094D\u092F\u0947 \u0915\u0932\u094D\u091F\u093F\u0935\u094D\u0939\u0947\u091F \u0915\u0947\u0932\u0947 \u091C\u093E\u0924\u0947. \u0906\u092E\u091A\u0947 \u091F\u094D\u0930\u0947\u0928\u093F\u0902\u0917 \u092F\u093E \u0915\u0932\u094D\u091F\u093F\u0935\u094D\u0939\u0947\u0936\u0928\u091A\u0940 \u092A\u0930\u093F\u092A\u0942\u0930\u094D\u0923 \u0924\u093E\u0902\u0924\u094D\u0930\u093F\u0915 \u092E\u093E\u0939\u093F\u0924\u0940 \u0915\u0935\u094D\u0939\u0930 \u0915\u0930\u0924\u0947."
    },
    {
      q: "Reishi Mushroom business profitable \u0906\u0939\u0947 \u0915\u093E?",
      a: "\u0939\u094B\u092F, \u0914\u0937\u0927\u0940 \u0917\u0941\u0923\u093E\u0902\u092E\u0941\u0933\u0947 \u0938\u0941\u0915\u094D\u092F\u093E \u0930\u0940\u0936\u0940 \u092E\u0936\u0930\u0942\u092E\u0932\u093E \u0935\u0947\u0932\u0928\u0947\u0938 \u0907\u0902\u0921\u0938\u094D\u091F\u094D\u0930\u0940\u0924 \u20B93,000 \u0924\u0947 \u20B98,000 \u092A\u094D\u0930\u0924\u093F \u0915\u093F\u0932\u094B\u092A\u0930\u094D\u092F\u0902\u0924\u091A\u093E \u0909\u091A\u094D\u091A \u092C\u093E\u091C\u093E\u0930\u092D\u093E\u0935 \u092E\u093F\u0933\u0924\u094B, \u091C\u094D\u092F\u093E\u092E\u0941\u0933\u0947 \u0930\u0940\u0936\u0940 \u092E\u0936\u0930\u0942\u092E \u0935\u094D\u092F\u0935\u0938\u093E\u092F \u0905\u0924\u093F\u0936\u092F \u092B\u093E\u092F\u0926\u0947\u0936\u0940\u0930 \u0920\u0930\u0924\u094B."
    },
    {
      q: "Mushroom farm setup cost \u0915\u093F\u0924\u0940 \u092F\u0947\u0924\u0947?",
      a: "\u0932\u0939\u093E\u0928 \u0918\u0930\u0917\u0941\u0924\u0940 \u092B\u093E\u0930\u094D\u092E \u0938\u0947\u091F\u0905\u092A\u0938\u093E\u0920\u0940 \u20B915,000 \u0924\u0947 \u20B925,000 \u092A\u0930\u094D\u092F\u0902\u0924 \u0924\u0930 \u092E\u094B\u0920\u094D\u092F\u093E \u0914\u0926\u094D\u092F\u094B\u0917\u093F\u0915 \u0935\u094D\u092F\u093E\u0935\u0938\u093E\u092F\u093F\u0915 \u092A\u094D\u0930\u0915\u0932\u094D\u092A\u093E\u0902\u0938\u093E\u0920\u0940 (Commercial Turnkey setups) \u20B92 \u0932\u093E\u0916\u093E\u0902\u092A\u093E\u0938\u0942\u0928 \u092A\u0941\u0922\u0947 \u0916\u0930\u094D\u091A \u092F\u0947\u0924\u094B, \u091C\u094D\u092F\u093E\u092E\u0927\u094D\u092F\u0947 \u092C\u0901\u0915 \u0938\u092C\u0938\u093F\u0921\u0940 \u0926\u0947\u0916\u0940\u0932 \u092E\u093F\u0933\u0924\u0947."
    },
    {
      q: "Government subsidy available for mushroom farming?",
      a: "\u0939\u094B\u092F, \u0915\u0947\u0902\u0926\u094D\u0930 \u0935 \u0930\u093E\u091C\u094D\u092F \u0938\u0930\u0915\u093E\u0930\u091A\u094D\u092F\u093E \u0915\u0943\u0937\u0940 \u092F\u094B\u091C\u0928\u093E\u0902\u0924\u0930\u094D\u0917\u0924 (NABARD / NHB \u0926\u094D\u0935\u093E\u0930\u0947) \u092E\u0936\u0930\u0942\u092E \u0936\u0947\u0924\u0940\u0938\u093E\u0920\u0940 \u0936\u0947\u0924\u0915\u0931\u094D\u092F\u093E\u0902\u0928\u093E \u0906\u0923\u093F \u0928\u0935\u0909\u0926\u094D\u092F\u094B\u091C\u0915\u093E\u0902\u0928\u093E 40% \u0924\u0947 50% \u092A\u0930\u094D\u092F\u0902\u0924 \u0936\u093E\u0938\u0915\u0940\u092F \u0938\u092C\u0938\u093F\u0921\u0940 \u0909\u092A\u0932\u092C\u094D\u0927 \u0906\u0939\u0947."
    },
    {
      q: "Mushroom consultancy services available?",
      a: "\u0939\u094B\u092F, \u0906\u092E\u091A\u0940 \u0938\u0902\u0938\u094D\u0925\u093E \u0935\u094D\u092F\u093E\u0935\u0938\u093E\u092F\u093F\u0915 \u0936\u0947\u0921 \u092A\u094D\u0932\u0945\u0928\u093F\u0902\u0917, \u0935\u094D\u0939\u0947\u0902\u091F\u093F\u0932\u0947\u0936\u0928 \u0921\u093F\u091D\u093E\u0907\u0928, \u0924\u093E\u092A\u092E\u093E\u0928 \u092F\u0902\u0924\u094D\u0930\u0923\u093E \u0909\u092D\u093E\u0930\u0923\u0940, \u092A\u0940\u0915 \u0938\u0902\u0930\u0915\u094D\u0937\u0923 (disease management) \u0906\u0923\u093F \u0939\u092E\u0916\u093E\u0938 \u0909\u0924\u094D\u092A\u0928\u094D\u0928\u093E\u0938\u093E\u0920\u0940 \u0935\u0930\u094D\u0937\u092D\u0930 \u0924\u091C\u094D\u091C\u094D\u091E \u0915\u0928\u094D\u0938\u0932\u094D\u091F\u0928\u094D\u0938\u0940 \u0938\u0947\u0935\u093E \u092A\u0941\u0930\u0935\u0924\u0947."
    },
    {
      q: "Fresh and dry mushroom business \u0915\u0938\u093E \u0938\u0941\u0930\u0942 \u0915\u0930\u093E\u0935\u093E?",
      a: "\u0924\u0941\u092E\u094D\u0939\u0940 \u0924\u093E\u091C\u094D\u092F\u093E \u092E\u0936\u0930\u0942\u092E\u0938\u093E\u0920\u0940 \u0938\u094D\u0925\u093E\u0928\u093F\u0915 \u0939\u0949\u091F\u0947\u0932\u094D\u0938 \u0935 \u092D\u093E\u091C\u0940 \u092E\u0902\u0921\u0908 \u091F\u093E\u0930\u094D\u0917\u0947\u091F \u0915\u0930\u0942 \u0936\u0915\u0924\u093E. \u0924\u0938\u0947\u091A \u0930\u093E\u0939\u093F\u0932\u0947\u0932\u0947 \u092E\u0936\u0930\u0942\u092E \u0935\u093E\u0933\u0935\u0942\u0928 \u0921\u094D\u0930\u093E\u092F \u092E\u0936\u0930\u0942\u092E \u092E\u094D\u0939\u0923\u0942\u0928 \u0925\u0947\u091F \u092B\u093E\u0930\u094D\u092E\u093E \u0915\u0902\u092A\u0928\u094D\u092F\u093E \u0915\u093F\u0902\u0935\u093E B2B \u0921\u0940\u0932\u0930\u094D\u0938\u0928\u093E \u091A\u093E\u0902\u0917\u0932\u094D\u092F\u093E \u0928\u092B\u094D\u092F\u093E\u0924 \u0935\u093F\u0915\u0942 \u0936\u0915\u0924\u093E. \u0915\u0932\u094D\u091F\u093F\u0935\u094D\u0939\u0947\u0936\u0928\u092A\u093E\u0938\u0942\u0928 \u0935\u093F\u0915\u094D\u0930\u0940\u092A\u0930\u094D\u092F\u0902\u0924\u091A\u0940 \u0938\u0902\u092A\u0942\u0930\u094D\u0923 \u0926\u093F\u0936\u093E \u0906\u092E\u094D\u0939\u0940 \u0906\u092E\u091A\u094D\u092F\u093E \u091F\u094D\u0930\u0947\u0928\u093F\u0902\u0917\u092E\u0927\u094D\u092F\u0947 \u0938\u094D\u092A\u0937\u094D\u091F \u0915\u0930\u0924\u094B."
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Commercial Mushroom Farming FAQ | Training & Farm Setup Help",
        description: "Find answers to frequently asked questions about commercial mushroom farming in India. Learn about setup costs, training in MP, UP, Bihar, Maharashtra, and how to start a profitable business.",
        url: "/faq"
      }
    ),
    /* @__PURE__ */ jsx(
      PageHero,
      {
        badge: "Direct Commercial Answers",
        title: "Frequently Asked Questions",
        description: "Providing expert commercial guidance on mushroom farming training and business setups across Pan India & Globally."
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "section-padding pt-0 pb-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4", children: [
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs.map((faq, i) => /* @__PURE__ */ jsx(Collapsible, { title: faq.q, children: /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600 leading-relaxed", children: faq.a }) }, i)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 glass p-8 rounded-3xl border dark:border-white/10 border-black/10 text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "dark:text-white text-slate-900 font-bold mb-4", children: "Still have commercial setup questions?" }),
        /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600 text-sm mb-6", children: "Our global experts are available for a consultation." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-center gap-4", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: "btn-primary px-8 py-3 rounded-xl font-bold",
              children: "Contact Us"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://wa.me/919203544140",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "btn-outline px-8 py-3 rounded-xl font-bold",
              children: "WhatsApp Now"
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section-padding dark:bg-white/5 bg-black/5", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "dark:text-white text-slate-900 font-bold mb-8 uppercase tracking-widest text-sm", children: "Serving Pan India & Global Markets" }),
      /* @__PURE__ */ jsxs("p", { className: "text-slate-500 text-xs leading-relaxed max-w-4xl mx-auto", children: [
        "Our commercial mushroom training and turnkey setup services are available in Madhya Pradesh, Maharashtra, Uttar Pradesh, Bihar, Delhi, \u0930\u093E\u091C\u0938\u094D\u0925\u093E\u0928, \u0917\u0941\u091C\u0930\u093E\u0924, \u092A\u0902\u091C\u093E\u092C, \u0939\u0930\u093F\u092F\u093E\u0923\u093E, \u091B\u0924\u094D\u0924\u0940\u0938\u0917\u0922\u093C, \u091D\u093E\u0930\u0916\u0902\u0921, \u092A\u0936\u094D\u091A\u093F\u092E \u092C\u0902\u0917\u093E\u0932, \u0909\u0924\u094D\u0924\u0930\u093E\u0916\u0902\u0921, \u0914\u0930 \u0905\u0928\u094D\u092F \u0938\u092D\u0940 \u0930\u093E\u091C\u094D\u092F\u094B\u0902 \u092E\u0947\u0902\u0964 We are committed to fostering the biggest",
        " ",
        /* @__PURE__ */ jsx("strong", { children: "commercial organic mushrooms farm India" }),
        " network worldwide."
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
};
const TermsOfServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Terms of Service | Organic Mushrooms Farm",
        description: "Our standardized commercial service agreement and terms for cooperative training sessions, global spawn trade, and turnkey projects.",
        url: "/terms"
      }
    ),
    /* @__PURE__ */ jsx(
      PageHero,
      {
        badge: "Legal",
        title: "Terms of Service",
        description: "Our standardized commercial service agreement for training and farm setups."
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "section-padding pt-0 pb-32", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4 prose prose-invert", children: /* @__PURE__ */ jsxs("div", { className: "glass p-8 md:p-12 rounded-[2.5rem] border dark:border-white/10 border-black/10", children: [
      /* @__PURE__ */ jsx("h2", { className: "dark:text-white text-slate-900", children: "1. Commercial Service Agreement" }),
      /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600", children: "By enrolling in our training programs or contracting our commercial farm setup services, you agree to abide by the terms and conditions outlined below. Organic Mushrooms Farm provides technical consultancy and educational resources for mushroom farming business success." }),
      /* @__PURE__ */ jsx("h2", { className: "dark:text-white text-slate-900 mt-10", children: "2. Payment Terms" }),
      /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600", children: "Our current pricing for training is standardized at \u20B9399 for Online access and \u20B93000 for Offline practical workshops. Commercial Turnkey project payments are structured in phases as per the project quotation provided." }),
      /* @__PURE__ */ jsx("h2", { className: "dark:text-white text-slate-900 mt-10", children: "3. No Refund Policy" }),
      /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600", children: "Due to the digital nature of training materials and the resource allocation required for commercial workshops, all payments for training and consultancy are non-refundable. Please ensure your suitability for the program before making payments." }),
      /* @__PURE__ */ jsx("h2", { className: "dark:text-white text-slate-900 mt-10", children: "4. User Responsibilities" }),
      /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600", children: "Users are responsible for maintaining the confidentiality of their training portal access. For commercial farm setups, the client must ensure site readiness and electricity requirements as per our technical specifications." }),
      /* @__PURE__ */ jsx("h2", { className: "dark:text-white text-slate-900 mt-10", children: "5. Limitation of Liability" }),
      /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600", children: "While we provide high-precision SOPs and infrastructure, biological yields depend on local commercial management. Organic Mushrooms Farm is not liable for fluctuations in biological yields or market price changes of mushrooms globally." }),
      /* @__PURE__ */ jsx("h2", { className: "dark:text-white text-slate-900 mt-10", children: "6. Governing Law" }),
      /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600", children: "These terms are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Jabalpur, Madhya Pradesh." })
    ] }) }) })
  ] });
};
const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Privacy Policy | Organic Mushrooms Farm",
        description: "Read our privacy policy about how we protect your personal and commercial data at Organic Mushrooms Farm.",
        url: "/privacy"
      }
    ),
    /* @__PURE__ */ jsx(
      PageHero,
      {
        badge: "Legal",
        title: "Privacy Policy",
        description: "How we collect, use, and protect your commercial data."
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "section-padding pt-0 pb-32", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4 prose prose-invert", children: /* @__PURE__ */ jsxs("div", { className: "glass p-8 md:p-12 rounded-[2.5rem] border dark:border-white/10 border-black/10", children: [
      /* @__PURE__ */ jsx("h2", { className: "dark:text-white text-slate-900", children: "1. Data Collection" }),
      /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600", children: "We collect personal information such as your name, phone number, and email address when you register for commercial training, fill out an enquiry form, or contact us via WhatsApp." }),
      /* @__PURE__ */ jsx("h2", { className: "dark:text-white text-slate-900 mt-10", children: "2. How We Use Data" }),
      /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600", children: "Your data is used to provide training access, respond to commercial consultancy queries, and send relevant updates about mushroom farming market trends globally. We do not sell your data to third parties." }),
      /* @__PURE__ */ jsx("h2", { className: "dark:text-white text-slate-900 mt-10", children: "3. Data Protection" }),
      /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600", children: "We implement industry-standard security measures to protect your commercial information from unauthorized access or alteration." }),
      /* @__PURE__ */ jsx("h2", { className: "dark:text-white text-slate-900 mt-10", children: "4. Third-Party Tools" }),
      /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600", children: "We use trusted third-party tools like WhatsApp for communication and Razorpay for secure payment processing. Each has its own privacy policy which you should review separately." }),
      /* @__PURE__ */ jsx("h2", { className: "dark:text-white text-slate-900 mt-10", children: "5. Cookies Usage" }),
      /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600", children: "Our website uses cookies to enhance your browsing experience and analyze site traffic. You can choose to disable cookies in your browser settings." }),
      /* @__PURE__ */ jsx("h2", { className: "dark:text-white text-slate-900 mt-10", children: "6. Contact Info" }),
      /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600", children: "If you have any questions regarding your privacy, please contact us at support@organicmushroomsfarm.com or call us at +91 9203544140." })
    ] }) }) })
  ] });
};
const RefundPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Refund Policy",
        description: "Review the refund terms and conditions for training programs, consultancy, and turnkey commercial projects at Organic Mushrooms Farm.",
        url: "/refund-policy"
      }
    ),
    /* @__PURE__ */ jsx(
      PageHero,
      {
        badge: "Legal & Trust",
        title: "Refund Policy & Guarantee",
        description: "Transparent parameters for enrollment, consultancy credits, and project setup services."
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "section-padding pt-0 pb-32", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4 prose prose-invert", children: /* @__PURE__ */ jsxs("div", { className: "glass p-8 md:p-12 rounded-[2.5rem] border dark:border-white/10 border-black/10", children: [
      /* @__PURE__ */ jsx("h2", { className: "dark:text-white text-slate-900", children: "1. Digital Training & Course Materials" }),
      /* @__PURE__ */ jsxs("p", { className: "dark:text-slate-400 text-slate-600", children: [
        "Our Online Commercial Mushroom Training (priced at \u20B9399) provides instant access to proprietary video modules, premium SOP catalogs, and lifetime documentation resources. Because these materials are instantly downloadable and copyable, all payments for digital courses are ",
        /* @__PURE__ */ jsx("strong", { children: "strict and non-refundable" }),
        "."
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "dark:text-white text-slate-900 mt-10", children: "2. Practical Workshops" }),
      /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600", children: "For our intensive 1-day offline workshops at Jabalpur (priced at \u20B93000), we reserve seats and pre-order study kits/substrate ingredients. Cancellations requested over 72 hours prior to the event will be eligible for rescheduling to a future date at zero cost, but they are not eligible for cash refunds." }),
      /* @__PURE__ */ jsx("h2", { className: "dark:text-white text-slate-900 mt-10", children: "3. Commercial Turnkey Projects" }),
      /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600", children: "Milestone payments made for climate-controlled PUF panel structures, Daikin refrigeration design, and industrial HVAC installations are guided by custom contracts. Once procurement is completed as per specifications, those specialized milestones are binding and non-refundable." }),
      /* @__PURE__ */ jsx("h2", { className: "dark:text-white text-slate-900 mt-10", children: "4. Support & Handholding Guarantee" }),
      /* @__PURE__ */ jsxs("p", { className: "dark:text-slate-400 text-slate-600", children: [
        "While biological yields are management-dependent, we offer a",
        " ",
        /* @__PURE__ */ jsx("strong", { children: "100% Support Guarantee" }),
        ". If your G1 spawn gets contaminated due to a technical lapse in our guide materials, we will replace the spawn batch absolutely free of charge."
      ] })
    ] }) }) })
  ] });
};
const ShippingPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Shipping Policy",
        description: "Learn about the shipping and delivery guidelines of premium mushroom spawn (seed) and industrial farming equipment at Organic Mushrooms Farm.",
        url: "/shipping-policy"
      }
    ),
    /* @__PURE__ */ jsx(
      PageHero,
      {
        badge: "Logistics & Delivery",
        title: "Spawn Shipping & Logistics",
        description: "How we safely package and ship high-grade G1 mushroom seed and equipment globally."
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "section-padding pt-0 pb-32", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4 prose prose-invert", children: /* @__PURE__ */ jsxs("div", { className: "glass p-8 md:p-12 rounded-[2.5rem] border dark:border-white/10 border-black/10", children: [
      /* @__PURE__ */ jsx("h2", { className: "dark:text-white text-slate-900", children: "1. Cold Chain & Insulated Packaging" }),
      /* @__PURE__ */ jsxs("p", { className: "dark:text-slate-400 text-slate-600", children: [
        "Our First-Generation (G1) premium quality, certified mushroom spawn is a living organism. To maintain viability and prevent high-temperature exposure during transit, all spawn batches are packed in",
        " ",
        /* @__PURE__ */ jsx("strong", { children: "heavy-gauge insulated polystyrene boxes with commercial ice-gel packs" }),
        ". This guarantees that they remain below 25\xB0C throughout transport."
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "dark:text-white text-slate-900 mt-10", children: "2. Processing & Lead Times" }),
      /* @__PURE__ */ jsxs("ul", { className: "dark:text-slate-400 text-slate-600 space-y-2 list-disc pl-5", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Spawn Shipping:" }),
          " Shipped within 24 to 48 hours of order confirmation."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Technical Equipment:" }),
          " Sensors, climate controllers, and customized racks are processed in 3\u20135 working days of engineering checklist completion."
        ] })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "dark:text-white text-slate-900 mt-10", children: "3. Delivery Coverage (Pan-India & Global)" }),
      /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600", children: "We partner with premier carriers (Delhivery, BlueDart, DTDC, and air express logistics) to deliver to all 28 States and 8 Union Territories in India. We also arrange phytosanitary certified export shipping to UAE, United Kingdom, United States, Canada, Nepal, and adjacent markets." }),
      /* @__PURE__ */ jsx("h2", { className: "dark:text-white text-slate-900 mt-10", children: "4. Handling & Damage Claims" }),
      /* @__PURE__ */ jsxs("p", { className: "dark:text-slate-400 text-slate-600", children: [
        "If your package is damaged or delayed heavily, leading to spawn contamination or temperature damage, please record an unboxing video and send it to our official WhatsApp support number",
        " ",
        /* @__PURE__ */ jsx("strong", { children: "+91 9203544140" }),
        " within 24 hours of delivery. We will issue a replacement shipment immediately."
      ] })
    ] }) }) })
  ] });
};
const CustomerSupportPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Customer Support",
        description: "Reach out to the Organic Mushrooms Farm dedicated customer service division. Get answers on order tracking, training, and commercial turnkey consultation.",
        url: "/support"
      }
    ),
    /* @__PURE__ */ jsx(
      PageHero,
      {
        badge: "Helpdesk",
        title: "Customer Support & Helpline",
        description: "We are committed to providing seamless handholding and customer service for agri-entrepreneurs."
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "section-padding pt-0 pb-32", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4 prose prose-invert", children: /* @__PURE__ */ jsxs("div", { className: "glass p-8 md:p-12 rounded-[2.5rem] border dark:border-white/10 border-black/10", children: [
      /* @__PURE__ */ jsx("h2", { className: "dark:text-white text-slate-900 mb-6", children: "Contact Channels & Operations" }),
      /* @__PURE__ */ jsx("p", { className: "dark:text-slate-400 text-slate-600 mb-8", children: "Whether you are tracking a spawn shipment, solving commercial cooling ventilation errors, or applying for government NHB subsidies, our specialized desk is ready to assist you." }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 my-10 not-prose", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold dark:text-white text-slate-900 mb-2", children: "\u{1F4DE} Direct Hotline" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm mb-4", children: "Talk to senior technical advisors directly for instant commercial support." }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "tel:+919203544140",
              className: "text-primary-start font-bold text-lg hover:underline",
              children: "+91 9203544140"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-2xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold dark:text-white text-slate-900 mb-2", children: "\u{1F4AC} WhatsApp Support" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm mb-4", children: "Fast tracking, photo sharing, invoice support, and SOP questions." }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://wa.me/919203544140",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 px-4 py-2 bg-green-500 rounded-lg text-white font-bold hover:bg-green-600 transition-colors text-sm",
              children: "Send WhatsApp Message"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "dark:text-white text-slate-900 mt-10", children: "Helpline Operational Timings" }),
      /* @__PURE__ */ jsxs("ul", { className: "dark:text-slate-400 text-slate-600 space-y-2 list-disc pl-5", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Monday to Sunday:" }),
          " 08:00 AM to 08:00 PM (IST)"
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Email Assistance:" }),
          " ",
          "support@mushroomtraining.online (Responded to within 4 working hours)"
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Physical Farm Visit Address:" }),
          " Katangi Link Road, Jabalpur, Madhya Pradesh, India (Prior appointment required)"
        ] })
      ] })
    ] }) }) })
  ] });
};
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
const CatchAllHandler = () => {
  return /* @__PURE__ */ jsx(Navigate, { to: "/", replace: true });
};
const AnimatedRoutes = () => {
  const location = useLocation();
  return /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -12 },
      transition: { duration: 0.28, ease: "easeOut" },
      className: "w-full h-full",
      children: /* @__PURE__ */ jsxs(Routes, { location, children: [
        /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(HomePage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/book-consultant", element: /* @__PURE__ */ jsx(BookConsultantPage, {}) }),
        /* @__PURE__ */ jsx(
          Route,
          {
            path: "/on-site-consultation",
            element: /* @__PURE__ */ jsx(SiteVisitConsultationPage, {})
          }
        ),
        /* @__PURE__ */ jsx(Route, { path: "/payment-success", element: /* @__PURE__ */ jsx(PaymentSuccessPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/payment-cancelled", element: /* @__PURE__ */ jsx(PaymentCancelledPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/about", element: /* @__PURE__ */ jsx(AboutPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/services", element: /* @__PURE__ */ jsx(ServicesPage, {}) }),
        /* @__PURE__ */ jsx(
          Route,
          {
            path: "/services/spawn-supply",
            element: /* @__PURE__ */ jsx(Navigate, { to: "/spawn-seed", replace: true })
          }
        ),
        /* @__PURE__ */ jsx(Route, { path: "/services/:id", element: /* @__PURE__ */ jsx(ServiceDetailPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/process/:id", element: /* @__PURE__ */ jsx(ProcessDetailPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/model-details", element: /* @__PURE__ */ jsx(ModelDetailsPage, {}) }),
        /* @__PURE__ */ jsx(
          Route,
          {
            path: "/compost-unit-specs",
            element: /* @__PURE__ */ jsx(CompostUnitSpecsPage, {})
          }
        ),
        /* @__PURE__ */ jsx(Route, { path: "/contact-form", element: /* @__PURE__ */ jsx(ContactFormPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/sops", element: /* @__PURE__ */ jsx(SopsPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/expertise-details", element: /* @__PURE__ */ jsx(ExpertiseDetailsPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/spawn-seed", element: /* @__PURE__ */ jsx(SpawnSeedPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/business-plan", element: /* @__PURE__ */ jsx(BusinessPlan, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/mushroom-types", element: /* @__PURE__ */ jsx(MushroomTypes, {}) }),
        /* @__PURE__ */ jsx(
          Route,
          {
            path: "/mushroom-types/:slug",
            element: /* @__PURE__ */ jsx(MushroomTypeDetails, {})
          }
        ),
        /* @__PURE__ */ jsx(Route, { path: "/equipment", element: /* @__PURE__ */ jsx(Equipment, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/subsidy", element: /* @__PURE__ */ jsx(Subsidy, {}) }),
        /* @__PURE__ */ jsx(
          Route,
          {
            path: "/pan-india-global-operations",
            element: /* @__PURE__ */ jsx(OperationsPage, {})
          }
        ),
        /* @__PURE__ */ jsx(
          Route,
          {
            path: "/operations",
            element: /* @__PURE__ */ jsx(Navigate, { to: "/pan-india-global-operations", replace: true })
          }
        ),
        /* @__PURE__ */ jsx(Route, { path: "/blog", element: /* @__PURE__ */ jsx(Blog, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/blog/:id", element: /* @__PURE__ */ jsx(ArticlePage, {}) }),
        /* @__PURE__ */ jsx(
          Route,
          {
            path: "/articles/mushroom-farming-beginner-guide-india-2026-2027",
            element: /* @__PURE__ */ jsx(ArticleBeginnerGuide, {})
          }
        ),
        /* @__PURE__ */ jsx(
          Route,
          {
            path: "/articles/oyster-mushroom-cultivation-india",
            element: /* @__PURE__ */ jsx(ArticleOysterMushroomCultivation, {})
          }
        ),
        /* @__PURE__ */ jsx(
          Route,
          {
            path: "/articles/what-is-mushroom-spawn-beginner-guide-india",
            element: /* @__PURE__ */ jsx(ArticleMushroomSpawn, {})
          }
        ),
        /* @__PURE__ */ jsx(
          Route,
          {
            path: "/articles/mushroom-farming-business-plan-hindi-2026",
            element: /* @__PURE__ */ jsx(ArticleBusinessPlanHindi, {})
          }
        ),
        /* @__PURE__ */ jsx(
          Route,
          {
            path: "/articles/mushroom-farming-training-hindi-india",
            element: /* @__PURE__ */ jsx(ArticleTrainingGuideHindi, {})
          }
        ),
        /* @__PURE__ */ jsx(
          Route,
          {
            path: "/articles/mushroom-farming-training-online-offline-certificate",
            element: /* @__PURE__ */ jsx(ArticleMushroomTrainingAffordable, {})
          }
        ),
        /* @__PURE__ */ jsx(
          Route,
          {
            path: "/articles/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026",
            element: /* @__PURE__ */ jsx(ArticleGharParMushroomFarming, {})
          }
        ),
        /* @__PURE__ */ jsx(
          Route,
          {
            path: "/articles/mushroom-farming-complete-guide-hinglish-india",
            element: /* @__PURE__ */ jsx(ArticleUltimateGuideHinglish, {})
          }
        ),
        /* @__PURE__ */ jsx(
          Route,
          {
            path: "/articles/mushroom-training-profit-guide-usa",
            element: /* @__PURE__ */ jsx(ArticleUSAProfitGuide, {})
          }
        ),
        /* @__PURE__ */ jsx(
          Route,
          {
            path: "/articles/medicinal-mushrooms-income-guide-usa",
            element: /* @__PURE__ */ jsx(ArticleUSAMedicinalIncome, {})
          }
        ),
        /* @__PURE__ */ jsx(Route, { path: "/success-stories", element: /* @__PURE__ */ jsx(SuccessStories, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/success-story/:id", element: /* @__PURE__ */ jsx(ProjectSpecsPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/workshop", element: /* @__PURE__ */ jsx(WorkshopPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/training", element: /* @__PURE__ */ jsx(TrainingPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/training-checkout", element: /* @__PURE__ */ jsx(TrainingCheckoutPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/turnkey-projects", element: /* @__PURE__ */ jsx(TurnkeyProjectsPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/gallery", element: /* @__PURE__ */ jsx(GalleryPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/faq", element: /* @__PURE__ */ jsx(FAQPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/roi-calculator", element: /* @__PURE__ */ jsx(ROICalculatorPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/terms", element: /* @__PURE__ */ jsx(TermsOfServicePage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/privacy", element: /* @__PURE__ */ jsx(PrivacyPolicyPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/refund-policy", element: /* @__PURE__ */ jsx(RefundPolicyPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/shipping-policy", element: /* @__PURE__ */ jsx(ShippingPolicyPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/support", element: /* @__PURE__ */ jsx(CustomerSupportPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsx(ContactPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/careers", element: /* @__PURE__ */ jsx(CareersPage, {}) }),
        /* @__PURE__ */ jsx(
          Route,
          {
            path: "/mushroom-price-today",
            element: /* @__PURE__ */ jsx(MushroomPriceTodayPage, {})
          }
        ),
        /* @__PURE__ */ jsx(
          Route,
          {
            path: "/mushroom-franchise",
            element: /* @__PURE__ */ jsx(MushroomFranchisePage, {})
          }
        ),
        /* @__PURE__ */ jsx(Route, { path: "/sitemap", element: /* @__PURE__ */ jsx(SitemapPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/site-directory", element: /* @__PURE__ */ jsx(SitemapPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/states", element: /* @__PURE__ */ jsx(StatesPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/states/madhya-pradesh", element: /* @__PURE__ */ jsx(MadhyaPradeshPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/madhya-pradesh/how-to-start-mushroom-farming-india", element: /* @__PURE__ */ jsx(ArticleMadhyaPradeshGuide, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/states/maharashtra", element: /* @__PURE__ */ jsx(MaharashtraPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/states/karnataka", element: /* @__PURE__ */ jsx(KarnatakaPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/states/tamil-nadu", element: /* @__PURE__ */ jsx(TamilNaduPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/states/delhi", element: /* @__PURE__ */ jsx(DelhiPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/states/telangana", element: /* @__PURE__ */ jsx(TelanganaPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/states/west-bengal", element: /* @__PURE__ */ jsx(WestBengalPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/states/bihar", element: /* @__PURE__ */ jsx(BiharPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/states/chandigarh", element: /* @__PURE__ */ jsx(ChandigarhPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/states/chhattisgarh", element: /* @__PURE__ */ jsx(ChhattisgarhPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/states/kerala", element: /* @__PURE__ */ jsx(KeralaPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/states/gujarat", element: /* @__PURE__ */ jsx(GujaratPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/states/punjab", element: /* @__PURE__ */ jsx(PunjabPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/states/rajasthan", element: /* @__PURE__ */ jsx(RajasthanPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/states/uttar-pradesh", element: /* @__PURE__ */ jsx(UttarPradeshPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/states/haryana", element: /* @__PURE__ */ jsx(HaryanaPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/states/uttarakhand", element: /* @__PURE__ */ jsx(UttarakhandPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/states/andhra-pradesh", element: /* @__PURE__ */ jsx(AndhraPradeshPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/states/odisha", element: /* @__PURE__ */ jsx(OdishaPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/states/jharkhand", element: /* @__PURE__ */ jsx(JharkhandPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/states/assam", element: /* @__PURE__ */ jsx(AssamPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/madhya-pradesh/jabalpur", element: /* @__PURE__ */ jsx(ArticleJabalpurGuide, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/assam/guwahati", element: /* @__PURE__ */ jsx(ArticleGuwahatiTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/mushroom-farming-guwahati-assam", element: /* @__PURE__ */ jsx(ArticleGuwahatiTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/karnataka/bangalore", element: /* @__PURE__ */ jsx(ArticleBangaloreTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/karnataka/mysuru", element: /* @__PURE__ */ jsx(ArticleMysuruTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/mushroom-farming-mysuru-karnataka", element: /* @__PURE__ */ jsx(ArticleMysuruTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/karnataka/mangalore", element: /* @__PURE__ */ jsx(ArticleMangaloreTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/mushroom-farming-mangalore-karnataka", element: /* @__PURE__ */ jsx(ArticleMangaloreTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/chhattisgarh/raipur", element: /* @__PURE__ */ jsx(ArticleRaipurTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/kerala/kochi", element: /* @__PURE__ */ jsx(ArticleKochiTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/kerala/thiruvananthapuram", element: /* @__PURE__ */ jsx(ArticleThiruvananthapuramTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/mushroom-farming-thiruvananthapuram-kerala", element: /* @__PURE__ */ jsx(ArticleThiruvananthapuramTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/mushroom-farming-thiruvananthapuram", element: /* @__PURE__ */ jsx(ArticleThiruvananthapuramTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/odisha/bhubaneswar", element: /* @__PURE__ */ jsx(ArticleBhubaneswarTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/jharkhand/ranchi", element: /* @__PURE__ */ jsx(ArticleRanchiTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/tamil-nadu/chennai", element: /* @__PURE__ */ jsx(ArticleChennaiTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/tamil-nadu/coimbatore", element: /* @__PURE__ */ jsx(ArticleCoimbatoreTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/tamil-nadu/madurai", element: /* @__PURE__ */ jsx(ArticleMaduraiTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/tamil-nadu/tiruchirappalli", element: /* @__PURE__ */ jsx(ArticleTiruchirappalliTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/mushroom-farming-madurai-tamil-nadu", element: /* @__PURE__ */ jsx(ArticleMaduraiTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/mushroom-farming-madurai", element: /* @__PURE__ */ jsx(ArticleMaduraiTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/maharashtra/mumbai", element: /* @__PURE__ */ jsx(ArticleMumbaiTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/maharashtra/nashik", element: /* @__PURE__ */ jsx(ArticleNashikTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/mushroom-farming-nashik-maharashtra", element: /* @__PURE__ */ jsx(ArticleNashikTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/delhi/new-delhi", element: /* @__PURE__ */ jsx(ArticleDelhiTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/haryana/gurugram", element: /* @__PURE__ */ jsx(ArticleGurugramTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/haryana/faridabad", element: /* @__PURE__ */ jsx(ArticleFaridabadTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/uttar-pradesh/noida", element: /* @__PURE__ */ jsx(ArticleNoidaTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/uttarakhand/dehradun", element: /* @__PURE__ */ jsx(ArticleDehradunTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/mushroom-farming-dehradun-uttarakhand", element: /* @__PURE__ */ jsx(ArticleDehradunTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/mushroom-farming-dehradun", element: /* @__PURE__ */ jsx(ArticleDehradunTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/telangana/hyderabad", element: /* @__PURE__ */ jsx(ArticleHyderabadTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/west-bengal/kolkata", element: /* @__PURE__ */ jsx(ArticleKolkataTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/west-bengal/siliguri", element: /* @__PURE__ */ jsx(ArticleSiliguriTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/mushroom-farming-siliguri-west-bengal", element: /* @__PURE__ */ jsx(ArticleSiliguriTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/mushroom-farming-siliguri", element: /* @__PURE__ */ jsx(ArticleSiliguriTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/gujarat/ahmedabad", element: /* @__PURE__ */ jsx(ArticleAhmedabadTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/andhra-pradesh/visakhapatnam", element: /* @__PURE__ */ jsx(ArticleVisakhapatnamTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/andhra-pradesh/vijayawada", element: /* @__PURE__ */ jsx(ArticleVijayawadaTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/gujarat/surat", element: /* @__PURE__ */ jsx(ArticleSuratTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/gujarat/vadodara", element: /* @__PURE__ */ jsx(ArticleVadodaraTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/gujarat/rajkot", element: /* @__PURE__ */ jsx(ArticleRajkotTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/mushroom-farming-vadodara-gujarat", element: /* @__PURE__ */ jsx(ArticleVadodaraTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/mushroom-farming-vadodara", element: /* @__PURE__ */ jsx(ArticleVadodaraTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/punjab/amritsar", element: /* @__PURE__ */ jsx(ArticleAmritsarTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/mushroom-farming-amritsar-punjab", element: /* @__PURE__ */ jsx(ArticleAmritsarTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/mushroom-farming-amritsar", element: /* @__PURE__ */ jsx(ArticleAmritsarTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/bihar/patna", element: /* @__PURE__ */ jsx(ArticlePatnaTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/chandigarh/chandigarh", element: /* @__PURE__ */ jsx(ArticleChandigarhTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/rajasthan/jaipur", element: /* @__PURE__ */ jsx(ArticleJaipurTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/rajasthan/bikaner", element: /* @__PURE__ */ jsx(ArticleBikanerTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/mushroom-farming-bikaner-rajasthan", element: /* @__PURE__ */ jsx(ArticleBikanerTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/mushroom-farming-bikaner", element: /* @__PURE__ */ jsx(ArticleBikanerTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/rajasthan/udaipur", element: /* @__PURE__ */ jsx(ArticleUdaipurTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/mushroom-farming-udaipur-rajasthan", element: /* @__PURE__ */ jsx(ArticleUdaipurTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/mushroom-farming-udaipur", element: /* @__PURE__ */ jsx(ArticleUdaipurTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/uttar-pradesh/lucknow", element: /* @__PURE__ */ jsx(ArticleLucknowTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/uttar-pradesh/agra", element: /* @__PURE__ */ jsx(ArticleAgraTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/uttar-pradesh/kanpur", element: /* @__PURE__ */ jsx(ArticleKanpurTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/madhya-pradesh/indore", element: /* @__PURE__ */ jsx(ArticleIndoreTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/madhya-pradesh/bhopal", element: /* @__PURE__ */ jsx(ArticleBhopalTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/madhya-pradesh/gwalior", element: /* @__PURE__ */ jsx(ArticleGwaliorTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/maharashtra/nagpur", element: /* @__PURE__ */ jsx(ArticleNagpurTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/cities/maharashtra/aurangabad", element: /* @__PURE__ */ jsx(ArticleAurangabadTraining, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/articles/turnkey-mushroom-farm-setup-india", element: /* @__PURE__ */ jsx(ArticleTurnkeyMushroomFarm, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/articles/turnkey-commercial-setup", element: /* @__PURE__ */ jsx(ArticleTurnkeyCommercialSetup, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/blog/mushroom-farming-business-plan-india", element: /* @__PURE__ */ jsx(ArticleBusinessPlanIndia, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/blog/7-mushroom-farming-mistakes-india", element: /* @__PURE__ */ jsx(ArticleMushroomFarmingMistakes, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/blog/commercial-mushroom-farming-india", element: /* @__PURE__ */ jsx(ArticleUltimateGuideIndia, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/locations/jabalpur", element: /* @__PURE__ */ jsx(JabalpurPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/locations/jabalpur/:slug", element: /* @__PURE__ */ jsx(JabalpurBlogPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/locations/pune", element: /* @__PURE__ */ jsx(PunePage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/locations/pune/:slug", element: /* @__PURE__ */ jsx(PuneBlogPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(CatchAllHandler, {}) })
      ] })
    },
    location.pathname
  ) });
};
import ArticleMadhyaPradeshGuide from "./pages/ArticleMadhyaPradeshGuide";
import ArticleJabalpurGuide from "./pages/ArticleJabalpurGuide";
import ArticleBangaloreTraining from "./pages/ArticleBangaloreTraining";
import ArticleMysuruTraining from "./pages/ArticleMysuruTraining";
import ArticleMangaloreTraining from "./pages/ArticleMangaloreTraining";
import ArticleChennaiTraining from "./pages/ArticleChennaiTraining";
import ArticleCoimbatoreTraining from "./pages/ArticleCoimbatoreTraining";
import ArticleMaduraiTraining from "./pages/ArticleMaduraiTraining";
import ArticleTiruchirappalliTraining from "./pages/ArticleTiruchirappalliTraining";
import ArticleMumbaiTraining from "./pages/ArticleMumbaiTraining";
import ArticleDelhiTraining from "./pages/ArticleDelhiTraining";
import ArticleGurugramTraining from "./pages/ArticleGurugramTraining";
import ArticleFaridabadTraining from "./pages/ArticleFaridabadTraining";
import ArticleNoidaTraining from "./pages/ArticleNoidaTraining";
import ArticleDehradunTraining from "./pages/ArticleDehradunTraining";
import ArticleMushroomFarmingMistakes from "./pages/ArticleMushroomFarmingMistakes";
import ArticleHyderabadTraining from "./pages/ArticleHyderabadTraining";
import ArticleKolkataTraining from "./pages/ArticleKolkataTraining";
import ArticleSiliguriTraining from "./pages/ArticleSiliguriTraining";
import ArticleAhmedabadTraining from "./pages/ArticleAhmedabadTraining";
import ArticleSuratTraining from "./pages/ArticleSuratTraining";
import ArticlePatnaTraining from "./pages/ArticlePatnaTraining";
import ArticleChandigarhTraining from "./pages/ArticleChandigarhTraining";
import ArticleJaipurTraining from "./pages/ArticleJaipurTraining";
import ArticleBikanerTraining from "./pages/ArticleBikanerTraining";
import ArticleUdaipurTraining from "./pages/ArticleUdaipurTraining";
import ArticleLucknowTraining from "./pages/ArticleLucknowTraining";
import ArticleAgraTraining from "./pages/ArticleAgraTraining";
import ArticleKanpurTraining from "./pages/ArticleKanpurTraining";
import ArticleIndoreTraining from "./pages/ArticleIndoreTraining";
import ArticleBhopalTraining from "./pages/ArticleBhopalTraining";
import ArticleGwaliorTraining from "./pages/ArticleGwaliorTraining";
import ArticleNagpurTraining from "./pages/ArticleNagpurTraining";
import ArticleAurangabadTraining from "./pages/ArticleAurangabadTraining";
import ArticleRaipurTraining from "./pages/ArticleRaipurTraining";
import ArticleKochiTraining from "./pages/ArticleKochiTraining";
import ArticleThiruvananthapuramTraining from "./pages/ArticleThiruvananthapuramTraining";
import ArticleVisakhapatnamTraining from "./pages/ArticleVisakhapatnamTraining";
import ArticleVijayawadaTraining from "./pages/ArticleVijayawadaTraining";
import ArticleBhubaneswarTraining from "./pages/ArticleBhubaneswarTraining";
import ArticleRanchiTraining from "./pages/ArticleRanchiTraining";
import ArticleGuwahatiTraining from "./pages/ArticleGuwahatiTraining";
import ArticleNashikTraining from "./pages/ArticleNashikTraining";
import ArticleVadodaraTraining from "./pages/ArticleVadodaraTraining";
import ArticleRajkotTraining from "./pages/ArticleRajkotTraining";
import ArticleAmritsarTraining from "./pages/ArticleAmritsarTraining";
import ArticleTurnkeyMushroomFarm from "./pages/ArticleTurnkeyMushroomFarm";
import ArticleTurnkeyCommercialSetup from "./pages/ArticleTurnkeyCommercialSetup";
import ArticleBusinessPlanIndia from "./pages/ArticleBusinessPlanIndia";
export default function App() {
  const isServer = typeof window === "undefined";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    !isServer && /* @__PURE__ */ jsx(MetaPixelTracker, {}),
    !isServer && /* @__PURE__ */ jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsxs("div", { className: "selection:bg-primary-start/30 selection:dark:text-white text-slate-900 bg-black", children: [
      /* @__PURE__ */ jsx(Background3D, {}),
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(AnimatedRoutes, {}) }),
      /* @__PURE__ */ jsx(Footer, {}),
      /* @__PURE__ */ jsx(FloatingButtons, {})
    ] })
  ] });
}
const ComparisonTable = () => {
  const data = [
    { feature: "Commercial Insulation", us: "80-100mm PUF", others: "40-50mm" },
    {
      feature: "Commercial AC Systems",
      us: "Daikin Industrial",
      others: "Split ACs"
    },
    { feature: "Commercial Racking", us: "MS / GI", others: "Bamboo" },
    { feature: "Global Support", us: "Lifetime Video", others: "1 Year" },
    {
      feature: "Government Subsidy",
      us: "Full Document Support",
      others: "No Support"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "section-padding", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-10 md:mb-16", children: [
      /* @__PURE__ */ jsx("div", { className: "badge mx-auto mb-4", children: "Commercial Setup Comparison" }),
      /* @__PURE__ */ jsxs("h2", { className: "mb-4 uppercase tracking-tight", children: [
        "The Commercial ",
        /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Organic Edge" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "max-w-xl mx-auto", children: "Why we are the preferred commercial partner nationwide and globally." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "glass border dark:border-white/10 border-black/10 overflow-hidden relative shadow-2xl", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "dark:bg-white/5 bg-black/5 border-b dark:border-white/10 border-black/10", children: [
        /* @__PURE__ */ jsx("th", { className: "px-4 md:px-8 py-6 text-[9px] font-black text-slate-500 uppercase tracking-widest", children: "Features" }),
        /* @__PURE__ */ jsx("th", { className: "px-4 md:px-8 py-6 text-[9px] font-black dark:text-white text-slate-900 uppercase tracking-widest gradient-bg", children: "Organic" }),
        /* @__PURE__ */ jsx("th", { className: "px-4 md:px-8 py-6 text-[9px] font-black text-slate-500 uppercase tracking-widest", children: "Others" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-white/5", children: data.map((row, i) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-white/[0.02]", children: [
        /* @__PURE__ */ jsx("td", { className: "px-4 md:px-8 py-5 text-[11px] font-bold dark:text-slate-400 text-slate-600", children: row.feature }),
        /* @__PURE__ */ jsx("td", { className: "px-4 md:px-8 py-5 text-[12px] font-bold dark:text-white text-slate-900 tracking-tight", children: row.us }),
        /* @__PURE__ */ jsx("td", { className: "px-4 md:px-8 py-5 text-[12px] font-medium text-slate-500", children: row.others })
      ] }, i)) })
    ] }) }) })
  ] }) });
};
