const fs = require('fs');

let articleContent = fs.readFileSync('src/pages/ArticlePage.tsx', 'utf-8');

const missingArticles = `
  "3": {
    title: "How to Prepare the Perfect Substrate",
    date: "April 02, 2027",
    category: "Educational",
    content: \`Master the art of pasteurization and moisture levels for high-yield harvests.

### The Importance of Substrate Preparation

A good substrate is the foundation of your mushroom farm. The most common substrates include wheat straw, paddy straw, and sawdust. Here’s a quick overview of how to prepare it:

1. **Chopping:** Chop the straw into small 2-3 inch pieces to maximize surface area.
2. **Wetting:** Soak the straw in water until it reaches around 65-70% moisture. It should feel like a damp sponge.
3. **Pasteurization:** You can either use the hot water method (steeping at 65-75°C for 1-2 hours) or chemical pasteurization using Bavistin and Formalin to kill competing molds and pests.
4. **Cooling and Spawning:** Once cooled to room temperature, mix your mushroom spawn thoroughly and bag it.

Getting this process right ensures a rapid mycelial run and prevents green mold (Trichoderma) contamination.\`
  },
  "4": {
    title: "The Brain-Boosting Secrets of Lion’s Mane",
    date: "March 28, 2027",
    category: "Health & Wellness",
    content: \`Lion's Mane (Hericium erinaceus) is an incredible medicinal mushroom, famous for its neuroprotective properties.

### What Makes It Special?

Scientific studies show that Lion's Mane contains two unique compounds: hericenones and erinacines. These compounds stimulate the growth of brain cells by increasing the production of Nerve Growth Factor (NGF).

* **Memory and Focus:** Regular consumption is linked to improved focus, reduced brain fog, and better memory retention.
* **Nerve Regeneration:** Studies suggest it has the potential to aid in nerve regeneration and may offer protective benefits against neurodegenerative diseases like Alzheimer's and Parkinson's.
* **Mood Support:** It is also known to help reduce mild symptoms of anxiety and depression.

You can consume Lion's Mane as a culinary mushroom, in a dried powder extract, or as a supplement capsule.\`
  },
  "5": {
    title: "Mushrooms vs Meat: The Ultimate Protein Showdown",
    date: "March 20, 2027",
    category: "Health & Wellness",
    content: \`As more people shift towards plant-based diets, mushrooms are taking the spotlight as a viable meat substitute. But how do they compare in terms of protein?

### Nutritional Profile

While meat has a higher absolute protein content per 100 grams, mushrooms offer a unique and highly bioavailable protein profile.

* **Amino Acids:** Mushrooms contain all essential amino acids, making them a complete protein source, similar to meat.
* **Low Calorie, High Fiber:** Unlike meat, mushrooms are incredibly low in calories and fat, and high in dietary fiber (chitin and beta-glucans), which supports gut health.
* **Umami Flavor:** The natural glutamates in mushrooms provide a rich, savory umami flavor that mimics the taste and texture of meat, especially varieties like Portobello and King Oyster.

While they may not completely replace meat for athletes needing extreme protein intake, they are an excellent, sustainable alternative for the average balanced diet.\`
  },
  "6": {
    title: "Vitamin D Deficiency? Eat Button Mushrooms",
    date: "March 12, 2027",
    category: "Health & Wellness",
    content: \`Vitamin D deficiency is a global health issue, but button mushrooms might hold a simple, natural solution.

### The Magic of Sun-Exposed Mushrooms

Like humans, mushrooms can produce Vitamin D when exposed to ultraviolet (UV) light.

* **Ergosterol:** Mushrooms contain a compound called ergosterol. When this compound is exposed to UV light (even natural sunlight after harvesting), it converts into Vitamin D2.
* **How to Maximize It:** You can naturally boost the Vitamin D content of store-bought button mushrooms by simply slicing them and leaving them in direct sunlight for 15-30 minutes before cooking.
* **Health Benefits:** Adequate Vitamin D is crucial for bone health, immune system support, and mood regulation.

Adding sun-exposed button mushrooms to your diet is an easy, plant-based way to boost your Vitamin D levels naturally.\`
  },
  "7": {
    title: "Future of Mushroom Farming in India 2027",
    date: "March 05, 2027",
    category: "Business Trends",
    content: \`The mushroom farming landscape in India is rapidly evolving. Here is what to expect in 2027 and beyond.

### Market Shifts

1. **Rise of Medicinal Mushrooms:** While Button and Oyster remain staples, there is a massive surge in demand for medicinal varieties like Cordyceps, Lion's Mane, and Reishi. Consumers are increasingly aware of their health benefits.
2. **Automation and Climate Control:** The industry is moving away from seasonal farming. Smart farms using IoT sensors for automated humidity, CO2, and temperature control are becoming the standard for commercial success.
3. **Veganism and Plant-Based Diets:** The growing vegan population in urban India is driving the demand for exotic culinary mushrooms (like Shiitake and King Oyster) as premium meat substitutes.
4. **Export Potential:** With improved processing and cold chain logistics, Indian mushroom growers are eyeing lucrative export markets in the Middle East and Europe.\`
  },
  "8": {
    title: "Selling Harvest in Local Mandis: A Practical Guide",
    date: "Feb 28, 2027",
    category: "Business Trends",
    content: \`For new mushroom farmers, selling the first harvest can be daunting. The local vegetable market (Mandi) is usually the first stop.

### Tips for Success at the Mandi

1. **Timing is Everything:** Mandis operate early in the morning. Aim to arrive between 4 AM and 5 AM. Freshness dictates the price, so harvest your mushrooms late at night or very early in the morning.
2. **Packaging:** Presentation matters. Pack your mushrooms in clean, ventilated punnets (200g - 250g) and then in larger, sturdy crates to prevent crushing.
3. **Build Relationships:** Don't just sell to the first buyer. Talk to multiple Arhtiyas (commission agents) and retailers. Build trust by consistently providing clean, graded, and high-quality produce.
4. **Know the Market Rate:** Prices fluctuate daily based on supply. Stay informed about the current wholesale rates in your city before negotiating.
5. **Grading:** Always separate your harvest into A, B, and C grades. Sell the premium A-grade at a higher price, and the lower grades to local eateries or for processing.\`
  },
  "9": {
    title: "Government Subsidies in MP: Step-by-Step Guide",
    date: "Feb 15, 2027",
    category: "Business Trends",
    content: \`Setting up a commercial mushroom farm requires significant capital, but the government of Madhya Pradesh offers substantial subsidies to support farmers.

### Navigating the MP Horticulture Portal

1. **Identify the Scheme:** The MIDH (Mission for Integrated Development of Horticulture) and state-specific schemes often provide 40% to 50% subsidies on capital costs for mushroom spawn making and compost units.
2. **Prepare a DPR:** You will need a Detailed Project Report (DPR). This should outline your technical layout, production capacity, financial projections, and bank loan details.
3. **Apply Online:** Register on the MP Horticulture web portal (MPFSTS). Upload your land documents (Khasra/Khatouni), Aadhaar card, bank details, and the DPR.
4. **Letter of Intent (LOI):** Do not start construction before receiving the LOI from the department. The district horticulture officer will inspect your site.
5. **Execution and Claim:** Complete the project according to the approved DPR. Maintain all GST bills. A final joint inspection will trigger the release of the subsidy directly to your loan account.\`
  },
`;

articleContent = articleContent.replace('"10": {', missingArticles + '\n  "10": {');
fs.writeFileSync('src/pages/ArticlePage.tsx', articleContent);
