const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const regex = /<SEO\s*title="Commercial Mushroom Farming FAQ \| Training & Farm Setup Help"\s*description="Find answers to frequently asked questions about commercial mushroom farming in India\. Learn about setup costs, training in MP, UP, Bihar, Maharashtra, and how to start a profitable business\."\s*url="\/faq"\s*\/>\s*<PageHero\s*badge="Direct Commercial Answers"\s*title="Frequently Asked Questions"\s*description="Providing expert commercial guidance on mushroom farming training and business setups across Pan India & Globally\."\s*\/>\s*<section className="section-padding pt-0 pb-20">\s*<div className="max-w-3xl mx-auto px-4">\s*<div className="space-y-4">/m;

const replacement = `<SEO
        title="Mushroom Farm Setup FAQs: आपके सभी सवालों के जवाब"
        description="मशरूम फार्मिंग से जुड़े सभी सवालों के जवाब पाएँ। Oyster, Button और Milky मशरूम के Setup cost, training, और मुनाफे की पूरी जानकारी यहाँ मौजूद है।"
        url="/faq"
      />
      <PageHero
        badge="Direct Commercial Answers"
        title="मशरूम फार्मिंग से जुड़े आम सवाल (Frequently Asked Questions)"
        description="Providing expert commercial guidance on mushroom farming training and business setups across Pan India & Globally."
      />
      <section className="section-padding pt-0 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-12 space-y-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold dark:text-white text-slate-900">
              कमर्शियल मशरूम बिज़नेस से जुड़े आपके सवालों का समाधान
            </h2>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-base md:text-lg">
              Welcome to the official FAQ hub of Organic Mushroom Farm! अगर आप भारत में कहीं भी अपना एग्री-बिज़नेस (agribusiness) शुरू करने की योजना बना रहे हैं, तो आपके मन में इन्वेस्टमेंट, जगह, और सेटअप को लेकर कई सवाल होंगे। यहाँ हमने उन सभी महत्वपूर्ण सवालों के सटीक और आसान जवाब दिए हैं।
            </p>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-base md:text-lg">
              हम मुख्य रूप से Oyster, Button, और Milky मशरूम की कमर्शियल खेती पर फोकस करते हैं। यहाँ आपको एक नया फार्म सेटअप करने की कुल लागत (setup costs), मार्किट में प्रॉफिट मार्जिन, और MP, UP, Bihar, व Maharashtra जैसे राज्यों में दी जाने वाली हमारी प्रैक्टिकल ट्रेनिंग से जुड़ी हर छोटी-बड़ी जानकारी (comprehensive details) मिलेगी।
            </p>
            <p className="dark:text-slate-300 text-slate-700 leading-relaxed text-base md:text-lg">
              Whether you are a beginner starting from scratch or a farmer looking to expand your existing setup, our expert team is here to guide you. अगर नीचे दिए गए सवालों में आपका डाउट क्लियर नहीं होता है, तो आप हमारी कंसल्टेंसी टीम से सीधे संपर्क कर सकते हैं। Let's clear your doubts and start growing today!
            </p>
          </div>
          <div className="space-y-4">`;

content = content.replace(regex, replacement);
fs.writeFileSync('src/App.tsx', content);
