import type { DishFamily } from '../types';

export const ricePudding: DishFamily = {
  id: "rice-pudding",
  name: "Rice Pudding",
  alsoKnownAs: [
    "Kheer",
    "Payasam",
    "Payesh",
    "Firni",
    "Shir Berenj",
    "Sütlaç",
    "Arroz con Leche",
    "Arroz Doce",
    "Risalamande",
  ],
  tagline: "Rice, milk and patience, sweetened differently everywhere",
  category: "dessert",
  motif: "pudding",
  color: "#BC6788",
  origin: {
    region: "The Indian subcontinent, with early Persian and Arab traditions",
    country: "IND",
    coords: [79.0, 22.5],
    era: "Ancient; rice cooked in milk is named in early Indian texts",
    confidence: "contested",
    confidenceNote:
      "Rice cooked in milk is so simple that it probably arose in more than one rice-growing, dairy-keeping place, so South Asia is the oldest well-documented start rather than a proven single source.",
  },
  intro:
    "Wherever rice and milk have met, someone has cooked them together slowly and added something sweet. The results range from a temple offering in Kerala reduced for hours until it turns pale pink, to a Danish Christmas dessert hiding a single whole almond. Follow the pot across the map and the changes are small but telling: which rice, how much milk, what sweetens it, whether it is baked, chilled or burnt on top, and what scent goes in at the end.",
  history: [
    "Rice pudding is a widespread combination of rice and milk, often sweetened and flavoured with spices. Its simplicity makes a single birthplace difficult to establish. Similar ingredients do not, by themselves, show that every version followed the same historical route. [1]",
    "In South Asia, kheer, payasam and payesh belong to a family of milk puddings sweetened with sugar or jaggery and often scented with cardamom or saffron. Ground-rice phirni makes a smoother pudding, traditionally cooled in small clay bowls. [2, 3]",
    "Other traditions take the same basic ingredients in different directions. Danish risalamande folds whipped cream and almonds into rice pudding and serves it with cherry sauce at Christmas. Such customs matter as much as the ingredients when understanding why a dish belongs to a place. [4]"
  ],
  etymology:
    "Kheer comes from Sanskrit ksheera, milk, and payasam and payesh from Sanskrit payasa, from payas, milk; Persian shir berenj means milk rice, Turkish sütlaç grew from sütlü aş (milky food), and Danish risalamande borrows French riz à l'amande, rice with almonds.",
  timeline: [
    {
      when: "Ancient",
      event:
        "Early Indian texts mention payasa, rice boiled in milk, as an offering and festive food.",
    },
    {
      when: "Medieval",
      event:
        "Rice cooked in milk appears in Arabic cookbooks from Abbasid Baghdad; Persian kitchens make shir berenj and firni.",
    },
    {
      when: "c. 700s–1000s",
      event:
        "Arab-ruled al-Andalus introduces rice growing to Iberia, where rice cooked in milk takes root.",
    },
    {
      when: "1300s–1400s",
      event:
        "English and French recipe collections describe rice cooked in almond milk as a dish for the rich.",
    },
    {
      when: "1500s–1600s",
      event:
        "Firni is served at the Mughal court; Spanish colonists bring rice and dairy cattle to Mexico.",
    },
    {
      when: "Ottoman period",
      event:
        "Sütlaç becomes a staple of Istanbul's muhallebici, the specialist milk-pudding shops.",
    },
    {
      when: "Late 1800s–early 1900s",
      event:
        "Risalamande takes shape in Denmark as a Christmas Eve dessert made from leftover rice porridge.",
    },
  ],
  commonThreads: [
    "Rice cooked slowly in milk, or in water and then milk, until soft and creamy.",
    "Sugar or another sweetener added late, once the rice has softened, so the grains cook properly.",
    "A single warm aromatic: cardamom, cinnamon, rosewater, lemon peel or vanilla.",
    "Tied to celebration and ritual: temple offerings, Eid, birthdays, weddings, Christmas.",
    "Constant stirring and low heat, because milk scorches easily.",
  ],
  divergences: [
    {
      title: "Whole grain or ground rice",
      text: "Most versions keep the grains whole, but firni and its Persian parent grind soaked rice to a paste, giving a smooth, set pudding closer to a custard. Sütlaç adds a little rice flour or starch to thicken the milk around whole grains.",
    },
    {
      title: "How the milk is treated",
      text: "South Asian cooks reduce large volumes of milk for an hour or more until it thickens and caramelises slightly. Iberian and Mexican cooks often cook the rice in water first and then add milk, and Mexican home cooks commonly finish with condensed and evaporated milk.",
    },
    {
      title: "The sweetener",
      text: "Most use white sugar, but Bengal's winter payesh is sweetened with nolen gur, the new season's date-palm jaggery, and Persian shir berenj is often sweetened lightly in the pot and more at the table with jam, honey or syrup.",
    },
    {
      title: "Scent and spice",
      text: "Cardamom, saffron and rose or kewra water mark the South Asian and Persian versions. Cinnamon and lemon peel mark Iberia and Mexico. Denmark uses vanilla, and lets a hot cherry sauce supply the sharpness.",
    },
    {
      title: "Warm, chilled, baked or burnt",
      text: "Kheer and payasam can be eaten warm; firni and sütlaç are served cold. Turkish fırın sütlaç is browned under a fierce oven, and Asturian arroz con leche is finished with sugar caramelised under a hot iron.",
    },
  ],
  compareAxes: [
    { key: "rice", label: "Rice" },
    { key: "liquid", label: "Cooking liquid" },
    { key: "sweetener", label: "Sweetener" },
    { key: "aromatics", label: "Flavourings" },
    { key: "texture", label: "Texture" },
    { key: "served", label: "Served" },
    { key: "finish", label: "Finish" },
  ],
  variants: [
    {
      id: "kheer",
      name: "Kheer",
      native: [{ text: "खीर", lang: "Hindi", translit: "kheer" }],
      country: "IND",
      place: "Delhi and the North Indian plains",
      coords: [77.21, 28.61],
      from: "origin",
      arrival: "Ancient; descended from the payasa of early Indian texts",
      summary: "North India's festive rice pudding, made by simmering a little rice in a lot of milk until it thickens. [2]",
      story: [
        "Kheer is the everyday name for rice pudding across North India and much of Pakistan, and it is cooked for almost every kind of occasion: Diwali and Eid, weddings, temple and gurdwara offerings, or simply a Sunday lunch. The method is unhurried. A small handful of rice goes into a large pan of full-fat milk, which is stirred and reduced until the grains break down and the milk turns creamy and faintly golden.",
        "Families argue over the details. Some prefer fragrant basmati, others short broken grains that cook down further; some add saffron, others only cardamom. Almonds, pistachios and raisins are usual. Kheer is eaten warm in winter and chilled in summer, and it thickens noticeably as it cools, so cooks stop reducing a little before it looks finished.",
      ],
      signature: [
        "A very high ratio of milk to rice, reduced by about a third or more",
        "Cardamom as the main scent, often with saffron",
        "Almonds, pistachios and raisins stirred through",
        "Eaten warm or chilled, depending on season",
      ],
      traits: {
        rice: "Whole basmati or short grains",
        liquid: "Full-fat milk, long reduction",
        sweetener: "White sugar",
        aromatics: "Cardamom, saffron",
        texture: "Creamy, loose, soft grains",
        served: "Warm or chilled",
        finish: "Almonds, pistachios, raisins",
      },
      servedWith: ["Puri at festival meals", "On its own after a thali"],
      whenEaten: "Festivals, weddings, offerings and Sunday lunches",
      sourceRefs: [2],
      recipe: {
        serves: 6,
        prepMinutes: 10,
        cookMinutes: 70,
        restMinutes: 30,
        difficulty: "Easy",
        yield: "About 1.1 litres",
        ingredients: [
          {
            items: [
              { qty: 70, unit: "g", item: "basmati rice", note: "rinsed" },
              { qty: 1.5, unit: "l", item: "full-fat milk" },
              { qty: 90, unit: "g", item: "sugar", note: "adjust to taste" },
              { qty: 5, unit: "pod", item: "green cardamom", note: "seeds crushed" },
              { qty: 1, unit: "pinch", item: "saffron threads", note: "soaked in 1 tbsp warm milk" },
              { qty: 1, unit: "tsp", item: "ghee", note: "optional" },
            ],
          },
          {
            title: "To finish",
            items: [
              { qty: 20, unit: "g", item: "almonds", note: "slivered" },
              { qty: 15, unit: "g", item: "pistachios", note: "slivered" },
              { qty: 20, unit: "g", item: "raisins" },
            ],
          },
        ],
        steps: [
          {
            title: "Soak the rice",
            text: "Rinse the rice until the water runs clear, then soak it in fresh water for 30 minutes. Drain well.",
          },
          {
            title: "Coat the grains",
            text: "Warm the ghee in a heavy-bottomed pan and stir the drained rice in it for a minute. This is optional but helps the grains keep their shape.",
          },
          {
            title: "Bring up the milk",
            text: "Pour in the milk and bring it to a boil over medium heat, stirring so it does not catch. Lower the heat to a steady simmer.",
          },
          {
            title: "Reduce slowly",
            text: "Simmer for 50 to 60 minutes, stirring every few minutes and scraping the bottom and sides. The rice should become very soft and the milk should reduce by roughly a third.",
          },
          {
            title: "Sweeten and scent",
            text: "Stir in the sugar, cardamom and saffron milk, then simmer for 5 to 10 minutes more until the kheer coats the back of a spoon.",
          },
          {
            title: "Add the fruit and nuts",
            text: "Stir in the raisins and most of the nuts. Take the pan off the heat; the kheer will thicken as it cools.",
          },
          {
            title: "Serve",
            text: "Serve warm, or chill for a few hours and loosen with a splash of milk if it has set too firm. Scatter the remaining nuts on top.",
          },
        ],
        tips: [
          "A wide, heavy pan reduces the milk faster and is less likely to scorch than a tall thin one.",
          "Add sugar only once the rice is fully soft, as sugar slows the grains from softening.",
          "Lightly crushing the soaked rice with your fingers before cooking gives a creamier kheer.",
        ],
      },
    },
    {
      id: "paal-payasam",
      name: "Paal Payasam",
      native: [{ text: "പാൽ പായസം", lang: "Malayalam", translit: "paal payasam" }],
      country: "IND",
      place: "Ambalappuzha, Kerala",
      coords: [76.36, 9.38],
      from: "origin",
      arrival: "Ancient; part of South India's temple and feast cooking",
      summary: "Kerala's milk payasam, reduced for hours with just rice and sugar until it turns a soft pinkish beige. [2]",
      story: [
        "Kerala has many payasams, most of them made with jaggery and coconut milk. Paal payasam is the plain milk one, and it is famous in particular at the Sri Krishna temple at Ambalappuzha, where it is prepared as an offering. A popular legend tells of a king who lost a chess game to Krishna in disguise and owed him rice doubled on every square of the board, a debt repaid by serving payasam to pilgrims for ever.",
        "What sets it apart is the length of cooking. Milk and a little water are boiled with rice and sugar for a long time, and the sugar slowly caramelises with the milk, giving the payasam its pale pinkish colour and toffee-like depth with no spice needed. It is a fixture of the Onam sadya, served on the banana leaf towards the end of the meal.",
      ],
      signature: [
        "Very long reduction that colours the milk pinkish beige",
        "Sugar cooked with the milk rather than added at the end",
        "Short-grain Kerala raw rice",
        "Often no spice at all, or only a little cardamom",
      ],
      traits: {
        rice: "Short-grain Kerala raw rice",
        liquid: "Milk and water, hours-long",
        sweetener: "Sugar, cooked into the milk",
        aromatics: "Little or none; optional cardamom",
        texture: "Thick, flowing, soft grains",
        served: "Warm, at the feast",
        finish: "Plain, or a little ghee",
      },
      servedWith: ["The Onam sadya", "Banana chips and pappadam on the same leaf"],
      whenEaten: "Onam, Vishu, weddings and temple offerings",
      sourceRefs: [2],
      recipe: {
        serves: 6,
        prepMinutes: 10,
        cookMinutes: 100,
        restMinutes: 20,
        difficulty: "Medium",
        yield: "About 1.2 litres",
        ingredients: [
          {
            items: [
              { qty: 90, unit: "g", item: "short-grain raw rice (unakkalari)", note: "or any short-grain rice" },
              { qty: 2, unit: "l", item: "full-fat milk" },
              { qty: 500, unit: "ml", item: "water" },
              { qty: 180, unit: "g", item: "sugar" },
              { qty: 1, unit: "tbsp", item: "ghee", note: "optional" },
              { qty: 3, unit: "pod", item: "green cardamom", note: "optional, seeds crushed" },
            ],
          },
        ],
        steps: [
          {
            title: "Soak the rice",
            text: "Wash the rice in several changes of water and soak for 20 minutes. Drain.",
          },
          {
            title: "Start the milk",
            text: "Combine the milk and water in a large heavy pan, preferably wide and thick-based. Bring to a rolling boil over medium-high heat, stirring.",
          },
          {
            title: "Cook the rice",
            text: "Add the rice and keep the milk at a lively simmer, stirring often, for about 30 minutes until the grains are completely soft.",
          },
          {
            title: "Add the sugar early",
            text: "Stir in the sugar now rather than at the end. Continue simmering, stirring and scraping the base every few minutes.",
          },
          {
            title: "Reduce until it colours",
            text: "Keep cooking for another hour or so. The payasam is ready when it has reduced by about half and turned a pale pinkish beige with a gentle toffee aroma.",
          },
          {
            title: "Finish",
            text: "Stir in the ghee and cardamom if using. Take off the heat while it is still slightly thinner than you want, as it thickens on standing.",
          },
        ],
        tips: [
          "The colour comes from time, not from any added ingredient, so resist the urge to rush the heat; a scorched base will taste bitter.",
          "Many Kerala households use a pressure cooker: cook the milk, water, rice and sugar on the lowest heat after the first whistle for about 40 minutes, then reduce in the open pan.",
          "Water in the pot at the start stops the milk from catching during the long boil.",
        ],
      },
    },
    {
      id: "payesh",
      name: "Payesh",
      native: [{ text: "পায়েস", lang: "Bengali", translit: "payesh" }],
      country: "BGD",
      place: "Dhaka",
      coords: [90.41, 23.81],
      from: "origin",
      arrival: "Ancient; Bengal's own form of payasa",
      summary: "Bengal's rice pudding, made with small fragrant grains and, in winter, sweetened with new date-palm jaggery. [2]",
      story: [
        "In Bangladesh and West Bengal, payesh is the dish that marks a moment: a child's first rice, a birthday, the arrival of a guest. It is made with short, fragrant rice such as kalijira or chinigura in Bangladesh, or gobindobhog across the border, whose grains are tiny and break down into a creamy body while still holding their perfume.",
        "In winter it changes character. When the date palms are tapped and boiled down into nolen gur, the new season's jaggery, cooks use it in place of sugar, giving payesh a light brown colour and a smoky caramel flavour. The gur must be stirred in off the heat, because it can curdle hot milk. Bay leaf and cardamom are the usual aromatics.",
      ],
      signature: [
        "Small aromatic rice such as kalijira or gobindobhog",
        "Nolen gur, new date-palm jaggery, in winter",
        "Jaggery added off the heat to keep the milk from splitting",
        "Bay leaf simmered with the milk",
      ],
      traits: {
        rice: "Tiny aromatic kalijira or gobindobhog",
        liquid: "Full-fat milk, long reduction",
        sweetener: "Date-palm jaggery or sugar",
        aromatics: "Bay leaf, cardamom",
        texture: "Creamy, grains just holding",
        served: "Warm or room temperature",
        finish: "Raisins, cashews",
      },
      servedWith: ["Luchi at celebration meals", "Pitha in the winter season"],
      whenEaten: "Birthdays, first-rice ceremonies and winter",
      sourceRefs: [2],
      recipe: {
        serves: 6,
        prepMinutes: 10,
        cookMinutes: 60,
        restMinutes: 20,
        difficulty: "Easy",
        yield: "About 1 litre",
        ingredients: [
          {
            items: [
              { qty: 60, unit: "g", item: "kalijira or gobindobhog rice", note: "or another small aromatic rice" },
              { qty: 1, unit: "tsp", item: "ghee" },
              { qty: 1.5, unit: "l", item: "full-fat milk" },
              { qty: 2, unit: "leaf", item: "bay leaf (tej pata)" },
              { qty: 4, unit: "pod", item: "green cardamom", note: "lightly cracked" },
              { qty: 150, unit: "g", item: "nolen gur (date-palm jaggery)", note: "or 100 g sugar" },
              { qty: 1, unit: "pinch", item: "salt" },
            ],
          },
          {
            title: "To finish",
            items: [
              { qty: 20, unit: "g", item: "raisins" },
              { qty: 20, unit: "g", item: "cashews", note: "halved" },
            ],
          },
        ],
        steps: [
          {
            title: "Wash and coat the rice",
            text: "Wash the rice, soak for 20 minutes and drain well. Rub it with the ghee so the grains are lightly coated.",
          },
          {
            title: "Boil the milk",
            text: "Bring the milk to a boil in a heavy pan with the bay leaves and cardamom, then lower to a simmer and cook for 10 minutes, stirring.",
          },
          {
            title: "Cook the rice",
            text: "Add the rice and salt and simmer gently for 35 to 40 minutes, stirring and scraping often, until the grains are soft and the milk has thickened.",
          },
          {
            title: "Add raisins and nuts",
            text: "Stir in the raisins and cashews and cook for 2 minutes more.",
          },
          {
            title: "Cool slightly",
            text: "Take the pan off the heat and let it stand for 5 minutes. If using sugar instead of gur, you can stir it in on the heat for the last 5 minutes instead.",
          },
          {
            title: "Stir in the gur",
            text: "Crumble or grate the jaggery and stir it in off the heat until fully dissolved. Taste and adjust the sweetness.",
          },
        ],
        tips: [
          "Adding jaggery to boiling milk can make it curdle; letting the payesh cool for a few minutes first prevents this.",
          "Nolen gur is sold in soft blocks and as runny jhola gur in jars; the liquid kind dissolves fastest.",
          "Payesh thickens a lot when cold, so stop cooking while it is still pourable.",
        ],
      },
    },
    {
      id: "shir-berenj",
      name: "Shir Berenj",
      native: [{ text: "شیربرنج", lang: "Persian", translit: "shir berenj" }],
      country: "IRN",
      place: "Tehran",
      coords: [51.39, 35.69],
      from: "origin",
      arrival: "By the medieval period, as rice cooking spread through Persia",
      summary: "Persia's milk rice, gently sweet and scented with rosewater, often sweetened further at the table. [1]",
      story: [
        "Shir berenj simply means milk rice, and it is the plainer of Iran's rice puddings. Rice is cooked in water until soft, then simmered in milk with rosewater and a little cardamom. Many cooks keep it only lightly sweet so that each person can add sugar, honey, grape syrup or a spoonful of jam at the table.",
        "It sits beside sholeh zard, Iran's better-known saffron rice pudding, which is a different dish: sholeh zard is cooked in water with sugar, saffron and rosewater and contains no milk at all. Both are made as nazri, food cooked and given away in fulfilment of a vow, especially during Muharram.",
      ],
      signature: [
        "Rice softened in water first, then simmered in milk",
        "Rosewater as the defining scent",
        "Lightly sweetened, with more added at the table",
        "Served cool, often with jam, honey or syrup",
      ],
      traits: {
        rice: "Short or medium grain",
        liquid: "Water first, then milk",
        sweetener: "Light sugar, more at table",
        aromatics: "Rosewater, cardamom",
        texture: "Soft, thick, spoonable",
        served: "Cool or chilled",
        finish: "Jam, honey or syrup; pistachio",
      },
      servedWith: ["Rose-petal or sour-cherry jam", "Honey or grape syrup (shireh)"],
      whenEaten: "Family meals and vow offerings (nazri)",
      sourceRefs: [1],
      recipe: {
        serves: 6,
        prepMinutes: 10,
        cookMinutes: 55,
        restMinutes: 150,
        difficulty: "Easy",
        yield: "About 1.1 litres",
        ingredients: [
          {
            items: [
              { qty: 120, unit: "g", item: "short or medium-grain rice", note: "rinsed" },
              { qty: 500, unit: "ml", item: "water" },
              { qty: 1, unit: "pinch", item: "salt" },
              { qty: 1, unit: "l", item: "full-fat milk" },
              { qty: 50, unit: "g", item: "sugar", note: "or more to taste" },
              { qty: 0.5, unit: "tsp", item: "ground cardamom" },
              { qty: 2, unit: "tbsp", item: "rosewater" },
            ],
          },
          {
            title: "To serve",
            items: [
              { item: "rose-petal or sour-cherry jam, honey or grape syrup" },
              { qty: 1, unit: "tbsp", item: "pistachios", note: "slivered" },
            ],
          },
        ],
        steps: [
          {
            title: "Soak the rice",
            text: "Soak the rinsed rice in cold water for 30 minutes, then drain.",
          },
          {
            title: "Cook in water",
            text: "Put the rice, water and salt in a heavy pan and simmer, covered, for about 15 minutes until the water is mostly absorbed and the rice is soft.",
          },
          {
            title: "Add the milk",
            text: "Pour in the milk and bring back to a simmer. Cook uncovered over low heat for 30 to 35 minutes, stirring often, until thick and creamy.",
          },
          {
            title: "Sweeten lightly",
            text: "Stir in the sugar and cardamom and cook for 5 minutes more.",
          },
          {
            title: "Add the rosewater",
            text: "Take the pan off the heat and stir in the rosewater; adding it last keeps its scent bright.",
          },
          {
            title: "Chill and serve",
            text: "Pour into bowls and chill for at least 2 hours. Serve with jam, honey or syrup on top and a few pistachios.",
          },
        ],
        tips: [
          "Rosewater strengths vary widely; add half, taste, then add more.",
          "Keeping the pudding only lightly sweet lets the jam or syrup do the work.",
          "If it sets too firm in the fridge, stir in a little cold milk before serving.",
        ],
      },
    },
    {
      id: "firni",
      name: "Firni",
      native: [{ text: "فرنی", lang: "Urdu", translit: "firni" }],
      country: "PAK",
      place: "Lahore",
      coords: [74.34, 31.55],
      from: "shir-berenj",
      arrival: "1500s–1600s, with Persian cooking at the Mughal court",
      summary: "A smooth, set pudding of ground rice and milk, chilled in unglazed clay bowls and scented with kewra or rose. [3]",
      story: [
        "Firni takes its name from Persian fereni, and it came into the subcontinent's grand kitchens with the Persian-influenced cooking of the Mughal court. Instead of whole grains, soaked rice is ground to a coarse paste and cooked in milk, so the pudding sets into something closer to a soft custard, cut through with a fine, slightly grainy texture.",
        "In Lahore, Karachi and across North India, firni is sold and served in shikoras, small unglazed earthenware bowls. Soaked before filling, the clay draws a little moisture from the surface as the firni chills and lends a faint earthy smell. It is a favourite for Eid and for iftar during Ramadan, decorated with pistachios and sometimes edible silver leaf.",
      ],
      signature: [
        "Soaked rice ground to a coarse paste, not left whole",
        "Sets firm when chilled, like a soft custard",
        "Set and served in unglazed clay bowls (shikoras)",
        "Scented with kewra or rosewater",
      ],
      traits: {
        rice: "Soaked basmati, coarsely ground",
        liquid: "Full-fat milk, short cook",
        sweetener: "White sugar",
        aromatics: "Kewra or rosewater, cardamom",
        texture: "Smooth, set, finely grainy",
        served: "Chilled, in clay bowls",
        finish: "Pistachios, silver leaf",
      },
      servedWith: ["Eid lunches", "Iftar spreads"],
      whenEaten: "Eid, Ramadan evenings, weddings",
      sourceRefs: [3],
      recipe: {
        serves: 6,
        prepMinutes: 15,
        cookMinutes: 25,
        restMinutes: 240,
        difficulty: "Easy",
        yield: "6 small clay bowls",
        ingredients: [
          {
            items: [
              { qty: 60, unit: "g", item: "basmati rice" },
              { qty: 60, unit: "ml", item: "water", note: "for grinding" },
              { qty: 1, unit: "l", item: "full-fat milk" },
              { qty: 100, unit: "g", item: "sugar" },
              { qty: 0.5, unit: "tsp", item: "ground cardamom" },
              { qty: 1, unit: "pinch", item: "saffron threads", note: "optional" },
              { qty: 0.5, unit: "tsp", item: "kewra water", note: "or 1 tsp rosewater" },
            ],
          },
          {
            title: "To finish",
            items: [
              { qty: 2, unit: "tbsp", item: "pistachios", note: "finely chopped" },
              { qty: 1, unit: "tbsp", item: "almonds", note: "slivered" },
              { item: "edible silver leaf (varq)", note: "optional" },
            ],
          },
        ],
        steps: [
          {
            title: "Soak rice and bowls",
            text: "Soak the rice in water for 1 hour. At the same time, submerge the clay bowls in cold water so they will not crack or soak up too much pudding.",
          },
          {
            title: "Grind the rice",
            text: "Drain the rice and blend it with the 60 ml water to a coarse paste, like fine semolina. Do not grind it completely smooth.",
          },
          {
            title: "Heat the milk",
            text: "Bring the milk to a gentle boil in a heavy pan. Loosen the rice paste with a ladle of the hot milk.",
          },
          {
            title: "Cook the paste",
            text: "Pour the paste into the pan in a thin stream, whisking constantly to prevent lumps. Cook over low heat, stirring without stopping, for 12 to 15 minutes until it thickly coats a spoon.",
          },
          {
            title: "Sweeten",
            text: "Add the sugar, cardamom and saffron and cook for 3 to 5 minutes more. Off the heat, stir in the kewra water.",
          },
          {
            title: "Set in clay",
            text: "Drain the clay bowls, fill them with the warm firni and scatter the nuts on top. Cool, then chill for at least 3 hours until set.",
          },
          {
            title: "Serve cold",
            text: "Lay silver leaf on top just before serving, if using, and eat straight from the bowls.",
          },
        ],
        tips: [
          "Stir constantly once the paste goes in; ground rice catches and lumps far faster than whole grains.",
          "Firni should still be pourable when hot; it sets firmly as it chills.",
          "Small glass or ceramic ramekins work if you cannot find shikoras, though you lose the clay aroma.",
        ],
      },
    },
    {
      id: "sutlac",
      name: "Fırın Sütlaç",
      country: "TUR",
      place: "Istanbul",
      coords: [28.98, 41.01],
      from: "shir-berenj",
      arrival: "Medieval to Ottoman era, from Persian and Arab kitchens",
      summary: "Turkey's rice pudding, thickened lightly with rice flour and baked in a fierce oven until its top is spotted brown. [5]",
      story: [
        "Sütlaç is one of the standards of the muhallebici, the Turkish milk-pudding shop, alongside muhallebi and kazandibi. Its name grew from sütlü aş, milky food, and its roots run back through the Ottoman kitchen to the Persian and Arab rice dishes that came before it.",
        "The best-known form is fırın sütlaç, oven sütlaç. The rice is cooked in water and then milk, thickened with a spoonful of rice flour or starch, poured into small clay or ovenproof dishes and put under intense top heat until the surface blisters and browns. Served cold, it contrasts a slightly smoky, skin-like top with a cool, soft pudding beneath.",
      ],
      signature: [
        "Browned, blistered top from a very hot oven",
        "A little rice flour or starch for a smooth body",
        "Rice cooked in water before the milk goes in",
        "Served cold in individual dishes",
      ],
      traits: {
        rice: "Short grain, plus rice flour",
        liquid: "Water first, then milk",
        sweetener: "White sugar",
        aromatics: "Plain milk; optional vanilla",
        texture: "Smooth, soft, skin on top",
        served: "Chilled, in clay dishes",
        finish: "Baked brown top, cinnamon",
      },
      servedWith: ["Turkish tea", "A dusting of cinnamon or hazelnuts"],
      whenEaten: "Afternoons at pudding shops; family dessert",
      sourceRefs: [5],
      recipe: {
        serves: 6,
        prepMinutes: 10,
        cookMinutes: 50,
        restMinutes: 180,
        difficulty: "Medium",
        yield: "6 individual dishes",
        ingredients: [
          {
            items: [
              { qty: 80, unit: "g", item: "short-grain rice (such as baldo)", note: "rinsed" },
              { qty: 400, unit: "ml", item: "water" },
              { qty: 1, unit: "l", item: "full-fat milk" },
              { qty: 150, unit: "g", item: "sugar" },
              { qty: 3, unit: "tbsp", item: "rice flour", note: "or cornflour" },
              { qty: 100, unit: "ml", item: "cold milk", note: "for slaking the flour" },
              { qty: 1, unit: "tsp", item: "vanilla extract", note: "optional" },
            ],
          },
          {
            title: "To serve",
            items: [{ item: "ground cinnamon", note: "optional" }],
          },
        ],
        steps: [
          {
            title: "Soften the rice",
            text: "Simmer the rice in the water for about 15 minutes, until the water is nearly absorbed and the grains are soft.",
          },
          {
            title: "Add the milk",
            text: "Pour in the litre of milk and bring to a simmer, stirring. Cook gently for 10 minutes.",
          },
          {
            title: "Thicken",
            text: "Whisk the rice flour into the 100 ml cold milk until smooth. Stir it into the pan with the sugar and cook, stirring constantly, for 8 to 10 minutes until it thickly coats a spoon. Add the vanilla if using.",
          },
          {
            title: "Fill the dishes",
            text: "Heat the oven grill or top element to its highest setting. Ladle the sütlaç into small clay or ovenproof dishes.",
          },
          {
            title: "Bake in a water bath",
            text: "Set the dishes in a deep tray and pour cold water around them to come halfway up. Place on the top shelf, close to the heat.",
          },
          {
            title: "Brown the tops",
            text: "Bake for 10 to 15 minutes until the surfaces are blistered with dark brown spots. Watch closely towards the end.",
          },
          {
            title: "Chill",
            text: "Cool, then refrigerate for at least 3 hours. Serve cold, with cinnamon if you like.",
          },
        ],
        tips: [
          "The cold water bath keeps the pudding underneath from boiling while the top browns.",
          "If your oven has no top element, a kitchen blowtorch can brown the surface after the dishes have set slightly.",
          "Keep stirring once the starch goes in, or the base will catch.",
        ],
      },
    },
    {
      id: "arroz-con-leche-asturias",
      name: "Arroz con Leche (Asturias)",
      country: "ESP",
      place: "Asturias",
      coords: [-5.84, 43.36],
      from: "shir-berenj",
      arrival: "Medieval; rice came to Iberia with Arab rule in al-Andalus",
      summary: "Northern Spain's slow, very creamy rice pudding with lemon and cinnamon, finished with a crust of burnt sugar. [1]",
      story: [
        "Rice cooked with milk is made all over Spain, but green, dairy-rich Asturias treats it as a regional emblem. The Asturian version uses short-grain rice and a generous quantity of milk, cooked slowly for an hour or more with lemon peel and a cinnamon stick until the grains melt into a loose, creamy pudding.",
        "Its signature is the requemado. Sugar is scattered over the cold pudding and caramelised with a hot iron disc (a quemador) held just above the surface, leaving a brittle, slightly bitter crust much like that of crema catalana. Many families add a knob of butter at the end, and some still cook it in a big pot for Sunday lunch or village festivals.",
      ],
      signature: [
        "A long, slow cook with plenty of milk",
        "Lemon peel and cinnamon stick in the pot",
        "Sugar added late, sometimes with butter",
        "Burnt-sugar crust made with a hot iron",
      ],
      traits: {
        rice: "Short-grain Spanish rice",
        liquid: "Whole milk only, slow cook",
        sweetener: "White sugar",
        aromatics: "Lemon peel, cinnamon stick",
        texture: "Very creamy, loose",
        served: "Cool or room temperature",
        finish: "Caramelised sugar crust",
      },
      servedWith: ["Sunday lunch", "Local cider at festival meals"],
      whenEaten: "Sunday lunches and local festivals",
      sourceRefs: [1],
      recipe: {
        serves: 8,
        prepMinutes: 10,
        cookMinutes: 90,
        restMinutes: 120,
        difficulty: "Medium",
        yield: "About 1.6 litres",
        ingredients: [
          {
            items: [
              { qty: 160, unit: "g", item: "short-grain rice (such as bomba or another Spanish round rice)" },
              { qty: 2, unit: "l", item: "whole milk" },
              { qty: 1, unit: "piece", item: "lemon peel", note: "one long strip, no white pith" },
              { qty: 1, unit: "stick", item: "cinnamon" },
              { qty: 1, unit: "pinch", item: "salt" },
              { qty: 170, unit: "g", item: "sugar" },
              { qty: 20, unit: "g", item: "butter", note: "optional" },
            ],
          },
          {
            title: "For the crust",
            items: [{ qty: 4, unit: "tbsp", item: "sugar" }],
          },
        ],
        steps: [
          {
            title: "Infuse the milk",
            text: "Bring the milk to a simmer in a large heavy pot with the lemon peel, cinnamon stick and salt.",
          },
          {
            title: "Add the rice",
            text: "Add the rice without rinsing it, as its surface starch helps the creaminess. Return to a gentle simmer.",
          },
          {
            title: "Cook slowly",
            text: "Cook over low heat for about 75 minutes, stirring every few minutes and more often towards the end, until the rice is very soft and the milk has thickened to a loose cream.",
          },
          {
            title: "Sweeten",
            text: "Remove the lemon peel and cinnamon. Stir in the sugar and the butter, if using, and cook for 10 minutes more.",
          },
          {
            title: "Cool",
            text: "Pour into a wide earthenware dish or individual bowls and leave to cool completely, at least 2 hours.",
          },
          {
            title: "Burn the sugar",
            text: "Just before serving, scatter the sugar in a thin, even layer and caramelise it with a heated iron or a kitchen blowtorch until dark amber.",
          },
        ],
        tips: [
          "Do not rinse the rice; the starch that would wash away is what makes it creamy.",
          "It should look slightly too runny when you take it off the heat, as it thickens considerably as it cools.",
          "Caramelise only at the last moment, or the crust will soften from the moisture underneath.",
        ],
      },
    },
    {
      id: "arroz-doce",
      name: "Arroz Doce",
      country: "PRT",
      place: "Minho, northern Portugal",
      coords: [-8.43, 41.55],
      from: "arroz-con-leche-asturias",
      arrival: "Medieval; part of the shared Iberian inheritance from al-Andalus",
      summary: "Portugal's rice pudding, enriched with egg yolks and decorated with cinnamon in lattices, initials or patterns. [1]",
      story: [
        "Arroz doce, sweet rice, is the dessert of Portuguese celebrations: Christmas, weddings, baptisms and village festivals, especially in the north. It shares its Iberian roots with Spanish arroz con leche, but Portugal's long love of egg-yolk sweets shows in the finish, where yolks are stirred in off the heat for a richer, golden pudding.",
        "It is usually cooked with Portugal's own carolino rice, simmered first in water with lemon peel and a little salt, then in milk. The pudding is poured onto a wide platter, and once it has set a little the top is decorated with ground cinnamon, sifted in criss-cross lines or used to spell out a name or a date for the occasion.",
      ],
      signature: [
        "Egg yolks stirred in at the end",
        "Rice cooked in water first, then milk",
        "Spread on a platter rather than bowls",
        "Cinnamon dusted in lattices, names or patterns",
      ],
      traits: {
        rice: "Carolino or medium grain",
        liquid: "Water first, then milk",
        sweetener: "White sugar",
        aromatics: "Lemon peel, cinnamon",
        texture: "Rich, dense, yolky",
        served: "Room temperature or cool",
        finish: "Cinnamon lattice or lettering",
      },
      servedWith: ["Christmas sweets such as filhoses", "Festival lunches"],
      whenEaten: "Christmas, weddings, baptisms and festivals",
      sourceRefs: [1],
      recipe: {
        serves: 8,
        prepMinutes: 10,
        cookMinutes: 45,
        restMinutes: 60,
        difficulty: "Easy",
        yield: "1 large platter",
        ingredients: [
          {
            items: [
              { qty: 200, unit: "g", item: "carolino rice", note: "or another medium-grain rice" },
              { qty: 500, unit: "ml", item: "water" },
              { qty: 1, unit: "piece", item: "lemon peel", note: "one long strip, no white pith" },
              { qty: 1, unit: "stick", item: "cinnamon" },
              { qty: 1, unit: "pinch", item: "salt" },
              { qty: 1, unit: "l", item: "whole milk", note: "warmed" },
              { qty: 200, unit: "g", item: "sugar" },
              { qty: 4, unit: "piece", item: "egg yolks" },
            ],
          },
          {
            title: "To decorate",
            items: [{ qty: 2, unit: "tsp", item: "ground cinnamon" }],
          },
        ],
        steps: [
          {
            title: "Cook the rice in water",
            text: "Put the rice, water, lemon peel, cinnamon stick and salt in a large pan and simmer for about 10 minutes, until the water is almost absorbed.",
          },
          {
            title: "Add the milk gradually",
            text: "Add the warm milk a ladle at a time, stirring, and let each addition be mostly absorbed before adding the next. This takes about 25 minutes.",
          },
          {
            title: "Sweeten",
            text: "When the rice is very soft and creamy, stir in the sugar and cook for 5 minutes. Remove the lemon peel and cinnamon stick.",
          },
          {
            title: "Temper the yolks",
            text: "Beat the egg yolks in a bowl and whisk in a ladle of the hot rice to warm them gently.",
          },
          {
            title: "Enrich off the heat",
            text: "Take the pan off the heat and stir the yolk mixture in quickly. Return to the lowest heat for 1 to 2 minutes, stirring, without letting it boil.",
          },
          {
            title: "Spread and decorate",
            text: "Pour onto a wide serving platter and smooth the top. Once a skin forms, sift cinnamon over it in a lattice, or through a paper stencil to make letters or patterns.",
          },
        ],
        tips: [
          "Never let the pudding boil after the yolks go in, or they will scramble.",
          "Adding the milk gradually, as for a risotto, gives a creamier result than pouring it in at once.",
          "For crisp cinnamon lines, wait until the surface has firmed slightly and hold the sieve close to it.",
        ],
      },
    },
    {
      id: "arroz-con-leche-mexico",
      name: "Arroz con Leche (Mexico)",
      country: "MEX",
      place: "Mexico City",
      coords: [-99.13, 19.43],
      from: "arroz-con-leche-asturias",
      arrival: "1500s onward, with Spanish colonists, rice and dairy cattle",
      summary: "Mexico's home-style rice pudding, cooked with canela and finished with condensed and evaporated milk and raisins. [1]",
      story: [
        "Rice, cattle and sugar all reached Mexico with Spanish colonisation in the 1500s, and arroz con leche followed. Over the centuries it became one of the country's most familiar home desserts, sold by the cup in markets and made in family kitchens for no particular reason.",
        "Mexican cooks use canela, the soft, flaky Ceylon cinnamon that is far more common in Mexico than the harder cassia, simmering whole sticks with the rice. Many modern home recipes cook the rice in water first and then finish it with fresh, evaporated and sweetened condensed milk, which gives a rich, caramel-sweet result. Raisins are common, and it is eaten warm or cold.",
      ],
      signature: [
        "Canela (Ceylon cinnamon) sticks simmered in the pot",
        "Condensed and evaporated milk alongside fresh milk",
        "Long-grain rice cooked in water first",
        "Raisins and a dusting of ground canela",
      ],
      traits: {
        rice: "Long-grain white rice",
        liquid: "Water, milk, tinned milks",
        sweetener: "Condensed milk, some sugar",
        aromatics: "Canela, vanilla",
        texture: "Creamy, sweet, distinct grains",
        served: "Warm or cold",
        finish: "Raisins, ground canela",
      },
      servedWith: ["A cup of coffee or atole", "On its own as an afternoon sweet"],
      whenEaten: "Any day; markets, home kitchens, celebrations",
      sourceRefs: [1],
      recipe: {
        serves: 6,
        prepMinutes: 10,
        cookMinutes: 40,
        restMinutes: 20,
        difficulty: "Easy",
        yield: "About 1.3 litres",
        ingredients: [
          {
            items: [
              { qty: 150, unit: "g", item: "long-grain white rice" },
              { qty: 750, unit: "ml", item: "water" },
              { qty: 1, unit: "stick", item: "canela (Ceylon cinnamon)", note: "about 10 cm" },
              { qty: 1, unit: "pinch", item: "salt" },
              { qty: 750, unit: "ml", item: "whole milk" },
              { qty: 360, unit: "ml", item: "evaporated milk" },
              { qty: 200, unit: "g", item: "sweetened condensed milk" },
              { qty: 2, unit: "tbsp", item: "sugar", note: "optional, to taste" },
              { qty: 1, unit: "tsp", item: "vanilla extract" },
              { qty: 50, unit: "g", item: "raisins" },
            ],
          },
          {
            title: "To serve",
            items: [{ item: "ground canela" }],
          },
        ],
        steps: [
          {
            title: "Soak the rice",
            text: "Rinse the rice and soak it in hot water for 15 minutes, then drain.",
          },
          {
            title: "Cook with canela",
            text: "Bring the water to a boil with the canela and salt. Add the rice, lower the heat and simmer, partly covered, for about 15 minutes until the water is almost absorbed.",
          },
          {
            title: "Add the fresh milk",
            text: "Pour in the whole milk and simmer, stirring often, for 10 minutes.",
          },
          {
            title: "Add the tinned milks",
            text: "Stir in the evaporated and condensed milk and keep simmering, stirring, for 10 to 12 minutes until thick and creamy. Taste and add sugar if needed.",
          },
          {
            title: "Finish",
            text: "Remove the canela stick. Stir in the vanilla and raisins and cook for 2 minutes more.",
          },
          {
            title: "Serve",
            text: "Serve warm, or cool and chill. Dust with ground canela before serving.",
          },
        ],
        tips: [
          "Ceylon cinnamon is softer and more floral than cassia; if using cassia, use half a stick.",
          "Condensed milk scorches easily, so lower the heat once it goes in.",
          "Some cooks add a strip of lime or orange peel with the canela for brightness.",
        ],
      },
    },
    {
      id: "risalamande",
      name: "Risalamande",
      country: "DNK",
      place: "Copenhagen",
      coords: [12.57, 55.68],
      from: "arroz-con-leche-asturias",
      arrival:
        "Rice reached northern Europe through medieval Mediterranean trade; this dessert dates from around 1900",
      summary: "Denmark's Christmas Eve dessert: cold rice porridge folded with whipped cream, vanilla and almonds, under hot cherry sauce. [4]",
      story: [
        "Rice was long an expensive import in Scandinavia, and risengrød, rice porridge cooked in milk, became a treat associated with Christmas. Risalamande, its richer descendant, took shape around the late 1800s and early 1900s, borrowing a French-sounding name (riz à l'amande) though it is thoroughly Danish. Leftover porridge is chilled and folded with whipped cream, vanilla, sugar and chopped almonds.",
        "It is served on Christmas Eve with a warm cherry sauce. Before it goes to the table, one whole blanched almond is hidden in the bowl, and whoever finds it wins a small prize, the mandelgave. Finders often keep the almond hidden in their cheek until everyone has finished, so the others keep eating.",
      ],
      signature: [
        "Made from cold rice porridge, not cooked as a dessert",
        "Whipped cream folded through for a light, mousse-like body",
        "Chopped almonds and one whole almond hidden for a prize",
        "Served cold under hot cherry sauce",
      ],
      traits: {
        rice: "Short-grain porridge rice (grødris)",
        liquid: "Milk, then whipped cream",
        sweetener: "Sugar, lightly",
        aromatics: "Vanilla, almond",
        texture: "Light, airy, creamy",
        served: "Cold with hot sauce",
        finish: "Warm cherry sauce",
      },
      servedWith: ["Warm cherry sauce (kirsebærsauce)", "Christmas Eve dinner"],
      whenEaten: "Christmas Eve, after the main meal",
      sourceRefs: [4],
      recipe: {
        serves: 8,
        prepMinutes: 25,
        cookMinutes: 45,
        restMinutes: 480,
        difficulty: "Medium",
        yield: "1 large bowl",
        ingredients: [
          {
            title: "Rice porridge",
            items: [
              { qty: 180, unit: "g", item: "short-grain porridge rice (grødris)", note: "or pudding rice" },
              { qty: 200, unit: "ml", item: "water" },
              { qty: 1, unit: "l", item: "whole milk" },
              { qty: 1, unit: "pinch", item: "salt" },
            ],
          },
          {
            title: "Risalamande",
            items: [
              { qty: 1, unit: "pod", item: "vanilla", note: "seeds scraped" },
              { qty: 3, unit: "tbsp", item: "sugar" },
              { qty: 100, unit: "g", item: "blanched almonds", note: "chopped, plus 1 whole" },
              { qty: 400, unit: "ml", item: "whipping cream" },
            ],
          },
          {
            title: "Cherry sauce",
            items: [
              { qty: 500, unit: "g", item: "pitted morello cherries in juice", note: "jarred" },
              { qty: 2, unit: "tbsp", item: "sugar", note: "to taste" },
              { qty: 1.5, unit: "tbsp", item: "cornflour", note: "mixed with 2 tbsp cold water" },
            ],
          },
        ],
        steps: [
          {
            title: "Start the porridge",
            text: "Bring the water to a boil in a heavy pan, add the rice and cook for 2 minutes, stirring.",
          },
          {
            title: "Simmer in milk",
            text: "Add the milk and bring to a boil, stirring. Cover and cook on the lowest heat for 35 to 40 minutes, stirring now and then, until thick and the grains are soft. Stir in the salt.",
          },
          {
            title: "Chill overnight",
            text: "Stir the vanilla seeds into the warm porridge, cool, then cover and refrigerate overnight. It will become very firm.",
          },
          {
            title: "Loosen and flavour",
            text: "Stir the cold porridge to break it up, then mix in the sugar and chopped almonds.",
          },
          {
            title: "Fold in the cream",
            text: "Whip the cream to soft peaks and fold it gently into the rice in two or three additions. Hide the whole almond in the bowl and chill until serving.",
          },
          {
            title: "Make the cherry sauce",
            text: "Heat the cherries and their juice with the sugar. Stir in the cornflour mixture and simmer for 1 to 2 minutes until glossy and lightly thickened.",
          },
          {
            title: "Serve",
            text: "Spoon the cold risalamande into bowls and pour the hot cherry sauce over the top at the table.",
          },
        ],
        tips: [
          "The porridge must be completely cold before the cream goes in, or the cream will collapse.",
          "Leftover Christmas risengrød is the traditional starting point; about 1 kg of porridge is right for this amount of cream.",
          "Whip the cream only to soft peaks so it folds in smoothly rather than in lumps.",
        ],
      },
    },
  ],
  sources: [
    {
      "title": "Rice pudding",
      "publisher": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Rice_pudding",
      "supports": "Family overview, preparation and regional context; historical accounts are secondary and should be read with their footnotes.",
      "accessed": "2026-10-22"
    },
    {
      "title": "Kheer",
      "publisher": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Kheer",
      "supports": "South Asian rice-and-milk puddings, regional names, sweeteners and aromatics.",
      "accessed": "2026-10-22"
    },
    {
      "title": "Phirni",
      "publisher": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Phirni",
      "supports": "Ground-rice milk pudding, chilled serving and Mughal-era associations.",
      "accessed": "2026-10-22"
    },
    {
      "title": "Risalamande",
      "publisher": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/Risalamande",
      "supports": "Danish Christmas pudding with whipped cream, almonds and cherry sauce.",
      "accessed": "2026-10-22"
    },
    {
      "title": "Sütlaç",
      "publisher": "Wikipedia",
      "url": "https://en.wikipedia.org/wiki/S%C3%BCtla%C3%A7",
      "supports": "Dish description, ingredients and regional preparation; see the article’s footnotes for further reading.",
      "accessed": "2026-10-22"
    }
  ],
};
