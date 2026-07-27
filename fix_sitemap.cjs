const fs = require('fs');
let content = fs.readFileSync('src/pages/SitemapPage.tsx', 'utf8');

const regex = /<SEO[\s\S]*?<div className="flex flex-wrap items-center justify-center gap-4">/m;

const replacement = `<SEO 
        title="Website Navigation Hub & Full Page Index" 
        description="Organic Mushroom Farm की वेबसाइट के सभी महत्वपूर्ण लिंक्स यहाँ पाएं। आसानी से हमारी ट्रेनिंग, फार्म सेटअप सर्विसेज और रिसर्च ब्लॉग्स को नेविगेट करें।" 
        keywords="site map organic mushrooms farm, html sitemap, directory list mushroom training, mushroom farming list states"
        url="/sitemap"
      />

      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="badge mx-auto mb-4">Complete Directory</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tighter">
            Complete Website Directory & Quick Navigation Links
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-300 mb-6">
            हमारी वेबसाइट को आसानी से नेविगेट करें (Explore Our Platform)
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-4">
            Welcome to the official navigation hub of Organic Mushroom Farm! अगर आप हमारी वेबसाइट पर कोई खास सर्विस, ऑनलाइन/ऑफलाइन ट्रेनिंग प्रोग्राम या अपने राज्य (State) का फार्म सेटअप पेज ढूंढ रहे हैं, तो यह फुल साइट इंडेक्स (Full Site Index) आपकी मदद करेगा।
          </p>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-4">
            हमने यूज़र्स की सुविधा के लिए अपने सभी महत्वपूर्ण पेजों को कैटेगरीज में बांट दिया है। Whether you are a beginner looking for free cultivation tutorials or a commercial business owner searching for premium spawn delivery locations, आप नीचे दिए गए लिंक्स पर क्लिक करके सीधे अपने काम के पेज पर जा सकते हैं।
          </p>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">
            This comprehensive directory includes our service pages, state-wise local hubs, step-by-step educational articles, and official policies. किसी भी जानकारी के लिए सीधे सही लिंक पर क्लिक करें और अपनी मशरूम फार्मिंग की जर्नी शुरू करें
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">`;

content = content.replace(regex, replacement);
fs.writeFileSync('src/pages/SitemapPage.tsx', content);
