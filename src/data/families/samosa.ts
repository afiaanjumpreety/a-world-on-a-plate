import type { DishFamily } from '../types';

export const samosa: DishFamily = {
  id: 'samosa',
  name: 'Samosa',
  alsoKnownAs: ['Sambusa', 'Sambousek', 'Somsa', 'Singara', 'Lukhmi', 'Sambuus', 'Chamuça'],
  tagline: 'A Persian pastry pocket, refolded by every coast it reached.',
  category: 'pastry',
  motif: 'samosa',
  color: '#8A4B2E',
  origin: {
    region: 'Greater Khorasan and the Persian-speaking world',
    country: 'IRN',
    coords: [58.8, 36.21],
    era: 'By the 900s',
    confidence: 'likely',
    confidenceNote:
      'The name is Persian and the earliest written references are 10th- and 11th-century Arabic and Persian texts, but none pins down exactly where the first ones were made.',
  },
  intro:
    'A small parcel of dough wrapped around a savoury filling, sealed and cooked whole: the samosa began as sanbosag, a pastry of the medieval Persian and Arab world. It travelled to Central Asia and the Levant, reached India with the courts of the Delhi Sultanate, and from there crossed the Indian Ocean to Africa and, eventually, Portugal. Along the way it changed shape, swapped meat for potato and back again, and was baked, fried and folded in a dozen different ways.',
  history: [
    'The samosa’s name has Middle Persian roots, and related savoury pastries appear across South Asia and neighbouring regions. A shared name is evidence of connections, but it does not establish one precise birthplace or a single route for every version. [1]',
    'South Asian samosas are commonly fried and filled with spiced potatoes, peas, onions or meat. Shapes and fillings vary: a Bengali singara and a North Indian potato samosa belong to a broad family rather than one fixed recipe. Hyderabad’s lukhmi is a flat, square pastry traditionally filled with minced meat. [1, 3]',
    'Central Asian samsa take a different approach. They are usually baked, often in a tandoor, with fillings such as lamb and onion. Their dough may be layered or bread-like. Comparing these pastries with fried samosas shows how cooking method can change the texture of a closely related dish. [2]',
    'Related pastries and names also appear in the Levant, the Horn of Africa and Portuguese-speaking communities. These regional forms help explain why this family includes different wrappers, fillings and folds. The map offers a simplified interpretation of those relationships. [1]',
  ],
  etymology:
    'Samosa, somsa, sambusa, sambuus and sambousek all descend from the Persian sanbosag (later sanbusa), recorded in Arabic as sanbusaj; its deeper roots are uncertain. Bengali singara is popularly linked to singhara, the water chestnut, whose shape it resembles, and chamuça is the Portuguese spelling of the same family name.',
  timeline: [
    {
      when: '900s',
      event:
        "Ibn Sayyar al-Warraq's Baghdad cookbook, Kitab al-Tabikh, records recipes for sanbusaj.",
    },
    {
      when: '1000s',
      event:
        'The Persian historian Abolfazl Beyhaqi is often cited as mentioning sanbosag at the Ghaznavid court.',
    },
    {
      when: 'c. 1300',
      event:
        'The poet Amir Khusrau, at the Delhi court, is often cited as describing samosas among the foods of the nobility.',
    },
    {
      when: '1330s–1340s',
      event:
        'Ibn Battuta describes sambusak of minced meat, almonds and pistachios at the court of Muhammad bin Tughluq.',
    },
    {
      when: 'Late 1500s',
      event: "The Ain-i-Akbari, a record of Akbar's court, includes a recipe for sanbusa.",
    },
    {
      when: '1600s onward',
      event:
        'The potato reaches India, usually credited to the Portuguese; much later it becomes the standard North Indian filling.',
    },
    {
      when: '1800s–1900s',
      event:
        'Indian traders and settlers carry the samosa to East Africa and Portuguese Mozambique.',
    },
    {
      when: 'Mid-1970s',
      event:
        'After Mozambican independence in 1975, families settling in Portugal make the chamuça an everyday snack there.',
    },
  ],
  commonThreads: [
    'A wheat-flour wrapper sealed around a savoury filling and cooked whole.',
    'Sized to be held in the hand and eaten in a few bites.',
    'A filling cooked or seasoned to stay fairly dry, so it does not burst the pastry.',
    'Food for hospitality and fasting: tea for guests, iftar, weddings and parties.',
    'A name descended from the Persian sanbosag.',
  ],
  divergences: [
    {
      title: 'The pastry',
      text: 'North Indian samosas use a short crust made by rubbing ghee into the flour. Uzbek somsa uses a dough layered with butter. Somali, Mozambican and Portuguese versions use paper-thin wrappers, and Levantine sambousek a soft, lightly enriched dough.',
    },
    {
      title: 'The filling',
      text: 'Minced meat with nuts was the original. Potato took over in North India over the last few centuries, while the Middle East, Central Asia, Hyderabad and the Horn of Africa kept meat at the centre. Ethiopian cooks often use lentils, and Levantine cooks also make cheese versions.',
    },
    {
      title: 'The shape',
      text: 'The tall Punjabi cone, the small Bengali pyramid, the flat triangles of the Indian Ocean coast, the Hyderabadi square and the Levantine half-moon are all members of the same family.',
    },
    {
      title: 'Fried or baked',
      text: 'Most versions are deep-fried, but Uzbek somsa is baked in a tandoor, and Levantine sambousek is as often baked as fried.',
    },
  ],
  compareAxes: [
    { key: 'pastry', label: 'Pastry' },
    { key: 'filling', label: 'Classic filling' },
    { key: 'shape', label: 'Shape' },
    { key: 'cooking', label: 'Cooking method' },
    { key: 'seasoning', label: 'Seasoning' },
    { key: 'occasion', label: 'When it appears' },
  ],
  variants: [
    // ------------------------------------------------------------------
    {
      id: 'sambousek',
      name: 'Sambousek',
      native: [{ text: 'سمبوسك', lang: 'Arabic', translit: 'sambousek' }],
      country: 'LBN',
      place: 'Beirut',
      coords: [35.5, 33.89],
      from: 'origin',
      arrival: 'Medieval era, through Arab cookery; recorded in Baghdad by the 900s',
      summary: "Crimped Levantine half-moons filled with spiced lamb and pine nuts, fried or baked for mezze. [1]",
      story: [
        "Sambousek is the Levant's descendant of the medieval sanbusaj, and it shows how early the family split. It is usually a half-moon rather than a triangle, its dough is soft and lightly enriched with oil or butter, and its edges are crimped by hand into a rope-like seam.",
        'Meat sambousek is filled with minced lamb or beef, onion, toasted pine nuts and a warm seven-spice blend; cheese versions use salty white cheeses such as akkawi with herbs. Lebanese families fry or bake large batches for mezze spreads and Ramadan evenings, and often freeze them to cook straight from the freezer when guests arrive.',
      ],
      signature: [
        'Half-moon shape with a hand-crimped edge',
        'Soft dough made with oil and butter',
        'Lamb, onion and toasted pine nuts with seven-spice',
        'Fried or baked, and served as part of mezze',
      ],
      traits: {
        pastry: 'Soft oil-and-butter dough',
        filling: 'Lamb, onion, pine nuts',
        shape: 'Crimped half-moon',
        cooking: 'Deep-fried or baked',
        seasoning: 'Seven-spice blend',
        occasion: 'Mezze spreads, Ramadan evenings',
      },
      servedWith: ['Lemon wedges', 'Yoghurt', 'Other mezze such as hummus and tabbouleh'],
      whenEaten: 'Mezze, gatherings and Ramadan evenings',
      sourceRefs: [1],
      recipe: {
        serves: 6,
        prepMinutes: 50,
        cookMinutes: 35,
        restMinutes: 30,
        difficulty: 'Medium',
        yield: 'About 24 sambousek',
        ingredients: [
          {
            title: 'Dough',
            items: [
              { qty: 300, unit: 'g', item: 'plain flour' },
              { qty: 0.75, unit: 'tsp', item: 'salt' },
              { qty: 60, unit: 'ml', item: 'vegetable oil' },
              { qty: 30, unit: 'g', item: 'butter', note: 'melted' },
              { qty: 120, unit: 'ml', item: 'warm water', note: 'add gradually' },
            ],
          },
          {
            title: 'Filling',
            items: [
              { qty: 50, unit: 'g', item: 'pine nuts' },
              { qty: 1, unit: 'tbsp', item: 'olive oil' },
              { qty: 1, unit: 'piece', item: 'large onion', note: 'finely chopped' },
              { qty: 400, unit: 'g', item: 'minced lamb', note: 'or beef' },
              { qty: 1.5, unit: 'tsp', item: 'Lebanese seven-spice (baharat)' },
              { qty: 1, unit: 'tsp', item: 'salt' },
              { qty: 0.5, unit: 'tsp', item: 'black pepper' },
              { qty: 1, unit: 'tbsp', item: 'pomegranate molasses', note: 'optional, or lemon juice' },
            ],
          },
          {
            title: 'To cook',
            items: [
              { qty: 1, unit: 'l', item: 'vegetable oil', note: 'for deep-frying; or 1 beaten egg to brush if baking' },
            ],
          },
        ],
        steps: [
          {
            title: 'Make the dough',
            text: 'Mix the flour and salt, then rub in the oil and melted butter until crumbly. Add the water gradually and knead for 5 minutes into a soft, smooth dough. Cover and rest for 30 minutes.',
          },
          {
            title: 'Toast the pine nuts',
            text: 'Fry the pine nuts in the olive oil over medium heat, stirring, until golden. Lift them out and set aside, leaving the oil in the pan.',
          },
          {
            title: 'Cook the filling',
            text: 'Soften the onion in the same pan for 5 minutes, then add the lamb and break it up. Cook until browned and the liquid has evaporated, then season with the seven-spice, salt, pepper and pomegranate molasses.',
          },
          {
            title: 'Cool the filling',
            text: 'Stir in the pine nuts and leave the filling to cool completely. Warm filling softens the dough and makes sealing difficult.',
          },
          {
            title: 'Roll and cut',
            text: 'Roll the dough out to about 2 mm thick and cut out 8 cm rounds. Re-roll the scraps once.',
          },
          {
            title: 'Fill and crimp',
            text: 'Put a heaped teaspoon of filling on each round, fold into a half-moon and press the edges together. Crimp the edge by folding and pinching it over itself along its length, or press with a fork.',
          },
          {
            title: 'Fry or bake',
            text: 'Deep-fry at 175°C for 3 to 4 minutes until golden, then drain on paper. To bake, brush with beaten egg and bake at 200°C for about 20 minutes.',
          },
        ],
        tips: [
          'Freeze shaped, uncooked sambousek on a tray, then bag them; fry from frozen, allowing an extra minute.',
          'For cheese sambousek, mix soaked and drained akkawi or halloumi with chopped parsley and a little egg.',
          'Keep the cut rounds covered with a cloth so they do not dry out before filling.',
        ],
      },
    },
    // ------------------------------------------------------------------
    {
      id: 'somsa',
      name: 'Tandir Somsa',
      native: [{ text: 'somsa', lang: 'Uzbek' }],
      country: 'UZB',
      place: 'Samarkand',
      coords: [66.96, 39.65],
      from: 'origin',
      arrival: 'Medieval era, along Central Asian trade routes; date unrecorded',
      summary: "Flaky Uzbek pastries of raw lamb and onion, baked against the walls of a tandoor. [2]",
      story: [
        'In Uzbekistan the somsa (samsa in Russian and several neighbouring languages) is baked rather than fried. The classic is tandir somsa, pressed onto the hot clay walls of a tandoor and baked until blistered and golden. Bazaars from Samarkand to Tashkent sell them hot from the oven.',
        'The filling goes in raw: hand-chopped lamb, a generous amount of fat, often from fat-tailed sheep, and plenty of onion, seasoned simply with cumin and black pepper. It cooks inside the pastry, so the juices stay sealed in. The dough is often layered with butter, which makes the crust flaky.',
      ],
      signature: [
        'Baked in a tandoor rather than fried',
        'Raw filling of hand-chopped lamb, fat and onion',
        'Dough layered with butter for a flaky crust',
        'Topped with sesame or nigella seeds',
      ],
      traits: {
        pastry: 'Butter-layered dough',
        filling: 'Raw lamb, fat, onion',
        shape: 'Triangle or square',
        cooking: 'Baked in a tandoor',
        seasoning: 'Cumin, black pepper',
        occasion: 'Bazaar snacks, lunch with tea',
      },
      servedWith: ['Green tea', 'Achichuk (tomato and onion salad)', 'Plain yoghurt'],
      whenEaten: 'Lunch and snacks from bazaar ovens',
      sourceRefs: [2],
      recipe: {
        serves: 6,
        prepMinutes: 50,
        cookMinutes: 30,
        restMinutes: 60,
        difficulty: 'Medium',
        yield: '12 somsa',
        ingredients: [
          {
            title: 'Dough',
            items: [
              { qty: 500, unit: 'g', item: 'plain flour' },
              { qty: 1, unit: 'tsp', item: 'salt' },
              { qty: 260, unit: 'ml', item: 'cold water', note: 'add gradually' },
              { qty: 80, unit: 'g', item: 'butter', note: 'very soft, for layering' },
            ],
          },
          {
            title: 'Filling',
            items: [
              { qty: 500, unit: 'g', item: 'boneless lamb shoulder', note: 'hand-chopped into 5 mm dice' },
              { qty: 100, unit: 'g', item: 'lamb fat or fat-tail fat', note: 'finely diced; or use fattier lamb' },
              { qty: 2, unit: 'piece', item: 'large onions', note: 'about 400 g, finely chopped' },
              { qty: 2, unit: 'tsp', item: 'cumin seeds', note: 'lightly crushed' },
              { qty: 1, unit: 'tsp', item: 'black pepper', note: 'freshly ground' },
              { qty: 1.5, unit: 'tsp', item: 'salt' },
            ],
          },
          {
            title: 'Topping',
            items: [
              { qty: 1, unit: 'piece', item: 'egg yolk', note: 'beaten with 1 tbsp water' },
              { qty: 1, unit: 'tbsp', item: 'sesame seeds', note: 'or nigella seeds' },
            ],
          },
        ],
        steps: [
          {
            title: 'Make a firm dough',
            text: 'Mix the flour and salt, add the water gradually and knead for 10 minutes into a firm, smooth dough. Cover and rest for 30 minutes.',
          },
          {
            title: 'Layer with butter',
            text: 'Roll the dough into a very thin rectangle, as large as your counter allows. Spread it evenly with the soft butter, then roll it up tightly from a long side into a log. Wrap and chill for 30 minutes.',
          },
          {
            title: 'Mix the raw filling',
            text: 'Combine the chopped lamb, fat, onion, cumin, pepper and salt in a bowl and mix well with your hands. Do not cook it; it cooks inside the pastry.',
          },
          {
            title: 'Cut and roll',
            text: 'Slice the log into 12 pieces. Stand each on a cut side, press flat so the spiral shows, and roll into a 13 cm round, thinner at the edges than in the middle.',
          },
          {
            title: 'Fill and fold',
            text: 'Spoon about 2 tablespoons of filling into the centre. Fold three sides over the filling to meet in the middle and pinch the seams firmly to make a triangle.',
          },
          {
            title: 'Glaze',
            text: 'Place seam side down on a tray lined with baking paper, brush with egg yolk and sprinkle with seeds.',
          },
          {
            title: 'Bake hot',
            text: 'Bake at 220°C, on a preheated tray or baking stone if you have one, for 25 to 30 minutes until deep golden and sizzling. Rest for 5 minutes before eating, as the juices are very hot.',
          },
        ],
        tips: [
          'Hand-chopped meat gives the right juicy texture; minced lamb works but is denser.',
          'Do not skimp on the fat or onion, as both melt into the filling and keep it moist.',
          'A preheated baking stone imitates the fierce bottom heat of the tandoor wall.',
        ],
      },
    },
    // ------------------------------------------------------------------
    {
      id: 'punjabi-samosa',
      name: 'Punjabi Samosa',
      native: [
        { text: 'समोसा', lang: 'Hindi', translit: 'samosa' },
        { text: 'ਸਮੋਸਾ', lang: 'Punjabi', translit: 'samosa' },
      ],
      country: 'IND',
      place: 'Amritsar, Punjab',
      coords: [74.87, 31.63],
      from: 'origin',
      arrival: '1200s–1300s, with Central Asian cooks; potato filling much later',
      summary: "A tall cone of short, ajwain-flecked pastry around spiced potato and peas, fried slowly. [1]",
      story: [
        'The samosa reached North India with Central Asian and Persian cooks by the 1200s or 1300s, but the version sold on Indian street corners today is a later creation. Early Indian samosas were meat pastries for the court. Potatoes, brought by European traders, became the standard filling over the following centuries, and by the 20th century the potato samosa was a national snack.',
        'The Punjabi style is large and tall, with a short, flaky crust made by rubbing ghee into the flour and seasoning it with ajwain. It is fried slowly in oil that is not too hot, so the pastry turns crisp without blistering. It is eaten with tamarind and mint chutneys, or broken over chole for samosa chaat.',
      ],
      signature: [
        'Short crust made by rubbing ghee into the flour (moyan)',
        'Ajwain seeds in the pastry',
        'Potato and peas with coriander seed and dried mango powder',
        'Tall cone shape, fried slowly at low heat',
      ],
      traits: {
        pastry: 'Short ghee crust, with ajwain',
        filling: 'Spiced potato and peas',
        shape: 'Tall cone',
        cooking: 'Deep-fried slowly',
        seasoning: 'Coriander seed, amchur, chilli',
        occasion: 'Teatime, street stalls, parties',
      },
      servedWith: ['Tamarind chutney', 'Mint and coriander chutney', 'Chole', 'Masala chai'],
      whenEaten: 'Afternoon tea, street snacks and gatherings',
      sourceRefs: [1],
      recipe: {
        serves: 6,
        prepMinutes: 50,
        cookMinutes: 40,
        restMinutes: 30,
        difficulty: 'Medium',
        yield: '12 samosas',
        ingredients: [
          {
            title: 'Pastry',
            items: [
              { qty: 250, unit: 'g', item: 'plain flour (maida)' },
              { qty: 0.5, unit: 'tsp', item: 'ajwain (carom seeds)' },
              { qty: 0.5, unit: 'tsp', item: 'salt' },
              { qty: 60, unit: 'g', item: 'ghee', note: 'melted, or neutral oil' },
              { qty: 90, unit: 'ml', item: 'cold water', note: 'add gradually' },
            ],
          },
          {
            title: 'Filling',
            items: [
              { qty: 600, unit: 'g', item: 'floury potatoes', note: 'boiled, peeled and roughly crumbled' },
              { qty: 80, unit: 'g', item: 'green peas', note: 'fresh or frozen' },
              { qty: 2, unit: 'tbsp', item: 'oil' },
              { qty: 1, unit: 'tsp', item: 'cumin seeds' },
              { qty: 1, unit: 'tbsp', item: 'coriander seeds', note: 'coarsely crushed' },
              { qty: 1, unit: 'tbsp', item: 'fresh ginger', note: 'finely chopped' },
              { qty: 2, unit: 'piece', item: 'green chillies', note: 'finely chopped' },
              { qty: 0.5, unit: 'tsp', item: 'Kashmiri chilli powder' },
              { qty: 1, unit: 'tsp', item: 'garam masala' },
              { qty: 1, unit: 'tsp', item: 'amchur (dried mango powder)' },
              { qty: 1, unit: 'tsp', item: 'salt' },
              { qty: 2, unit: 'tbsp', item: 'fresh coriander', note: 'chopped' },
            ],
          },
          {
            title: 'To fry',
            items: [{ qty: 1, unit: 'l', item: 'vegetable oil' }],
          },
        ],
        steps: [
          {
            title: 'Rub in the ghee',
            text: 'Mix the flour, ajwain and salt, add the ghee and rub it in until a handful holds its shape when squeezed. This step, called moyan, is what makes the crust short and flaky.',
          },
          {
            title: 'Bring the dough together',
            text: 'Add the water a little at a time to make a stiff dough, kneading only until it comes together. Cover and rest for 30 minutes.',
          },
          {
            title: 'Make the filling',
            text: 'Heat the oil, add the cumin and coriander seeds, then the ginger and chilli. Add the peas for 2 minutes, then the potatoes and all the spices, mashing lightly but leaving chunks. Stir in the coriander and leave to cool.',
          },
          {
            title: 'Roll and halve',
            text: 'Divide the dough into 6 balls, roll each into an oval about 18 cm long and 2 mm thick, and cut it in half across the middle.',
          },
          {
            title: 'Shape the cones',
            text: 'Wet the straight edge of a half with water, fold it into a cone and press the overlapping seam to seal. Fill with about 2 tablespoons of filling, then wet the open edge, pinch a small pleat at the back and press it shut so the samosa stands upright.',
          },
          {
            title: 'Fry low and slow',
            text: 'Heat the oil to about 140°C, add a few samosas and fry for 12 to 15 minutes, turning occasionally, until evenly golden and crisp. Raise the heat slightly for the last minute.',
          },
          {
            title: 'Drain and serve',
            text: 'Drain on paper and serve warm with tamarind and mint chutneys.',
          },
        ],
        tips: [
          'If the oil is too hot the pastry bubbles and blisters; low heat gives the smooth, crisp crust.',
          'Make sure the filling is completely cool before shaping.',
          'Leftover samosas reheat well in a 180°C oven for 10 minutes.',
        ],
      },
    },
    // ------------------------------------------------------------------
    {
      id: 'singara',
      name: 'Singara',
      native: [{ text: 'সিঙাড়া', lang: 'Bengali', translit: 'singara' }],
      country: 'BGD',
      place: 'Dhaka',
      coords: [90.41, 23.81],
      from: 'punjabi-samosa',
      arrival: 'Spread east along the Gangetic plain; date unrecorded',
      summary: "Bangladesh's small, pointed teatime samosa, filled with spiced diced potato. [1]",
      story: [
        'In Bangladesh and West Bengal the samosa is the singara, smaller and more pointed than its northern cousin, and sold at tea stalls in the afternoon with a cup of milky tea. The name is popularly said to come from singhara, the water chestnut, whose horned shape it resembles.',
        'Bangladeshi singara is usually filled with diced or lightly mashed potato cooked with onion, green chilli and cumin, and the crust is often flecked with nigella seeds. Dhaka also has kolija singara, filled with spiced liver. Singara is a fixture of iftar tables during Ramadan, alongside piyaju, beguni and spiced chickpeas.',
      ],
      signature: [
        'Small and pointed, about half the size of a Punjabi samosa',
        'Thin crust, often flecked with nigella seeds',
        'Diced potato cooked with onion, green chilli and cumin',
        'An afternoon tea-stall and iftar snack',
      ],
      traits: {
        pastry: 'Thin crust, with nigella seeds',
        filling: 'Diced potato, sometimes liver',
        shape: 'Small pointed pyramid',
        cooking: 'Deep-fried',
        seasoning: 'Green chilli, cumin, onion',
        occasion: 'Afternoon tea, Ramadan iftar',
      },
      servedWith: ['Milky tea', 'Tamarind sauce', 'Sliced onion and green chilli'],
      whenEaten: 'Afternoon tea and iftar',
      sourceRefs: [1],
      recipe: {
        serves: 6,
        prepMinutes: 45,
        cookMinutes: 35,
        restMinutes: 30,
        difficulty: 'Medium',
        yield: '16 singaras',
        ingredients: [
          {
            title: 'Pastry',
            items: [
              { qty: 250, unit: 'g', item: 'plain flour (maida)' },
              { qty: 0.5, unit: 'tsp', item: 'nigella seeds (kalonji)' },
              { qty: 0.5, unit: 'tsp', item: 'salt' },
              { qty: 4, unit: 'tbsp', item: 'soybean oil or ghee' },
              { qty: 100, unit: 'ml', item: 'cold water', note: 'add gradually' },
            ],
          },
          {
            title: 'Filling',
            items: [
              { qty: 500, unit: 'g', item: 'potatoes', note: 'peeled, cut into 1 cm dice' },
              { qty: 2, unit: 'tbsp', item: 'soybean oil' },
              { qty: 0.5, unit: 'tsp', item: 'cumin seeds' },
              { qty: 1, unit: 'piece', item: 'onion', note: 'finely chopped' },
              { qty: 1, unit: 'tsp', item: 'ginger paste' },
              { qty: 3, unit: 'piece', item: 'green chillies', note: 'finely chopped' },
              { qty: 0.25, unit: 'tsp', item: 'ground turmeric' },
              { qty: 1, unit: 'tsp', item: 'roasted ground cumin' },
              { qty: 1, unit: 'tsp', item: 'salt' },
              { qty: 30, unit: 'g', item: 'roasted peanuts', note: 'optional' },
              { qty: 2, unit: 'tbsp', item: 'fresh coriander', note: 'chopped' },
            ],
          },
          {
            title: 'To fry',
            items: [{ qty: 1, unit: 'l', item: 'soybean or vegetable oil' }],
          },
        ],
        steps: [
          {
            title: 'Make the pastry',
            text: 'Mix the flour, nigella seeds and salt, rub in the oil until crumbly, then add water to form a firm dough. Knead for 3 minutes, cover and rest for 30 minutes.',
          },
          {
            title: 'Cook the potatoes',
            text: 'Heat the oil and add the cumin seeds, then the onion, ginger and chillies, and cook until soft. Add the diced potato, turmeric and salt, cover and cook on low heat for 10 to 12 minutes, until tender but holding their shape.',
          },
          {
            title: 'Finish the filling',
            text: 'Stir in the roasted cumin, peanuts and coriander and lightly crush some of the potato so the filling holds together. Leave to cool.',
          },
          {
            title: 'Roll and halve',
            text: 'Divide the dough into 8 balls, roll each into a 12 cm round and cut it in half.',
          },
          {
            title: 'Shape the pyramids',
            text: 'Fold each half into a cone and seal the seam with a dab of water. Fill with a heaped tablespoon of filling, then fold the open edge over with a small pleat and press it shut, so the singara sits on a flat base with a pointed tip.',
          },
          {
            title: 'Fry',
            text: 'Fry in oil heated to about 160°C for 8 to 10 minutes, turning, until golden and crisp. Drain on paper.',
          },
          {
            title: 'Serve hot',
            text: 'Serve with milky tea, tamarind sauce and a little sliced onion and green chilli.',
          },
        ],
        tips: [
          'For kolija singara, use diced beef or chicken liver cooked with onion, ginger, garlic and garam masala in place of the potato.',
          'Diced potato rather than mash gives the singara its typical texture.',
          'Shaped singaras can be frozen uncooked and fried from frozen for iftar.',
        ],
      },
    },
    // ------------------------------------------------------------------
    {
      id: 'lukhmi',
      name: 'Lukhmi',
      country: 'IND',
      place: 'Hyderabad',
      coords: [78.47, 17.39],
      from: 'punjabi-samosa',
      arrival: 'Through Deccani and Nizam-era court cooking; date unrecorded',
      summary: "Hyderabad's flat, square pastry of minced mutton, served at weddings and in Irani cafés. [3]",
      story: [
        "Hyderabad's lukhmi is a flat, square meat pastry from the city's Deccani and Nizam-era cooking. The name is usually traced to the Urdu luqma, a morsel or mouthful. It is generally counted as a member of the samosa family, though whether it descends from the North Indian samosa or developed alongside it is not recorded.",
        'The pastry is a short, ghee-rich dough rolled thin, and the filling is a dry keema of minced mutton with ginger, garlic, green chilli and garam masala, finished with mint and lemon. Lukhmi is served as a starter at Hyderabadi weddings and during Ramadan, and is often sold in the Irani cafés of the old city.',
      ],
      signature: [
        'Flat square shape, sealed on all four sides',
        'Short, ghee-rich pastry',
        'Dry minced-mutton keema with mint and lemon',
        'A wedding and Ramadan starter',
      ],
      traits: {
        pastry: 'Short ghee pastry',
        filling: 'Minced mutton keema',
        shape: 'Flat square',
        cooking: 'Deep-fried',
        seasoning: 'Ginger-garlic, garam masala, mint',
        occasion: 'Weddings, Ramadan, café snacks',
      },
      servedWith: ['Lemon wedges', 'Onion rings', 'Mint chutney', 'Irani chai'],
      whenEaten: 'Wedding starters, Ramadan evenings and café teatime',
      sourceRefs: [3],
      recipe: {
        serves: 6,
        prepMinutes: 50,
        cookMinutes: 40,
        restMinutes: 30,
        difficulty: 'Medium',
        yield: '12 lukhmis',
        ingredients: [
          {
            title: 'Pastry',
            items: [
              { qty: 250, unit: 'g', item: 'plain flour (maida)' },
              { qty: 0.5, unit: 'tsp', item: 'salt' },
              { qty: 50, unit: 'g', item: 'ghee', note: 'melted' },
              { qty: 100, unit: 'ml', item: 'cold water', note: 'add gradually' },
            ],
          },
          {
            title: 'Keema filling',
            items: [
              { qty: 2, unit: 'tbsp', item: 'oil' },
              { qty: 1, unit: 'piece', item: 'onion', note: 'finely chopped' },
              { qty: 1, unit: 'tbsp', item: 'ginger-garlic paste' },
              { qty: 400, unit: 'g', item: 'minced mutton', note: 'or lamb' },
              { qty: 2, unit: 'piece', item: 'green chillies', note: 'finely chopped' },
              { qty: 0.25, unit: 'tsp', item: 'ground turmeric' },
              { qty: 0.5, unit: 'tsp', item: 'red chilli powder' },
              { qty: 1, unit: 'tsp', item: 'garam masala' },
              { qty: 1, unit: 'tsp', item: 'salt' },
              { qty: 1, unit: 'tbsp', item: 'lemon juice' },
              { qty: 2, unit: 'tbsp', item: 'fresh mint', note: 'chopped' },
              { qty: 2, unit: 'tbsp', item: 'fresh coriander', note: 'chopped' },
            ],
          },
          {
            title: 'To seal and fry',
            items: [
              { qty: 1, unit: 'tbsp', item: 'plain flour', note: 'mixed with 2 tbsp water to a paste' },
              { qty: 1, unit: 'l', item: 'vegetable oil', note: 'for deep-frying' },
            ],
          },
        ],
        steps: [
          {
            title: 'Make the pastry',
            text: 'Rub the ghee into the flour and salt until it looks like breadcrumbs, then add water to make a firm dough. Cover and rest for 30 minutes.',
          },
          {
            title: 'Cook the keema',
            text: 'Fry the onion in the oil until golden, add the ginger-garlic paste for a minute, then the mince. Break it up and cook with the chillies, turmeric, chilli powder and salt for about 20 minutes, until completely dry.',
          },
          {
            title: 'Finish and cool',
            text: 'Stir in the garam masala, lemon juice, mint and coriander. Spread on a plate to cool completely.',
          },
          {
            title: 'Roll and cut squares',
            text: 'Roll the pastry out thinly, about 2 mm, and cut it into 24 squares of about 8 cm.',
          },
          {
            title: 'Fill and seal',
            text: 'Place a tablespoon of keema in the centre of 12 squares, brush the edges with flour paste and top with the remaining squares. Press the edges together and crimp them with a fork.',
          },
          {
            title: 'Fry',
            text: 'Fry in oil at about 165°C for 5 to 6 minutes, turning once, until crisp and pale gold.',
          },
          {
            title: 'Serve',
            text: 'Drain and serve hot with lemon wedges, onion rings and mint chutney.',
          },
        ],
        tips: [
          'The keema must be dry; any moisture will soften the pastry and cause splitting in the oil.',
          'A spoonful of crisp fried onions stirred into the keema is a common Hyderabadi addition.',
          'Fry at a moderate temperature so the pastry cooks through and stays crisp.',
        ],
      },
    },
    // ------------------------------------------------------------------
    {
      id: 'sambuus',
      name: 'Sambuus',
      native: [{ text: 'sambuus', lang: 'Somali' }],
      country: 'SOM',
      place: 'Mogadishu',
      coords: [45.34, 2.05],
      from: 'origin',
      arrival: 'Over centuries of Red Sea and Indian Ocean trade; route undocumented',
      summary: "Small, crisp Somali triangles of thin homemade wrappers and spiced minced meat. [1]",
      story: [
        'Across the Horn of Africa the samosa is sambuus in Somali and sambusa in Ethiopia and Eritrea. It probably arrived through centuries of trade with Arabia and India across the Red Sea and Indian Ocean, though no record shows exactly when. Somali cooks often make the wrappers themselves, cooking very thin rounds of dough briefly before folding.',
        'The Somali sambuus is small, flat and very crisp, filled with minced beef or lamb, onion, green chilli and spices such as those in xawaash, the Somali spice blend. It is an essential snack at Ramadan iftar, made in large batches, and also appears at weddings and Eid. Ethiopian sambusa is often filled with spiced lentils instead.',
      ],
      signature: [
        'Paper-thin wrappers, lightly cooked before folding',
        'Small, flat triangle folded from a half-round',
        'Minced beef or lamb with cumin, cardamom and green chilli',
        'The defining snack of Somali iftar',
      ],
      traits: {
        pastry: 'Paper-thin cooked wrappers',
        filling: 'Minced beef or lamb',
        shape: 'Small flat triangle',
        cooking: 'Deep-fried',
        seasoning: 'Cumin, cardamom, green chilli',
        occasion: 'Ramadan iftar, weddings, Eid',
      },
      servedWith: ['Lemon wedges', 'Green chilli sauce (basbaas)', 'Spiced tea (shaah)'],
      whenEaten: 'Ramadan iftar, weddings and Eid',
      sourceRefs: [1],
      recipe: {
        serves: 6,
        prepMinutes: 60,
        cookMinutes: 40,
        restMinutes: 30,
        difficulty: 'Challenging',
        yield: '24 sambuus',
        ingredients: [
          {
            title: 'Wrappers',
            items: [
              { qty: 300, unit: 'g', item: 'plain flour' },
              { qty: 0.5, unit: 'tsp', item: 'salt' },
              { qty: 180, unit: 'ml', item: 'warm water', note: 'add gradually' },
              { qty: 3, unit: 'tbsp', item: 'vegetable oil', note: 'plus extra for brushing' },
            ],
          },
          {
            title: 'Filling',
            items: [
              { qty: 500, unit: 'g', item: 'minced beef or lamb' },
              { qty: 2, unit: 'piece', item: 'onions', note: 'finely chopped' },
              { qty: 3, unit: 'clove', item: 'garlic', note: 'crushed' },
              { qty: 2, unit: 'piece', item: 'green chillies', note: 'finely chopped' },
              { qty: 1.5, unit: 'tsp', item: 'ground cumin' },
              { qty: 1, unit: 'tsp', item: 'ground coriander' },
              { qty: 0.5, unit: 'tsp', item: 'ground cardamom' },
              { qty: 0.5, unit: 'tsp', item: 'black pepper' },
              { qty: 1, unit: 'tsp', item: 'salt' },
              { qty: 0.5, unit: 'bunch', item: 'fresh coriander', note: 'chopped' },
            ],
          },
          {
            title: 'To seal and fry',
            items: [
              { qty: 2, unit: 'tbsp', item: 'plain flour', note: 'mixed with 2 tbsp water to a paste' },
              { qty: 1, unit: 'l', item: 'vegetable oil', note: 'for deep-frying' },
            ],
          },
        ],
        steps: [
          {
            title: 'Make the dough',
            text: 'Mix the flour, salt, water and oil and knead for 5 minutes into a soft, smooth dough. Cover and rest for 30 minutes.',
          },
          {
            title: 'Cook the filling',
            text: 'Brown the mince in a dry pan, breaking it up, then add the onion, garlic and chilli and cook until soft. Add the spices and salt and cook until all the liquid has gone. Cool, then stir in the coriander.',
          },
          {
            title: 'Stack and roll',
            text: 'Divide the dough into 12 balls and flatten each to a 10 cm disc. Brush the tops of half of them with oil, dust lightly with flour, and press a second disc on top. Roll each pair out into a thin round about 22 cm across.',
          },
          {
            title: 'Cook the wrappers',
            text: 'Cook each double round in a dry pan over medium heat for 20 to 30 seconds a side, just until it sets without browning. While still warm, peel the two layers apart and keep them under a cloth.',
          },
          {
            title: 'Cut',
            text: 'Cut each round in half to give 24 half-rounds.',
          },
          {
            title: 'Fold the triangles',
            text: 'Fold a half-round into a cone along its straight edge, sealing the seam with flour paste. Fill with a tablespoon of meat, then fold the remaining flap over and seal it with paste to make a flat triangle.',
          },
          {
            title: 'Fry',
            text: 'Deep-fry at 175°C for 3 to 4 minutes, until crisp and golden. Drain and serve warm with lemon and chilli sauce.',
          },
        ],
        tips: [
          'Bought spring roll pastry cut into strips is a common shortcut for the wrappers.',
          'If you have xawaash, use 2 teaspoons of it in place of the separate ground spices.',
          'Shaped sambuus freeze well uncooked, which is how many families prepare for Ramadan.',
        ],
      },
    },
    // ------------------------------------------------------------------
    {
      id: 'chamuca-mozambique',
      name: 'Mozambican Chamuça',
      native: [{ text: 'chamuça', lang: 'Portuguese' }],
      country: 'MOZ',
      place: 'Maputo',
      coords: [32.57, -25.97],
      from: 'punjabi-samosa',
      arrival: '1800s–1900s, with Gujarati and Goan traders under Portuguese rule',
      summary: "Small, flat triangles of thin pastry filled with minced beef and hot piri-piri. [1]",
      story: [
        "Mozambique's chamuça comes from the Indian communities, largely Gujarati and Goan, who traded and settled on the coast under Portuguese rule. The Portuguese spelling stuck, and so did the snack: chamuças are sold on Maputo street corners and appear at birthday parties, weddings and Eid celebrations.",
        'Mozambican chamuças are small, flat triangles made from strips of thin pastry, closer to the East African style than to the Punjabi cone. The classic filling is minced beef with onion, garlic, ginger and garam masala, made hotter with piri-piri, the small chilli that runs through so much Mozambican cooking.',
      ],
      signature: [
        'Folded flag-style from strips of thin pastry',
        'Minced beef with ginger, garlic and garam masala',
        'Heated with piri-piri chilli',
        'Small enough for party platters',
      ],
      traits: {
        pastry: 'Thin strip pastry',
        filling: 'Minced beef, onion',
        shape: 'Folded flat triangle',
        cooking: 'Deep-fried',
        seasoning: 'Piri-piri, ginger, garam masala',
        occasion: 'Street snacks, parties, Eid',
      },
      servedWith: ['Lemon wedges', 'Piri-piri sauce', 'Cold drinks'],
      whenEaten: 'Snacks, parties and celebrations',
      sourceRefs: [1],
      recipe: {
        serves: 6,
        prepMinutes: 45,
        cookMinutes: 35,
        restMinutes: 0,
        difficulty: 'Medium',
        yield: 'About 30 chamuças',
        ingredients: [
          {
            title: 'Filling',
            items: [
              { qty: 2, unit: 'tbsp', item: 'vegetable oil' },
              { qty: 1, unit: 'piece', item: 'large onion', note: 'finely chopped' },
              { qty: 3, unit: 'clove', item: 'garlic', note: 'crushed' },
              { qty: 1, unit: 'tbsp', item: 'fresh ginger', note: 'grated' },
              { qty: 500, unit: 'g', item: 'minced beef' },
              { qty: 2, unit: 'piece', item: 'fresh piri-piri or bird’s eye chillies', note: 'finely chopped' },
              { qty: 0.25, unit: 'tsp', item: 'ground turmeric' },
              { qty: 1, unit: 'tsp', item: 'ground cumin' },
              { qty: 1.5, unit: 'tsp', item: 'garam masala' },
              { qty: 1, unit: 'tsp', item: 'salt' },
              { qty: 1, unit: 'tbsp', item: 'lemon juice' },
              { qty: 0.5, unit: 'bunch', item: 'fresh coriander', note: 'chopped' },
            ],
          },
          {
            title: 'Pastry',
            items: [
              { qty: 15, unit: 'piece', item: 'spring roll pastry sheets', note: 'about 20 cm square; or homemade chamuça pastry' },
              { qty: 2, unit: 'tbsp', item: 'plain flour', note: 'mixed with 2 tbsp water to a paste' },
            ],
          },
          {
            title: 'To fry',
            items: [{ qty: 1, unit: 'l', item: 'vegetable oil' }],
          },
        ],
        steps: [
          {
            title: 'Cook the filling',
            text: 'Soften the onion in the oil, then add the garlic and ginger for a minute. Add the beef and chillies, break up the meat and cook until browned.',
          },
          {
            title: 'Season and dry',
            text: 'Add the turmeric, cumin, garam masala and salt and cook until the mixture is completely dry. Finish with lemon juice and coriander, then cool.',
          },
          {
            title: 'Cut the strips',
            text: 'Cut each pastry sheet in half to give 30 strips about 10 cm wide. Keep them under a damp cloth while you work.',
          },
          {
            title: 'Start the fold',
            text: 'Fold the bottom corner of a strip up to the opposite edge to make a triangle, then fold that triangle up once more to form a pocket.',
          },
          {
            title: 'Fill and finish folding',
            text: 'Spoon a heaped teaspoon of filling into the pocket, then keep folding the triangle up along the strip. Seal the last flap with flour paste.',
          },
          {
            title: 'Fry',
            text: 'Deep-fry at 175°C for about 3 minutes, until crisp and golden. Drain on paper and serve with lemon and piri-piri sauce.',
          },
        ],
        tips: [
          'Make sure the corners are tightly sealed so no oil gets inside.',
          'Adjust the chilli to taste; Mozambican chamuças are usually properly hot.',
          'Fold a big batch and freeze them on trays for parties.',
        ],
      },
    },
    // ------------------------------------------------------------------
    {
      id: 'chamuca-portugal',
      name: 'Portuguese Chamuça',
      native: [{ text: 'chamuça', lang: 'Portuguese' }],
      country: 'PRT',
      place: 'Lisbon',
      coords: [-9.14, 38.72],
      from: 'chamuca-mozambique',
      arrival: 'Mostly from the mid-1970s, with families leaving Mozambique',
      summary: "A small, mildly spiced chicken or beef triangle sold by the piece in Lisbon cafés. [1]",
      story: [
        'Chamuças were known in Portugal through its empire, but they became an everyday snack from the mid-1970s, when many Indo-Mozambican and Portuguese families left Mozambique after independence and settled in and around Lisbon. Goan families, some of whom had moved after Goa became part of India in 1961, added their own cooking.',
        'Today chamuças sit in the glass cases of pastelarias and cafés next to rissóis and croquetes, sold by the piece with a coffee or a beer. Chicken and beef are the usual fillings, seasoned more gently than in Mozambique, and the triangles are small enough to eat in two bites.',
      ],
      signature: [
        'Mildly spiced, often with chicken',
        'Bought thin pastry folded into small triangles',
        'Sold by the piece in pastelarias and cafés',
        'A petisco to eat with a drink',
      ],
      traits: {
        pastry: 'Thin bought pastry sheets',
        filling: 'Chicken or beef',
        shape: 'Folded flat triangle',
        cooking: 'Deep-fried',
        seasoning: 'Mild curry, coriander',
        occasion: 'Café snacks, parties',
      },
      servedWith: ['Coffee', 'Cold beer', 'Other salgados such as rissóis'],
      whenEaten: 'Café snacks and party platters',
      sourceRefs: [1],
      recipe: {
        serves: 6,
        prepMinutes: 40,
        cookMinutes: 35,
        restMinutes: 0,
        difficulty: 'Easy',
        yield: '24 chamuças',
        ingredients: [
          {
            title: 'Filling',
            items: [
              { qty: 2, unit: 'tbsp', item: 'olive oil' },
              { qty: 1, unit: 'piece', item: 'onion', note: 'finely chopped' },
              { qty: 2, unit: 'clove', item: 'garlic', note: 'crushed' },
              { qty: 400, unit: 'g', item: 'boneless chicken thighs', note: 'finely chopped or minced' },
              { qty: 1, unit: 'piece', item: 'small carrot', note: 'finely diced' },
              { qty: 1.5, unit: 'tsp', item: 'mild curry powder' },
              { qty: 0.5, unit: 'tsp', item: 'ground cumin' },
              { qty: 1, unit: 'tsp', item: 'salt' },
              { qty: 0.25, unit: 'tsp', item: 'black pepper' },
              { qty: 1, unit: 'tbsp', item: 'lemon juice' },
              { qty: 3, unit: 'tbsp', item: 'fresh coriander', note: 'chopped' },
            ],
          },
          {
            title: 'Pastry',
            items: [
              { qty: 12, unit: 'piece', item: 'chamuça or spring roll pastry sheets', note: 'about 20 cm square' },
              { qty: 2, unit: 'tbsp', item: 'plain flour', note: 'mixed with 2 tbsp water to a paste' },
            ],
          },
          {
            title: 'To fry',
            items: [{ qty: 1, unit: 'l', item: 'vegetable oil' }],
          },
        ],
        steps: [
          {
            title: 'Soften the onion',
            text: 'Cook the onion and garlic gently in the olive oil for 5 minutes, without browning.',
          },
          {
            title: 'Cook the chicken',
            text: 'Add the chicken and carrot and cook, breaking up the meat, for 8 to 10 minutes until cooked through.',
          },
          {
            title: 'Season',
            text: 'Stir in the curry powder, cumin, salt and pepper and cook for 2 minutes more, until dry. Finish with lemon juice and coriander and leave to cool.',
          },
          {
            title: 'Cut the pastry',
            text: 'Cut each sheet in half to make 24 strips, and keep them covered with a damp cloth.',
          },
          {
            title: 'Fold the triangles',
            text: 'Fold the end of a strip over to form a triangle pocket, add a heaped teaspoon of filling, and keep folding along the strip. Seal the last flap with flour paste.',
          },
          {
            title: 'Fry and serve',
            text: 'Deep-fry at 175°C for about 3 minutes until golden. Drain on paper and serve warm.',
          },
        ],
        tips: [
          'Portuguese supermarkets sell sheets labelled for chamuças; spring roll pastry is the closest substitute elsewhere.',
          'For beef chamuças, use minced beef and a little more curry powder.',
          'They reheat well in a hot oven, which is how many cafés keep them crisp.',
        ],
      },
    },
  ],
  sources: [
    {
      "title": "Samosa",
      "publisher": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Samosa",
      "supports": "Family overview, preparation and regional context; historical accounts are secondary and should be read with their footnotes.",
      "accessed": "2026-10-22"
    },
    {
      "title": "Samsa (food)",
      "publisher": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Samsa_%28food%29",
      "supports": "Central Asian baked meat-and-onion pastries and tandoor cooking.",
      "accessed": "2026-10-22"
    },
    {
      "title": "Lukhmi",
      "publisher": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Lukhmi",
      "supports": "Hyderabadi square pastry with minced-meat filling.",
      "accessed": "2026-10-22"
    }
  ],
};
