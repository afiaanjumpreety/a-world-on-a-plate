import type { DishFamily } from '../types';

export const paratha: DishFamily = {
  id: 'paratha',
  name: 'Paratha',
  alsoKnownAs: [
    'Porota',
    'Parotta',
    'Roti Canai',
    'Roti Prata',
    'Godamba Roti',
    'Palata',
    'Buss-up-shut',
  ],
  tagline: 'Wheat dough, fat and folding, from Lahore to Port of Spain.',
  category: 'bread',
  motif: 'flatbread',
  color: '#A87A35',
  origin: {
    region: 'Punjab and the North Indian plains',
    country: 'IND',
    coords: [75.86, 30.9],
    era: 'Established by the Mughal era (1500s–1700s); earlier roots debated',
    confidence: 'likely',
    confidenceNote:
      "Historians agree the paratha belongs to North India's wheat belt, but how early it took its layered form is unclear, and the medieval texts sometimes cited are open to interpretation.",
  },
  intro:
    'Take a wheat dough, brush it with fat, fold or coil it, roll it out again and cook it on a hot iron plate: that is a paratha. The idea began in the wheat-growing north of the Indian subcontinent and travelled east to Bengal, south to Tamil Nadu and Sri Lanka, across the Bay of Bengal to Penang, Singapore and Rangoon, and over the oceans to the Caribbean. Every stop changed the flour, the fat and the fold, but the layers stayed.',
  history: [
    "The paratha belongs to the wheat-growing north of the Indian subcontinent, where flatbreads cooked on an iron tawa are everyday food. A paratha is what happens when that dough is brushed with fat, folded or rolled up, and rolled out again, so it cooks into layers rather than a single sheet. The 12th-century Sanskrit text Manasollasa is sometimes cited for its descriptions of wheat breads made with ghee, and some writers read these as early parathas. The match is plausible rather than certain, so the safest claim is that ghee-layered breads were part of North Indian cooking well before the word itself is widely recorded.",
    'By the Mughal era, from the 1500s onward, breads rich with ghee were a mark of good eating in the courts and towns of the north, and the paratha took the shape most South Asians would recognise: whole-wheat or plain flour, generous fat, and a fold that traps layers. In Punjab it became the backbone of breakfast, eaten plain or stuffed with potato, radish or cauliflower. From there it spread down the Gangetic plain to Bengal and south across the peninsula, changing its flour and its fat as it went.',
    'A second journey ran through South India and across the Bay of Bengal. In Tamil Nadu and Kerala a plain-flour version, stretched thin and coiled, became the parotta of roadside eateries. From the late 1700s, Tamil Muslim traders and workers from the Coromandel coast settled in Penang, Singapore and the other ports of British Malaya and Burma, and their stalls made a stretched, griddle-cooked bread that became roti canai, roti prata and palata. Exactly how the South Indian parotta and the Malayan roti relate, and which came first, is still argued over.',
    "Indentured labour carried the bread further still. In the 19th and early 20th centuries, workers from India, many from the Bhojpuri-speaking regions of today's Uttar Pradesh and Bihar, were shipped to plantations in the Caribbean, the Indian Ocean and the Pacific. Trinidad's indenture period ran from 1845 to 1917, and there the layered roti, beaten into shreds after cooking, became buss-up-shut. Today the family runs from breakfast in Lahore and teatime in Dhaka to late nights at Singapore hawker centres and Sunday lunch in Port of Spain.",
  ],
  etymology:
    'Paratha is usually explained as a joining of parat, meaning layer, and atta, wheat flour. Porota, parotta, prata and palata are local renderings of the same word, while the "canai" in roti canai has several competing explanations and no settled one.',
  timeline: [
    {
      when: '12th century',
      event:
        'The Sanskrit Manasollasa describes wheat breads made with ghee; some writers read these as early parathas.',
    },
    {
      when: '1500s–1700s',
      event:
        'Ghee-layered breads are part of Mughal-era North Indian cooking and spread with it across the north.',
    },
    {
      when: '1610',
      event:
        'Dhaka becomes the Mughal capital of Bengal, drawing North Indian court cooking east.',
    },
    {
      when: '1786 and 1819',
      event:
        'Penang and Singapore become British ports; Tamil Muslim traders and workers settle in both.',
    },
    {
      when: '1845–1917',
      event:
        'Indentured labourers from India arrive in Trinidad, bringing tawa breads with them.',
    },
    {
      when: 'Late 1800s–1930s',
      event:
        'Large-scale Indian migration to colonial Burma brings palata to Rangoon.',
    },
    {
      when: 'By the mid-1900s',
      event:
        'The plain-flour parotta is a fixture of eateries across Tamil Nadu and Kerala.',
    },
    {
      when: 'Late 1900s',
      event:
        'Roti canai and roti prata become everyday food across every community in Malaysia and Singapore.',
    },
  ],
  commonThreads: [
    'A wheat dough cooked on a flat iron surface, never in an oven.',
    'Fat spread between layers, then folded, coiled or stretched to keep them apart.',
    'Dough rested before shaping, so it rolls or stretches without tearing.',
    'Torn by hand and eaten with curry, dal, egg or something sweet.',
    'Cooked to order and best within minutes of leaving the pan.',
  ],
  divergences: [
    {
      title: 'Whole wheat or plain flour',
      text: 'Punjab and Lahore lean on whole-wheat atta, which gives a nutty, sturdy bread. East and south of the Punjab, plain flour (maida) takes over, because only a refined, well-rested dough can be stretched as thin as the Southeast Asian roti demands.',
    },
    {
      title: 'The fat',
      text: 'Desi ghee defines the Lahori and Amritsari versions. Bangladeshi hotels use soybean oil or dalda, a vegetable shortening; mamak stalls use ghee or margarine; Thai street carts fry in margarine; Trinidadian cooks mix butter or ghee with oil.',
    },
    {
      title: 'How the layers are made',
      text: 'There are four broad methods: folding a brushed round into a triangle or square; pleating a sheet like a fan and coiling it; stretching the dough paper-thin and folding it into a parcel; or, in Trinidad, slitting a round, rolling it into a cone and squashing it flat.',
    },
    {
      title: 'What happens after the pan',
      text: 'Lachha paratha and parotta are crushed between the palms to open the layers, roti canai is scrunched, and buss-up-shut is beaten into shreds. Godamba roti and Lahori paratha are served flat. In Thailand and Myanmar the bread often turns sweet, with sugar or condensed milk.',
    },
  ],
  compareAxes: [
    { key: 'flour', label: 'Flour' },
    { key: 'fat', label: 'Fat used' },
    { key: 'layering', label: 'How layers are made' },
    { key: 'shape', label: 'Final shape' },
    { key: 'cooking', label: 'Cooked on' },
    { key: 'texture', label: 'Texture' },
  ],
  variants: [
    // ------------------------------------------------------------------
    {
      id: 'lachha-paratha',
      name: 'Lachha Paratha',
      native: [{ text: 'लच्छा पराठा', lang: 'Hindi', translit: 'lachchha paratha' }],
      country: 'IND',
      place: 'Amritsar, Punjab',
      coords: [74.87, 31.63],
      from: 'origin',
      arrival: 'A Punjabi refinement of the everyday paratha; date unrecorded',
      summary:
        'A whole-wheat paratha pleated and coiled so it opens into crisp, ghee-rich rings.',
      story: [
        'In Punjab the paratha is a breakfast institution, most often stuffed with spiced potato, cauliflower or radish and served with butter, yoghurt and pickle. The lachha paratha is its unstuffed, showier sibling, made purely for its layers. Lachha means something like rings or strands, which is exactly what you see when it is crushed in the hand after cooking.',
        "Amritsar's dhabas serve it with chole, dal makhani or a tall glass of lassi. Its spiral structure, made by pleating a ghee-brushed sheet like a paper fan and coiling it up, gives it more crisp edges than a simply folded paratha, and it holds up well when packed for later.",
      ],
      signature: [
        'Whole-wheat atta dough, enriched with ghee',
        'Sheet pleated like a fan, then coiled into a spiral',
        'Cooked on a tawa with ghee until crisp',
        'Crushed between the palms to open the rings',
      ],
      traits: {
        flour: 'Whole-wheat atta',
        fat: 'Ghee',
        layering: 'Pleated strip, coiled',
        shape: 'Round spiral',
        cooking: 'Tawa, with ghee',
        texture: 'Crisp, ring-like layers',
      },
      servedWith: ['Chole', 'Dal makhani', 'Paneer curry', 'Lassi', 'Pickle'],
      whenEaten: 'Breakfast and dhaba meals, any time of day',
      recipe: {
        serves: 4,
        prepMinutes: 35,
        cookMinutes: 25,
        restMinutes: 40,
        difficulty: 'Medium',
        yield: '6 lachha parathas',
        ingredients: [
          {
            title: 'Dough',
            items: [
              { qty: 300, unit: 'g', item: 'whole-wheat flour (atta)' },
              { qty: 0.75, unit: 'tsp', item: 'salt' },
              { qty: 1, unit: 'tbsp', item: 'ghee', note: 'melted' },
              { qty: 190, unit: 'ml', item: 'lukewarm water', note: 'add gradually' },
            ],
          },
          {
            title: 'Layering and cooking',
            items: [
              { qty: 60, unit: 'g', item: 'ghee', note: 'melted, for brushing' },
              { qty: 2, unit: 'tbsp', item: 'whole-wheat flour', note: 'for dusting between layers' },
              { qty: 3, unit: 'tbsp', item: 'ghee', note: 'for the pan' },
            ],
          },
        ],
        steps: [
          {
            title: 'Make the dough',
            text: 'Mix the flour and salt, rub in the tablespoon of ghee, then add the water a little at a time. Knead for 8 minutes into a soft, smooth dough that does not stick to your hands.',
          },
          {
            title: 'Rest the dough',
            text: 'Cover the dough and leave it for 30 minutes. This relaxes the gluten so it rolls thin without springing back.',
          },
          {
            title: 'Roll a thin round',
            text: 'Divide into 6 balls. Roll one out on a lightly floured surface into a thin round about 22 cm across.',
          },
          {
            title: 'Brush and pleat',
            text: 'Brush the round generously with melted ghee and sprinkle with a little flour. Starting at one edge, fold it back and forth in narrow pleats, like a paper fan, until you have a long strip.',
          },
          {
            title: 'Coil the strip',
            text: 'Stretch the strip gently, then roll it up from one end into a tight spiral and tuck the tail underneath. Repeat with the rest and let the coils rest for 10 minutes.',
          },
          {
            title: 'Roll out gently',
            text: 'Press each coil flat and roll it lightly to about 16 cm across. Use light pressure so you flatten the spiral without squashing the layers together.',
          },
          {
            title: 'Cook on the tawa',
            text: 'Cook on a hot tawa or heavy frying pan for 30 seconds a side, then brush each side with ghee and keep turning and pressing the edges until crisp and golden, about 3 to 4 minutes in all.',
          },
          {
            title: 'Crush to open the layers',
            text: 'While it is still hot, cup the paratha between your palms and push the edges in towards the centre a couple of times. The rings will separate and fluff up.',
          },
        ],
        tips: [
          'Dusting flour between the pleats is what stops the layers fusing, so do not skip it.',
          'Keep cooked parathas wrapped in a clean cloth while you finish the batch.',
          'A few ajwain seeds or a pinch of chilli flakes sprinkled on the ghee layer is a common variation.',
        ],
      },
    },
    // ------------------------------------------------------------------
    {
      id: 'lahori-paratha',
      name: 'Lahori Desi Ghee Paratha',
      native: [{ text: 'پراٹھا', lang: 'Urdu', translit: 'paratha' }],
      country: 'PAK',
      place: 'Lahore',
      coords: [74.36, 31.55],
      from: 'origin',
      arrival: "Long part of Lahore's breakfast culture; date unrecorded",
      summary:
        'A thick, square paratha fried slowly in desi ghee until the outside shatters.',
      story: [
        'Lahore takes its breakfast seriously, and the desi ghee paratha sits at the centre of it. Desi ghee means clarified butter made from cow or buffalo milk, as opposed to vegetable ghee, and Lahori cooks use plenty. The paratha is rolled thicker than most of its cousins and fried slowly, so the outside turns crisp while the inside stays soft and layered.',
        'On weekend mornings it arrives with an omelette, chanay (spiced chickpeas), aloo bhujia or halwa, alongside sweet milky tea or lassi. The square shape comes from folding a ghee-brushed round in from four sides, a quick home method that traps a few thick layers rather than dozens of thin ones.',
      ],
      signature: [
        'Generous desi ghee, both in the layers and in the pan',
        'Folded in from four sides into a square',
        'Rolled thick and fried slowly over medium-low heat',
        'Served flat, not crushed',
      ],
      traits: {
        flour: 'Atta, often with some maida',
        fat: 'Desi ghee, generously',
        layering: 'Ghee-brushed, folded into square',
        shape: 'Thick square',
        cooking: 'Tawa, fried in ghee',
        texture: 'Crisp outside, soft inside',
      },
      servedWith: ['Omelette', 'Chanay (spiced chickpeas)', 'Aloo bhujia', 'Halwa', 'Lassi or doodh patti tea'],
      whenEaten: 'Weekend and festive breakfasts',
      recipe: {
        serves: 4,
        prepMinutes: 30,
        cookMinutes: 25,
        restMinutes: 40,
        difficulty: 'Medium',
        yield: '4 large parathas',
        ingredients: [
          {
            title: 'Dough',
            items: [
              { qty: 250, unit: 'g', item: 'whole-wheat flour (atta)' },
              { qty: 70, unit: 'g', item: 'plain flour (maida)' },
              { qty: 1, unit: 'tsp', item: 'salt' },
              { qty: 1, unit: 'tbsp', item: 'desi ghee', note: 'melted' },
              { qty: 200, unit: 'ml', item: 'lukewarm water', note: 'add gradually' },
            ],
          },
          {
            title: 'Layering and frying',
            items: [
              { qty: 100, unit: 'g', item: 'desi ghee', note: 'melted, or clarified butter' },
              { qty: 2, unit: 'tbsp', item: 'whole-wheat flour', note: 'for dusting' },
            ],
          },
        ],
        steps: [
          {
            title: 'Make the dough',
            text: 'Mix both flours with the salt and the tablespoon of ghee. Add water gradually and knead for 8 minutes into a soft, pliable dough.',
          },
          {
            title: 'Rest',
            text: 'Cover and rest for 30 minutes.',
          },
          {
            title: 'Roll and brush',
            text: 'Divide into 4 balls. Roll one into a round about 20 cm across and brush the surface with ghee.',
          },
          {
            title: 'Fold into a square',
            text: 'Fold the left and right sides into the middle so they overlap slightly, brush with ghee again, then fold the top and bottom in to make a square parcel. Dust lightly with flour and leave the parcels to rest for 10 minutes.',
          },
          {
            title: 'Roll out thick',
            text: 'Roll each parcel into a square about 18 cm across and 4 to 5 mm thick. Keep the corners square by rolling outward from the centre.',
          },
          {
            title: 'Fry slowly in ghee',
            text: 'Cook on a tawa over medium heat for a minute a side until dry spots appear, then lower the heat and fry with about 1 tablespoon of ghee per side, pressing with a spatula. Allow 5 to 6 minutes in all, until deep golden and crisp.',
          },
          {
            title: 'Serve at once',
            text: 'Serve straight from the pan with an omelette, chanay or halwa, and hot tea.',
          },
        ],
        tips: [
          'Patience matters more than heat: a high flame browns the outside before the thick centre cooks.',
          'Pressing the paratha with a spatula as it fries helps the layers puff and crisp evenly.',
          'Use proper desi ghee if you can; vegetable ghee gives a very different flavour.',
        ],
      },
    },
    // ------------------------------------------------------------------
    {
      id: 'porota',
      name: 'Porota',
      native: [{ text: 'পরোটা', lang: 'Bengali', translit: 'porota' }],
      country: 'BGD',
      place: 'Dhaka',
      coords: [90.41, 23.81],
      from: 'origin',
      arrival: 'Likely with North Indian cooking under Mughal rule, 1600s onward',
      summary:
        "Bangladesh's soft, triangle-folded flatbread, torn into dal, bhaji or egg at breakfast.",
      story: [
        'In Bangladesh the paratha is porota, and it is everywhere: on the griddles of roadside restaurants at dawn, in tiffin boxes and at home on weekend mornings. It most likely came east with the North Indian cooking that followed Mughal rule into Bengal, though there is no record of exactly when. Dhaka was the Mughal capital of the province from the early 1600s.',
        'Restaurant porota uses plain flour and soybean oil or dalda, a vegetable shortening; home cooks may use ghee. It is folded into a triangle or coiled for extra layers, then torn and dipped into dal, mixed vegetable bhaji, egg, beef curry or semolina halwa. Soft and slightly chewy, it sits between the crisp Punjabi paratha and the stretched roti of Southeast Asia.',
      ],
      signature: [
        'Plain flour dough shortened with rubbed-in oil or ghee',
        'Oiled and folded twice into a triangle',
        'Cooked with a little oil, so it stays soft',
        'Breakfast partner to dal, bhaji, egg or halwa',
      ],
      traits: {
        flour: 'Plain flour (maida)',
        fat: 'Soybean oil, dalda or ghee',
        layering: 'Oiled, folded into a triangle',
        shape: 'Triangle',
        cooking: 'Tawa, light oil',
        texture: 'Soft, flaky, slightly chewy',
      },
      servedWith: ['Dal', 'Mixed vegetable bhaji', 'Fried egg or omelette', 'Beef curry', 'Suji halwa'],
      whenEaten: 'Breakfast at home and roadside restaurants; evening snacks',
      recipe: {
        serves: 4,
        prepMinutes: 30,
        cookMinutes: 25,
        restMinutes: 30,
        difficulty: 'Easy',
        yield: '8 porotas',
        ingredients: [
          {
            title: 'Dough',
            items: [
              { qty: 350, unit: 'g', item: 'plain flour (maida)' },
              { qty: 1, unit: 'tsp', item: 'salt' },
              { qty: 1, unit: 'tsp', item: 'sugar' },
              { qty: 2, unit: 'tbsp', item: 'soybean oil or ghee', note: 'rubbed into the flour' },
              { qty: 200, unit: 'ml', item: 'warm water', note: 'add gradually' },
            ],
          },
          {
            title: 'Layering and cooking',
            items: [
              { qty: 60, unit: 'ml', item: 'soybean oil or melted ghee', note: 'for brushing' },
              { qty: 2, unit: 'tbsp', item: 'plain flour', note: 'for dusting' },
              { qty: 3, unit: 'tbsp', item: 'soybean oil', note: 'for the pan' },
            ],
          },
        ],
        steps: [
          {
            title: 'Rub in the fat',
            text: 'Mix the flour, salt and sugar, then rub in the 2 tablespoons of oil or ghee with your fingertips until the flour holds together when squeezed. This is the moyan, and it keeps the porota tender.',
          },
          {
            title: 'Knead and rest',
            text: 'Add the water little by little and knead for 8 minutes into a soft, smooth dough. Cover and rest for 30 minutes.',
          },
          {
            title: 'Roll a round',
            text: 'Divide into 8 balls and roll one into a round about 18 cm across.',
          },
          {
            title: 'Fold into a triangle',
            text: 'Brush with oil and dust with flour, then fold in half to make a semicircle. Brush and dust again and fold in half once more to make a triangle with a rounded edge.',
          },
          {
            title: 'Roll out the triangle',
            text: 'Roll the folded dough into a larger triangle about 3 mm thick, turning it as you go to keep the shape.',
          },
          {
            title: 'Cook',
            text: 'Cook on a hot tawa for 30 seconds a side, then brush each side with oil and cook, pressing the edges, until golden spots appear all over, about 3 minutes in total.',
          },
          {
            title: 'Keep warm',
            text: 'Stack the cooked porotas in a cloth-lined basket so they steam gently and stay soft.',
          },
        ],
        tips: [
          'For a coiled restaurant-style porota, brush a thin round with oil, roll it into a rope, coil it and roll it out again.',
          'Rolling dough can be made the night before and kept covered in the fridge.',
          'Serve with a simple potato and onion bhaji or a fried egg for a classic Dhaka breakfast.',
        ],
      },
    },
    // ------------------------------------------------------------------
    {
      id: 'parotta',
      name: 'Parotta',
      native: [
        { text: 'பரோட்டா', lang: 'Tamil', translit: 'parotta' },
        { text: 'പൊറോട്ട', lang: 'Malayalam', translit: 'porotta' },
      ],
      country: 'IND',
      place: 'Madurai, Tamil Nadu',
      coords: [78.12, 9.93],
      from: 'origin',
      arrival: 'Widespread by the mid-1900s; the route south is debated',
      summary:
        'A plain-flour flatbread stretched, pleated and coiled, then clapped into flaky ribbons.',
      story: [
        "Across Tamil Nadu and Kerala, the parotta (porotta in Malayalam) is the standard order at roadside eateries, cooked on wide griddles and clapped between the cook's palms until it falls into flaky ribbons. It is made with plain flour rather than whole wheat, and the dough is stretched paper-thin before being pleated and coiled.",
        'Its history is hazy. It became widespread in the mid-1900s, and accounts differ on whether it grew from the North Indian paratha, came back from Sri Lanka or Malaya with returning workers, or developed in Tamil port towns that had long traded across the Bay of Bengal. What is clear is how close it is to the roti of Penang and Singapore, made by communities from the same coast.',
      ],
      signature: [
        'Refined flour dough, often with milk or egg, rested in oil',
        'Stretched until translucent, pleated into a rope and coiled',
        'Cooked in oil on a large griddle',
        'Clapped or crushed hot so the layers separate',
      ],
      traits: {
        flour: 'Plain flour (maida)',
        fat: 'Vegetable oil',
        layering: 'Stretched thin, pleated, coiled',
        shape: 'Round coil',
        cooking: 'Griddle, with oil',
        texture: 'Flaky, clapped into ribbons',
      },
      servedWith: ['Salna (thin meat or vegetable curry)', 'Kurma', 'Beef fry (Kerala)', 'Egg curry'],
      whenEaten: 'Dinner and late-night meals at roadside eateries',
      recipe: {
        serves: 4,
        prepMinutes: 50,
        cookMinutes: 30,
        restMinutes: 190,
        difficulty: 'Challenging',
        yield: '8 parottas',
        ingredients: [
          {
            title: 'Dough',
            items: [
              { qty: 500, unit: 'g', item: 'plain flour (maida)' },
              { qty: 1, unit: 'tsp', item: 'salt' },
              { qty: 1, unit: 'tbsp', item: 'sugar' },
              { qty: 1, unit: 'piece', item: 'egg', note: 'optional; add 40 ml more water without it' },
              { qty: 60, unit: 'ml', item: 'milk' },
              { qty: 200, unit: 'ml', item: 'water', note: 'add gradually' },
              { qty: 2, unit: 'tbsp', item: 'vegetable oil' },
            ],
          },
          {
            title: 'Resting, shaping and cooking',
            items: [
              { qty: 100, unit: 'ml', item: 'vegetable oil', note: 'for coating and stretching' },
              { qty: 3, unit: 'tbsp', item: 'vegetable oil', note: 'for the griddle' },
            ],
          },
        ],
        steps: [
          {
            title: 'Knead well',
            text: 'Combine the flour, salt, sugar, egg, milk and oil, then add water gradually. Knead for at least 10 minutes until the dough is very smooth, soft and elastic.',
          },
          {
            title: 'First rest',
            text: 'Coat the dough in oil, cover and rest for 1 hour.',
          },
          {
            title: 'Divide and rest again',
            text: 'Divide into 8 smooth balls, roll each in oil, and leave them covered in an oiled tray for 2 hours. The long rest is what lets the dough stretch without tearing.',
          },
          {
            title: 'Stretch paper-thin',
            text: 'On a well-oiled counter, flatten a ball with your palm, then push and pull it outward with oiled fingertips until it is thin enough to see the counter through. Small tears are fine.',
          },
          {
            title: 'Pleat and coil',
            text: 'Gather the sheet from one side into loose pleats, like a fan, to form a rope. Stretch the rope a little, coil it into a spiral and tuck the end underneath. Rest the coils for 10 minutes.',
          },
          {
            title: 'Flatten',
            text: 'Press each coil out with oiled palms into a round about 15 cm across and 5 mm thick.',
          },
          {
            title: 'Cook',
            text: 'Cook on a medium-hot griddle with a little oil for 2 to 3 minutes a side, until golden and crisp at the edges.',
          },
          {
            title: 'Clap the layers open',
            text: 'Stack two or three hot parottas and, holding them between your palms, push the edges in sharply from both sides a few times. The layers will break apart into flaky ribbons.',
          },
        ],
        tips: [
          'Do not shortcut the resting time; under-rested dough tears before it gets thin.',
          'Use plenty of oil on the counter and your hands so the dough slides rather than sticks.',
          'Shred leftover parotta and stir-fry it with egg, onion and curry for kothu parotta.',
        ],
      },
    },
    // ------------------------------------------------------------------
    {
      id: 'roti-canai',
      name: 'Roti Canai',
      native: [{ text: 'roti canai', lang: 'Malay' }],
      country: 'MYS',
      place: 'Penang',
      coords: [100.33, 5.41],
      from: 'parotta',
      arrival: '1800s–early 1900s, with Tamil Muslim migrants to Penang',
      summary:
        'Dough rested in oil, stretched paper-thin, folded into a square and griddled in ghee.',
      story: [
        "Roti canai is one of Malaysia's best-loved breakfasts, sold at mamak stalls, the open-fronted restaurants run by Tamil Muslim families. Its roots lie with Tamil Muslim traders and workers from India's Coromandel coast who settled in Penang and the other Straits ports from the late 1700s onward.",
        'The name is debated. Some link canai to Chennai, others to a Malay word for rolling out dough, and others to the chana dal once served with it; none is proven. The technique is the same everywhere: dough rested in oil, spun or spread until paper-thin, folded into a square and griddled in ghee or margarine.',
        "Eaten with dal, fish curry or chicken curry and a glass of teh tarik, it is shared across all of Malaysia's communities. Late-night mamak sessions, with friends lingering over roti and televised football, are part of the country's social life, and the cook stretching dough at the front of the stall is part of the show.",
      ],
      signature: [
        'Dough rested in oil for many hours, often overnight',
        'Spread or spun until paper-thin, then folded into a square',
        'Griddled in ghee or margarine',
        'Scrunched after cooking to fluff the layers',
      ],
      traits: {
        flour: 'Plain flour',
        fat: 'Ghee or margarine',
        layering: 'Stretched paper-thin, folded',
        shape: 'Square parcel',
        cooking: 'Flat griddle, with ghee',
        texture: 'Soft, chewy, flaky',
      },
      servedWith: ['Dal curry', 'Fish curry', 'Chicken curry', 'Sambal', 'Teh tarik'],
      whenEaten: 'Breakfast at mamak stalls, and late at night',
      recipe: {
        serves: 4,
        prepMinutes: 45,
        cookMinutes: 25,
        restMinutes: 480,
        difficulty: 'Challenging',
        yield: '8 roti canai',
        ingredients: [
          {
            title: 'Dough',
            items: [
              { qty: 500, unit: 'g', item: 'plain flour' },
              { qty: 1.5, unit: 'tsp', item: 'salt' },
              { qty: 1, unit: 'tbsp', item: 'sugar' },
              { qty: 2, unit: 'tbsp', item: 'sweetened condensed milk' },
              { qty: 1, unit: 'piece', item: 'egg' },
              { qty: 220, unit: 'ml', item: 'water', note: 'add gradually' },
              { qty: 2, unit: 'tbsp', item: 'ghee or margarine', note: 'softened' },
            ],
          },
          {
            title: 'Resting and cooking',
            items: [
              { qty: 150, unit: 'ml', item: 'vegetable oil', note: 'for resting and stretching' },
              { qty: 4, unit: 'tbsp', item: 'ghee or margarine', note: 'for the griddle' },
            ],
          },
        ],
        steps: [
          {
            title: 'Mix and knead',
            text: 'Combine the flour, salt, sugar, condensed milk and egg, then add the water gradually and knead for 5 minutes. Work in the softened ghee and knead for another 5 minutes until the dough is smooth and slightly sticky.',
          },
          {
            title: 'Shape the balls',
            text: 'Rest the dough for 15 minutes, then divide into 8 balls and tuck each one smooth. Set them in a tray, pour over the oil and turn to coat.',
          },
          {
            title: 'Rest overnight',
            text: 'Cover tightly and leave for at least 6 hours and ideally 8, at cool room temperature. The dough should feel very soft and relaxed.',
          },
          {
            title: 'Stretch paper-thin',
            text: 'Oil the counter. Flatten a ball with your palm, then push it outward with your fingertips, lifting and pulling the edges until it is very thin and about 40 cm across. Experienced cooks toss and spin it instead.',
          },
          {
            title: 'Fold into a square',
            text: 'Fold the top and bottom edges into the centre, then the two sides, to make a square of about 15 cm. Folding loosely traps a little air between the layers.',
          },
          {
            title: 'Griddle in ghee',
            text: 'Cook on a hot griddle or heavy frying pan with a spoonful of ghee for about 2 minutes a side, until golden and crisp in patches.',
          },
          {
            title: 'Scrunch and serve',
            text: 'Lift the hot roti onto the counter and push it in from both sides with your hands to break up the layers. Serve straight away with dal or curry.',
          },
        ],
        tips: [
          'In a hot kitchen, rest the dough in the fridge and bring it back to room temperature for an hour before stretching.',
          'If the dough tears early in stretching, it needs a longer rest.',
          'Condensed milk is common in home recipes and gives a little sweetness and colour; leave it out for a plainer roti.',
        ],
      },
    },
    // ------------------------------------------------------------------
    {
      id: 'roti-prata',
      name: 'Roti Prata',
      native: [{ text: 'roti prata', lang: 'Malay' }],
      country: 'SGP',
      place: 'Singapore',
      coords: [103.85, 1.29],
      from: 'parotta',
      arrival: '1800s–1900s, with Tamil Muslim migrants to Singapore',
      summary:
        "Singapore's crisp-edged stretched flatbread, ordered plain, with egg or with toppings.",
      story: [
        'Roti prata grew up in Singapore through the same Tamil Muslim networks that produced roti canai across the Causeway; prata is a local rendering of paratha. It was long a hawker food, and today it is cooked to order in hawker centres and coffee shops, some of them open around the clock.',
        'Singaporeans often say their prata is crisper than Malaysian roti canai, though both vary from cook to cook. Ordering has its own vocabulary: kosong is plain, telur has an egg folded inside, and plaster has a fried egg on top. Fish or chicken curry is the usual dip, and plain prata is often eaten with a sprinkle of sugar.',
      ],
      signature: [
        'Stretched paper-thin like roti canai, but usually cooked crisper',
        'Egg, onion, cheese or other fillings folded inside',
        'Ordered by name: kosong, telur, plaster',
        'Served with fish curry, or sugar for plain ones',
      ],
      traits: {
        flour: 'Plain flour',
        fat: 'Ghee or margarine',
        layering: 'Stretched paper-thin, folded',
        shape: 'Square or round parcel',
        cooking: 'Flat griddle, with ghee',
        texture: 'Crisp edges, soft centre',
      },
      servedWith: ['Fish curry', 'Chicken curry', 'Sugar', 'Teh tarik or kopi'],
      whenEaten: 'Breakfast and supper at hawker centres, any hour',
      recipe: {
        serves: 4,
        prepMinutes: 40,
        cookMinutes: 30,
        restMinutes: 360,
        difficulty: 'Challenging',
        yield: '6 egg pratas (prata telur)',
        ingredients: [
          {
            title: 'Dough',
            items: [
              { qty: 400, unit: 'g', item: 'plain flour' },
              { qty: 1, unit: 'tsp', item: 'salt' },
              { qty: 2, unit: 'tsp', item: 'sugar' },
              { qty: 80, unit: 'ml', item: 'milk' },
              { qty: 150, unit: 'ml', item: 'water', note: 'add gradually' },
              { qty: 2, unit: 'tbsp', item: 'ghee or margarine', note: 'softened' },
              { qty: 120, unit: 'ml', item: 'vegetable oil', note: 'for resting and stretching' },
            ],
          },
          {
            title: 'Egg filling',
            items: [
              { qty: 6, unit: 'piece', item: 'eggs' },
              { qty: 1, unit: 'piece', item: 'small red onion', note: 'finely chopped' },
              { qty: 1, unit: 'piece', item: 'green chilli', note: 'finely chopped, optional' },
              { qty: 1, unit: 'pinch', item: 'salt', note: 'per prata' },
            ],
          },
          {
            title: 'Cooking',
            items: [{ qty: 4, unit: 'tbsp', item: 'ghee or margarine' }],
          },
        ],
        steps: [
          {
            title: 'Make the dough',
            text: 'Mix the flour, salt, sugar, milk and water and knead for 5 minutes. Add the ghee and knead for 5 minutes more until smooth and soft.',
          },
          {
            title: 'Rest in oil',
            text: 'Divide into 6 balls, coat them well in oil in a covered tray and leave for at least 6 hours.',
          },
          {
            title: 'Stretch the dough',
            text: 'On an oiled counter, flatten a ball and stretch it outward with your fingertips until thin and about 35 cm across.',
          },
          {
            title: 'Add the egg',
            text: 'Crack an egg into the centre, scatter over some onion and chilli with a pinch of salt, and break the yolk gently with your fingers, keeping it in the middle.',
          },
          {
            title: 'Fold and seal',
            text: 'Fold the four sides over the egg, one after another, to make a sealed square parcel. Work quickly so the egg does not run.',
          },
          {
            title: 'Cook until crisp',
            text: 'Slide onto a hot griddle with a spoonful of ghee, seam side down, and cook for 2 to 3 minutes a side until golden, crisp and cooked through.',
          },
          {
            title: 'Serve',
            text: 'Serve whole, with a bowl of fish or chicken curry for dipping.',
          },
        ],
        tips: [
          'For prata kosong, skip the egg, fold into a square and scrunch after cooking.',
          'For plaster, cook a plain prata and fry an egg directly on top before flipping it briefly.',
          'Lift the stretched dough with both hands from underneath when moving it, so it does not tear.',
        ],
      },
    },
    // ------------------------------------------------------------------
    {
      id: 'godamba-roti',
      name: 'Godamba Roti',
      country: 'LKA',
      place: 'Colombo',
      coords: [79.86, 6.93],
      from: 'parotta',
      arrival: 'Probably 1800s–1900s, via Tamil-speaking trade networks; undocumented',
      summary:
        'A thin, soft Sri Lankan stretched roti, eaten with curry and chopped into kottu.',
      story: [
        'In Sri Lanka the stretched, folded flatbread is godamba roti, made in the small eateries Sri Lankans call hotels, many of them run by Muslim families. It is thinner and softer than most of its cousins: stretched until translucent, folded into a neat square and cooked with little oil, so it stays pliable rather than crisp.',
        'Its arrival on the island is not well documented, but it shares its technique with the South Indian parotta and the Malayan roti and probably came through the same Tamil-speaking trade networks. Godamba roti is eaten with curry, and it is also the raw material for kottu roti, shredded on the griddle with vegetables, egg, meat and curry gravy using clattering metal blades.',
      ],
      signature: [
        'Stretched very thin and folded into a flat square',
        'Cooked with little oil, so it stays soft and pliable',
        'Served flat rather than crushed',
        'The base for chopped kottu roti',
      ],
      traits: {
        flour: 'Plain flour',
        fat: 'Vegetable oil, sparingly',
        layering: 'Stretched thin, folded',
        shape: 'Flat square',
        cooking: 'Flat griddle, light oil',
        texture: 'Thin, soft, elastic',
      },
      servedWith: ['Chicken curry', 'Dhal curry', 'Pol sambol', 'Kottu (chopped with curry)'],
      whenEaten: 'Evening meals at hotels and street stalls',
      recipe: {
        serves: 4,
        prepMinutes: 35,
        cookMinutes: 20,
        restMinutes: 180,
        difficulty: 'Medium',
        yield: '8 godamba roti',
        ingredients: [
          {
            title: 'Dough',
            items: [
              { qty: 500, unit: 'g', item: 'plain flour' },
              { qty: 1.25, unit: 'tsp', item: 'salt' },
              { qty: 1, unit: 'tsp', item: 'sugar' },
              { qty: 270, unit: 'ml', item: 'lukewarm water', note: 'add gradually' },
              { qty: 2, unit: 'tbsp', item: 'vegetable oil' },
            ],
          },
          {
            title: 'Resting and cooking',
            items: [
              { qty: 120, unit: 'ml', item: 'vegetable oil', note: 'for resting and stretching' },
              { qty: 2, unit: 'tbsp', item: 'vegetable oil', note: 'for the griddle' },
            ],
          },
        ],
        steps: [
          {
            title: 'Knead until stretchy',
            text: 'Mix the flour, salt, sugar, water and 2 tablespoons of oil. Knead for 10 to 12 minutes until the dough is very smooth and springs back slowly when pressed.',
          },
          {
            title: 'Rest the balls in oil',
            text: 'Divide into 8 balls, place in a tray, cover with the oil and leave for at least 3 hours, or overnight in the fridge.',
          },
          {
            title: 'Stretch very thin',
            text: 'On an oiled counter, press a ball flat and stretch it in all directions with your fingertips until it is almost transparent.',
          },
          {
            title: 'Fold flat',
            text: 'Fold the edges into the centre to make a square, then fold the square in half and in half again, pressing it flat. Aim for a tidy square about 15 cm across.',
          },
          {
            title: 'Cook lightly',
            text: 'Cook on a medium-hot griddle with just a few drops of oil, about 1 to 2 minutes a side, until lightly spotted but still soft.',
          },
          {
            title: 'Serve or save for kottu',
            text: 'Serve warm with curry, or let the roti cool and keep them to shred for kottu.',
          },
        ],
        tips: [
          'Too much oil or heat turns godamba into a crisp roti canai; keep it pale and pliable.',
          'For kottu, slice cooled roti into thin strips and chop them on the griddle with stir-fried vegetables, egg and curry gravy.',
          'Stack the cooked roti under a cloth so they stay soft.',
        ],
      },
    },
    // ------------------------------------------------------------------
    {
      id: 'palata',
      name: 'Palata',
      country: 'MMR',
      place: 'Yangon',
      coords: [96.16, 16.84],
      from: 'parotta',
      arrival: 'Late 1800s–early 1900s, with Indian migrants to colonial Rangoon',
      summary:
        "Myanmar's teashop flatbread, eaten with curry or simply sprinkled with sugar.",
      story: [
        "Palata arrived in Burma with the Indian migrants who made up a large share of colonial Rangoon's population in the late 1800s and early 1900s. It is still sold in teashops and at breakfast stalls, stretched and cooked to order on a flat iron pan.",
        "Burmese cooks serve it in two moods: savoury, with chicken or mutton curry, or sweet, sprinkled with sugar and sometimes drizzled with condensed milk. Egg palata has an egg cooked inside the folds. A many-layered version made by pleating and coiling the dough is known as htat-taya, which means 'a hundred layers'.",
      ],
      signature: [
        'Stretched and folded into a square, like the Malayan roti',
        'Eaten sweet with sugar as often as with curry',
        'A teashop staple, paired with sweet milky tea',
        'A coiled, many-layered cousin called htat-taya',
      ],
      traits: {
        flour: 'Plain flour',
        fat: 'Peanut oil or ghee',
        layering: 'Stretched thin, folded',
        shape: 'Square, cut into pieces',
        cooking: 'Flat griddle, with oil',
        texture: 'Flaky, lightly crisp',
      },
      servedWith: ['Sugar', 'Chicken curry', 'Mutton curry', 'Sweet milky tea'],
      whenEaten: 'Breakfast and afternoon snacks in teashops',
      recipe: {
        serves: 4,
        prepMinutes: 30,
        cookMinutes: 20,
        restMinutes: 120,
        difficulty: 'Medium',
        yield: '6 palata',
        ingredients: [
          {
            title: 'Dough',
            items: [
              { qty: 360, unit: 'g', item: 'plain flour' },
              { qty: 1, unit: 'tsp', item: 'salt' },
              { qty: 200, unit: 'ml', item: 'lukewarm water', note: 'add gradually' },
              { qty: 2, unit: 'tbsp', item: 'peanut oil' },
            ],
          },
          {
            title: 'Resting and cooking',
            items: [
              { qty: 80, unit: 'ml', item: 'peanut oil', note: 'for resting and stretching' },
              { qty: 3, unit: 'tbsp', item: 'peanut oil or ghee', note: 'for the pan' },
            ],
          },
          {
            title: 'To serve',
            items: [
              { qty: 4, unit: 'tbsp', item: 'white sugar', note: 'for sweet palata' },
              { item: 'chicken curry', note: 'for savoury palata' },
            ],
          },
        ],
        steps: [
          {
            title: 'Make the dough',
            text: 'Mix the flour, salt, water and oil and knead for 10 minutes until smooth and soft.',
          },
          {
            title: 'Rest in oil',
            text: 'Divide into 6 balls, coat them in oil and rest, covered, for 2 hours.',
          },
          {
            title: 'Stretch',
            text: 'On an oiled surface, flatten each ball and stretch it outward with your fingertips until very thin.',
          },
          {
            title: 'Fold into a square',
            text: 'Fold the four sides into the middle to make a square about 15 cm across and press gently.',
          },
          {
            title: 'Cook',
            text: 'Cook on a hot pan with a spoonful of oil or ghee for 2 minutes a side, until puffed in places and golden.',
          },
          {
            title: 'Cut and serve',
            text: 'Cut into squares. Sprinkle generously with sugar for sweet palata, or serve plain with a bowl of chicken curry.',
          },
        ],
        tips: [
          'For egg palata, crack an egg onto the stretched dough before folding, as for Singapore prata telur.',
          'Peanut oil is a common cooking fat in Myanmar and gives a gentle nutty flavour.',
          'Drizzle a little condensed milk over the sugared version for the full teashop treat.',
        ],
      },
    },
    // ------------------------------------------------------------------
    {
      id: 'thai-roti',
      name: 'Thai Sweet Roti',
      native: [{ text: 'โรตี', lang: 'Thai', translit: 'roti' }],
      country: 'THA',
      place: 'Hat Yai, southern Thailand',
      coords: [100.47, 7.01],
      from: 'roti-canai',
      arrival: '1900s, through Muslim communities near the Malaysian border',
      summary:
        'Stretched roti fried in margarine around banana and egg, finished with condensed milk.',
      story: [
        'In southern Thailand, where Muslim communities have long ties to the Malay peninsula, roti is eaten much as it is in Malaysia: stretched, folded and served with curry for breakfast. Roti with curry remains a morning staple in towns such as Hat Yai and Pattani.',
        'Further north, and especially in Bangkok, roti became a sweet street snack sold from carts. The sheet is fried in plenty of margarine, often wrapped around egg and sliced banana, cut into squares and finished with sweetened condensed milk and sugar. It is the version most visitors know, and it shows how far a breakfast bread can drift as it travels.',
      ],
      signature: [
        'Fried in a generous amount of margarine or butter',
        'Wrapped around banana and egg',
        'Cut into bite-sized squares',
        'Topped with condensed milk and sugar',
      ],
      traits: {
        flour: 'Plain flour',
        fat: 'Margarine or butter',
        layering: 'Stretched thin, wrapped round filling',
        shape: 'Square, cut into pieces',
        cooking: 'Flat pan, plenty of margarine',
        texture: 'Crisp, buttery, sweet',
      },
      servedWith: ['Sweetened condensed milk', 'Sugar', 'Thai iced tea', 'Curry (in the south)'],
      whenEaten: 'Evening street snack; breakfast with curry in the south',
      recipe: {
        serves: 4,
        prepMinutes: 30,
        cookMinutes: 20,
        restMinutes: 180,
        difficulty: 'Medium',
        yield: '4 banana and egg roti',
        ingredients: [
          {
            title: 'Dough',
            items: [
              { qty: 300, unit: 'g', item: 'plain flour' },
              { qty: 0.5, unit: 'tsp', item: 'salt' },
              { qty: 1, unit: 'tbsp', item: 'sugar' },
              { qty: 1, unit: 'piece', item: 'egg' },
              { qty: 80, unit: 'ml', item: 'milk' },
              { qty: 80, unit: 'ml', item: 'water', note: 'add gradually' },
              { qty: 1, unit: 'tbsp', item: 'margarine or butter', note: 'softened' },
              { qty: 80, unit: 'ml', item: 'vegetable oil', note: 'for resting and stretching' },
            ],
          },
          {
            title: 'Filling',
            items: [
              { qty: 2, unit: 'piece', item: 'ripe bananas', note: 'thinly sliced' },
              { qty: 2, unit: 'piece', item: 'eggs', note: 'beaten, optional' },
            ],
          },
          {
            title: 'Cooking and topping',
            items: [
              { qty: 4, unit: 'tbsp', item: 'margarine or butter' },
              { qty: 4, unit: 'tbsp', item: 'sweetened condensed milk' },
              { qty: 2, unit: 'tsp', item: 'sugar' },
            ],
          },
        ],
        steps: [
          {
            title: 'Make the dough',
            text: 'Mix the flour, salt, sugar, egg, milk and water, then knead in the margarine. Knead for 8 to 10 minutes until smooth and soft.',
          },
          {
            title: 'Rest in oil',
            text: 'Divide into 4 balls, coat well in oil and leave covered for at least 3 hours.',
          },
          {
            title: 'Stretch thin',
            text: 'On an oiled surface, press a ball flat and stretch it outward until very thin and about 35 cm across.',
          },
          {
            title: 'Fill in the pan',
            text: 'Melt a tablespoon of margarine in a large frying pan over medium heat and lay the dough in it. Pour a quarter of the beaten egg into the centre and arrange a quarter of the banana slices on top.',
          },
          {
            title: 'Fold and fry',
            text: 'Fold the four sides over the filling to make a square parcel. Fry for 2 minutes, then flip and fry for 2 minutes more, until crisp and deep golden on both sides.',
          },
          {
            title: 'Cut and finish',
            text: 'Lift onto a board and cut into bite-sized squares. Drizzle with condensed milk and sprinkle with sugar while still hot.',
          },
        ],
        tips: [
          'Do not be shy with the margarine; the crisp, almost fried finish is the point.',
          'Leave out the egg for a simpler banana roti, or skip both fillings and just top a plain roti with condensed milk and sugar.',
          'Eat it straight away, before the condensed milk softens the crust.',
        ],
      },
    },
    // ------------------------------------------------------------------
    {
      id: 'buss-up-shut',
      name: 'Buss-up-shut (Paratha Roti)',
      native: [{ text: 'buss-up-shut', lang: 'Trinidadian English' }],
      country: 'TTO',
      place: 'Port of Spain',
      coords: [-61.52, 10.66],
      from: 'origin',
      arrival: '1845–1917, with indentured labourers from North India',
      summary:
        'A large, butter-layered roti beaten into soft shreds and served with Trinidadian curries.',
      story: [
        "Indentured workers from India, many of them from the Bhojpuri-speaking regions of today's Uttar Pradesh and Bihar, arrived in Trinidad between 1845 and 1917 and brought their tawa breads with them. Over the generations those breads became a family of Trinidadian roti, of which paratha roti is the most festive.",
        "It is cooked on a tawah (tawa), then beaten with wooden paddles or clapped between the hands until it tears into soft, buttery shreds. That torn look gave it its Trinidadian name, buss-up-shut, from 'burst-up shirt'. It is served with curried goat, channa and aloo, pumpkin and mango at weddings, Hindu religious gatherings and Sunday lunches, and is eaten by Trinidadians of every background.",
      ],
      signature: [
        'Soft dough leavened with baking powder',
        'Brushed round slit to the centre and rolled into a cone',
        'Cooked on a large tawah, then beaten into shreds',
        'Used to scoop curries rather than eaten alone',
      ],
      traits: {
        flour: 'Plain flour, baking powder',
        fat: 'Butter or ghee with oil',
        layering: 'Slit, rolled into cone',
        shape: 'Torn into shreds',
        cooking: 'Large tawah, with oil',
        texture: 'Soft, torn, ribbon-like',
      },
      servedWith: ['Curried goat', 'Curried channa and aloo', 'Pumpkin (talkari)', 'Curried mango', 'Pepper sauce'],
      whenEaten: 'Sunday lunch, weddings and religious gatherings',
      recipe: {
        serves: 4,
        prepMinutes: 35,
        cookMinutes: 20,
        restMinutes: 50,
        difficulty: 'Medium',
        yield: '4 large paratha roti',
        ingredients: [
          {
            title: 'Dough',
            items: [
              { qty: 500, unit: 'g', item: 'plain flour' },
              { qty: 2, unit: 'tsp', item: 'baking powder' },
              { qty: 1, unit: 'tsp', item: 'salt' },
              { qty: 330, unit: 'ml', item: 'water', note: 'add gradually' },
            ],
          },
          {
            title: 'Layering and cooking',
            items: [
              { qty: 60, unit: 'g', item: 'butter or ghee', note: 'melted' },
              { qty: 3, unit: 'tbsp', item: 'vegetable oil', note: 'mixed with the melted butter' },
              { qty: 2, unit: 'tbsp', item: 'plain flour', note: 'for dusting' },
              { qty: 3, unit: 'tbsp', item: 'vegetable oil', note: 'for the tawah' },
            ],
          },
        ],
        steps: [
          {
            title: 'Make a soft dough',
            text: 'Mix the flour, baking powder and salt, then add water gradually and knead for about 5 minutes into a soft, slightly tacky dough. Cover and rest for 20 minutes.',
          },
          {
            title: 'Roll and brush',
            text: 'Divide into 4 balls and roll one into a round about 25 cm across. Brush generously with the butter and oil mixture and sprinkle with a little flour.',
          },
          {
            title: 'Slit and roll into a cone',
            text: 'Cut a straight line from the centre to the edge. Starting at one side of the cut, roll the dough around the centre to form a cone, then tuck the pointed tip in and press the cone down into a flat round ball.',
          },
          {
            title: 'Rest the dough balls',
            text: 'Brush the tops with a little more fat, cover and rest for 30 minutes so the layers relax.',
          },
          {
            title: 'Roll out large',
            text: 'Press each ball flat and roll it thinly into a round about 30 cm across, rolling gently so the layers stay intact.',
          },
          {
            title: 'Cook on the tawah',
            text: 'Cook on a hot tawah or very large frying pan, brushing each side with oil and flipping every 30 seconds or so, for 3 to 4 minutes, until it puffs and has light brown spots.',
          },
          {
            title: 'Beat it up',
            text: 'Transfer the hot roti to a bowl or a folded tea towel and beat it with two wooden spatulas, or clap it between your hands, until it breaks into soft, layered shreds. Keep covered while you cook the rest.',
          },
        ],
        tips: [
          'Wear clean kitchen gloves if clapping by hand; the roti is very hot straight off the tawah.',
          'Butter gives the best flavour, while the oil stops it burning on the hot iron.',
          'Serve in a covered basket with several curries so everyone tears off their own piece.',
        ],
      },
    },
  ],
};
