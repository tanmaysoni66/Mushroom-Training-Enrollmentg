const fs = require('fs');
let content = fs.readFileSync('src/pages/ArticleVadodaraTraining.tsx', 'utf8');

const regex = /<SEO[\s\S]*?className="text-brand-blue font-semibold tracking-wider uppercase text-xs md:text-sm">\s*Organic Mushrooms Farm — Vadodara, Gujarat Special Edition\s*<\/p>\s*<\/div>\s*{\/\* Introduction \*\/}\s*<div className="space-y-4">[\s\S]*?<\/div>\s*{\/\* Demand Section \*\/\s*/m;

const replacement = `<SEO 
                title="વડોદરામાં Mushroom Training & Farm Setup: સફળ વ્યવસાય" 
                description="વડોદરા (Vadodara) માં તમારો પોતાનો મશરૂમ બિઝનેસ શરૂ કરો! Organic Mushroom Farm આપે છે પ્રેક્ટિકલ Training, કસ્ટમ Farm Setup, અને ઉચ્ચ ગુણવત્તાવાળા Spawn."
                keywords="Mushroom farming Vadodara, mushroom training Vadodara, mushroom spawn Gujarat, oyster mushroom Vadodara, button mushroom Vadodara, organic mushrooms farm"
                url="/cities/gujarat/vadodara"
                schemas={customSchemas}
            />
            
            <article className="max-w-4xl mx-auto px-4">
                {/* Back Link */}
                <div className="mb-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link>
                    <span className="text-slate-400">/</span>
                    <Link to="/states" className="hover:text-brand-blue transition-colors">States</Link>
                    <span className="text-slate-400">/</span>
                    <Link to="/states/gujarat" className="hover:text-brand-blue transition-colors">Gujarat</Link>
                    <span className="text-slate-400">/</span>
                    <span className="font-semibold text-slate-900 dark:text-white">Vadodara</span>
                </div>

                <div className="glass p-6 md:p-12 rounded-[2.5rem] border dark:border-white/5 border-black/5 space-y-8">
                    <div className="text-center border-b dark:border-white/10 border-black/10 pb-8">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold dark:text-white text-slate-900 leading-tight mb-4">
                            વડોદરામાં નફાકારક (Profitable) Mushroom Cultivation: Training અને Farm Setup
                        </h1>
                        <h2 className="text-lg md:text-xl font-medium dark:text-slate-300 text-slate-700 leading-relaxed mb-6">
                            વડોદરામાં ઓછા રોકાણે મશરૂમ બિઝનેસ કેવી રીતે શરૂ કરવો?
                        </h2>
                        <p className="text-brand-blue font-semibold tracking-wider uppercase text-xs md:text-sm">
                            Organic Mushrooms Farm — Vadodara, Gujarat Special Edition
                        </p>
                    </div>

                    {/* Introduction */}
                    <div className="space-y-4">
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-base md:text-lg">
                            Vadodara is known for its vibrant food culture. અહીની હોટેલ્સ, કાફે અને રેસ્ટોરન્ટ્સમાં (in hotels, cafes, and restaurants here) ફ્રેશ ઓઇસ્ટર અને બટન મશરૂમની માંગમાં જંગી વધારો થયો છે. ઔદ્યોગિક વિકાસની સાથે સાથે કૃષિ ક્ષેત્રે પણ વડોદરામાં આ એક સુવર્ણ તક (golden chance) છે.
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-base md:text-lg">
                            જો તમારી પાસે ઓછી જગ્યા અને મર્યાદિત બજેટ છે, તો પણ ચિંતા ન કરો. અમારી એક્સપર્ટ ટીમ તમને આધુનિક પદ્ધતિઓથી (modern methods) મશરૂમ ઉગાડવાની પ્રેક્ટિકલ ટ્રેનિંગ (practical cultivation training) આપે છે. અમે તમારા બજેટ મુજબનું શ્રેષ્ઠ ફાર્મ સેટઅપ (farm setup) કરી આપીએ છીએ અને પ્રીમિયમ મશરૂમ બિયારણ (spawn) પણ પૂરા પાડીએ છીએ.
                        </p>
                        <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-base md:text-lg">
                            પાક તૈયાર થયા પછી શું? અમે માત્ર ઉત્પાદન જ નથી શીખવતા, પરંતુ વડોદરાના લોકલ માર્કેટમાં અને B2B ક્લાયન્ટ્સને તમારું ઉત્પાદન ઊંચા નફા સાથે કેવી રીતે વેચવું (sales and marketing strategies) તેની સંપૂર્ણ વ્યાપારી માર્ગદર્શિકા પણ પ્રદાન કરીએ છીએ. Start your agribusiness today!
                        </p>
                    </div>

                    {/* Demand Section */`;

content = content.replace(regex, replacement);
fs.writeFileSync('src/pages/ArticleVadodaraTraining.tsx', content);
