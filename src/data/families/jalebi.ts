import type { DishFamily } from '../types';

export const jalebi: DishFamily = {
  id: "jalebi",
  name: "Jalebi",
  alsoKnownAs: ["Zalabiya", "Zoolbia", "Jilapi", "Jeri", "Zlabia", "Imarti", "Jangiri"],
  tagline: "Fermented batter, piped in spirals, fried and drenched in syrup",
  category: "dessert",
  motif: "spiral",
  color: "#D9661F",
  origin: {
    region: "Abbasid Baghdad and the medieval Arab and Persian world",
    country: "IRQ",
    coords: [44.36, 33.31],
    era: "By the 10th century",
    confidence: "likely",
    confidenceNote:
      "The earliest known recipes for zalabiya are in a 10th-century Baghdad cookbook, but the sweet may be older and its name may come from Persian, so Baghdad is the first record rather than a proven birthplace.",
  },
  intro:
    "A loose, slightly sour batter is squeezed in loops into hot fat, fried until crisp and dropped straight into warm syrup, which it drinks up through every hollow. That is the whole idea, and it has hardly changed in a thousand years. What has changed is the flour, the ferment, the shape, the scent of the syrup and what it is eaten with: thick rabri in Delhi, hot milk in Lahore, fried fish in Kabul, and the first sip of water after a Ramadan fast from Dhaka to Béja.",
  history: [
    "The family begins with zalabiya, a fried batter sweet soaked in syrup or honey. The earliest known recipes appear in the Kitab al-Tabikh compiled by Ibn Sayyar al-Warraq in 10th-century Baghdad, the oldest surviving Arabic cookbook. Medieval recipes describe a thin batter dribbled into hot fat, sometimes in lattice shapes, then dipped in syrup. Later Arabic cookbooks of the 13th century kept it, and the name spread with Arab and Persian cooking across the Islamic world.",
    "In Persia it became zoolbia, still made in lattice-like loops and scented with saffron and rosewater, and still most closely tied to Ramadan. Persian-speaking traders, soldiers and courts carried the sweet into the Indian subcontinent, where the name became jalebi. Indian texts from roughly the 1400s onward name it, and it settled so firmly into Indian sweet-making that it became a temple and festival sweet as well as a breakfast and street food.",
    "From North India the jalebi spread through Bengal, where it became jilapi, into Nepal as jeri, and across the Khyber into Afghanistan. Indian confectioners also developed offshoots, most famously imarti, or jangiri in the south, made from ground urad dal rather than wheat. Westward, the medieval name survives in North Africa as zlabia, a Ramadan sweet with a close family likeness.",
    "Not every modern zalabiya is a spiral. In Lebanon, Syria and Egypt, the word now usually means other fried dough sweets: puffy balls, rings or fingers of yeasted dough. These are honest cousins rather than direct descendants of the jalebi shape, a reminder that one medieval name can split into very different sweets over the centuries. Medieval zalabiya itself seems to have covered more than one shape, so the modern Levantine fritters may preserve one branch of it as faithfully as the spiral does another.",
  ],
  etymology:
    "Jalebi, jilapi, jeri, zoolbia and zlabia all come from medieval Arabic zalabiya, which some scholars trace further back to Persian; imarti is of uncertain origin, and a popular story links jangiri to the Mughal emperor Jahangir.",
  timeline: [
    {
      when: "10th century",
      event:
        "Zalabiya recipes appear in Ibn Sayyar al-Warraq's Kitab al-Tabikh, compiled in Baghdad.",
    },
    {
      when: "13th century",
      event:
        "Later Arabic cookbooks from Baghdad and beyond continue to record zalabiya.",
    },
    {
      when: "Medieval",
      event:
        "Persian kitchens make zoolbia, which becomes closely tied to Ramadan.",
    },
    {
      when: "c. 1400s onward",
      event: "Indian texts name jalebi, by now part of feast and festival cooking.",
    },
    {
      when: "Mughal era and after",
      event:
        "Jalebi spreads across the subcontinent; urad-dal imarti and jangiri develop alongside it.",
    },
    {
      when: "Today",
      event:
        "Spiral jalebi and its relatives are Ramadan and festival staples from Tunisia to Bangladesh.",
    },
  ],
  commonThreads: [
    "A loose batter, usually soured by fermentation or yogurt, for a crisp, hollow crunch.",
    "Piped or poured in loops directly into hot fat.",
    "Dropped into warm syrup straight from the fryer to soak.",
    "Eaten fresh and hot, ideally within hours of frying.",
    "Tied to Ramadan, Eid and Hindu festivals, as well as street breakfasts.",
  ],
  divergences: [
    {
      title: "Flour and batter",
      text: "Most versions use refined wheat flour, but Iranian zoolbia leans on starch and yogurt, Bangladeshi jilapi often adds rice flour, and imarti and jangiri are made entirely from soaked, ground urad dal.",
    },
    {
      title: "How it is soured and raised",
      text: "The traditional jalebi batter ferments overnight or longer with natural yeasts, giving a faint tang. Many home and shop cooks now use yeast or yogurt to speed it up, while jangiri relies on air beaten into the lentil batter.",
    },
    {
      title: "Shape and thickness",
      text: "North Indian and Pakistani jalebis are tight, thin spirals; Bangladeshi jilapi is often thicker and chunkier; zoolbia and zlabia are looser lattices; jangiri is a ring of small loops like a flower. In the Levant, zalabia is not a spiral at all.",
    },
    {
      title: "The syrup",
      text: "Syrup is scented with cardamom and saffron in South Asia, saffron and rosewater in Iran, and often lemon or orange-blossom water in North Africa and the Levant.",
    },
    {
      title: "What it is eaten with",
      text: "The pairings show local habits: rabri or milk in North India and Pakistan, swari flatbread in Kathmandu, fried fish in Afghan winters, and iftar spreads in Dhaka and Béja.",
    },
  ],
  compareAxes: [
    { key: "batter", label: "Batter base" },
    { key: "raising", label: "Souring and raising" },
    { key: "shape", label: "Shape" },
    { key: "fryingFat", label: "Frying fat" },
    { key: "syrup", label: "Syrup flavour" },
    { key: "pairing", label: "Classic pairing" },
    { key: "occasion", label: "Main occasion" },
  ],
  variants: [
    {
      id: "zoolbia",
      name: "Zoolbia",
      native: [{ text: "زولبیا", lang: "Persian", translit: "zoolbia" }],
      country: "IRN",
      place: "Tehran",
      coords: [51.39, 35.69],
      from: "origin",
      arrival: "Medieval; shared between Persian and Abbasid kitchens",
      summary:
        "Iran's Ramadan sweet: lattice-like loops of yogurt and starch batter soaked in saffron and rosewater syrup.",
      story: [
        "In Iran, zoolbia appears in confectioners' windows as Ramadan approaches, usually stacked beside bamieh, its ridged, finger-shaped companion. Families buy both to break the fast, and to share with neighbours. The batter is unusual within the family, relying heavily on starch and yogurt, which makes the loops glassy and crisp rather than bready.",
        "Zoolbia is piped freehand in a looping, open pattern, often a ring of overlapping curls joined into a lacy disc, rather than a tight spiral. It is soaked in a syrup perfumed with saffron and rosewater, which gives it a golden colour and a flavour that is distinctly Persian.",
      ],
      signature: [
        "Batter of yogurt and starch, with little wheat flour",
        "Looping lattice shape rather than a tight spiral",
        "Saffron and rosewater syrup",
        "Sold alongside bamieh for Ramadan",
      ],
      traits: {
        batter: "Yogurt and starch, little flour",
        raising: "Yogurt and baking soda",
        shape: "Lacy lattice of loops",
        fryingFat: "Neutral oil",
        syrup: "Saffron and rosewater",
        pairing: "Bamieh, tea",
        occasion: "Ramadan iftar",
      },
      servedWith: ["Bamieh", "Black tea", "Dates at iftar"],
      whenEaten: "Ramadan evenings, to break the fast",
      recipe: {
        serves: 6,
        prepMinutes: 20,
        cookMinutes: 30,
        restMinutes: 60,
        difficulty: "Challenging",
        yield: "About 18 pieces",
        ingredients: [
          {
            title: "Batter",
            items: [
              { qty: 200, unit: "g", item: "plain full-fat yogurt" },
              { qty: 150, unit: "g", item: "cornflour (cornstarch)" },
              { qty: 1, unit: "tbsp", item: "plain flour" },
              { qty: 0.25, unit: "tsp", item: "baking soda" },
              { qty: 3, unit: "tbsp", item: "water", note: "as needed" },
            ],
          },
          {
            title: "Syrup",
            items: [
              { qty: 400, unit: "g", item: "sugar" },
              { qty: 250, unit: "ml", item: "water" },
              { qty: 1, unit: "tbsp", item: "lemon juice" },
              { qty: 1, unit: "pinch", item: "saffron threads", note: "ground and steeped in 2 tbsp hot water" },
              { qty: 2, unit: "tbsp", item: "rosewater" },
            ],
          },
          {
            title: "For frying",
            items: [{ qty: 1, unit: "l", item: "neutral oil" }],
          },
        ],
        steps: [
          {
            title: "Mix the batter",
            text: "Whisk the yogurt, cornflour, flour and baking soda until smooth. Add water a spoonful at a time until the batter falls from the whisk in a thick ribbon.",
          },
          {
            title: "Rest",
            text: "Cover and rest the batter at room temperature for 1 hour. Whisk again before using.",
          },
          {
            title: "Make the syrup",
            text: "Boil the sugar and water for 5 minutes, add the lemon juice and saffron water, and simmer for 2 minutes more. Take off the heat, stir in the rosewater and keep warm.",
          },
          {
            title: "Heat the oil",
            text: "Heat the oil in a wide pan to about 170°C. Spoon the batter into a squeeze bottle or a piping bag with a 3 mm hole.",
          },
          {
            title: "Pipe the loops",
            text: "Pipe a ring of small overlapping loops about 8 cm across, then trace a circle over them to join them into a disc. Fry 2 or 3 at a time.",
          },
          {
            title: "Fry until crisp",
            text: "Fry for 2 to 3 minutes, turning once, until crisp and pale gold. They should stay fairly light in colour.",
          },
          {
            title: "Soak and drain",
            text: "Lift straight into the warm syrup for 30 to 60 seconds, then drain on a rack. Serve the same day.",
          },
        ],
        tips: [
          "If the loops spread and lose their shape, the batter is too thin; whisk in a little more cornflour.",
          "Keep the syrup warm but not hot, so the zoolbia stay crisp after soaking.",
          "Practise the pattern on a plate with the batter before you pipe into the oil.",
        ],
      },
    },
    {
      id: "jalebi-north-india",
      name: "Jalebi",
      native: [{ text: "जलेबी", lang: "Hindi", translit: "jalebi" }],
      country: "IND",
      place: "Old Delhi",
      coords: [77.23, 28.65],
      from: "zoolbia",
      arrival: "By the 1400s, through Persian-speaking traders and courts",
      summary:
        "North India's bright, crisp spiral of fermented batter, fried in ghee, soaked in cardamom syrup and eaten hot.",
      story: [
        "In North India, jalebi is fried in front of customers in wide pans of ghee or oil, piped from a cloth with a small hole into tight, overlapping spirals and moved straight into a pan of warm syrup. It is eaten hot, when the outside crackles and the hollow centre runs with syrup, and is often paired with cold, thick rabri.",
        "It is breakfast as much as dessert. In Indore it is famously eaten with poha, flattened rice, and across the north it accompanies samosas or kachoris in the morning. It is also a festival sweet, bought by the kilo for Diwali, Dussehra and Independence Day. The traditional batter ferments for a day, giving a faint sourness that cuts the syrup.",
      ],
      signature: [
        "Tight, thin spirals with a hollow, syrup-filled centre",
        "Maida batter fermented for up to a day",
        "Fried in ghee or oil at street stalls",
        "Cardamom and saffron syrup",
        "Eaten hot, often with rabri",
      ],
      traits: {
        batter: "Maida with a little gram flour",
        raising: "Long natural ferment",
        shape: "Tight, thin spirals",
        fryingFat: "Ghee or oil",
        syrup: "Cardamom and saffron",
        pairing: "Rabri, poha, samosa",
        occasion: "Breakfast and festivals",
      },
      servedWith: ["Rabri", "Poha (in Indore)", "Samosa or kachori"],
      whenEaten: "Morning street breakfasts, Diwali and Dussehra",
      recipe: {
        serves: 6,
        prepMinutes: 20,
        cookMinutes: 30,
        restMinutes: 720,
        difficulty: "Challenging",
        yield: "About 20 jalebis",
        ingredients: [
          {
            title: "Batter",
            items: [
              { qty: 150, unit: "g", item: "plain flour (maida)" },
              { qty: 1, unit: "tbsp", item: "gram flour (besan)" },
              { qty: 2, unit: "tbsp", item: "plain yogurt" },
              { qty: 180, unit: "ml", item: "lukewarm water", note: "approximately" },
              { qty: 1, unit: "pinch", item: "ground turmeric or saffron", note: "for colour, optional" },
            ],
          },
          {
            title: "Syrup",
            items: [
              { qty: 300, unit: "g", item: "sugar" },
              { qty: 180, unit: "ml", item: "water" },
              { qty: 4, unit: "pod", item: "green cardamom", note: "crushed" },
              { qty: 1, unit: "pinch", item: "saffron threads" },
              { qty: 1, unit: "tsp", item: "lemon juice" },
            ],
          },
          {
            title: "For frying and serving",
            items: [
              { qty: 500, unit: "ml", item: "ghee or neutral oil" },
              { item: "rabri", note: "chilled, to serve, optional" },
            ],
          },
        ],
        steps: [
          {
            title: "Make the batter",
            text: "Whisk the maida, besan, yogurt and colour with enough water to make a smooth batter like thick pouring cream, with no lumps.",
          },
          {
            title: "Ferment",
            text: "Cover and leave in a warm place for 12 to 24 hours, until bubbly and faintly sour. In a cool kitchen it may need the full day.",
          },
          {
            title: "Make the syrup",
            text: "Simmer the sugar and water with the cardamom and saffron for 6 to 8 minutes, until slightly sticky between two fingers. Add the lemon juice and keep warm.",
          },
          {
            title: "Prepare to pipe",
            text: "Beat the batter for a minute to bring it back together, then pour it into a squeeze bottle or a thick cloth with a small hole. Heat the ghee in a wide, shallow pan to about 175°C.",
          },
          {
            title: "Pipe the spirals",
            text: "Pipe spirals from the centre outward, two or three turns each, about 7 cm across. Fry several at a time without crowding.",
          },
          {
            title: "Fry",
            text: "Fry for about 1 minute per side, until crisp and golden. Lift out with a skewer or slotted spoon and drain briefly.",
          },
          {
            title: "Soak and serve",
            text: "Drop into the warm syrup for 1 minute, turning once, then lift out. Serve hot, with chilled rabri if you like.",
          },
        ],
        tips: [
          "For a same-day batter, add 0.5 tsp dried yeast and rest for 2 hours, though you lose some of the tang.",
          "If the batter will not hold a spiral, it is too thin; if it breaks as you pipe, it is too thick.",
          "Hot jalebi into warm syrup gives the best soak; cold syrup stays on the surface.",
        ],
      },
    },
    {
      id: "jangiri",
      name: "Jangiri (Imarti)",
      native: [
        { text: "ஜாங்கிரி", lang: "Tamil", translit: "jangiri" },
        { text: "इमरती", lang: "Hindi", translit: "imarti" },
      ],
      country: "IND",
      place: "Tamil Nadu",
      coords: [80.27, 13.08],
      from: "jalebi-north-india",
      arrival: "Date unclear; an Indian offshoot of jalebi, made across north and south",
      summary:
        "A jalebi relative made from ground urad dal, piped as a flower-like ring of small loops and soaked in syrup.",
      story: [
        "Imarti in the north and jangiri in the south are the same idea: jalebi made with lentils instead of wheat. Soaked urad dal is ground to a fluffy, airy batter, often tinted orange, and piped into a circle of tiny loops around a ring, giving a shape like a flower or a piece of lace. The result is softer and denser than jalebi, and holds more syrup.",
        "In Tamil Nadu, jangiri is a wedding and festival sweet, part of the trays of sweets families exchange. A popular story says the name comes from the Mughal emperor Jahangir, but there is no firm evidence for it. Imarti is a well-loved sweet in Uttar Pradesh and Rajasthan, often eaten warm.",
      ],
      signature: [
        "Batter of soaked, ground urad dal, not wheat",
        "No fermentation; air is beaten into the batter",
        "Ring of small loops, like a flower",
        "Softer, chewier and more syrup-soaked than jalebi",
      ],
      traits: {
        batter: "Ground urad dal",
        raising: "Air beaten in, no ferment",
        shape: "Flower ring of small loops",
        fryingFat: "Ghee or oil",
        syrup: "Cardamom, sometimes rose",
        pairing: "Other sweets on festival trays",
        occasion: "Weddings and festivals",
      },
      servedWith: ["Wedding sweet trays", "Diwali sweet boxes"],
      whenEaten: "Weddings, Diwali and family celebrations",
      recipe: {
        serves: 6,
        prepMinutes: 25,
        cookMinutes: 35,
        restMinutes: 180,
        difficulty: "Challenging",
        yield: "About 15 pieces",
        ingredients: [
          {
            title: "Batter",
            items: [
              { qty: 150, unit: "g", item: "whole skinned urad dal" },
              { qty: 1, unit: "tbsp", item: "rice flour" },
              { qty: 1, unit: "pinch", item: "orange food colour", note: "optional" },
              { qty: 60, unit: "ml", item: "cold water", note: "for grinding, approximately" },
            ],
          },
          {
            title: "Syrup",
            items: [
              { qty: 400, unit: "g", item: "sugar" },
              { qty: 250, unit: "ml", item: "water" },
              { qty: 4, unit: "pod", item: "green cardamom", note: "crushed" },
              { qty: 0.5, unit: "tsp", item: "rosewater", note: "optional" },
              { qty: 1, unit: "tsp", item: "lemon juice" },
            ],
          },
          {
            title: "For frying",
            items: [{ qty: 500, unit: "ml", item: "ghee or neutral oil" }],
          },
        ],
        steps: [
          {
            title: "Soak the dal",
            text: "Wash the urad dal and soak it in plenty of water for 3 hours. Drain well.",
          },
          {
            title: "Grind to a fluffy batter",
            text: "Grind the dal with just enough cold water to make a very smooth, thick paste. Add the rice flour and colour and beat by hand for 5 minutes until light and airy.",
          },
          {
            title: "Make the syrup",
            text: "Simmer the sugar, water and cardamom for 6 to 8 minutes until slightly sticky. Add the lemon juice and rosewater and keep warm.",
          },
          {
            title: "Heat the fat",
            text: "Heat the ghee in a wide, shallow pan to about 160°C, lower than for jalebi, so the thick batter cooks through.",
          },
          {
            title: "Pipe the flower",
            text: "Using a piping bag or cloth with a small hole, pipe a ring about 7 cm across, then pipe small continuous loops all the way round it.",
          },
          {
            title: "Fry gently",
            text: "Fry for 2 to 3 minutes per side until crisp outside and cooked through, but not browned.",
          },
          {
            title: "Soak",
            text: "Transfer to the warm syrup and soak for 3 to 5 minutes so the dal absorbs it fully. Drain on a rack.",
          },
        ],
        tips: [
          "Test the batter by dropping a little into water; if it floats, it has enough air.",
          "A wet grinder or strong blender gives the smoothest batter; add water sparingly.",
          "Pipe onto a small square of baking paper and slide it into the oil if freehand piping into fat is hard.",
        ],
      },
    },
    {
      id: "jilapi",
      name: "Jilapi",
      native: [{ text: "জিলাপি", lang: "Bengali", translit: "jilapi" }],
      country: "BGD",
      place: "Old Dhaka",
      coords: [90.41, 23.71],
      from: "jalebi-north-india",
      arrival: "Likely by the Mughal period, from North India",
      summary:
        "Bangladesh's jilapi, often thicker and chunkier than the Indian kind, and an essential part of the Ramadan iftar table.",
      story: [
        "In Bangladesh, jilapi is above all a Ramadan food. In the late afternoons of the fasting month, stalls in Old Dhaka's Chawkbazar and across the country fry it in huge quantities, and few iftar tables are complete without it, alongside piyaju, beguni, chola and dates.",
        "Bangladeshi jilapi tends to be thicker than the North Indian kind, with fatter coils and a chewier middle; some shops make extra-large rings known as shahi jilapi. Many cooks add a little rice flour to the batter for crunch, and the syrup is usually plain or lightly scented with cardamom.",
      ],
      signature: [
        "Thick, chunky coils with a chewy centre",
        "A little rice flour in the batter",
        "Plain or lightly cardamom-scented syrup",
        "Central to Ramadan iftar",
      ],
      traits: {
        batter: "Maida with rice flour",
        raising: "Yeast or overnight ferment",
        shape: "Thick, chunky coils",
        fryingFat: "Soybean or palm oil",
        syrup: "Plain or cardamom",
        pairing: "Piyaju, beguni, chola",
        occasion: "Ramadan iftar",
      },
      servedWith: ["Piyaju", "Beguni", "Chola (spiced chickpeas)", "Dates"],
      whenEaten: "Ramadan iftar, and as an afternoon snack",
      recipe: {
        serves: 6,
        prepMinutes: 20,
        cookMinutes: 30,
        restMinutes: 240,
        difficulty: "Medium",
        yield: "About 12 jilapis",
        ingredients: [
          {
            title: "Batter",
            items: [
              { qty: 150, unit: "g", item: "plain flour (maida)" },
              { qty: 30, unit: "g", item: "rice flour" },
              { qty: 2, unit: "tbsp", item: "plain yogurt" },
              { qty: 0.5, unit: "tsp", item: "dried yeast" },
              { qty: 1, unit: "tsp", item: "sugar" },
              { qty: 160, unit: "ml", item: "lukewarm water", note: "approximately" },
              { qty: 1, unit: "pinch", item: "orange food colour or turmeric", note: "optional" },
            ],
          },
          {
            title: "Syrup",
            items: [
              { qty: 300, unit: "g", item: "sugar" },
              { qty: 200, unit: "ml", item: "water" },
              { qty: 3, unit: "pod", item: "green cardamom", note: "optional" },
              { qty: 1, unit: "tsp", item: "lemon juice" },
            ],
          },
          {
            title: "For frying",
            items: [{ qty: 750, unit: "ml", item: "neutral oil" }],
          },
        ],
        steps: [
          {
            title: "Mix the batter",
            text: "Whisk together the flours, yogurt, yeast, sugar and colour, adding water gradually to make a batter slightly thicker than for Indian jalebi, like thick custard.",
          },
          {
            title: "Ferment",
            text: "Cover and leave in a warm place for 4 hours, or overnight in the fridge, until bubbly.",
          },
          {
            title: "Make the syrup",
            text: "Simmer the sugar, water and cardamom for 6 to 8 minutes until slightly sticky. Add the lemon juice and keep warm.",
          },
          {
            title: "Heat the oil",
            text: "Heat the oil to about 170°C in a wide pan. Fill a squeeze bottle or a cloth with a slightly larger hole than for jalebi, about 5 mm.",
          },
          {
            title: "Pipe thick coils",
            text: "Pipe two or three fat, overlapping rings about 8 cm across, finishing with a cross-stroke to hold them together.",
          },
          {
            title: "Fry",
            text: "Fry for 2 to 3 minutes, turning once, until deep golden and crisp all over.",
          },
          {
            title: "Soak",
            text: "Soak in the warm syrup for 1 to 2 minutes so the thicker coils absorb it, then drain and serve warm.",
          },
        ],
        tips: [
          "The rice flour gives extra crunch that holds up on an iftar table for an hour or two.",
          "Thicker coils need slightly lower oil temperature so the centres cook through.",
          "Stir the batter before each batch, as the rice flour tends to settle.",
        ],
      },
    },
    {
      id: "jalebi-pakistan",
      name: "Jalebi and Doodh Jalebi",
      native: [{ text: "جلیبی", lang: "Urdu", translit: "jalebi" }],
      country: "PAK",
      place: "Lahore",
      coords: [74.34, 31.55],
      from: "jalebi-north-india",
      arrival: "Shared Punjabi tradition, predating the 1947 partition",
      summary:
        "Pakistan's crisp jalebi, eaten from street stalls and, on winter mornings in Lahore, softened in hot sweet milk.",
      story: [
        "Jalebi was part of Punjabi sweet-making long before the border was drawn in 1947, and in Pakistan it remains a staple of halwai shops and street stalls. Lahori jalebi is thin, crisp and bright orange, eaten for breakfast, bought for weddings and shared at Eid and on celebration days.",
        "In winter it takes a second form, doodh jalebi. Freshly fried jalebis are broken into a glass or bowl of hot, sweetened milk, sometimes thickened or scented with cardamom, and eaten as a warming breakfast or late-night snack. The syrup seeps into the milk and the jalebi softens at the edges while staying crisp at the centre.",
      ],
      signature: [
        "Thin, crisp and bright orange",
        "Doodh jalebi: broken into hot sweet milk in winter",
        "Sold by weight from halwai shops",
        "Cardamom-scented syrup",
      ],
      traits: {
        batter: "Maida, sometimes with gram flour",
        raising: "Overnight ferment or yeast",
        shape: "Tight, thin spirals",
        fryingFat: "Ghee or oil",
        syrup: "Cardamom",
        pairing: "Hot sweet milk (doodh)",
        occasion: "Winter breakfast, weddings, Eid",
      },
      servedWith: ["Hot sweetened milk", "Samosas", "Pakoras"],
      whenEaten: "Winter mornings and evenings; weddings and Eid",
      recipe: {
        serves: 4,
        prepMinutes: 20,
        cookMinutes: 30,
        restMinutes: 720,
        difficulty: "Challenging",
        yield: "About 16 jalebis and 4 bowls of doodh jalebi",
        ingredients: [
          {
            title: "Batter",
            items: [
              { qty: 125, unit: "g", item: "plain flour (maida)" },
              { qty: 1, unit: "tbsp", item: "gram flour (besan)" },
              { qty: 2, unit: "tbsp", item: "plain yogurt" },
              { qty: 150, unit: "ml", item: "lukewarm water", note: "approximately" },
              { qty: 1, unit: "pinch", item: "orange food colour", note: "optional" },
            ],
          },
          {
            title: "Syrup",
            items: [
              { qty: 250, unit: "g", item: "sugar" },
              { qty: 150, unit: "ml", item: "water" },
              { qty: 4, unit: "pod", item: "green cardamom", note: "crushed" },
              { qty: 1, unit: "tsp", item: "lemon juice" },
            ],
          },
          {
            title: "Doodh (milk)",
            items: [
              { qty: 1, unit: "l", item: "full-fat milk" },
              { qty: 2, unit: "tbsp", item: "sugar" },
              { qty: 3, unit: "pod", item: "green cardamom", note: "crushed" },
            ],
          },
          {
            title: "For frying",
            items: [{ qty: 500, unit: "ml", item: "ghee or neutral oil" }],
          },
        ],
        steps: [
          {
            title: "Make and ferment the batter",
            text: "Whisk the maida, besan, yogurt and colour with enough water to make a smooth, thick pouring batter. Cover and ferment in a warm place for 12 to 24 hours.",
          },
          {
            title: "Make the syrup",
            text: "Simmer the sugar, water and cardamom for 6 to 8 minutes until slightly sticky, then add the lemon juice and keep warm.",
          },
          {
            title: "Heat the milk",
            text: "Simmer the milk with the sugar and cardamom for 10 minutes, stirring, until slightly reduced. Keep it hot.",
          },
          {
            title: "Pipe and fry",
            text: "Heat the ghee to about 175°C. Pipe tight spirals about 7 cm across from a squeeze bottle and fry for about 1 minute per side until crisp.",
          },
          {
            title: "Soak briefly",
            text: "Dip each batch in the warm syrup for 30 seconds only, then lift out. A short soak keeps them crisp for the milk.",
          },
          {
            title: "Make doodh jalebi",
            text: "Break two or three hot jalebis into each bowl or glass and pour the hot milk over. Eat at once, while the centres are still crisp.",
          },
        ],
        tips: [
          "Serve the remaining jalebis on their own; they keep their crunch for a few hours.",
          "Some Lahori cooks thicken the milk further, closer to a thin rabri, for a richer bowl.",
          "Adjust the sugar in the milk to the sweetness of your syrup; the jalebi adds plenty.",
        ],
      },
    },
    {
      id: "afghan-jalebi",
      name: "Jalebi (Afghanistan)",
      country: "AFG",
      place: "Kabul",
      coords: [69.21, 34.56],
      from: "jalebi-pakistan",
      arrival: "Over the Khyber routes from Punjab; date unclear",
      summary:
        "In Kabul, jalebi is a winter food, sold beside fried fish so that customers can eat the two together.",
      story: [
        "In Afghanistan the sweet goes by its South Asian name, jalebi, which suggests it arrived from the Punjab rather than directly from Persian zoolbia. What makes it distinctive is when and how it is eaten. In the cold months, Kabul's fish sellers fry fish in spiced batter, and jalebi is sold alongside it; the pairing, mahi wa jalebi, is a winter tradition.",
        "The jalebi itself is crisp and syrupy, often a little thicker than the Indian kind. Families buy both by weight on winter evenings and eat them together, the hot, salty fish and the sweet jalebi taken in alternate bites. For many Kabulis, the first plate of the season is a sign that winter has properly arrived.",
      ],
      signature: [
        "Eaten with fried fish (mahi wa jalebi)",
        "A winter food, sold in the cold months",
        "Crisp, slightly thicker coils",
        "Light cardamom syrup",
      ],
      traits: {
        batter: "Wheat flour and yogurt",
        raising: "Yeast or overnight ferment",
        shape: "Medium-thick spirals",
        fryingFat: "Neutral oil",
        syrup: "Cardamom, sometimes rosewater",
        pairing: "Fried fish (mahi)",
        occasion: "Winter evenings",
      },
      servedWith: ["Fried fish", "Green tea"],
      whenEaten: "Winter, especially cold evenings",
      recipe: {
        serves: 6,
        prepMinutes: 20,
        cookMinutes: 30,
        restMinutes: 240,
        difficulty: "Medium",
        yield: "About 16 jalebis",
        ingredients: [
          {
            title: "Batter",
            items: [
              { qty: 150, unit: "g", item: "plain flour" },
              { qty: 3, unit: "tbsp", item: "plain yogurt" },
              { qty: 0.5, unit: "tsp", item: "dried yeast" },
              { qty: 1, unit: "tsp", item: "sugar" },
              { qty: 150, unit: "ml", item: "lukewarm water", note: "approximately" },
              { qty: 1, unit: "pinch", item: "saffron or orange food colour", note: "optional" },
            ],
          },
          {
            title: "Syrup",
            items: [
              { qty: 300, unit: "g", item: "sugar" },
              { qty: 180, unit: "ml", item: "water" },
              { qty: 4, unit: "pod", item: "green cardamom", note: "crushed" },
              { qty: 1, unit: "tsp", item: "lemon juice" },
              { qty: 1, unit: "tsp", item: "rosewater", note: "optional" },
            ],
          },
          {
            title: "For frying",
            items: [{ qty: 750, unit: "ml", item: "neutral oil" }],
          },
        ],
        steps: [
          {
            title: "Mix the batter",
            text: "Whisk the flour, yogurt, yeast, sugar and colour with enough water to make a thick, smooth pouring batter.",
          },
          {
            title: "Prove",
            text: "Cover and leave in a warm place for about 4 hours until bubbly and slightly sour.",
          },
          {
            title: "Make the syrup",
            text: "Simmer the sugar, water and cardamom for 6 to 8 minutes until slightly sticky. Add the lemon juice and rosewater and keep warm.",
          },
          {
            title: "Heat the oil",
            text: "Heat the oil to about 170°C. Fill a squeeze bottle or piping bag with a 4 mm opening.",
          },
          {
            title: "Pipe and fry",
            text: "Pipe spirals about 8 cm across and fry for 1 to 2 minutes per side until crisp and golden.",
          },
          {
            title: "Soak and serve",
            text: "Soak in the warm syrup for about 1 minute, drain, and serve hot, ideally alongside freshly fried fish.",
          },
        ],
        tips: [
          "If serving with fish, fry the jalebi first and the fish last, so the fish is hot and crisp.",
          "A medium soak keeps the jalebi crisp enough to stand up to the fish.",
          "Leftover jalebi can be refreshed for a minute in a hot oven.",
        ],
      },
    },
    {
      id: "jeri",
      name: "Jeri",
      native: [{ text: "जेरी", lang: "Nepali", translit: "jeri" }],
      country: "NPL",
      place: "Kathmandu",
      coords: [85.32, 27.71],
      from: "jalebi-north-india",
      arrival: "From the Indian plains; date unclear",
      summary:
        "Nepal's jalebi, usually larger and softer, eaten in Kathmandu with swari, a thin fried flatbread.",
      story: [
        "In Nepal, jalebi is called jeri, and in Kathmandu it is best known as half of a pairing: jeri-swari. Swari is a thin, soft fried flatbread, and the two are eaten together in the morning, the plain bread balancing the syrupy jeri. Sweet shops in the old city sell them fresh through the day.",
        "Nepali jeri is often larger than Indian jalebi, with fatter coils and a softer, more syrup-soaked texture. It is also bought for festivals such as Tihar and Dashain, and for family occasions, when sweet shops fry it in large batches.",
      ],
      signature: [
        "Eaten with swari, a thin fried flatbread",
        "Larger, softer coils than Indian jalebi",
        "Heavily soaked in syrup",
        "A morning food in Kathmandu",
      ],
      traits: {
        batter: "Maida and yogurt",
        raising: "Overnight ferment",
        shape: "Large, fat coils",
        fryingFat: "Ghee or oil",
        syrup: "Plain or cardamom",
        pairing: "Swari flatbread",
        occasion: "Breakfast, Tihar, Dashain",
      },
      servedWith: ["Swari", "Milky tea"],
      whenEaten: "Breakfast in Kathmandu; Tihar and Dashain",
      recipe: {
        serves: 6,
        prepMinutes: 20,
        cookMinutes: 30,
        restMinutes: 720,
        difficulty: "Challenging",
        yield: "About 12 large jeri",
        ingredients: [
          {
            title: "Batter",
            items: [
              { qty: 150, unit: "g", item: "plain flour (maida)" },
              { qty: 3, unit: "tbsp", item: "plain yogurt" },
              { qty: 160, unit: "ml", item: "lukewarm water", note: "approximately" },
              { qty: 1, unit: "pinch", item: "orange food colour", note: "optional" },
            ],
          },
          {
            title: "Syrup",
            items: [
              { qty: 350, unit: "g", item: "sugar" },
              { qty: 250, unit: "ml", item: "water" },
              { qty: 3, unit: "pod", item: "green cardamom", note: "optional" },
              { qty: 1, unit: "tsp", item: "lemon juice" },
            ],
          },
          {
            title: "For frying",
            items: [{ qty: 500, unit: "ml", item: "ghee or neutral oil" }],
          },
        ],
        steps: [
          {
            title: "Mix the batter",
            text: "Whisk the maida, yogurt and colour with enough water to make a thick pouring batter with no lumps.",
          },
          {
            title: "Ferment overnight",
            text: "Cover and leave in a warm place for 12 to 18 hours until bubbly and lightly sour.",
          },
          {
            title: "Make a thinner syrup",
            text: "Simmer the sugar, water and cardamom for about 5 minutes, keeping the syrup slightly thinner than for Indian jalebi so the jeri soak deeply. Add the lemon juice and keep warm.",
          },
          {
            title: "Heat the fat",
            text: "Heat the ghee to about 170°C. Fill a cloth or squeeze bottle with a 5 mm opening.",
          },
          {
            title: "Pipe large coils",
            text: "Pipe large spirals about 10 cm across with three or four fat turns. Fry for 1 to 2 minutes per side until golden.",
          },
          {
            title: "Soak longer",
            text: "Soak the jeri in the warm syrup for 2 minutes, turning, until saturated and soft. Drain and serve warm, with swari if you have it.",
          },
        ],
        tips: [
          "Swari is made from a soft maida dough rolled very thin and fried briefly; good bakery puri is a reasonable stand-in.",
          "A thinner syrup and a longer soak give jeri its softer texture.",
          "Fry at a steady medium heat so the thick coils cook through without darkening.",
        ],
      },
    },
    {
      id: "zlabia",
      name: "Zlabia",
      native: [{ text: "زلابية", lang: "Arabic", translit: "zlabia" }],
      country: "TUN",
      place: "Béja",
      coords: [9.18, 36.73],
      from: "origin",
      arrival: "Medieval, with Arab cooking across North Africa",
      summary:
        "The Maghreb's Ramadan zlabia, tangled discs of fermented batter fried and dipped in syrup or honey, famously from Béja.",
      story: [
        "Across Tunisia and Algeria, zlabia is a Ramadan sweet, and the Tunisian town of Béja is especially known for it. During the fasting month, shops there and in other towns fry tangled, lacy discs of batter and dip them in syrup, often selling them beside mkharek, another fried sweet soaked in honey.",
        "Zlabia keeps the medieval name almost unchanged, and its loose, looping shape is closer to Iranian zoolbia than to the tight Indian spiral. The batter is usually fermented with yeast and often tinted yellow or orange. The syrup may be scented with lemon or orange-blossom water, and some makers use honey.",
      ],
      signature: [
        "Loose, tangled discs rather than tight spirals",
        "Yeasted batter, often tinted yellow or orange",
        "Syrup with lemon or orange-blossom water, or honey",
        "Closely tied to Ramadan, especially in Béja",
      ],
      traits: {
        batter: "Wheat flour, some starch",
        raising: "Yeast ferment",
        shape: "Tangled, lacy discs",
        fryingFat: "Neutral oil",
        syrup: "Lemon, orange blossom or honey",
        pairing: "Mkharek, mint tea",
        occasion: "Ramadan nights",
      },
      servedWith: ["Mkharek", "Mint tea"],
      whenEaten: "Ramadan evenings after iftar",
      recipe: {
        serves: 6,
        prepMinutes: 20,
        cookMinutes: 30,
        restMinutes: 180,
        difficulty: "Medium",
        yield: "About 15 pieces",
        ingredients: [
          {
            title: "Batter",
            items: [
              { qty: 200, unit: "g", item: "plain flour" },
              { qty: 50, unit: "g", item: "cornflour (cornstarch)" },
              { qty: 1, unit: "tsp", item: "dried yeast" },
              { qty: 1, unit: "tsp", item: "sugar" },
              { qty: 1, unit: "pinch", item: "salt" },
              { qty: 280, unit: "ml", item: "lukewarm water", note: "approximately" },
              { qty: 1, unit: "pinch", item: "yellow food colour or saffron", note: "optional" },
            ],
          },
          {
            title: "Syrup",
            items: [
              { qty: 400, unit: "g", item: "sugar" },
              { qty: 250, unit: "ml", item: "water" },
              { qty: 1, unit: "tbsp", item: "lemon juice" },
              { qty: 1, unit: "tbsp", item: "orange-blossom water", note: "optional" },
            ],
          },
          {
            title: "For frying",
            items: [{ qty: 750, unit: "ml", item: "neutral oil" }],
          },
        ],
        steps: [
          {
            title: "Mix the batter",
            text: "Whisk the flour, cornflour, yeast, sugar, salt and colour with the water until smooth and thick enough to fall in a heavy ribbon.",
          },
          {
            title: "Ferment",
            text: "Cover and leave in a warm place for about 3 hours until well risen and bubbly. Whisk again before frying.",
          },
          {
            title: "Make the syrup",
            text: "Boil the sugar and water for 8 minutes, add the lemon juice and simmer for 2 minutes more. Off the heat, add the orange-blossom water and keep warm.",
          },
          {
            title: "Heat the oil",
            text: "Heat the oil to about 175°C in a wide pan. Fill a squeeze bottle with a 4 mm opening.",
          },
          {
            title: "Pipe tangled discs",
            text: "Pipe the batter in quick, overlapping zigzags and loops to form a lacy disc about 10 cm across. Fry 2 or 3 at a time.",
          },
          {
            title: "Fry and soak",
            text: "Fry for 2 minutes per side until crisp and golden, then dip in the warm syrup for 30 seconds. Drain on a rack.",
          },
        ],
        tips: [
          "The cornflour makes the zlabia crisper and helps it stay crunchy after soaking.",
          "Use warm honey thinned with a little water in place of syrup for a darker, more fragrant finish.",
          "Keep the discs fairly thin and open; if too dense, the middle stays soft.",
        ],
      },
    },
    {
      id: "zalabia-levant",
      name: "Zalabia (Levantine cousin)",
      native: [{ text: "زلابية", lang: "Arabic", translit: "zalabia" }],
      country: "LBN",
      place: "Beirut",
      coords: [35.5, 33.89],
      from: "origin",
      arrival: "Medieval name, later a different shape; dates unclear",
      summary:
        "In the Levant, zalabia means yeasted dough fritters, finger-shaped or round, dipped in syrup: a cousin that kept the name, not the spiral.",
      story: [
        "This is the family's honest outlier. In Lebanon, Syria, Palestine and Egypt, zalabia (or zalabieh) still carries the medieval name, but it usually describes fried pieces of soft yeasted dough rather than spirals of piped batter. In Lebanon they are often long fingers or rings; in Egypt the name commonly refers to small round puffs similar to luqmat al-qadi.",
        "In Lebanon, zalabieh is closely linked to Eid al-Ghitas, the Christian feast of Epiphany, when families fry it with awamat, round syrup-soaked dough balls. It is dipped in a syrup (ater) scented with orange-blossom or rosewater, or simply dusted with sugar. It shares the medieval idea of fried dough in syrup, but not the spiral.",
      ],
      signature: [
        "Yeasted dough, not a thin piped batter",
        "Fingers, rings or balls, never a spiral",
        "Orange-blossom or rose syrup (ater)",
        "Linked to Epiphany in Lebanon",
      ],
      traits: {
        batter: "Soft yeasted wheat dough",
        raising: "Yeast",
        shape: "Fingers or rings, not spirals",
        fryingFat: "Neutral oil",
        syrup: "Orange blossom or rosewater",
        pairing: "Awamat, Arabic coffee",
        occasion: "Epiphany (Eid al-Ghitas)",
      },
      servedWith: ["Awamat", "Arabic coffee"],
      whenEaten: "Epiphany in January, and family gatherings",
      recipe: {
        serves: 6,
        prepMinutes: 25,
        cookMinutes: 25,
        restMinutes: 90,
        difficulty: "Medium",
        yield: "About 20 fingers",
        ingredients: [
          {
            title: "Dough",
            items: [
              { qty: 250, unit: "g", item: "plain flour" },
              { qty: 1.5, unit: "tsp", item: "dried yeast" },
              { qty: 1, unit: "tsp", item: "sugar" },
              { qty: 0.5, unit: "tsp", item: "salt" },
              { qty: 200, unit: "ml", item: "lukewarm water", note: "approximately" },
            ],
          },
          {
            title: "Syrup (ater)",
            items: [
              { qty: 300, unit: "g", item: "sugar" },
              { qty: 180, unit: "ml", item: "water" },
              { qty: 1, unit: "tsp", item: "lemon juice" },
              { qty: 1, unit: "tbsp", item: "orange-blossom water" },
              { qty: 1, unit: "tsp", item: "rosewater", note: "optional" },
            ],
          },
          {
            title: "For frying",
            items: [
              { qty: 750, unit: "ml", item: "neutral oil" },
              { item: "oil for your hands" },
            ],
          },
        ],
        steps: [
          {
            title: "Make the syrup first",
            text: "Boil the sugar and water for 8 to 10 minutes, add the lemon juice, then cool and stir in the flower waters. The syrup should be cold when the fritters go in.",
          },
          {
            title: "Mix a soft dough",
            text: "Mix the flour, yeast, sugar and salt with enough water to make a very soft, sticky dough. Beat it with your hand or a spoon for 3 to 4 minutes until elastic.",
          },
          {
            title: "Prove",
            text: "Cover and leave in a warm place for 1 to 1.5 hours until doubled.",
          },
          {
            title: "Heat the oil",
            text: "Heat the oil to about 170°C. Oil your hands and a small plate.",
          },
          {
            title: "Shape and fry",
            text: "Pull off walnut-sized pieces, stretch each into a finger about 10 cm long, and slide into the oil. Fry for 3 to 4 minutes, turning, until puffed and golden.",
          },
          {
            title: "Dip in syrup",
            text: "Drain briefly, then dip the hot fritters in the cold syrup for a few seconds and lift out. Serve warm.",
          },
        ],
        tips: [
          "Hot fritters into cold syrup keeps them crisp; hot into hot makes them soggy.",
          "Keep your hands oiled, as the dough is meant to be too sticky to knead.",
          "For a plainer version, skip the syrup and roll the fritters in caster sugar.",
        ],
      },
    },
  ],
};
