import { useState } from 'react'

export default function RecipeCard() {
  const [active, setActive] = useState(null)

  // All recipes preserved here
  const recipes = [
    {
      title: 'Katsudon',
      image: 'https://doobydobap.com/wp-content/uploads/2021/08/IMG_0846-1688x2048.jpg',
      sections: [
        {
          heading: 'Ingredients',
          items: [
            '2 pork shoulder/loin steaks or chicken breast/thigh (150g)',
            '1 white onion, thinly sliced',
            '1 egg',
            '2 cups cooked white rice',
            'Chives for garnish',
            '1 cup all purpose flour',
            '2 cups panko breadcrumbs',
            'Neutral oil for frying',
          ],
        },
        {
          heading: 'Batter',
          items: ['1/2 cup all purpose flour', '1/2 cup water', '1 egg', '1 tsp salt'],
        },
        {
          heading: 'Sauce',
          items: [
            '1 cup stock (dashi, chicken, or veggie)',
            '2 tbsp sake',
            '2 tbsp soy sauce',
            '2 tbsp mirin',
            '2 tsp sugar',
          ],
        },
      ],
      instructions:
        'Dip cutlets in batter, coat with panko, and fry until golden. Simmer onion in sauce, add beaten egg, and serve over rice.',
    },

    {
      title: 'Creamy Bay Scallop Spaghetti',
      image:
        'https://www.allrecipes.com/thmb/KQQ20opPLGDMyviGrOGxZMMxGp4=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/255021-Creamy-Bay-Scallop-Spaghetti-ddmfs-3X4-5110-4d53f3cb66424bcba3e68ac09b4c7d1f.jpg',
      sections: [
        {
          heading: 'Ingredients',
          items: [
            '8 oz spaghetti',
            '1 tbsp vegetable oil',
            '1 lb bay scallops',
            '2 tbsp butter',
            '3 cloves garlic, minced',
            '2 tsp grated lemon zest',
            'Pinch red pepper flakes',
            '1/3 cup dry sherry',
            '1 cup heavy cream',
            'Salt and pepper',
            'Juice of 1 lemon',
            '2 tbsp chopped parsley',
            'Parmigiano Reggiano, for serving',
          ],
        },
      ],
      instructions:
        'Cook pasta. Sear scallops in butter and oil, add garlic, zest, sherry, then cream. Toss with pasta; finish with lemon, parsley, and cheese.',
    },

    {
      title: 'Better Boxed Vegan Cake',
      image: 'https://bigboxvegan.com/wp-content/uploads/2023/04/IMG_5110.jpeg',
      sections: [
        {
          heading: 'Ingredients',
          items: [
            '1 box cake mix',
            '2/3 cup vegan yogurt or sour cream',
            '2/3 cup vegetable oil',
            '3/4 cup plant milk',
            '1 tsp lemon juice or vinegar',
            '1 tbsp cornstarch',
          ],
        },
      ],
      instructions:
        'Mix all ingredients until smooth. Bake per box directions. Cool completely and frost as desired.',
    },

    {
      title: 'Cinnamon Rolls',
      sections: [
        {
          heading: 'Dough',
          items: [
            '1/2 cup salted butter, melted',
            '1 1/2 cups whole milk',
            '6 1/2 cups all purpose flour',
            '2 packets active dry yeast',
            '1/2 cup sugar',
            '1 tsp salt',
            '2 eggs',
          ],
        },
        {
          heading: 'Filling',
          items: ['2 cups brown sugar', '2 tbsp cinnamon', '1/4 cup butter, melted'],
        },
        {
          heading: 'Frosting',
          items: ['8 oz cream cheese', '1/4 cup butter', '1 1/2 cups powdered sugar', '1 tsp vanilla', '3 tbsp heavy cream'],
        },
      ],
      instructions: 'Make dough, rise, fill, roll, slice, bake, then frost while warm.',
    },

    {
      title: 'Olive Garden Zuppa Toscana Soup',
      sections: [
        {
          heading: 'Ingredients',
          items: [
            '4 slices thick cut bacon, chopped',
            '1 lb Italian sausage',
            '1 onion, diced',
            '3 cloves garlic, minced',
            '6 cups chicken broth',
            '3 large russet potatoes, sliced',
            '1 cup heavy cream',
            '4 cups chopped kale',
            'Salt and pepper',
            'Parmesan and extra bacon for topping',
          ],
        },
      ],
      instructions:
        'Cook bacon and sausage. Sauté onion and garlic. Add broth and potatoes; simmer until tender. Stir in cream and kale; season and top.',
    },

    {
      title: 'Homemade Hamburger Helper Beef Noodle',
      sections: [
        {
          heading: 'Ingredients',
          items: [
            '1 lb ground beef',
            '2 cups wide egg noodles',
            '1 1/2 cups water',
            '1 1/2 cups milk',
            '3 beef bouillon cubes',
            '1 tbsp cornstarch',
            '1 tsp garlic powder',
            '1/2 tsp onion powder',
            '1 tsp sugar',
            '1 tsp salt',
            '1/2 tsp black pepper',
          ],
        },
      ],
      instructions:
        'Brown beef. Add water, milk, bouillon, seasonings, and noodles. Simmer until noodles are tender and sauce thickens.',
    },

    {
      title: 'Chicken Fried Rice',
      sections: [
        {
          heading: 'Ingredients',
          items: [
            '2 cups cooked day old rice',
            '1 chicken breast, diced',
            '2 eggs, lightly beaten',
            '1 cup frozen peas and carrots',
            '2 green onions, sliced',
            '2 tbsp soy sauce',
            '1 tbsp oyster sauce (optional)',
            '1 tbsp neutral oil',
            'Salt and pepper',
          ],
        },
      ],
      instructions:
        'Scramble eggs and set aside. Sear chicken, add veggies, then rice. Season with sauces; fold in eggs and green onion.',
    },

    {
      title: 'Egg Drop Soup',
      sections: [
        {
          heading: 'Ingredients',
          items: [
            '4 cups chicken stock',
            '1 tbsp cornstarch mixed with 2 tbsp water',
            '2 eggs, beaten',
            '1 tsp sesame oil',
            '2 tsp soy sauce',
            '2 green onions, thinly sliced',
            'White pepper to taste',
          ],
        },
      ],
      instructions:
        'Bring stock to a simmer, stir in cornstarch slurry. Swirl the soup and drizzle in eggs to create ribbons. Season and top with green onion.',
    },

    {
      title: 'Chocolate Chip Cookies',
      sections: [
        {
          heading: 'Ingredients',
          items: [
            '1 cup unsalted butter, softened',
            '3/4 cup white sugar',
            '3/4 cup brown sugar',
            '2 large eggs',
            '2 tsp vanilla',
            '2 1/4 cups all purpose flour',
            '1 tsp baking soda',
            '1/2 tsp salt',
            '2 cups chocolate chips',
          ],
        },
      ],
      instructions:
        'Cream butter and sugars; beat in eggs and vanilla. Mix in dry ingredients and chips. Scoop and bake at 350°F until edges set.',
    },
  ]

  return (
    <>
      {/* Cards grid */}
      <div className="gallery">
        {recipes.map((r, idx) => (
          <button key={idx} className="recipe-card" onClick={() => setActive(r)} aria-haspopup="dialog">
            {r.image ? <img className="recipe-img" src={r.image} alt={r.title} /> : <div className="img-placeholder" />}
            <h3>{r.title}</h3>
          </button>
        ))}
      </div>

      {/* Modal */}
      {active && (
        <div className="modal-overlay" onClick={() => setActive(null)} role="presentation">
          <div className="modal" role="dialog" aria-modal="true" aria-label={active.title} onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActive(null)} aria-label="Close">×</button>

            {active.image && <img className="modal-img" src={active.image} alt={active.title} />}
            <h2>{active.title}</h2>

            <div className="scrollable">
              {active.sections?.map((sec, i) => (
                <section key={i}>
                  <h4>{sec.heading}</h4>
                  <ul>
                    {sec.items.map((it, j) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ul>
                </section>
              ))}

              {active.instructions && (
                <>
                  <h4>Instructions</h4>
                  <p>{active.instructions}</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
