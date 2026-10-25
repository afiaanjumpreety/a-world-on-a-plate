import type { DishFamily } from '../types';

export const pizza: DishFamily = {
  id: 'pizza', name: 'Pizza', alsoKnownAs: ['Pizza napoletana', 'Pizza al taglio', 'New York slice', 'Chicago deep dish'],
  tagline: 'One dough, from a blistered rim to a deep pan', category: 'bread', motif: 'pizza', color: '#BF6E4A',
  origin: {
    region: 'Naples and its pizza-making tradition', country: 'ITA', coords: [14.27, 40.85],
    era: 'Neapolitan craft, then regional and international adaptations', confidence: 'established',
    confidenceNote: 'Naples is a documented centre of pizza-making craft. UNESCO recognises the practice and its community; that recognition does not prove a single inventor or establish the birthday of every pizza style. [1]',
  },
  intro: 'A piece of dough becomes a shared language: soft and blistered in Naples, cut from a tray in Rome, folded into a street-side slice in New York or baked deep in a Chicago pan. Flour, fermentation, heat and the local way of eating make the difference. [1, 2, 3, 4]',
  history: [
    'The Neapolitan pizzaiuolo’s work includes preparing, dividing and stretching dough, managing an oven and turning the pizza as it bakes. UNESCO’s 2017 inscription recognises this living craft and the ways it is taught. [1]',
    'Italy has more than one pizza tradition. Rome’s takeaway shops offer long pizzas baked on a peel and rectangular tray pizzas. A slice of red or white bakery pizza serves a different purpose from a whole round pizza brought to a restaurant table. [2]',
    'American adaptations changed scale and structure. New York developed large, thin, foldable slices, while Chicago’s deep-dish style built a much taller pie. The Chicago History Museum associates deep dish with Pizzeria Uno’s opening in 1943. [3, 4]',
  ],
  etymology: 'Al taglio means cut into portions. In this family the names often describe the format or place: a New York slice, a Roman tray, or a Chicago deep dish. [2, 3, 4]',
  timeline: [
    { when: 'Neapolitan tradition', event: 'Pizza-making develops as a shared craft taught in homes and pizzerias. [1]' },
    { when: 'Early twentieth century', event: 'Italian-American pizza develops into the large, thin New York style. [3]' },
    { when: '1943', event: 'Pizzeria Uno opens in Chicago, associated with the emergence of deep-dish pizza. [4]' },
    { when: '2017', event: 'UNESCO inscribes the art of the Neapolitan pizzaiuolo on its Representative List. [1]' },
  ],
  commonThreads: ['A fermented wheat-flour dough', 'A deliberately shaped base and rim', 'Toppings baked with the bread', 'Heat that cooks the base as well as the surface'],
  divergences: [
    { title: 'Whole pie or portion', text: 'Neapolitan rounds, Roman cut portions and New York slices organise the same meal differently. [1, 2, 3]' },
    { title: 'Thin base or deep pan', text: 'Chicago deep dish builds height in a pan; the New York slice stays flexible enough to fold. [3, 4]' },
    { title: 'Oven and timing', text: 'A wood-fired Neapolitan oven cooks quickly. The recipes here adapt each style to a domestic oven, so their timings differ from professional practice. [1]' },
  ],
  compareAxes: [
    { key: 'base', label: 'Base' }, { key: 'shape', label: 'Shape' }, { key: 'cheese', label: 'Cheese' },
    { key: 'tomato', label: 'Tomato' }, { key: 'serving', label: 'Serving style' },
  ],
  variants: [
    {
      id: 'neapolitan-margherita', name: 'Neapolitan Margherita', native: [{ text: 'pizza Margherita', lang: 'Italian' }],
      country: 'ITA', place: 'Naples', coords: [14.27, 40.85], from: 'origin',
      arrival: 'Part of the Neapolitan pizza-making tradition. [1]',
      summary: 'Tomato, mozzarella and basil top a thin centre surrounded by a soft, raised rim. [1]',
      story: [
        'The craft of the pizzaiuolo is about working dough and heat as much as choosing toppings. A stretched centre and fuller rim give the round its contrasting textures. [1]',
        'This home-oven interpretation uses a long rise and a preheated baking surface. It aims for a tender rim and a properly cooked base; it does not reproduce the speed of a wood-fired oven.',
      ],
      signature: ['Round, hand-stretched dough', 'Soft, raised rim', 'Tomato, mozzarella and basil', 'Lightly topped centre'],
      traits: { base: 'Thin centre, soft rim', shape: 'Individual round', cheese: 'Fresh mozzarella', tomato: 'Light crushed tomato', serving: 'Whole pizza' },
      servedWith: ['Fresh basil', 'A simple green salad'], whenEaten: 'Lunch or dinner at a pizzeria or at home', sourceRefs: [1],
      recipe: {
        serves: 4, prepMinutes: 30, cookMinutes: 20, restMinutes: 720, difficulty: 'Medium', yield: '4 small pizzas',
        ingredients: [
          { title: 'Dough', items: [
            { qty: 500, unit: 'g', item: 'strong white flour or pizza flour' }, { qty: 325, unit: 'ml', item: 'water' },
            { qty: 2, unit: 'g', item: 'instant yeast' }, { qty: 10, unit: 'g', item: 'fine salt' },
          ] },
          { title: 'Topping', items: [
            { qty: 300, unit: 'g', item: 'canned tomatoes', note: 'crushed and drained if watery' },
            { qty: 250, unit: 'g', item: 'fresh mozzarella', note: 'drained, torn and patted dry' },
            { qty: 12, unit: 'leaf', item: 'fresh basil' }, { qty: 2, unit: 'tbsp', item: 'olive oil' },
            { qty: 0.5, unit: 'tsp', item: 'salt' },
          ] },
        ],
        steps: [
          { title: 'Mix and knead', text: 'Mix the flour and yeast, add the water and salt, and knead for 8 to 10 minutes until smooth. Cover and leave at room temperature for 1 hour.' },
          { title: 'Give it time', text: 'Refrigerate the covered dough for about 9 hours. Divide into four balls, cover and leave at room temperature for about 2 hours until relaxed and puffy.' },
          { title: 'Heat the oven', text: 'Preheat a pizza stone, steel or sturdy inverted baking tray for at least 45 minutes at the oven’s highest safe setting, usually 250–275°C. Season the tomatoes with the topping salt.' },
          { title: 'Stretch and top', text: 'Press a dough ball out from the centre, keeping the outer rim full. Stretch to about 24 cm on a floured surface. Add a thin layer of tomato, mozzarella and a little oil.' },
          { title: 'Bake in batches', text: 'Transfer carefully to the hot baking surface and bake each pizza for roughly 5 to 8 minutes, depending on the oven, until the base is cooked and the rim browned. Add basil and serve straight away.' },
        ],
        tips: ['The listed cooking time assumes two pizzas can bake at once; allow longer if baking one at a time.', 'Wet mozzarella can leave the centre soupy, so drain it thoroughly.', 'Home ovens vary: use the cooked base and browned rim to judge readiness.'],
      },
    },
    {
      id: 'roman-al-taglio', name: 'Roman Pizza al Taglio', native: [{ text: 'pizza al taglio', lang: 'Italian' }],
      country: 'ITA', place: 'Rome', coords: [12.5, 41.9], from: 'origin',
      arrival: 'A Roman bakery and takeaway tradition; no single invention date is asserted. [2]',
      summary: 'A rectangular tray of airy pizza is cut into portions for an easy street-food meal. [2]',
      story: [
        'Rome’s slice shops serve pizza in formats suited to eating on the move. The city’s tourism board distinguishes tray-baked pizza from long pizzas baked on a peel. [2]',
        'This version uses a wet dough in an oiled tin. Its simple red topping leaves the crisp bottom and open crumb easy to taste.',
      ],
      signature: ['Baked in a rectangular tray', 'Cut into portions', 'Oiled, crisp underside', 'Simple red or white bakery toppings'],
      traits: { base: 'Airy, crisp underneath', shape: 'Rectangular tray', cheese: 'Optional; none here', tomato: 'Red topping or none', serving: 'Cut portions' },
      servedWith: ['Roasted vegetables', 'Sparkling water'], whenEaten: 'A takeaway lunch or snack', sourceRefs: [2],
      recipe: {
        serves: 4, prepMinutes: 25, cookMinutes: 25, restMinutes: 840, difficulty: 'Medium', yield: '1 tray, about 30 × 40 cm',
        ingredients: [{ items: [
          { qty: 500, unit: 'g', item: 'strong white flour' }, { qty: 375, unit: 'ml', item: 'water' },
          { qty: 2, unit: 'g', item: 'instant yeast' }, { qty: 10, unit: 'g', item: 'fine salt' },
          { qty: 4, unit: 'tbsp', item: 'olive oil', note: 'divided between dough, tray and topping' },
          { qty: 350, unit: 'g', item: 'canned tomatoes', note: 'crushed' },
          { qty: 1, unit: 'tsp', item: 'dried oregano' }, { qty: 0.5, unit: 'tsp', item: 'salt', note: 'for the tomato' },
        ] }],
        steps: [
          { title: 'Mix a wet dough', text: 'Stir the flour, yeast, water, fine salt and 1 tablespoon of oil into a sticky dough. Cover, then fold the dough over itself several times at 20-minute intervals for 1 hour.' },
          { title: 'Rise slowly', text: 'Refrigerate, covered, for about 11 hours. Bring out for 1 hour, then gently ease into a well-oiled 30 × 40 cm tray.' },
          { title: 'Stretch and rest', text: 'Use oiled fingers to dimple and stretch the dough towards the corners. If it springs back, pause for 10 minutes. Rest in the tray for about 1 hour until puffy.' },
          { title: 'Top lightly', text: 'Heat the oven to 240°C. Mix the tomatoes with oregano and topping salt, spread over the dough and drizzle with the remaining oil.' },
          { title: 'Bake and cut', text: 'Bake on a low shelf for 20 to 25 minutes, moving higher if the top needs colour. Lift a corner to check the underside is browned, then rest for a few minutes and cut into rectangles.' },
        ],
        tips: ['The dough is meant to be sticky; use wet or oiled hands rather than adding lots of flour.', 'Avoid a thick layer of watery topping, which can keep the centre damp.'],
      },
    },
    {
      id: 'new-york-slice', name: 'New York Slice', native: [{ text: 'New York–style pizza', lang: 'English' }],
      country: 'USA', place: 'New York City', coords: [-74.01, 40.71], from: 'origin',
      arrival: 'Early twentieth-century Italian-American pizza-making in New York. [3]',
      summary: 'A broad, thin slice carries tomato and low-moisture mozzarella on a flexible crust. [3]',
      story: [
        'New York–style pizza is commonly sold as a large pie or as wide slices. Its thin centre stays flexible enough to fold for eating on the move. [3]',
        'Low-moisture mozzarella helps make a drier topping than fresh mozzarella. This home recipe makes two manageable pies instead of one pizzeria-sized round. [3]',
      ],
      signature: ['Wide triangular slices', 'Foldable centre with a crisp edge', 'Low-moisture mozzarella', 'A light tomato sauce'],
      traits: { base: 'Thin and foldable', shape: 'Large round slices', cheese: 'Low-moisture mozzarella', tomato: 'Light tomato sauce', serving: 'By the slice or pie' },
      servedWith: ['Chilli flakes', 'Dried oregano', 'Grated hard cheese'], whenEaten: 'A quick lunch, dinner or late-night slice', sourceRefs: [3],
      recipe: {
        serves: 4, prepMinutes: 30, cookMinutes: 25, restMinutes: 720, difficulty: 'Medium', yield: '2 pizzas, about 30 cm each',
        ingredients: [
          { title: 'Dough', items: [
            { qty: 450, unit: 'g', item: 'strong white flour' }, { qty: 285, unit: 'ml', item: 'water' },
            { qty: 2, unit: 'g', item: 'instant yeast' }, { qty: 9, unit: 'g', item: 'salt' },
            { qty: 1, unit: 'tsp', item: 'sugar' }, { qty: 1, unit: 'tbsp', item: 'olive oil' },
          ] },
          { title: 'Topping', items: [
            { qty: 250, unit: 'g', item: 'passata' }, { qty: 0.5, unit: 'tsp', item: 'dried oregano' },
            { qty: 0.5, unit: 'tsp', item: 'salt' }, { qty: 250, unit: 'g', item: 'low-moisture mozzarella', note: 'grated' },
          ] },
        ],
        steps: [
          { title: 'Knead the dough', text: 'Mix all the dough ingredients and knead for about 10 minutes. Cover and leave for 1 hour, then refrigerate for about 9 hours.' },
          { title: 'Divide and relax', text: 'Split into two balls and leave covered at room temperature for around 2 hours. Heat a stone, steel or inverted tray at 250°C for at least 45 minutes.' },
          { title: 'Prepare the sauce', text: 'Mix the passata, oregano and salt. Keep the sauce thick enough to spread in a thin layer.' },
          { title: 'Stretch and top', text: 'Stretch each ball into a 30 cm round, keeping a modest rim. Spread with half the sauce and half the cheese.' },
          { title: 'Bake and slice', text: 'Bake each pizza for about 10 to 13 minutes until the base is browned and the cheese bubbles. Rest for 2 minutes before cutting each into six slices.' },
        ],
        tips: ['Bake on a thoroughly preheated surface to set the thin base.', 'A little oil in the dough helps this domestic-oven adaptation stay flexible.'],
      },
    },
    {
      id: 'chicago-deep-dish', name: 'Chicago Deep Dish', native: [{ text: 'deep-dish pizza', lang: 'English' }],
      country: 'USA', place: 'Chicago', coords: [-87.63, 41.88], from: 'origin',
      arrival: 'Associated with Pizzeria Uno’s opening in 1943. [4]',
      summary: 'A tall pan supports a substantial pizza, with cheese beneath a thick tomato topping. [4, 5]',
      story: [
        'Chicago’s deep dish takes pizza into a high-sided pan. The Chicago History Museum dates the style’s appearance to Pizzeria Uno in 1943; this is a separate regional development within American pizza. [4]',
        'The home version below uses a butter-and-oil dough, mozzarella close to the base and well-drained tomato on top. It is a knife-and-fork meal rather than a foldable street slice.',
      ],
      signature: ['High-sided round pan', 'Rich, substantial crust', 'Cheese beneath the tomato', 'Thick wedges for serving'],
      traits: { base: 'Deep, rich pan crust', shape: 'High-sided round', cheese: 'Mozzarella underneath', tomato: 'Thick top layer', serving: 'Substantial wedges' },
      servedWith: ['Green salad', 'Chilli flakes'], whenEaten: 'A sit-down lunch or dinner to share', sourceRefs: [4, 5],
      recipe: {
        serves: 4, prepMinutes: 30, cookMinutes: 40, restMinutes: 90, difficulty: 'Medium', yield: '1 deep pizza, 25 cm',
        ingredients: [
          { title: 'Dough', items: [
            { qty: 300, unit: 'g', item: 'plain flour' }, { qty: 170, unit: 'ml', item: 'lukewarm water' },
            { qty: 4, unit: 'g', item: 'instant yeast' }, { qty: 6, unit: 'g', item: 'salt' },
            { qty: 30, unit: 'g', item: 'butter', note: 'melted and cooled' },
            { qty: 2, unit: 'tbsp', item: 'olive oil', note: 'plus a little for the pan' },
          ] },
          { title: 'Filling', items: [
            { qty: 300, unit: 'g', item: 'low-moisture mozzarella', note: 'sliced' },
            { qty: 600, unit: 'g', item: 'canned chopped tomatoes', note: 'drained well' },
            { qty: 1, unit: 'tsp', item: 'dried oregano' }, { qty: 1, unit: 'clove', item: 'garlic', note: 'grated' },
            { qty: 0.5, unit: 'tsp', item: 'salt' }, { qty: 25, unit: 'g', item: 'Parmesan', note: 'grated' },
          ] },
        ],
        steps: [
          { title: 'Make the dough', text: 'Combine the dough ingredients and knead for about 5 minutes until smooth. Cover and let rise in a warm place for about 1 hour, until noticeably expanded.' },
          { title: 'Line the pan', text: 'Oil a 25 cm deep, oven-safe metal pan. Roll out the dough, ease it into the pan and press it about 4 cm up the sides. Rest for 30 minutes while heating the oven to 220°C.' },
          { title: 'Prepare the tomato', text: 'Drain the chopped tomatoes thoroughly. Mix with the oregano, garlic and salt.' },
          { title: 'Layer the filling', text: 'Arrange mozzarella over the dough, spoon the tomatoes over it and sprinkle with Parmesan. Fold down any dough extending well above the filling.' },
          { title: 'Bake and settle', text: 'Bake for 35 to 40 minutes on a low shelf until the crust is browned and the filling is bubbling. Rest for 10 minutes before lifting out wedges.' },
        ],
        tips: ['Use a metal pan suitable for the oven temperature.', 'Drain tomatoes well to protect the crust from excess moisture.', 'Allow the pie to settle before slicing so the filling stays in the wedge.'],
      },
    },
  ],
  sources: [
    { title: 'Art of Neapolitan Pizzaiuolo', publisher: 'UNESCO Intangible Cultural Heritage', url: 'https://ich.unesco.org/en/RL/art-of-neapolitan-pizzaiuolo-00722', supports: 'Neapolitan pizza-making craft, its community and its 2017 heritage inscription; not a claim about a single inventor.', accessed: '2026-10-22' },
    { title: 'Street food', publisher: 'Turismo Roma', url: 'https://turismoroma.it/en/lo-street-food', supports: 'Roman slice shops, tray and peel-baked formats, and red and white bakery pizza.', accessed: '2026-10-22' },
    { title: 'New York–style pizza', publisher: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/New_York%E2%80%93style_pizza', supports: 'Italian-American development, large thin slices, foldable crust and low-moisture mozzarella; consult its cited histories.', accessed: '2026-10-22' },
    { title: 'Pizza, Chicago Style', publisher: 'Chicago History Museum', year: '2021', url: 'https://www.chicagohistory.org/pizza-chicago-style/', supports: 'Chicago pizza context and the association of deep dish with Pizzeria Uno in 1943.', accessed: '2026-10-22' },
    { title: 'Dishing on Chicago-Style Pizza', publisher: 'Illinois Office of Tourism', url: 'https://www.enjoyillinois.com/plan-your-trip/travel-inspiration/dishing-on-chicago-style-pizza/', supports: 'Deep-dish pan structure and the cheese-first, tomato-on-top layering method.', accessed: '2026-10-22' },
  ],
};
