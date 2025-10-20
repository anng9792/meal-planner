import { useState, useEffect } from 'react'
import Searchbar from './components/Searchbar'
import Gallery from './components/Gallery'
import RecipeCard from './components/RecipeCard'
import './index.css'

function App() {
    const defaultRecipes = [
    {
      id: 1,
      title: "Olive Garden Zuppa Toscana Soup",
      image: "https://www.lecremedelacrumb.com/wp-content/uploads/2019/03/easy-zuppa-toscano-soup-3.jpg",
      cookTime: "40 Mins",
      type: ["High Protein", "Show All", "Italian"],
      ingredients: ["sausage", "butter", "onion", "onions", "garlic", "chicken", "potato", "potatoes", "pepper", "peppers", "cream", "kale", "bacon"],
      link: "https://www.lecremedelacrumb.com/easy-olive-garden-zuppa-toscana-soup/"
    },

    {
      id: 2,
      title: "Better Boxed Vegan Cake",
      image: "https://bigboxvegan.com/wp-content/uploads/2023/04/IMG_5110.jpeg",
      cookTime: "30 Mins",
      type: ["Vegan", "Budget-Friendly", "Quick", "Show All", "Dessert"],
      ingredients: ["yogurt", "oil", "lemon", "cornstarch", "sour cream"],
      link: "https://bigboxvegan.com/2023/04/18/better-boxed-vegan-cake/"
    },

    {
      id: 3,
      title: "Katsudon",
      image: "https://doobydobap.com/wp-content/uploads/2021/08/IMG_0846-1688x2048.jpg",
      cookTime: "15 Mins",
      type: ["High Protein", "Budget-Friendly", "Top-Rated", "Show All", "Asian"],
      ingredients: ["pork", "chicken", "onion", "onions", "egg", "eggs", "flour", "chives", "breadcrumbs", "oil", "salt", "stock", "sake", "mirin", "soy sauce", "sugar"],
      link: "https://doobydobap.com/recipe/katsudon"
    },

    {
      id: 4,
      title: "Homemade Hamburger Helper Beef Noodle",
      image: "https://cincyshopper.com/wp-content/uploads/2016/02/Homemade-Hamburger-Helper-Beef-Noodle-5.jpg",
      cookTime: "30 Mins",
      type: ["High Protein", "Budget-Friendly", "Show All"],
      ingredients: ["beef", "pasta", "bouillon", "water", "milk", "cornstarch", "garlic powder", "onion powder", "sugar", "salt", "pepper"],
      link: "https://cincyshopper.com/homemade-hamburger-helper-beef-noodle/"
    },

    {
      id: 5,
      title: "Creamy Bay Scallop Spaghetti",
      image: "https://www.allrecipes.com/thmb/O-wKGwqV7DHrDbtm3hRH3rs3QEk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/255021-Creamy-Bay-Scallop-Spaghetti-ddmfs-3X4-5110-4d53f3cb66424bcba3e68ac09b4c7d1f.jpg",
      cookTime: "30 Mins",
      type: ["Budget-Friendly","Top-Rated", "Italian"],
      ingredients: ["spaghetti", "noodles", "oil", "scallops", "butter", "garlic", "lemon", "pepper", "cream", "salt", "parsley", "parmiagiano reggiano", "cheese"],
      link: "https://www.allrecipes.com/recipe/255021/creamy-bay-scallop-spaghetti/"
    },

    {
      id: 6,
      title: "Easy Cinnamon Rolls",
      image: "https://sallysbakingaddiction.com/wp-content/uploads/2013/05/easy-soft-cinnamon-rolls-2.jpg",
      cookTime: "2 Hours, 5 Mins",
      type: ["Top-Rated", "Dessert"],
      ingredients: ["flour", "sugar", "salt", "milk", "butter", "yeast", "egg", "brown sugar", "vanilla", "vanilla extract"],
      link: "https://sallysbakingaddiction.com/easy-cinnamon-rolls-from-scratch/#tasty-recipes-66508"
    },
    
    {
      id: 7,
      title: "Simple Chicken Fried Rice",
      image: "https://thedefineddish.com/wp-content/uploads/2024/12/Simple-Chicken-Fried-Rice-5-scaled.jpg",
      cookTime: "20 Mins",
      type: ["High Protein", "Budget-Friendly", "Quick", "Asian"],
      ingredients: ["oil", "chicken", "salt", "pepper", "butter", "carrot", "carrots", "onion", "green onion", "onions", "green onions", "garlic", "ginger", "rice", "white rice", "soy sauce", "egg", "eggs"],
      link: "https://thedefineddish.com/simple-chicken-fried-rice/#wprm-recipe-container-30221"
    },

    {
      id: 8,
      title: "Egg Drop Soup",
      image: "https://www.simplyrecipes.com/thmb/STwOB5I0-Qrez7Y4P-DBafpeWy4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2015__05__egg-drop-soup-horiz-a-1800-5b32f28443874704adf8472759a59842.jpg",
      cookTime: "20 Mins",
      type: ["High Protein", "Quick", "Asian"],
      ingredients: ["stock", "chicken stock", "cornstarch", "enoki mushrooms", "mushrooms", "enoki", "onions", "onion", "green onion", "green onions", "ginger", "soy sauce", "egg", "eggs", "pepper"],
      link: "https://www.simplyrecipes.com/recipes/egg_drop_soup/"
    },

    {
      id: 9,
      title: "Chocolate Chip Cookies",
      image: "https://caitsplate.com/wp-core/wp-content/uploads/2019/03/IMG_7291.jpeg",
      cookTime: "24 Mins",
      type: ["Quick", "Dessert"],
      ingredients: ["flour", "baking soda", "butter", "sugar", "brown sugar", "salt", "vanilla", "vanilla extract", "egg", "eggs", "chocolate chips", "pecans", "walnuts"],
      link: "https://caitsplate.com/cooks-illustrated-ultimate-chocolate-chip-cookies/#tasty-recipes-31625-jump-target"
    },

    {
      id: 10,
      title: "Vegan Fajitas",
      image: "https://www.feastingathome.com/wp-content/uploads/2024/10/Vegan-Fajitas-13.jpg",
      cookTime: "1 Hour, 5 Mins",
      type: ["Vegan","Vegetarian","Budget-Friendly"],
      ingredients: ["oil", "chili powder", "garlic", "paprika", "cumin", "coriander", "oregano", "salt", "cayenne", "mushrooms", "mushroom", "pepper", "peppers", "bell pepper", "bell peppers", "onion", "onions", "lime", "tortilla", "tortillas", "cilantro", "avocado", "tofu"],
      link: "https://www.feastingathome.com/vegan-fajitas/#tasty-recipes-82245-jump-target"
    },

    {
      id: 11,
      title: "Chipotle Portobello Mushroom Tacos",
      image: "https://www.feastingathome.com/wp-content/uploads/2018/03/Sheet-Pan-Portobello-Tacos-207.jpg",
      cookTime: "30 Mins",
      type: ["Vegan","Vegetarian","Budget-Friendly"],
      ingredients: ["mushroom", "mushrooms", "pepper", "peppers", "bell peppers", "bell pepper", "onion", "onions", "tortilla", "tortillas", "black beans", "beans", "oil", "garlic", "cumin", "salt"],
      link: "https://www.feastingathome.com/chipotle-portobello-tacos/#tasty-recipes-21231-jump-target"
    },

    {
      id: 12,
      title: "Vegan Tiramisu",
      image: "https://thebananadiaries.com/wp-content/uploads/2023/10/vegan-tiramisu-recipe_7362.jpg",
      cookTime: "40 Mins",
      type: ["Vegan","Budget-Friendly", "Top-Rated", "Dessert", "Italian"],
      ingredients: ["flour", "cornstarch", "baking powder", "baking soda", "sugar", "cream of tartar", "yogurt", "applesauce", "oil", "vanilla", "vanilla extract", "cocoa powder", "espresso", "coconut"],
      link: "https://thebananadiaries.com/vegan-tiramisu/"
    },

    {
      id: 13,
      title: "Strawberry Sago",
      image: "https://bitesbybianca.com/wp-content/uploads/2025/02/strawberry-sago-2.jpg",
      cookTime: "25 Mins",
      type: ["Top-Rated", "Quick", "Dessert", "Asian"],
      ingredients: ["water", "tapioca", "tapioca pearls", "strawberry", "strawberries", "condensed milk"],
      link: "https://bitesbybianca.com/strawberry-sago/#recipe"
    },

    {
      id: 14,
      title: "Vegetable Curry Recipe",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/07/vegetable-curry-recipe.webp",
      cookTime: "40 Mins",
      type: ["Vegetarian", "Vegan"],
      ingredients: ["oil", "onion", "onions", "chili", "ginger", "garlic", "tomato", "tomatoes", "water", "cashews", "carrot", "carrots", "potato", "potatoes", "green beans", "peas", "corn", "chili powder", "cumin", "salt", "coconut"],
      link: "https://www.indianhealthyrecipes.com/mixed-vegetable-curry/#wprm-recipe-container-38806"
    },

    {
      id: 15,
      title: "Maple Sweet Potato Salad with Whipped Tahini",
      image: "https://www.recipetineats.com/tachyon/2025/06/Maple-sweet-potato-salad-with-whipped-tahini_4.jpg?resize=1200%2C1500&zoom=0.86",
      cookTime: "40 Mins",
      type: ["Vegetarian"],
      ingredients: ["sweet potato", "sweet potatoes", "maple syrup", "oil", "salt", "pepper", "paprika", "garlic powder", "onion powder", "sriracha", "yogurt", "tahini", "lemon", "garlic", "cilantro"],
      link: "https://www.recipetineats.com/maple-sweet-potato-salad-with-whipped-tahini/#recipe"
    },

    {
      id: 16,
      title: "Pumpkin Soup",
      image: "https://www.recipetineats.com/tachyon/2017/10/Pumpkin-Soup-6.jpg?resize=900%2C1260&zoom=1",
      cookTime: "15 Mins",
      type: ["Quick"],
      ingredients: ["pumpkin", "onion", "onions", "garlic", "stock", "chicken stock", "salt", "pepper", "cream"],
      link: "https://www.recipetineats.com/classic-pumpkin-soup/#recipe"
    },
  ];
  const [results, setResults] = useState(defaultRecipes)

  const handleSearch = ({ query, ingredients, filters }) => {
    console.log("Searching for:", query)
    console.log("With ingredients", ingredients)
    console.log("Filters:", filters)

    let filtered = defaultRecipes

    if (query) {
      filtered = filtered.filter(r =>
        r.title.toLowerCase().includes(query.toLowerCase())
      )
    }

if (ingredients.length > 0) {
  filtered = filtered.filter(r => 
    ingredients.every(ing =>
      r.ingredients.some(ri =>
        ri.toLowerCase().includes(ing.toLowerCase().trim())
      )
    )
  )
}


    if (filters.length > 0) {
      filtered = filtered.filter(r => {
        if (!r.type) return false;

        if (Array.isArray(r.type)) {

        return filters.some(f =>
          r.type.some(t => t.toLowerCase().includes(f.toLowerCase()))
        );
    } else {
      return filters.some(f =>
        r.type.toLowerCase().includes(f.toLowerCase())
      );
    }
  });
}

    setResults(filtered)
  }

  return (
    <div>
      <h1>🥗 BiteBook 🥗</h1>
      <Searchbar onSearch={handleSearch} />
      <Gallery results={results} />
      <div className="gallery_grid">
      
      </div>
    </div>
  );
}

export default App
