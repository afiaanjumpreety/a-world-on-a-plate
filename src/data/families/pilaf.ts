import type { DishFamily } from '../types';

export const pilaf: DishFamily = {
  id: "pilaf",
  name: "Pilaf",
  alsoKnownAs: ["Polow", "Plov", "Palaw", "Pilav", "Pulao", "Biryani", "Pilau"],
  tagline: "Rice cooked in stock, layered with meat, sealed to steam.",
  category: "rice",
  motif: "rice",
  color: "#838E34",
  origin: {
    region: "Greater Iran and Central Asia (historic Khorasan and Transoxiana)",
    country: "IRN",
    coords: [59.61, 36.3],
    era: "By the early medieval period; refined at Persian courts by the 1500s",
    confidence: "contested",
    confidenceNote:
      "Persian gave the dish its name and early Arabic cookbooks its first recipes, but Central Asians claim plov as their own ancient invention, and some historians point to rice-and-meat dishes in ancient Indian texts, a link others reject. [1, 2]",
  },
  intro:
    "Rice cooked in seasoned stock, or layered with meat and sealed to steam, is one of the great shared ideas of Asia, East Africa and the Mediterranean. In Tehran it is polow with a golden crust; in Tashkent, plov built over carrots in an iron kazan; in Hyderabad, biryani cooked under a seal of dough. Follow the grain and you trace caravan roads, royal kitchens and the monsoon trade.",
  history: [
    "Who first cooked rice in stock with meat is unresolved. The food historian Charles Perry calls pilaf a post-10th-century eastern Arabic innovation, and an early 13th-century cookbook from Aleppo gives a recipe of rice, meat, chickpeas and garlic that resembles it. [1] The historian K. T. Achaya pointed to rice cooked with meat in ancient Indian texts, though other scholars argue those dishes were something else. [1, 2] Central Asians tell of Alexander the Great bringing plov home from Samarkand, a story historians treat as apocryphal. [1] What is clear is that rice cooked in stock became a prestige dish across the Persianate world.",
    "In Persian the dish is first attested in a 14th-century satirical poem, and the earliest named pilaf recipe appears in a cookbook written in 1521 for the court of the Safavid shah Ismail I. [1] A second Safavid cookbook, by a chef to Shah Abbas I, gives four of its six chapters to rice dishes, and by the end of the 1500s rice had grown from a court speciality into a major branch of Iranian cookery. [3] The method of parboiling rice, draining it and steaming it gently became the Persian signature. [1] In the Ottoman Empire, pilaf was central to palace cooking, where new cooks were reportedly tested on how they cooked rice, and it spread into the Balkans and the Levant. [1]",
    "In South Asia, Persianate courts brought pilau into kitchens already rich in spice. There it met Indian techniques and became pulao and biryani, the latter layered and often sealed to cook in its own steam. [2] Both dishes are listed in the Ain-i-Akbari, a record of Akbar's court written in the 1590s, and the historian Lizzie Collingham places the birth of modern biryani in the Mughal kitchens; others think it reached the Deccan earlier. [2] A popular story credits Timur with bringing biryani to India, but there is no record of it in his Central Asian homeland at the time. [2] Each court and city, from Lucknow to Hyderabad to Dhaka, settled on its own style.",
    "The idea also moved by sea and by conquest. Omani, Yemeni and Persian settlers and the Indian Ocean trade brought rice and spices to the Swahili coast, where pilau is now a festive staple. [1] Further west, Arabs in al-Andalus began cultivating rice around the 10th century, and it took root in the wetlands around Valencia. [6] Paella, a nineteenth-century Valencian dish, is a distant cousin rather than a direct descendant, but it inherits that rice and a similar instinct: grains cooked in a rich, seasoned broth until every drop is absorbed. [6, 1]",
  ],
  etymology:
    "English pilau was borrowed from Persian by way of Turkish; the Oxford English Dictionary traces Persian pulaw further back to Sanskrit pulāka, a ball of rice, though the food historian Charles Perry argues the Sanskrit word meant something quite different. [1] Biryani comes from Persian beryān, 'fried' or 'roasted' [2], and paella is the Valencian word for the wide pan, from Latin patella. [6]",
  timeline: [
    {
      when: "c. 900s",
      event: "Arabs in al-Andalus begin cultivating rice; pilaf-like rice cooking spreads across the Abbasid world. [6, 1]",
    },
    {
      when: "Early 1200s",
      event: "A cookbook from Aleppo gives an early recipe resembling pilaf: rice, meat, chickpeas and garlic. [1]",
    },
    {
      when: "1300s",
      event: "The word for pilaf is first attested in Persian, in a satirical poem by Ubayd Zakani. [1]",
    },
    {
      when: "1521",
      event: "A Safavid court cookbook gives the earliest known recipe under the name pilaf. [1, 3]",
    },
    {
      when: "1590s",
      event: "The Ain-i-Akbari, a record of Mughal emperor Akbar's court, lists both pilau and biryani. [2]",
    },
    {
      when: "1700s–1800s",
      event: "The Nawabs of Awadh and the Nizams of Hyderabad shape the courtly biryanis of Lucknow and Hyderabad. [2]",
    },
    {
      when: "1800s",
      event: "Paella takes shape as a named dish in rural Valencia; Zanzibar thrives as an Omani-ruled clove port. [6, 1]",
    },
    {
      when: "2016",
      event: "UNESCO inscribes the palov traditions of Uzbekistan and Tajikistan as intangible cultural heritage. [4, 5]",
    },
  ],
  commonThreads: [
    "Rice is never simply boiled: it absorbs a seasoned stock or finishes by steaming in a closed pot.",
    "Fat, whether butter, ghee, oil or rendered tail fat, coats every grain.",
    "Meat, when used, flavours the rice through its stock or by cooking beneath or within it.",
    "Cooks prize separate, intact grains over a creamy or sticky texture.",
    "It is feast food, made in large pots for weddings, holidays and gatherings.",
  ],
  divergences: [
    {
      title: "Absorb or drain",
      text: "Turkish pilav, Uzbek plov and Swahili pilau cook rice in a measured amount of liquid until it is absorbed. Persian polow and most biryanis boil the rice in plenty of water first, drain it, then steam it, which gives longer, looser grains.",
    },
    {
      title: "Mixed or layered",
      text: "In a pilaf the rice and its additions are cooked together or folded through. Biryani keeps them in separate layers, meat below and rice above, so each spoonful differs and the colours stay distinct.",
    },
    {
      title: "Raw or cooked meat",
      text: "Hyderabad and Old Dhaka favour kacchi biryani, where raw marinated meat cooks under the rice in one sealed pot. Lucknow's pakki style cooks the meat first and boils the rice in its stock, trading drama for control.",
    },
    {
      title: "The crust",
      text: "Some cooks treat the bottom of the pot as the best part: Iranian tahdig and Valencian socarrat are cultivated on purpose. Elsewhere, a scorched base is a mistake, and the pot is kept on gentle heat or set on a griddle.",
    },
    {
      title: "Spice and heat",
      text: "The range runs from Turkish pilav, flavoured with little but butter and stock, through the perfumed saffron and kewra of Lucknow, to the chilli, tomato and plum punch of Sindhi biryani.",
    },
  ],
  compareAxes: [
    { key: "method", label: "Cooking method" },
    { key: "rice", label: "Rice" },
    { key: "fat", label: "Fat" },
    { key: "protein", label: "Protein" },
    { key: "aromatics", label: "Key flavourings" },
    { key: "finish", label: "Signature finish" },
  ],
  variants: [
    {
      id: "iranian-polow",
      name: "Baghali Polow with Tahdig",
      native: [{ text: "باقالی پلو", lang: "Persian", translit: "baghali polow" }],
      country: "IRN",
      place: "Tehran",
      coords: [51.39, 35.69],
      from: "origin",
      arrival: "The Persian heartland of the family; refined at Safavid courts in the 1500s–1600s",
      summary: "Persian rice with broad beans and dill, parboiled, steamed and crowned with a golden crust of tahdig. [7]",
      story: [
        "Iranian cooks distinguish chelow, plain steamed rice, from polow, rice steamed together with other ingredients. Both rest on the same careful method: rice is soaked, boiled briefly in plenty of salted water, drained and then steamed slowly in a covered pot until each long grain stands apart. The lid is wrapped in a cloth to catch condensation, so the rice turns fluffy rather than wet.",
        "The prize is tahdig, 'bottom of the pot', the crisp golden layer that forms on the base. It may be rice bound with yogurt and saffron, or slices of potato or flatbread. Baghali polow, scented with dill and studded with broad beans, is a spring favourite, and is often served with braised lamb shank.",
      ],
      signature: [
        "Rice is parboiled, drained, then steamed under a cloth-wrapped lid",
        "A deliberate crisp crust, tahdig, is served as a prized portion",
        "Saffron is bloomed in hot water and drizzled over at the end",
        "Herbs and beans are folded through rather than layered",
      ],
      traits: {
        method: "Parboiled, drained, then steamed",
        rice: "Long-grain Iranian or basmati",
        fat: "Butter and oil",
        protein: "None; lamb served alongside",
        aromatics: "Saffron, dill",
        finish: "Golden tahdig crust",
      },
      servedWith: [
        "braised lamb shank (mahicheh)",
        "fresh herb platter (sabzi khordan)",
        "yogurt with cucumber (mast-o-khiar)",
        "torshi pickles",
      ],
      whenEaten: "Family lunches, Nowruz gatherings and dinner parties",
      sourceRefs: [7],
      recipe: {
        serves: 6,
        prepMinutes: 30,
        cookMinutes: 80,
        restMinutes: 60,
        difficulty: "Medium",
        yield: "1 large platter with tahdig",
        ingredients: [
          {
            title: "Rice",
            items: [
              { qty: 500, unit: "g", item: "long-grain rice", note: "Iranian if you can find it, or aged basmati" },
              { qty: 3, unit: "tbsp", item: "salt", note: "for soaking and boiling" },
            ],
          },
          {
            title: "Beans and herbs",
            items: [
              { qty: 400, unit: "g", item: "broad beans", note: "frozen, thawed and skinned" },
              { qty: 2, unit: "bunch", item: "fresh dill", note: "finely chopped, or 4 tbsp dried dill" },
              { qty: 2, unit: "clove", item: "garlic", note: "finely chopped" },
              { qty: 20, unit: "g", item: "butter" },
            ],
          },
          {
            title: "Tahdig and finish",
            items: [
              { qty: 0.5, unit: "tsp", item: "ground saffron", note: "steeped in 4 tbsp hot water" },
              { qty: 3, unit: "tbsp", item: "neutral oil" },
              { qty: 2, unit: "tbsp", item: "plain yogurt" },
              { qty: 40, unit: "g", item: "butter", note: "melted" },
              { qty: 4, unit: "tbsp", item: "water" },
            ],
          },
        ],
        steps: [
          {
            title: "Wash and soak the rice",
            text: "Rinse the rice in several changes of cool water until it runs almost clear. Cover with fresh water, stir in 1 tbsp of the salt and leave to soak for at least an hour.",
          },
          {
            title: "Soften the beans",
            text: "Melt the 20 g butter in a small pan and cook the garlic gently for a minute. Add the skinned broad beans, toss for 2 to 3 minutes and set aside.",
          },
          {
            title: "Parboil the rice",
            text: "Bring a large pot of water to a rolling boil with the remaining salt. Drain the rice, add it and boil for 5 to 7 minutes, until the grains are soft outside but still firm at the centre, then drain and rinse briefly with lukewarm water.",
          },
          {
            title: "Fold in the beans and dill",
            text: "Gently toss the drained rice with the broad beans and dill in a large bowl, using a light hand so the grains do not break.",
          },
          {
            title: "Build the tahdig base",
            text: "Heat the oil in a heavy non-stick pot over medium heat. Mix two large spoonfuls of the rice with the yogurt and 1 tbsp of the saffron water, then press it in an even layer over the base of the pot.",
          },
          {
            title: "Mound and steam",
            text: "Spoon the remaining rice on top in a loose pyramid, then poke 5 or 6 holes down to the base with the handle of a wooden spoon. Drizzle over the 4 tbsp water and half the melted butter.",
          },
          {
            title: "Cook low and slow",
            text: "Wrap the lid in a clean tea towel, cover tightly and cook on medium heat for about 10 minutes, until you hear a steady sizzle and see steam. Turn the heat to low and cook for 50 to 60 minutes more.",
          },
          {
            title: "Unmould and serve",
            text: "Mix a few spoonfuls of the top rice with the rest of the saffron water and butter. Spoon the rice onto a platter, scatter the saffron rice over, then lift out the tahdig in pieces, or stand the pot base in cold water for a minute and invert it.",
          },
        ],
        tips: [
          "Taste the parboiling water: it should be noticeably salty, as this is the rice's only seasoning.",
          "The towel round the lid is essential; it stops condensation dripping back and making the rice soggy.",
          "For potato tahdig, line the oiled base with 5 mm slices of peeled potato instead of the yogurt rice.",
          "If using dried dill, halve the quantity of fresh and add it with the beans so it rehydrates in the steam.",
        ],
      },
    },
    {
      id: "uzbek-plov",
      name: "Uzbek Plov",
      native: [
        { text: "palov", lang: "Uzbek" },
        { text: "osh", lang: "Uzbek" },
        { text: "плов", lang: "Russian", translit: "plov" },
      ],
      country: "UZB",
      place: "Tashkent",
      coords: [69.28, 41.31],
      from: "origin",
      arrival: "An old tradition of Central Asia's oasis cities, shaped over centuries along the Silk Roads",
      summary: "Rice steamed over a rich base of lamb, onions and yellow carrots in a heavy iron kazan. [8]",
      story: [
        "In Uzbekistan, plov is how weddings, holidays and gatherings of friends are fed. Ceremonial plov is traditionally the work of men, the oshpaz, who cook it in huge kazans over open fires, sometimes at dawn for an early wedding feast. Every region claims its own style, from Tashkent to Samarkand, Bukhara and the Fergana Valley.",
        "The method is distinctive. Meat, onions and carrots cut into thick matchsticks are fried in a generous amount of oil, then simmered into a rich base called zirvak. Rice goes on top, unstirred, absorbs the liquid and then steams. In 2016 UNESCO recognised Uzbek palov culture as intangible cultural heritage.",
      ],
      signature: [
        "A zirvak base of meat, onions and carrots is built first",
        "Yellow and orange carrots are cut by hand into matchsticks",
        "Rice is laid on top and never stirred while it cooks",
        "Whole garlic heads, cumin and barberries steam with the rice",
      ],
      traits: {
        method: "Absorbed over meat-carrot base",
        rice: "Medium-grain devzira",
        fat: "Cottonseed oil, sometimes tail fat",
        protein: "Lamb or beef",
        aromatics: "Cumin, barberries, whole garlic",
        finish: "Meat and garlic heads on top",
      },
      servedWith: ["achichuk (tomato and onion salad)", "non flatbread", "green tea", "pickled vegetables"],
      whenEaten: "Weddings, family gatherings and early-morning wedding feasts",
      sourceRefs: [8],
      recipe: {
        serves: 8,
        prepMinutes: 40,
        cookMinutes: 100,
        restMinutes: 60,
        difficulty: "Medium",
        yield: "1 large platter",
        ingredients: [
          {
            title: "Zirvak",
            items: [
              { qty: 150, unit: "ml", item: "cottonseed or sunflower oil" },
              { qty: 800, unit: "g", item: "lamb shoulder", note: "or beef chuck, in 4 cm chunks" },
              { qty: 2, unit: "piece", item: "large onions", note: "sliced into half-moons" },
              { qty: 800, unit: "g", item: "carrots", note: "yellow and orange if possible, cut into 5 mm matchsticks" },
              { qty: 1.5, unit: "tbsp", item: "cumin seeds" },
              { qty: 1, unit: "tsp", item: "coriander seeds", note: "lightly crushed" },
              { qty: 2, unit: "tbsp", item: "dried barberries", note: "or a small handful of raisins" },
              { qty: 2, unit: "piece", item: "dried red chillies" },
              { qty: 2, unit: "piece", item: "whole heads of garlic", note: "loose outer skin removed" },
              { qty: 200, unit: "g", item: "cooked chickpeas", note: "optional" },
              { qty: 1, unit: "tbsp", item: "salt" },
              { qty: 1, unit: "l", item: "boiling water", note: "approximately" },
            ],
          },
          {
            title: "Rice",
            items: [
              { qty: 600, unit: "g", item: "devzira or other medium-grain rice", note: "or basmati" },
              { qty: 1, unit: "tsp", item: "salt" },
            ],
          },
        ],
        steps: [
          {
            title: "Soak the rice",
            text: "Rinse the rice until the water runs clear, then cover with warm water, add the salt and leave for about an hour.",
          },
          {
            title: "Heat the oil",
            text: "Heat the oil in a kazan or heavy cast-iron casserole over high heat until it shimmers and begins to smoke lightly.",
          },
          {
            title: "Brown the meat",
            text: "Add the lamb in a single layer and sear hard, turning, for 8 to 10 minutes until well browned on all sides.",
          },
          {
            title: "Add onions, then carrots",
            text: "Add the onions and fry until golden, about 8 minutes. Pile the carrots on top, leave them for 3 minutes, then stir and cook for another 8 to 10 minutes until they soften.",
          },
          {
            title: "Simmer the zirvak",
            text: "Crush the cumin between your palms over the pot, add the coriander, barberries, chillies, chickpeas and salt, and pour in boiling water just to cover. Push the garlic heads into the centre and simmer gently for 40 minutes; the broth should taste a little over-salted.",
          },
          {
            title: "Layer the rice",
            text: "Lift out the garlic and set aside. Drain the rice and spread it evenly over the zirvak without stirring, then pour boiling water gently over a slotted spoon until the rice is covered by about 1.5 cm.",
          },
          {
            title: "Cook off the water",
            text: "Return the garlic to the top and cook on high heat, uncovered, for 10 to 15 minutes until the water has disappeared from the surface.",
          },
          {
            title: "Steam",
            text: "Gather the rice into a dome, poke 6 or 7 holes down to the base with a wooden spoon handle, cover tightly and cook on the lowest heat for 25 to 30 minutes.",
          },
          {
            title: "Serve",
            text: "Lift off the garlic and meat, gently mix the rice with the carrots beneath, and mound it on a large platter. Slice the meat over the top and crown it with the garlic heads.",
          },
        ],
        tips: [
          "Cut the carrots by hand; grated carrot turns to mush and loses the dish's texture.",
          "Do not stir once the rice is in: plov steams in layers and stirring makes it sticky.",
          "Serve with a sharp tomato and onion salad to cut through the richness.",
        ],
      },
    },
    {
      id: "kabuli-palaw",
      name: "Kabuli Palaw",
      native: [{ text: "قابلی پلو", lang: "Dari", translit: "qabili palaw" }],
      country: "AFG",
      place: "Kabul",
      coords: [69.17, 34.53],
      from: "origin",
      arrival: "From the shared Persian and Central Asian rice tradition; now widely called Afghanistan's national dish",
      summary: "Lamb and rice cooked in dark, spiced stock, topped with sweet carrots, raisins and nuts. [9]",
      story: [
        "Afghanistan sits between the rice traditions of Iran, Central Asia and India, and its palaw borrows from all three: the cook-in-stock method of plov, the gentle steaming of Persian polow, and warm spices familiar from the subcontinent. Kabuli palaw is the festive version, served at weddings, at Eid and for honoured guests.",
        "Its deep brown colour comes from onions fried until very dark, sometimes helped by a little caramelised sugar, and from the lamb stock the rice cooks in. The meat is often buried inside the mound of rice, and the top is scattered with carrot strips and raisins fried until glossy and sweet, with almonds or pistachios.",
      ],
      signature: [
        "Rice cooks in dark lamb stock coloured by well-browned onions",
        "Topped with sweet fried carrot strips and raisins",
        "Warmly spiced with cardamom, cumin and cinnamon",
        "Meat is often hidden inside the mound of rice",
      ],
      traits: {
        method: "Parboiled, absorbed in stock, steamed",
        rice: "Long-grain basmati",
        fat: "Vegetable oil",
        protein: "Lamb on the bone",
        aromatics: "Cardamom, cumin, cinnamon",
        finish: "Carrots, raisins, nuts on top",
      },
      servedWith: ["Afghan naan", "plain yogurt", "tomato and onion salad", "pickled chillies"],
      whenEaten: "Weddings, Eid and when honoured guests visit",
      sourceRefs: [9],
      recipe: {
        serves: 6,
        prepMinutes: 30,
        cookMinutes: 150,
        restMinutes: 30,
        difficulty: "Medium",
        yield: "1 large platter",
        ingredients: [
          {
            title: "Lamb and stock",
            items: [
              { qty: 100, unit: "ml", item: "vegetable oil" },
              { qty: 2, unit: "piece", item: "onions", note: "finely chopped" },
              { qty: 1, unit: "kg", item: "lamb shoulder or shank on the bone", note: "in large pieces" },
              { qty: 1.5, unit: "l", item: "water" },
              { qty: 2, unit: "tsp", item: "salt" },
            ],
          },
          {
            title: "Rice and spices",
            items: [
              { qty: 600, unit: "g", item: "basmati rice" },
              { qty: 1, unit: "tsp", item: "ground cumin" },
              { qty: 1, unit: "tsp", item: "ground cardamom" },
              { qty: 0.5, unit: "tsp", item: "ground cinnamon" },
              { qty: 0.25, unit: "tsp", item: "ground cloves" },
              { qty: 0.5, unit: "tsp", item: "ground black pepper" },
              { qty: 1, unit: "tsp", item: "sugar", note: "optional, caramelised for colour" },
            ],
          },
          {
            title: "Topping",
            items: [
              { qty: 3, unit: "piece", item: "large carrots", note: "cut into thin matchsticks" },
              { qty: 120, unit: "g", item: "raisins", note: "dark or golden" },
              { qty: 2, unit: "tbsp", item: "sugar" },
              { qty: 3, unit: "tbsp", item: "vegetable oil" },
              { qty: 50, unit: "g", item: "slivered almonds" },
              { qty: 30, unit: "g", item: "pistachios", note: "slivered" },
            ],
          },
        ],
        steps: [
          {
            title: "Brown the onions dark",
            text: "Heat the oil in a heavy pot and fry the onions over medium heat for 15 to 20 minutes, until deep brown but not burnt. If using the teaspoon of sugar, add it for the last minute so it caramelises.",
          },
          {
            title: "Make the lamb stock",
            text: "Add the lamb, brown it on all sides, then pour in the water and salt. Cover and simmer gently for 75 to 90 minutes, until the meat is tender.",
          },
          {
            title: "Soak the rice",
            text: "While the lamb cooks, rinse the rice until the water runs clear and leave it to soak in cold water for 30 minutes.",
          },
          {
            title: "Cook the topping",
            text: "Fry the carrots in the 3 tbsp oil for 5 minutes, sprinkle over the sugar and cook until soft and glossy. Add the raisins for the last 2 minutes, until they plump, then set aside; toast the nuts in a dry pan.",
          },
          {
            title: "Measure the stock",
            text: "Lift out the lamb and keep it warm. Strain the stock, measure 750 ml (top up with water if needed) and stir in the ground spices.",
          },
          {
            title: "Parboil and cook the rice",
            text: "Boil the drained rice in salted water for 3 to 4 minutes, then drain. Return it to the pot with the spiced stock, bring to a simmer and cook uncovered until the liquid is absorbed, about 8 minutes.",
          },
          {
            title: "Assemble and steam",
            text: "Bury the lamb in the rice, spread the carrots and raisins on top, and cover with a cloth-wrapped lid. Steam on the lowest heat, or in an oven at 150°C, for 30 to 40 minutes.",
          },
          {
            title: "Serve",
            text: "Mound the rice on a large platter with the lamb inside or on top, and finish with the carrots, raisins and toasted nuts.",
          },
        ],
        tips: [
          "The onions decide the colour of the rice, so take them darker than feels comfortable, stopping short of bitter.",
          "Some Afghan cooks keep the carrot and raisin topping separate in the pot under foil so it stays bright.",
          "Leftover stock makes a good base for shorwa, Afghan meat soup.",
        ],
      },
    },
    {
      id: "turkish-pilav",
      name: "Turkish Rice Pilav",
      native: [{ text: "şehriyeli pirinç pilavı", lang: "Turkish" }],
      country: "TUR",
      place: "Istanbul",
      coords: [28.98, 41.01],
      from: "origin",
      arrival: "1300s–1500s, with Turkic dynasties moving west; a staple of Ottoman kitchens",
      summary: "Buttery rice and toasted vermicelli cooked in stock until every grain is separate. [1]",
      story: [
        "In Turkey, pilav is the everyday companion to stews and grills, made with rice or with cracked wheat as bulgur pilavı. Ottoman cooks ranked it highly, and palace kitchens produced elaborate versions with meat, nuts and dried fruit. The plain version is a test of skill: separate, glossy grains, never mushy.",
        "The method relies on absorption. Rice is soaked, rinsed and fried in butter, often with a handful of toasted şehriye, fine vermicelli, before hot stock goes in. After cooking, the pot rests under a cloth, a stage called demlenmek, so the grains firm up and finish steaming.",
      ],
      signature: [
        "Rice is fried in butter before any liquid is added",
        "Toasted vermicelli adds colour and a nutty note",
        "Cooked by absorption in a measured amount of stock",
        "Rested under a cloth so the grains stay separate",
      ],
      traits: {
        method: "Toasted, then absorbed in stock",
        rice: "Medium-grain baldo or osmancık",
        fat: "Butter",
        protein: "None; a side dish",
        aromatics: "Butter, stock, salt",
        finish: "Loose, separate grains",
      },
      servedWith: ["kuru fasulye (white bean stew)", "grilled köfte", "cacık (yogurt with cucumber)", "turşu pickles"],
      whenEaten: "Daily, beside stews at home and in lokanta canteens",
      sourceRefs: [1],
      recipe: {
        serves: 4,
        prepMinutes: 10,
        cookMinutes: 25,
        restMinutes: 45,
        difficulty: "Easy",
        yield: "1 medium pot",
        ingredients: [
          {
            items: [
              { qty: 300, unit: "g", item: "baldo or osmancık rice", note: "or another medium-grain rice" },
              { qty: 1, unit: "tsp", item: "salt", note: "plus a little for soaking" },
              { qty: 40, unit: "g", item: "butter" },
              { qty: 1, unit: "tbsp", item: "sunflower oil" },
              { qty: 50, unit: "g", item: "fine vermicelli (tel şehriye)" },
              { qty: 550, unit: "ml", item: "hot chicken stock", note: "or water" },
            ],
          },
        ],
        steps: [
          {
            title: "Soak the rice",
            text: "Cover the rice with warm water and a pinch of salt and leave for 30 minutes, then rinse until the water runs clear and drain well.",
          },
          {
            title: "Toast the vermicelli",
            text: "Melt the butter with the oil in a heavy pan and fry the vermicelli over medium heat, stirring constantly, until evenly golden brown.",
          },
          {
            title: "Fry the rice",
            text: "Add the drained rice and stir for 3 to 4 minutes, until the grains turn translucent at the edges and feel light and dry.",
          },
          {
            title: "Add the stock",
            text: "Pour in the hot stock, add the salt and bring to a boil. Cover, reduce the heat to its lowest and cook for 15 minutes without lifting the lid.",
          },
          {
            title: "Rest under a cloth",
            text: "Turn off the heat, lay a clean tea towel or paper towel over the pan, replace the lid and leave for 15 minutes.",
          },
          {
            title: "Fluff and serve",
            text: "Fork through the rice gently from the edges so the grains separate, and serve hot.",
          },
        ],
        tips: [
          "Keep the stock hot when you add it; cold liquid stalls the cooking and makes the grains cloudy.",
          "For a plain pilav, leave out the vermicelli and fry the rice alone in the butter.",
          "Resist stirring once the stock is in, or the rice will turn starchy.",
        ],
      },
    },
    {
      id: "awadhi-biryani",
      name: "Lucknowi (Awadhi) Biryani",
      native: [
        { text: "लखनवी बिरयानी", lang: "Hindi", translit: "lakhnavi biryani" },
        { text: "لکھنوی بریانی", lang: "Urdu", translit: "lakhnavi biryani" },
      ],
      country: "IND",
      place: "Lucknow",
      coords: [80.95, 26.85],
      from: "origin",
      arrival: "1700s–1800s, at the Persian-descended Nawabs' court, drawing on Mughal Delhi",
      summary: "A subtle, fragrant biryani: meat and rice cooked separately in rich stock, then layered and sealed to steam. [10]",
      story: [
        "The Nawabs of Awadh, whose dynasty traced its roots to Nishapur in Iran, ruled from Faizabad and then Lucknow through the 1700s and 1800s, and made their court a centre of refined cooking. Their kitchens favoured delicacy over heat, prizing the aromas of saffron, kewra and rose, and slow cooking in sealed pots, known as dum.",
        "Lucknowi biryani is made in the pakki, or 'cooked', style. Meat is first simmered in a spiced stock, yakhni, and the rice is part-cooked in that same stock, so both arrive in the pot already seasoned. They are layered, sealed and steamed briefly. The result is lighter and more perfumed than many southern biryanis.",
      ],
      signature: [
        "Pakki style: meat and rice are cooked before layering",
        "Rice is boiled in the meat's own spiced stock (yakhni)",
        "Mild heat, perfumed with kewra, rose and saffron",
        "Finished briefly on dum under a dough seal",
      ],
      traits: {
        method: "Pakki: cooked meat, layered, dum",
        rice: "Aged long-grain basmati",
        fat: "Ghee",
        protein: "Goat on the bone",
        aromatics: "Saffron, kewra, mace, cardamom",
        finish: "Saffron streaks, sealed pot",
      },
      servedWith: ["mint or cucumber raita", "shami kebab", "sliced onion and lemon", "shahi tukda for dessert"],
      whenEaten: "Weddings, Eid and special family meals",
      sourceRefs: [10],
      recipe: {
        serves: 6,
        prepMinutes: 40,
        cookMinutes: 120,
        restMinutes: 30,
        difficulty: "Challenging",
        yield: "1 large sealed pot",
        ingredients: [
          {
            title: "Yakhni (spiced stock)",
            items: [
              { qty: 1, unit: "kg", item: "goat or lamb on the bone", note: "in large curry pieces" },
              { qty: 2, unit: "l", item: "water" },
              { qty: 1, unit: "piece", item: "onion", note: "halved" },
              { qty: 6, unit: "clove", item: "garlic" },
              { qty: 30, unit: "g", item: "fresh ginger", note: "sliced" },
              { qty: 1, unit: "tbsp", item: "fennel seeds" },
              { qty: 1, unit: "tbsp", item: "coriander seeds" },
              { qty: 6, unit: "pod", item: "green cardamom" },
              { qty: 2, unit: "pod", item: "black cardamom" },
              { qty: 6, unit: "piece", item: "cloves" },
              { qty: 1, unit: "stick", item: "cinnamon" },
              { qty: 2, unit: "leaf", item: "bay leaves" },
              { qty: 2, unit: "tsp", item: "salt" },
            ],
          },
          {
            title: "Meat masala",
            items: [
              { qty: 60, unit: "g", item: "ghee" },
              { qty: 2, unit: "piece", item: "onions", note: "thinly sliced" },
              { qty: 1, unit: "tbsp", item: "ginger-garlic paste" },
              { qty: 200, unit: "g", item: "plain yogurt", note: "whisked" },
              { qty: 0.5, unit: "tsp", item: "ground white pepper" },
              { qty: 0.5, unit: "tsp", item: "ground green cardamom" },
              { qty: 0.25, unit: "tsp", item: "ground mace" },
              { qty: 0.5, unit: "tsp", item: "Kashmiri chilli powder", note: "for colour, not heat" },
            ],
          },
          {
            title: "Rice and finish",
            items: [
              { qty: 500, unit: "g", item: "aged basmati rice" },
              { qty: 1, unit: "pinch", item: "saffron", note: "soaked in 60 ml warm milk" },
              { qty: 1, unit: "tsp", item: "kewra water" },
              { qty: 1, unit: "tsp", item: "rose water" },
              { qty: 40, unit: "g", item: "ghee", note: "melted" },
              { qty: 150, unit: "g", item: "wholewheat flour (atta)", note: "mixed with water to a stiff dough, for sealing" },
            ],
          },
        ],
        steps: [
          {
            title: "Make the yakhni",
            text: "Tie the fennel, coriander, cardamoms, cloves, cinnamon and bay leaves in muslin. Simmer the meat with the spice bag, onion, garlic, ginger, salt and water for about an hour, until the meat is nearly tender; lift out the meat and strain the stock.",
          },
          {
            title: "Soak the rice",
            text: "Rinse the basmati until the water runs clear and soak for 30 minutes.",
          },
          {
            title: "Cook the meat masala",
            text: "Fry the sliced onions in the ghee until golden and lift out half for layering. Add the meat and ginger-garlic paste, then the yogurt and ground spices, and cook, stirring, until the yogurt is absorbed and the meat glossy; add 200 ml yakhni and simmer until it clings.",
          },
          {
            title: "Cook the rice in stock",
            text: "Bring 1 litre of the remaining yakhni to a boil (top up with water if short), add the drained rice and cook for about 6 minutes, until three-quarters done. Drain, keeping any stock.",
          },
          {
            title: "Layer the pot",
            text: "Spread the rice over the meat in a heavy pot. Scatter the reserved onions, drizzle over the saffron milk, kewra, rose water and melted ghee.",
          },
          {
            title: "Seal the lid",
            text: "Roll the dough into a rope, press it around the rim and push the lid down firmly so no steam can escape.",
          },
          {
            title: "Cook on dum",
            text: "Set the pot on a heavy griddle (tawa) over low heat and cook for 25 minutes.",
          },
          {
            title: "Open and serve",
            text: "Rest for 5 minutes, then break the seal at the table. Serve by sliding a spoon down the side of the pot so each portion has rice and meat.",
          },
        ],
        tips: [
          "Kewra is powerful; measure it, and add less rather than more the first time.",
          "Cooking the rice in the yakhni rather than plain water is what makes the pakki style taste so full.",
          "If you have no tawa, an upturned heavy frying pan under the pot spreads the heat just as well.",
        ],
      },
    },
    {
      id: "hyderabadi-biryani",
      name: "Hyderabadi Kacchi Biryani",
      native: [{ text: "حیدرآبادی بریانی", lang: "Urdu", translit: "hyderabadi biryani" }],
      country: "IND",
      place: "Hyderabad",
      coords: [78.47, 17.36],
      from: "origin",
      arrival: "1500s–1700s, through the Persianate Qutb Shahi sultans, the Mughals and the Nizams",
      summary: "Raw marinated goat layered under part-cooked rice and cooked together beneath a dough seal. [11]",
      story: [
        "Hyderabad was founded in the late 1500s by the Qutb Shahi sultans, a dynasty steeped in Persian culture, and later became the seat of the Asaf Jahi Nizams. Persian, Mughal and Deccani cooking met in its kitchens, and biryani became the city's emblem. Popular stories link the dish to a Mughal general or to the Nizams' cooks, but no single founder can be named.",
        "Its hallmark is the kacchi, or 'raw', method. Meat marinated in yogurt, chilli, mint and fried onions goes into the pot raw, beneath rice that is only partly boiled. Sealed and set over heat, the meat cooks in its own juices while the rice above steams through. Getting both done at the same moment is the cook's real skill.",
      ],
      signature: [
        "Kacchi style: raw marinated meat cooks with the rice",
        "A bold marinade of yogurt, chilli, mint and fried onion",
        "Rice boiled in stages to different doneness for layering",
        "Sealed with dough and cooked on dum",
      ],
      traits: {
        method: "Kacchi: raw meat, layered, dum",
        rice: "Aged long-grain basmati",
        fat: "Ghee and oil",
        protein: "Goat or lamb",
        aromatics: "Mint, fried onion, chilli",
        finish: "Sealed pot, layered colour",
      },
      servedWith: [
        "mirchi ka salan (chilli and peanut curry)",
        "dahi chutney (yogurt raita)",
        "sliced onion and lemon",
        "double ka meetha for dessert",
      ],
      whenEaten: "Weddings, Eid, Ramadan iftar and weekend family meals",
      sourceRefs: [11],
      recipe: {
        serves: 6,
        prepMinutes: 45,
        cookMinutes: 75,
        restMinutes: 250,
        difficulty: "Challenging",
        yield: "1 large sealed pot",
        ingredients: [
          {
            title: "Fried onions (birista)",
            items: [
              { qty: 4, unit: "piece", item: "onions", note: "very thinly sliced" },
              { qty: 200, unit: "ml", item: "neutral oil", note: "for frying" },
            ],
          },
          {
            title: "Marinade",
            items: [
              { qty: 1, unit: "kg", item: "goat or lamb on the bone", note: "in small curry pieces" },
              { qty: 300, unit: "g", item: "plain yogurt" },
              { qty: 2, unit: "tbsp", item: "ginger-garlic paste" },
              { qty: 1, unit: "tbsp", item: "raw papaya paste", note: "optional, to tenderise" },
              { qty: 2, unit: "tsp", item: "red chilli powder" },
              { qty: 0.5, unit: "tsp", item: "ground turmeric" },
              { qty: 2, unit: "tsp", item: "garam masala" },
              { qty: 4, unit: "piece", item: "green chillies", note: "slit" },
              { qty: 1, unit: "bunch", item: "mint leaves", note: "chopped" },
              { qty: 0.5, unit: "bunch", item: "coriander leaves", note: "chopped" },
              { qty: 2, unit: "tbsp", item: "lemon juice" },
              { qty: 2, unit: "tsp", item: "salt" },
            ],
          },
          {
            title: "Rice",
            items: [
              { qty: 750, unit: "g", item: "aged basmati rice" },
              { qty: 4, unit: "l", item: "water" },
              { qty: 3, unit: "tbsp", item: "salt" },
              { qty: 1, unit: "tsp", item: "shahi jeera (black cumin)" },
              { qty: 4, unit: "pod", item: "green cardamom" },
              { qty: 4, unit: "piece", item: "cloves" },
              { qty: 1, unit: "stick", item: "cinnamon" },
              { qty: 2, unit: "leaf", item: "bay leaves" },
            ],
          },
          {
            title: "Finish",
            items: [
              { qty: 5, unit: "tbsp", item: "ghee", note: "melted" },
              { qty: 1, unit: "pinch", item: "saffron", note: "soaked in 80 ml warm milk" },
              { qty: 150, unit: "g", item: "wholewheat flour (atta)", note: "made into a stiff dough, for sealing" },
            ],
          },
        ],
        steps: [
          {
            title: "Fry the onions",
            text: "Fry the sliced onions in the oil over medium heat, stirring, until deep golden and crisp, 15 to 20 minutes. Drain on paper and keep 3 tbsp of the oil.",
          },
          {
            title: "Marinate the meat",
            text: "Mix the meat with all the marinade ingredients, half the fried onions and the 3 tbsp onion oil. Cover and refrigerate for at least 4 hours, or overnight.",
          },
          {
            title: "Prepare the pot",
            text: "Bring the meat to room temperature. Brush a wide, heavy pot with 2 tbsp ghee and spread the meat and all its marinade evenly over the base.",
          },
          {
            title: "Soak and boil the rice in stages",
            text: "Soak the rice for 30 minutes. Bring the water, salt and whole spices to a rolling boil, add the drained rice and, after 3 minutes, lift out a third with a slotted spoon and spread it over the meat. Boil 1 minute more and add the next third, then a final minute and add the rest, which should be about 80 percent cooked.",
          },
          {
            title: "Finish the layers",
            text: "Scatter the remaining fried onions over the rice and drizzle with the saffron milk and remaining ghee.",
          },
          {
            title: "Seal and cook",
            text: "Seal the lid with a rope of dough. Cook on medium-high heat for 8 to 10 minutes, until you hear the meat sizzling and steam builds, then set the pot on a griddle over low heat for 40 to 45 minutes.",
          },
          {
            title: "Rest and serve",
            text: "Leave the pot sealed off the heat for 10 minutes. Open it and serve from the edge, digging down so each plate gets meat from the bottom and rice from the top.",
          },
        ],
        tips: [
          "Use small pieces of young goat or lamb; large or tough cuts will not cook through under the rice.",
          "The rice must be well under-done when layered; it finishes in the steam from the meat.",
          "Listen at the lid during the high-heat stage: a steady sizzle means the marinade has come to a boil underneath.",
          "Mirchi ka salan, a tangy curry of green chillies with peanut and sesame, is the classic partner.",
        ],
      },
    },
    {
      id: "dhaka-kacchi",
      name: "Old Dhaka Kacchi Biryani",
      native: [{ text: "কাচ্চি বিরিয়ানি", lang: "Bengali", translit: "kacchi biriyani" }],
      country: "BGD",
      place: "Old Dhaka",
      coords: [90.41, 23.71],
      from: "awadhi-biryani",
      arrival: "From the 1600s, through Mughal Bengal and later with cooks and tastes from northern India",
      summary: "Goat and potatoes layered raw under fragrant rice, scented with nutmeg, mace and kewra. [2]",
      story: [
        "Dhaka became the Mughal capital of Bengal in the early 1600s, and Persian-influenced court cooking took root in the old city along the Buriganga river. Over the following centuries the city absorbed cooks and tastes from northern India, and its biryani makers developed a style of their own that is now central to Bangladeshi celebrations.",
        "Kacchi biryani in Dhaka is built on khasi, goat meat, marinated and laid raw beneath the rice with halved potatoes that soak up the juices. The seasoning leans aromatic rather than hot: nutmeg, mace, cardamom, kewra and rose water, with dried plums for a gentle tang. To many Bangladeshis, a wedding without kacchi and a glass of borhani, a peppery yogurt drink, feels incomplete.",
      ],
      signature: [
        "Raw marinated goat cooked under the rice (kacchi)",
        "Fried potatoes buried among the meat",
        "Aromatic rather than hot: nutmeg, mace and kewra",
        "Dried plums (aloo bukhara) add gentle sweetness and tang",
        "Served with borhani, a spiced mint and yogurt drink",
      ],
      traits: {
        method: "Kacchi: raw meat, layered, dum",
        rice: "Long-grain basmati",
        fat: "Ghee",
        protein: "Goat (khasi)",
        aromatics: "Nutmeg, mace, kewra, plums",
        finish: "Potatoes in, borhani alongside",
      },
      servedWith: ["borhani (spiced yogurt drink)", "cucumber, onion and green chilli salad", "firni or zarda for dessert"],
      whenEaten: "Weddings, Eid and large family celebrations",
      sourceRefs: [2],
      recipe: {
        serves: 6,
        prepMinutes: 45,
        cookMinutes: 80,
        restMinutes: 250,
        difficulty: "Challenging",
        yield: "1 large sealed pot",
        ingredients: [
          {
            title: "Marinated meat",
            items: [
              { qty: 1, unit: "kg", item: "goat meat on the bone", note: "in large curry pieces" },
              { qty: 250, unit: "g", item: "plain yogurt" },
              { qty: 1, unit: "tbsp", item: "ginger paste" },
              { qty: 1, unit: "tbsp", item: "garlic paste" },
              { qty: 100, unit: "g", item: "crisp fried onions (birista)" },
              { qty: 0.5, unit: "tsp", item: "ground green cardamom" },
              { qty: 0.5, unit: "tsp", item: "ground cinnamon" },
              { qty: 0.25, unit: "tsp", item: "ground nutmeg" },
              { qty: 0.25, unit: "tsp", item: "ground mace" },
              { qty: 0.5, unit: "tsp", item: "ground white pepper" },
              { qty: 0.5, unit: "tsp", item: "red chilli powder" },
              { qty: 1, unit: "tsp", item: "sugar" },
              { qty: 2, unit: "tsp", item: "salt" },
              { qty: 8, unit: "piece", item: "dried plums (aloo bukhara)" },
              { qty: 4, unit: "tbsp", item: "ghee", note: "melted" },
            ],
          },
          {
            title: "Potatoes",
            items: [
              { qty: 4, unit: "piece", item: "medium potatoes", note: "peeled and halved" },
              { qty: 0.25, unit: "tsp", item: "ground turmeric" },
              { qty: 0.5, unit: "tsp", item: "salt" },
              { qty: 100, unit: "ml", item: "neutral oil", note: "for frying" },
            ],
          },
          {
            title: "Rice",
            items: [
              { qty: 600, unit: "g", item: "basmati rice" },
              { qty: 3, unit: "l", item: "water" },
              { qty: 2, unit: "tbsp", item: "salt" },
              { qty: 4, unit: "pod", item: "green cardamom" },
              { qty: 1, unit: "stick", item: "cinnamon" },
              { qty: 2, unit: "leaf", item: "bay leaves" },
            ],
          },
          {
            title: "Finish",
            items: [
              { qty: 60, unit: "g", item: "ghee", note: "melted" },
              { qty: 120, unit: "ml", item: "warm milk" },
              { qty: 1, unit: "pinch", item: "saffron" },
              { qty: 1, unit: "tsp", item: "kewra water" },
              { qty: 1, unit: "tsp", item: "rose water" },
              { qty: 4, unit: "piece", item: "whole green chillies" },
              { qty: 150, unit: "g", item: "plain flour", note: "made into a stiff dough, for sealing" },
            ],
          },
        ],
        steps: [
          {
            title: "Marinate the goat",
            text: "Mix the goat with all the marinade ingredients, crushing the fried onions as you add them. Cover and refrigerate for at least 4 hours.",
          },
          {
            title: "Fry the potatoes",
            text: "Rub the potato halves with turmeric and salt and fry in the oil until golden all over but still firm inside. Drain.",
          },
          {
            title: "Soak the rice",
            text: "Rinse the rice until the water runs clear and soak for 30 minutes.",
          },
          {
            title: "Layer the base",
            text: "Spread the marinated meat over the base of a heavy pot, tuck the potatoes in among the pieces and make sure the plums are spread through.",
          },
          {
            title: "Parboil the rice",
            text: "Boil the water with the salt and whole spices, add the drained rice and cook for 4 to 5 minutes, until about 70 percent done. Drain and spread evenly over the meat.",
          },
          {
            title: "Add the aromatics",
            text: "Warm the saffron in the milk, then pour it over the rice with the kewra, rose water and melted ghee. Lay the green chillies on top.",
          },
          {
            title: "Seal and cook",
            text: "Seal the lid with a rope of dough. Cook on medium-high heat for 10 minutes, then move the pot onto a griddle over low heat for 50 minutes.",
          },
          {
            title: "Rest and serve",
            text: "Rest off the heat for 10 minutes before opening. Serve each plate with meat, a potato half and rice from the top, with cold borhani.",
          },
        ],
        tips: [
          "Fry the potatoes only on the outside; they finish cooking in the meat juices and absorb the spices.",
          "Nutmeg and mace are the backbone of the Dhaka flavour, but a little goes a long way.",
          "Borhani is made by blending yogurt with mint, green chilli, black salt and roasted cumin, then thinning with water.",
        ],
      },
    },
    {
      id: "sindhi-biryani",
      name: "Sindhi Biryani",
      native: [{ text: "سندھی بریانی", lang: "Urdu", translit: "sindhi biryani" }],
      country: "PAK",
      place: "Karachi",
      coords: [67.01, 24.86],
      from: "origin",
      arrival: "From the Mughal era, as Persianate rice cooking reached the lower Indus; a Karachi staple today",
      summary: "A hot, tangy layered biryani with tomatoes, potatoes, green chillies and dried plums. [12]",
      story: [
        "Sindh, on the lower Indus, sat within the Persian-speaking and Mughal world, and its cooks adopted biryani in their own manner. In Karachi, the province's great port city, Sindhi biryani is an everyday favourite, sold from street stalls and restaurants and cooked at home for family meals and weddings alike.",
        "Where Lucknow aims for perfume, Sindhi biryani goes for punch. The meat is cooked into a spicy, sour masala of tomatoes and yogurt, then layered with rice, potatoes, slices of fresh tomato, whole green chillies, mint and dried plums. The plums, aloo bukhara, give bursts of sweet-sour fruit through the pot.",
      ],
      signature: [
        "Tangy masala of tomato, yogurt and dried plums",
        "Plenty of heat from chilli powder and whole green chillies",
        "Potatoes and fresh tomato slices layered in",
        "Cooked meat masala layered with rice, then a brief dum",
      ],
      traits: {
        method: "Cooked masala, layered, brief dum",
        rice: "Long-grain basmati",
        fat: "Oil",
        protein: "Chicken or goat",
        aromatics: "Tomato, plums, green chilli",
        finish: "Tomato, mint and lemon layers",
      },
      servedWith: ["raita", "kachumber (tomato, onion and cucumber salad)", "lemon wedges"],
      whenEaten: "Any day: home lunches, street stalls and weddings",
      sourceRefs: [12],
      recipe: {
        serves: 6,
        prepMinutes: 30,
        cookMinutes: 75,
        restMinutes: 30,
        difficulty: "Medium",
        yield: "1 large pot",
        ingredients: [
          {
            title: "Masala",
            items: [
              { qty: 150, unit: "ml", item: "neutral oil" },
              { qty: 3, unit: "piece", item: "onions", note: "thinly sliced" },
              { qty: 1, unit: "tsp", item: "cumin seeds" },
              { qty: 4, unit: "pod", item: "green cardamom" },
              { qty: 4, unit: "piece", item: "cloves" },
              { qty: 1, unit: "stick", item: "cinnamon" },
              { qty: 2, unit: "leaf", item: "bay leaves" },
              { qty: 2, unit: "tbsp", item: "ginger-garlic paste" },
              { qty: 1, unit: "kg", item: "chicken on the bone", note: "or goat, in curry pieces" },
              { qty: 2, unit: "piece", item: "tomatoes", note: "chopped" },
              { qty: 2, unit: "tsp", item: "red chilli powder" },
              { qty: 0.5, unit: "tsp", item: "ground turmeric" },
              { qty: 1, unit: "tbsp", item: "ground coriander" },
              { qty: 1, unit: "tsp", item: "garam masala" },
              { qty: 2, unit: "tsp", item: "salt" },
              { qty: 250, unit: "g", item: "plain yogurt", note: "whisked" },
              { qty: 3, unit: "piece", item: "medium potatoes", note: "peeled and halved" },
              { qty: 10, unit: "piece", item: "dried plums (aloo bukhara)" },
              { qty: 8, unit: "piece", item: "green chillies", note: "slit" },
            ],
          },
          {
            title: "Rice",
            items: [
              { qty: 600, unit: "g", item: "basmati rice" },
              { qty: 3, unit: "l", item: "water" },
              { qty: 2, unit: "tbsp", item: "salt" },
            ],
          },
          {
            title: "Layering",
            items: [
              { qty: 2, unit: "piece", item: "tomatoes", note: "sliced into rounds" },
              { qty: 1, unit: "bunch", item: "mint leaves" },
              { qty: 0.5, unit: "bunch", item: "coriander leaves", note: "chopped" },
              { qty: 1, unit: "piece", item: "lemon", note: "thinly sliced" },
              { qty: 2, unit: "tbsp", item: "ghee", note: "melted" },
              { qty: 0.5, unit: "tsp", item: "kewra water", note: "optional" },
            ],
          },
        ],
        steps: [
          {
            title: "Soak the rice",
            text: "Rinse the rice until the water runs clear and soak for 30 minutes.",
          },
          {
            title: "Brown the onions",
            text: "Fry the onions in the oil until deep golden, then lift out half and set aside for layering.",
          },
          {
            title: "Build the masala",
            text: "Add the whole spices and ginger-garlic paste to the pan, then the chicken, and fry for 5 minutes. Add the chopped tomatoes and ground spices and cook until the tomatoes collapse, then stir in the yogurt and fry until the oil separates.",
          },
          {
            title: "Add potatoes, plums and chillies",
            text: "Add the potatoes, plums, green chillies and 250 ml water. Cover and simmer for 20 to 25 minutes, until the chicken and potatoes are almost cooked and the sauce is thick.",
          },
          {
            title: "Parboil the rice",
            text: "Boil the drained rice in the salted water for 5 to 6 minutes, until about 80 percent cooked, and drain.",
          },
          {
            title: "Layer",
            text: "In a heavy pot, spread half the rice, then all the masala, the tomato slices, mint, coriander, reserved onions and lemon slices. Cover with the remaining rice and drizzle with the ghee and kewra.",
          },
          {
            title: "Steam and serve",
            text: "Cover tightly and cook on very low heat for 20 minutes. Mix gently from the bottom as you serve so every plate gets some masala.",
          },
        ],
        tips: [
          "The sourness is the point: if your tomatoes are sweet, add a squeeze of lemon to the masala.",
          "Cook the masala until the oil separates; a watery base makes the rice soggy.",
          "Use goat instead of chicken and simmer it about 40 minutes longer before layering.",
        ],
      },
    },
    {
      id: "swahili-pilau",
      name: "Swahili Pilau",
      native: [{ text: "pilau", lang: "Swahili" }],
      country: "TZA",
      place: "Zanzibar (Stone Town)",
      coords: [39.19, -6.16],
      from: "origin",
      arrival: "Over centuries of monsoon trade with Arabian, Persian and Indian merchants",
      summary: "Beef and rice cooked in stock with a dark-toasted mix of cumin, cardamom, cloves and cinnamon. [1]",
      story: [
        "For centuries the monsoon winds carried ships between the Persian Gulf, Arabia, India and the East African coast. Swahili towns such as Zanzibar, Lamu and Mombasa traded in spices, cloth and grain, and absorbed rice dishes from their partners. Zanzibar, ruled by Omani sultans in the 1800s and home to many Indian merchant families, became famous for its clove plantations, and its spices go straight into the pot.",
        "Pilau begins with onions fried until deep brown, then the pilau masala, a mix built on cumin with cardamom, cloves, cinnamon and black pepper. Meat, rice and stock go in to cook by absorption. It is the dish for Eid, weddings and family celebrations across Tanzania and Kenya, served with fresh kachumbari salad on the side.",
      ],
      signature: [
        "Onions browned deeply, colouring the rice",
        "Pilau masala built on cumin, with cloves and cardamom",
        "Cooked by absorption in the meat's own stock",
        "Served with fresh kachumbari salad",
      ],
      traits: {
        method: "Absorbed in meat stock",
        rice: "Long-grain basmati",
        fat: "Oil",
        protein: "Beef or goat",
        aromatics: "Cumin, cardamom, cloves, cinnamon",
        finish: "Browned rice, kachumbari alongside",
      },
      servedWith: ["kachumbari (tomato, onion and chilli salad)", "pili pili chilli sauce", "a simple bean or beef curry"],
      whenEaten: "Eid, weddings and family celebrations",
      sourceRefs: [1],
      recipe: {
        serves: 6,
        prepMinutes: 25,
        cookMinutes: 120,
        restMinutes: 30,
        difficulty: "Easy",
        yield: "1 large pot",
        ingredients: [
          {
            title: "Beef and stock",
            items: [
              { qty: 800, unit: "g", item: "beef chuck on the bone", note: "in 4 cm pieces" },
              { qty: 1.5, unit: "l", item: "water" },
              { qty: 4, unit: "clove", item: "garlic", note: "crushed" },
              { qty: 20, unit: "g", item: "fresh ginger", note: "crushed" },
              { qty: 1.5, unit: "tsp", item: "salt" },
            ],
          },
          {
            title: "Pilau",
            items: [
              { qty: 80, unit: "ml", item: "vegetable oil" },
              { qty: 2, unit: "piece", item: "large onions", note: "thinly sliced" },
              { qty: 1, unit: "tbsp", item: "cumin seeds" },
              { qty: 6, unit: "pod", item: "green cardamom", note: "lightly crushed" },
              { qty: 6, unit: "piece", item: "cloves" },
              { qty: 1, unit: "stick", item: "cinnamon" },
              { qty: 1, unit: "tsp", item: "black peppercorns" },
              { qty: 4, unit: "clove", item: "garlic", note: "crushed" },
              { qty: 15, unit: "g", item: "fresh ginger", note: "grated" },
              { qty: 1, unit: "tsp", item: "ground cumin" },
              { qty: 2, unit: "piece", item: "medium potatoes", note: "peeled and quartered, optional" },
              { qty: 500, unit: "g", item: "basmati rice" },
              { qty: 900, unit: "ml", item: "reserved beef stock" },
              { item: "salt", note: "to taste" },
            ],
          },
        ],
        steps: [
          {
            title: "Cook the beef",
            text: "Simmer the beef with the water, garlic, ginger and salt for 60 to 90 minutes, until tender. Strain, reserving 900 ml of stock.",
          },
          {
            title: "Soak the rice",
            text: "Rinse the rice until the water runs clear and soak for 30 minutes, then drain.",
          },
          {
            title: "Brown the onions",
            text: "Fry the onions in the oil over medium heat for 15 to 20 minutes, until deep brown; this gives pilau its colour.",
          },
          {
            title: "Bloom the spices",
            text: "Add the cumin seeds, cardamom, cloves, cinnamon and peppercorns and fry for a minute, then the garlic, ginger and ground cumin for another minute.",
          },
          {
            title: "Add beef and potatoes",
            text: "Add the beef and potatoes and stir to coat them in the spiced onions.",
          },
          {
            title: "Cook the rice",
            text: "Stir in the rice, pour over the hot stock and taste for salt. Bring to a boil, then cover and cook on low heat for 15 minutes, until the liquid is absorbed.",
          },
          {
            title: "Steam and serve",
            text: "Turn off the heat and leave covered for 10 minutes. Fluff with a fork and serve with kachumbari.",
          },
        ],
        tips: [
          "Toast and grind whole cumin for the best pilau masala; pre-ground spice loses its depth quickly.",
          "Make kachumbari while the rice steams: sliced tomato, red onion, chilli, coriander and lime.",
          "Goat or chicken work in place of beef; reduce the simmering time for chicken to about 30 minutes.",
        ],
      },
    },
    {
      id: "paella-valenciana",
      name: "Paella Valenciana",
      native: [{ text: "paella valenciana", lang: "Valencian" }],
      country: "ESP",
      place: "Valencia",
      coords: [-0.38, 39.47],
      from: "origin",
      arrival: "Rice came with al-Andalus in the Middle Ages; paella itself is 1800s Valencian",
      summary: "A distant cousin: rice cooked in a wide pan in saffron broth with chicken, rabbit and beans until a crust forms. [6]",
      story: [
        "Paella is not a direct descendant of Persian pilaf, and it appears here with that caveat. Rice farming was established in Spain under Muslim rule in al-Andalus, and the lagoon and marshes of the Albufera near Valencia became rice country. Saffron was grown in Moorish Spain too. Over centuries, Valencian farm workers developed rice dishes cooked over wood fires in the fields.",
        "The dish known as paella, named after its wide, shallow pan, took shape in the 1800s. The Valencian version uses chicken, rabbit, flat green beans and large white garrofó beans, with saffron and sometimes rosemary or snails. The rice is spread thin and never stirred, so it absorbs the broth evenly and forms socarrat, a toasted crust on the base.",
      ],
      signature: [
        "Cooked in a wide, shallow pan in a thin layer",
        "Rice is never stirred once the broth is in",
        "Short-grain bomba or senia absorbs plenty of broth",
        "A toasted base layer, socarrat, is prized",
        "Meat and beans, not seafood, in the Valencian original",
      ],
      traits: {
        method: "Absorbed in open pan, unstirred",
        rice: "Short-grain bomba or senia",
        fat: "Olive oil",
        protein: "Chicken and rabbit",
        aromatics: "Saffron, paprika, rosemary",
        finish: "Socarrat crust",
      },
      servedWith: ["green salad", "crusty bread", "local wine"],
      whenEaten: "Sunday lunch, often outdoors, eaten straight from the pan",
      sourceRefs: [6],
      recipe: {
        serves: 6,
        prepMinutes: 25,
        cookMinutes: 75,
        restMinutes: 5,
        difficulty: "Medium",
        yield: "1 paella pan, about 55 cm",
        ingredients: [
          {
            items: [
              { qty: 120, unit: "ml", item: "olive oil" },
              { qty: 1, unit: "kg", item: "chicken thighs and drumsticks", note: "chopped into pieces on the bone" },
              { qty: 600, unit: "g", item: "rabbit", note: "jointed, or more chicken" },
              { qty: 2, unit: "tsp", item: "salt", note: "plus more for the broth" },
              { qty: 250, unit: "g", item: "flat green beans (ferraura)", note: "trimmed and cut in 4 cm lengths" },
              { qty: 200, unit: "g", item: "garrofó beans", note: "fresh or frozen, or cooked butter beans" },
              { qty: 200, unit: "g", item: "ripe tomato", note: "grated, skins discarded" },
              { qty: 1, unit: "tsp", item: "sweet smoked or unsmoked pimentón" },
              { qty: 2, unit: "l", item: "water" },
              { qty: 1, unit: "pinch", item: "saffron threads", note: "lightly toasted and crumbled" },
              { qty: 400, unit: "g", item: "bomba or senia rice" },
              { qty: 1, unit: "sprig", item: "rosemary" },
            ],
          },
        ],
        steps: [
          {
            title: "Brown the meat",
            text: "Heat the oil in the paella pan over a strong, even heat. Sprinkle the salt around the edge, add the chicken and rabbit and brown slowly on all sides for 15 to 20 minutes.",
          },
          {
            title: "Add the beans",
            text: "Add the green beans and garrofó and fry for 5 minutes, stirring.",
          },
          {
            title: "Fry the tomato and pimentón",
            text: "Push everything to the edges, add the grated tomato to the centre and cook for 5 minutes until darker and thick. Stir in the pimentón for just a few seconds so it does not burn.",
          },
          {
            title: "Make the broth in the pan",
            text: "Pour in the water, add the saffron and simmer for 25 to 30 minutes. Taste: the broth should be well salted, and about level with the pan's handle rivets.",
          },
          {
            title: "Add the rice",
            text: "Scatter the rice evenly across the pan, nudge it level with a spoon so it is just submerged, and from now on do not stir.",
          },
          {
            title: "Cook in two stages",
            text: "Cook on high heat for 8 to 10 minutes, then lower to medium-low for another 8 to 10 minutes, until the broth has been absorbed. Lay the rosemary on top for the last few minutes.",
          },
          {
            title: "Make the socarrat",
            text: "Turn the heat up for the final 1 to 2 minutes and listen for a gentle crackle from the base. Stop before it smells burnt.",
          },
          {
            title: "Rest and serve",
            text: "Take the pan off the heat, remove the rosemary, cover with a clean cloth and rest for 5 minutes. Serve from the pan.",
          },
        ],
        tips: [
          "The pan size sets the rice quantity: the rice layer should be no more than about 1.5 cm deep.",
          "Season the broth before the rice goes in; you cannot adjust it evenly afterwards.",
          "On a domestic hob, rotate the pan over two burners so the heat reaches the edges.",
          "Seafood paellas are a separate tradition; the Valencian original is built on meat and beans.",
        ],
      },
    },
  ],
  sources: [
    {
      "title": "Pilaf",
      "publisher": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Pilaf",
      "supports": "Family overview, preparation and regional context; historical accounts are secondary and should be read with their footnotes.",
      "accessed": "2026-10-22"
    },
    {
      "title": "Biryani",
      "publisher": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Biryani",
      "supports": "Debated origins, Mughal court records, Persian name and regional biryani styles.",
      "accessed": "2026-10-22"
    },
    {
      "title": "BERENJ “rice” iii. In Cooking",
      "publisher": "Encyclopaedia Iranica",
      "url": "https://www.iranicaonline.org/articles/berenj-rice/berenj-rice-iii-in-cooking/",
      "supports": "Safavid rice cookbooks and Iranian polow and chelow techniques.",
      "accessed": "2026-10-22"
    },
    {
      "title": "Palov culture and tradition",
      "publisher": "UNESCO",
      "url": "https://ich.unesco.org/en/RL/palov-culture-and-tradition-01166",
      "supports": "Uzbek palov as a social tradition; inscription on the Representative List in 2016.",
      "accessed": "2026-10-22"
    },
    {
      "title": "Oshi Palav, a traditional meal and its social and cultural contexts in Tajikistan",
      "publisher": "UNESCO",
      "url": "https://ich.unesco.org/en/RL/oshi-palav-a-traditional-meal-and-its-social-and-cultural-contexts-in-tajikistan-01191",
      "supports": "Tajik oshi palav and its communal context; inscription in 2016.",
      "accessed": "2026-10-22"
    },
    {
      "title": "Paella",
      "publisher": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Paella",
      "supports": "Valencian rice cooking, the pan’s name and the distinction from Asian pilaf.",
      "accessed": "2026-10-22"
    },
    {
      "title": "Baghali polo",
      "publisher": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Baghali_polo",
      "supports": "Dish description, ingredients and regional preparation; see the article’s footnotes for further reading.",
      "accessed": "2026-10-22"
    },
    {
      "title": "Uzbek plov",
      "publisher": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Uzbek_plov",
      "supports": "Dish description, ingredients and regional preparation; see the article’s footnotes for further reading.",
      "accessed": "2026-10-22"
    },
    {
      "title": "Kabuli pulao",
      "publisher": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Kabuli_pulao",
      "supports": "Dish description, ingredients and regional preparation; see the article’s footnotes for further reading.",
      "accessed": "2026-10-22"
    },
    {
      "title": "Awadhi cuisine",
      "publisher": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Awadhi_cuisine",
      "supports": "Dish description, ingredients and regional preparation; see the article’s footnotes for further reading.",
      "accessed": "2026-10-22"
    },
    {
      "title": "Hyderabadi biryani",
      "publisher": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Hyderabadi_biryani",
      "supports": "Dish description, ingredients and regional preparation; see the article’s footnotes for further reading.",
      "accessed": "2026-10-22"
    },
    {
      "title": "Sindhi biryani",
      "publisher": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Sindhi_biryani",
      "supports": "Dish description, ingredients and regional preparation; see the article’s footnotes for further reading.",
      "accessed": "2026-10-22"
    }
  ],
};
