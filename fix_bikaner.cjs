const fs = require('fs');
let content = fs.readFileSync('src/pages/ArticleBikanerTraining.tsx', 'utf8');

const regex = /<SEO[\s\S]*?className="text-lg md:text-xl font-medium dark:text-slate-300 text-slate-700 leading-relaxed mb-6">\s*बीकानेर में कम पानी और जगह में Mushroom Business कैसे करें\?\s*<\/h2>\s*<\/div>\s*{\/\* परिचय \*\/}\s*<div className="space-y-4">[\s\S]*?<\/div>\s*<hr className="border-slate-200 dark:border-slate-800" \/>/m;

const replacement = `<SEO 
                title="बीकानेर में सफल मशरूम व्यापार: Setup & Training Guide" 
                description="बीकानेर (राजस्थान) में कम लागत और कम पानी में अपना मशरूम बिज़नेस शुरू करें! हम आपको बेहतरीन ट्रेनिंग प्रोग्राम, हाई-यील्ड स्पॉन और पूरा फार्म सेटअप देते हैं।"
                keywords="Mushroom cultivation in Rajasthan, Mushroom farming in Bikaner, Mushroom spawn in Bikaner, mushroom training center in Bikaner, Gangashahar, Rani Bazar"
                url="/mushroom-farming-bikaner"
                schemas={bikanerSchemas}
            />
            
            <div className="max-w-4xl mx-auto px-4 mb-8">
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Link to="/" className="hover:text-primary-start flex items-center gap-1 transition-colors">
                        <Home size={14} /> Home
                    </Link>
                    <ChevronRight size={14} />
                    <Link to="/states" className="hover:text-primary-start transition-colors">States</Link>
                    <ChevronRight size={14} />
                    <Link to="/states/rajasthan" className="hover:text-primary-start transition-colors">Rajasthan</Link>
                    <ChevronRight size={14} />
                    <span className="font-semibold text-slate-900 dark:text-white">Bikaner</span>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 prose prose-invert">
                <div className="glass p-8 md:p-12 rounded-[3.5rem] border dark:border-white/5 border-black/5 space-y-8">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-start/10 text-primary-start text-xs font-bold uppercase tracking-wider mb-4 border border-primary-start/20">
                            <MapPin size={14} /> बीकानेर विशेष (Rajasthani Blog)
                        </div>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold dark:text-white text-slate-900 leading-tight mb-4">
                            बीकानेर में लो-बजट (Low-Budget) मशरूम फार्मिंग: प्रैक्टिकल ट्रेनिंग और सेटअप सपोर्ट
                        </h1>
                        <h2 className="text-lg md:text-xl font-medium dark:text-slate-300 text-slate-700 leading-relaxed mb-6">
                            बीकानेर में कम बजट (Low Budget) के साथ मशरूम फार्म कैसे लगाएं?
                        </h2>
                    </div>

                    {/* परिचय */}
                    <div className="space-y-4">
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-medium">
                            राजस्थान के बीकानेर क्षेत्र में पानी की कमी अक्सर पारंपरिक खेती में रुकावट बनती है। लेकिन मशरूम कल्टीवेशन (Mushroom cultivation) एक ऐसा शानदार विकल्प है, जिसे बंद कमरों में, बहुत कम पानी और छोटी सी जगह में किया जा सकता है। यह यहाँ के किसानों और युवाओं के लिए कम निवेश में ज्यादा मुनाफे (high profit with low investment) का एक बेहतरीन जरिया है।
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-medium">
                            Organic Mushroom Farm बीकानेर के लोगों को इस व्यवसाय से जोड़ने के लिए विशेष ट्रेनिंग प्रोग्राम्स चला रहा है। हम आपको कम लागत में एक बढ़िया फार्म तैयार करने का पूरा लेआउट और सेटअप (farm layout and setup) देते हैं। इसके साथ ही, बेस्ट क्वालिटी का स्पॉन (premium mushroom seeds) भी सीधे आपके लोकेशन पर उपलब्ध कराते हैं।
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-medium">
                            फसल तैयार होने के बाद सबसे जरूरी होता है उसे सही दाम पर बेचना। बीकानेर की मंडियों, रेस्टोरेंट्स और राजस्थान के अन्य शहरों में (in local mandis and other cities of Rajasthan) अपने मशरूम को कैसे सेल करें, इसके लिए हमारी टीम आपको पूरा सेल्स और मार्केटिंग सपोर्ट (sales and marketing support) भी देती है। आज ही अपने बिज़नेस की शुरुआत करें!
                        </p>
                    </div>

                    <hr className="border-slate-200 dark:border-slate-800" />`;

content = content.replace(regex, replacement);
fs.writeFileSync('src/pages/ArticleBikanerTraining.tsx', content);
