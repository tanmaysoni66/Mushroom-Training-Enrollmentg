const fs = require('fs');
let content = fs.readFileSync('src/pages/ArticleAmritsarTraining.tsx', 'utf8');

const regex = /<SEO[\s\S]*?className="text-brand-blue font-semibold tracking-wider uppercase text-xs md:text-sm">\s*Organic Mushrooms Farm — Amritsar, Punjab Special Edition\s*<\/p>\s*<\/div>\s*{\/\* Introduction \*\/}\s*<div className="space-y-4">[\s\S]*?<\/div>\s*{\/\* Demand Section \*\/\s*/m;

const replacement = `<SEO 
                title="ਅੰਮ੍ਰਿਤਸਰ 'ਚ Commercial Mushroom Business & Setup" 
                description="ਅੰਮ੍ਰਿਤਸਰ ਵਿੱਚ ਆਪਣਾ high-profit mushroom business ਸ਼ੁਰੂ ਕਰੋ! We offer practical cultivation classes, custom farm setup, and premium quality spawn."
                keywords="Mushroom farming Amritsar, mushroom training Amritsar, mushroom spawn Punjab, oyster mushroom Amritsar, button mushroom Amritsar, organic mushrooms farm"
                url="/mushroom-farming-amritsar"
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
                    <Link to="/states/punjab" className="hover:text-emerald-500 transition-colors">Punjab</Link>
                    <ArrowRight size={14} />
                    <span className="font-semibold text-slate-900 dark:text-white">Amritsar</span>
                </div>

                <div className="glass p-6 md:p-12 rounded-[2.5rem] border dark:border-white/5 border-black/5 space-y-8">
                    <div className="text-center border-b dark:border-white/10 border-black/10 pb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
                            <MapPin size={14} /> Punjab Special (Punjabi Blog)
                        </div>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold dark:text-white text-slate-900 leading-tight mb-4">
                            ਅੰਮ੍ਰਿਤਸਰ (Punjab) ਵਿੱਚ Profitable Mushroom Farming: Practical Training & Setup Solutions
                        </h1>
                        <h2 className="text-lg md:text-xl font-medium dark:text-slate-300 text-slate-700 leading-relaxed mb-6">
                            ਅੰਮ੍ਰਿਤਸਰ ਵਿੱਚ Mushroom Business ਇੱਕ ਵਧੀਆ ਮੌਕਾ ਕਿਉਂ ਹੈ?
                        </h2>
                        <p className="text-brand-blue font-semibold tracking-wider uppercase text-xs md:text-sm">
                            Organic Mushrooms Farm — Amritsar, Punjab Special Edition
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="space-y-4">
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-base md:text-lg">
                            Punjab is famous for its rich agriculture, but modern farming methods are now changing the game. ਅੰਮ੍ਰਿਤਸਰ ਦੇ ਲੋਕਲ ਬਾਜ਼ਾਰਾਂ, ਢਾਬਿਆਂ ਅਤੇ ਵੱਡੇ ਹੋਟਲਾਂ ਵਿੱਚ (In local markets, dhabas, and big hotels of Amritsar) fresh Button and Oyster mushrooms ਦੀ ਬਹੁਤ ਜ਼ਿਆਦਾ ਮੰਗ ਹੈ। This makes it an excellent high-yield agribusiness for local farmers and the youth.
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-base md:text-lg">
                            Organic Mushroom Farm is here to support you at every step. ਅਸੀਂ ਤੁਹਾਡੇ ਬਜਟ ਅਤੇ ਜਗ੍ਹਾ ਦੇ ਅਨੁਸਾਰ (According to your budget and space) ਇੱਕ ਵਧੀਆ commercial farm setup ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਾਂ। Along with the complete setup, we also supply premium, high-yielding spawn (ਮਸ਼ਰੂਮ ਦਾ ਬੀਜ - Mushroom seeds) directly to your location in Amritsar.
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-base md:text-lg">
                            Growing mushrooms is just the beginning. ਤਿਆਰ ਕੀਤੀ ਫਸਲ ਨੂੰ ਪੰਜਾਬ ਦੀਆਂ ਮੰਡੀਆਂ ਵਿੱਚ ਕਿਵੇਂ ਵੇਚਣਾ ਹੈ (How to sell the prepared crop in Punjab's markets), our experts will give you proper marketing strategies and sales guidance to ensure maximum profit. Start your smart farming journey with us today!
                        </p>
                    </div>

                    {/* Demand Section */`;

content = content.replace(regex, replacement);
fs.writeFileSync('src/pages/ArticleAmritsarTraining.tsx', content);
