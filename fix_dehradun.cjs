const fs = require('fs');
let content = fs.readFileSync('src/pages/ArticleDehradunTraining.tsx', 'utf8');

const regex = /<SEO[\s\S]*?className="text-brand-blue font-semibold tracking-wider uppercase text-xs md:text-sm">\s*Organic Mushrooms Farm — Dehradun, Uttarakhand Special Edition\s*<\/p>\s*<\/div>\s*{\/\* Introduction \*\/}\s*<div className="space-y-4">[\s\S]*?<\/div>\s*{\/\* What is Smart Agriculture \*\/\s*/m;

const replacement = `<SEO 
                title="देहरादून में हाई-प्रॉफिट Mushroom Farm Setup व Training" 
                description="उत्तराखंड के अनुकूल मौसम का लाभ उठाएं! देहरादून में अपना कमर्शियल बिज़नेस शुरू करें। हम प्रोवाइड करते हैं हैंड्स-ऑन ट्रेनिंग, फार्म सेटअप और टॉप क्वालिटी स्पॉन।"
                keywords="Mushroom farming Dehradun, mushroom training Dehradun, mushroom spawn Uttarakhand, oyster mushroom Dehradun, button mushroom Dehradun, organic mushrooms farm"
                url="/cities/uttarakhand/dehradun"
                schemas={customSchemas}
            />
            
            <article className="max-w-4xl mx-auto px-4">
                {/* Back Link */}
                <div className="mb-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Link to="/" className="hover:text-emerald-500 flex items-center gap-1 transition-colors">
                        Home
                    </Link>
                    <ArrowRight size={14} />
                    <Link to="/states" className="hover:text-emerald-500 transition-colors">States</Link>
                    <ArrowRight size={14} />
                    <Link to="/states/uttarakhand" className="hover:text-emerald-500 transition-colors">Uttarakhand</Link>
                    <ArrowRight size={14} />
                    <span className="font-semibold text-slate-900 dark:text-white">Dehradun</span>
                </div>

                <div className="glass p-6 md:p-12 rounded-[2.5rem] border dark:border-white/5 border-black/5 space-y-8">
                    <div className="text-center border-b dark:border-white/10 border-black/10 pb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
                            <MapPin size={14} /> Uttarakhand Special
                        </div>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold dark:text-white text-slate-900 leading-tight mb-4">
                            देहरादून (उत्तराखंड) में आधुनिक Mushroom Cultivation: फार्म सेटअप और प्रैक्टिकल ट्रेनिंग
                        </h1>
                        <h2 className="text-lg md:text-xl font-medium dark:text-slate-300 text-slate-700 leading-relaxed mb-6">
                            देहरादून के ठंडे मौसम में Mushroom Agri-Business कैसे ग्रो करें?
                        </h2>
                        <p className="text-brand-blue font-semibold tracking-wider uppercase text-xs md:text-sm">
                            Organic Mushrooms Farm — Dehradun, Uttarakhand Special Edition
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="space-y-4">
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-base md:text-lg">
                            Dehradun and the surrounding hilly regions of Uttarakhand have a naturally cool and highly favorable climate for cultivating premium Button and Oyster mushrooms. उत्तराखंड के इस बढ़िया प्राकृतिक मौसम (excellent natural weather) का फायदा उठाकर, युवा और किसान कम लागत में एक शानदार एग्री-बिज़नेस (agri-business) खड़ा कर सकते हैं।
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-base md:text-lg">
                            चाहे आप एक बिगिनर हों या अनुभवी किसान, Organic Mushroom Farm आपको देहरादून में एंड-टू-एंड सपोर्ट देता है। हम आपको मॉडर्न कल्टीवेशन की प्रैक्टिकल ट्रेनिंग (practical cultivation training) देते हैं और आपकी जगह के अनुसार कस्टमाइज़्ड कमर्शियल फार्म सेटअप (commercial farm setup) डिज़ाइन करके देते हैं। साथ ही, बेस्ट क्वालिटी का मशरूम बीज (premium spawn) भी सीधा आप तक पहुँचाया जाता है।
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-base md:text-lg">
                            उत्तराखंड एक प्रमुख टूरिस्ट हब है। देहरादून, मसूरी और ऋषिकेश के होटल्स, कैफेज़ और लोकल मंडियों में (in hotels, cafes, and local markets) फ्रेश मशरूम की भारी डिमांड है। हम आपको सही मार्केटिंग स्ट्रेटेजी (proven marketing strategies) भी सिखाते हैं ताकि आपकी फसल की सेल अच्छे मार्जिन पर हो सके। Start your modern farming journey today!
                        </p>
                    </div>

                    {/* What is Smart Agriculture */`;

content = content.replace(regex, replacement);
fs.writeFileSync('src/pages/ArticleDehradunTraining.tsx', content);
