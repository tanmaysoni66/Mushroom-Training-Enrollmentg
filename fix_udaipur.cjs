const fs = require('fs');
let content = fs.readFileSync('src/pages/ArticleUdaipurTraining.tsx', 'utf8');

const regex = /<SEO[\s\S]*?className="text-lg md:text-xl font-medium dark:text-slate-300 text-slate-700 leading-relaxed mb-6">\s*उदयपुर में Mushroom Farming Business क्यों शुरू करें\?\s*<\/h2>\s*<\/div>\s*{\/\* Intro Section \*\/}\s*<div className="space-y-4">[\s\S]*?<\/div>/m;

const replacement = `<SEO 
                title="उदयपुर में Indoor Mushroom Business: Training & Setup" 
                description="उदयपुर के युवाओं और किसानों के लिए शानदार अवसर! बंद कमरों (indoor) में कमर्शियल मशरूम उगाएं। हम देते हैं प्रैक्टिकल ट्रेनिंग, स्पॉन और स्मार्ट फार्म सेटअप।"
                keywords="Mushroom farming in Udaipur, Mushroom training Udaipur, Mushroom spawn Udaipur, hotel mushroom supply Udaipur, Hiran Magri, Fatehpura, Sukher, Bhuwana, Udaipur resort food supply"
                url="/mushroom-farming-udaipur-rajasthan"
                schemas={udaipurSchemas}
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
                    <span className="font-semibold text-slate-900 dark:text-white">Udaipur</span>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 prose prose-invert">
                <div className="glass p-8 md:p-12 rounded-[3.5rem] border dark:border-white/5 border-black/5 space-y-8">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-start/10 text-primary-start text-xs font-bold uppercase tracking-wider mb-4 border border-primary-start/20">
                            <MapPin size={14} /> उदयपुर विशेष (Udaipur Special)
                        </div>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold dark:text-white text-slate-900 leading-tight mb-4">
                            उदयपुर में स्मार्ट (Smart) मशरूम कल्टीवेशन: ट्रेनिंग, सेटअप और B2B मार्केटिंग सपोर्ट
                        </h1>
                        <h2 className="text-lg md:text-xl font-medium dark:text-slate-300 text-slate-700 leading-relaxed mb-6">
                            उदयपुर में Mushroom Farming Business क्यों शुरू करें?
                        </h2>
                    </div>

                    {/* Intro Section */}
                    <div className="space-y-4">
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-medium">
                            Rajasthan traditionally faces water scarcity and high temperatures, making outdoor farming challenging. लेकिन इनडोर मशरूम कल्टीवेशन (Indoor mushroom cultivation) एक ऐसा स्मार्ट तरीका है जहाँ आप बहुत कम पानी और बंद कमरों में शानदार पैदावार (bumper yield) ले सकते हैं। उदयपुर शहर में बढ़ते हेल्थ ट्रेंड्स के कारण फ्रेश ओयस्टर और बटन मशरूम की लोकल डिमांड लगातार बढ़ रही है।
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-medium">
                            Organic Mushroom Farm आपको इस बिज़नेस में सफल बनाने के लिए खास डिज़ाइन की गई ट्रेनिंग (specialized training) देता है। हम उदयपुर की जलवायु के अनुसार तापमान-नियंत्रित (temperature-controlled) कमर्शियल फार्म सेटअप तैयार करने में आपकी पूरी मदद करते हैं। साथ ही, बेहतर पैदावार के लिए हाई-यील्डिंग स्पॉन (high-yielding spawn/बीज) भी सप्लाई करते हैं।
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed font-medium">
                            केवल उत्पादन ही काफी नहीं है! तैयार फ्रेश मशरूम को उदयपुर के प्रीमियम सुपरमार्केट्स, कैफेज़ और होलसेल मार्केट्स में कैसे बेचना है (how to sell in premium supermarkets and wholesale markets), हमारी टीम आपको इसकी फुलप्रूफ बिज़नेस और मार्केटिंग स्ट्रेटेजी (business and marketing strategy) भी सिखाती है। Start your smart agribusiness journey today!
                        </p>
                    </div>`;

content = content.replace(regex, replacement);
fs.writeFileSync('src/pages/ArticleUdaipurTraining.tsx', content);
