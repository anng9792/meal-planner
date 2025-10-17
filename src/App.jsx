import { useState, useEffect } from 'react'
import Searchbar from './components/Searchbar'
import Gallery from './components/Gallery'
import RecipeCard from './components/Recipecard'
import './index.css'

function App() {
    const defaultRecipes = [
    {
      id: 1,
      title: "Olive Garden Zuppa Toscana Soup",
      image: "https://www.lecremedelacrumb.com/wp-content/uploads/2019/03/easy-zuppa-toscano-soup-3.jpg",
      cookTime: "40 Mins",
      type: ["High Protein", "Show All"],
      link: "https://www.lecremedelacrumb.com/easy-olive-garden-zuppa-toscana-soup/"
    },

    {
      id: 2,
      title: "Better Boxed Vegan Cake",
      image: "https://bigboxvegan.com/wp-content/uploads/2023/04/IMG_5110.jpeg",
      cookTime: "30 Mins",
      type: ["Vegan", "Budget-Friendly", "Quick", "Show All"],
      link: "https://bigboxvegan.com/2023/04/18/better-boxed-vegan-cake/"
    },

    {
      id: 3,
      title: "Katsudon",
      image: "https://doobydobap.com/wp-content/uploads/2021/08/IMG_0846-1688x2048.jpg",
      cookTime: "15 Mins",
      type: ["High Protein", "Budget-Friendly", "Top-Rated", "Show All"],
      link: "https://doobydobap.com/recipe/katsudon"
    },

    {
      id: 4,
      title: "Homemade Hamburger Helper Beef Noodle",
      image: "https://cincyshopper.com/wp-content/uploads/2016/02/Homemade-Hamburger-Helper-Beef-Noodle-5.jpg",
      cookTime: "30 Mins",
      type: ["High Protein", "Budget-Friendly", "Show All"],
      link: "https://cincyshopper.com/homemade-hamburger-helper-beef-noodle/"
    },

    {
      id: 5,
      title: "Creamy Bay Scallop Spaghetti",
      image: "https://www.allrecipes.com/thmb/O-wKGwqV7DHrDbtm3hRH3rs3QEk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/255021-Creamy-Bay-Scallop-Spaghetti-ddmfs-3X4-5110-4d53f3cb66424bcba3e68ac09b4c7d1f.jpg",
      cookTime: "30 Mins",
      type: ["Budget-Friendly","Top-Rated"],
      link: "https://www.allrecipes.com/recipe/255021/creamy-bay-scallop-spaghetti/"
    },

    {
      id: 6,
      title: "Easy Cinnamon Rolls",
      image: "https://sallysbakingaddiction.com/wp-content/uploads/2013/05/easy-soft-cinnamon-rolls-2.jpg",
      cookTime: "2 Hours, 5 Mins",
      type: ["Top-Rated"],
      link: "https://sallysbakingaddiction.com/easy-cinnamon-rolls-from-scratch/#tasty-recipes-66508"
    },
    
    {
      id: 7,
      title: "Simple Chicken Fried Rice",
      image: "https://thedefineddish.com/wp-content/uploads/2024/12/Simple-Chicken-Fried-Rice-5-scaled.jpg",
      cookTime: "20 Mins",
      type: ["High Protein", "Budget-Friendly", "Quick"],
      link: "https://thedefineddish.com/simple-chicken-fried-rice/#wprm-recipe-container-30221"
    },

    {
      id: 8,
      title: "Egg Drop Soup",
      image: "https://www.simplyrecipes.com/thmb/STwOB5I0-Qrez7Y4P-DBafpeWy4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2015__05__egg-drop-soup-horiz-a-1800-5b32f28443874704adf8472759a59842.jpg",
      cookTime: "20 Mins",
      type: ["High Protein", "Quick"],
      link: "https://www.simplyrecipes.com/recipes/egg_drop_soup/"
    },

    {
      id: 9,
      title: "Chocolate Chip Cookies",
      image: "https://caitsplate.com/wp-core/wp-content/uploads/2019/03/IMG_7291.jpeg",
      cookTime: "24 Mins",
      type: ["Quick"],
      link: "https://caitsplate.com/cooks-illustrated-ultimate-chocolate-chip-cookies/#tasty-recipes-31625-jump-target"
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
      <h1>Meal Planner App</h1>
      <Searchbar onSearch={handleSearch} />
      <Gallery results={results} />
      <div className="gallery_grid">
      
      </div>
    </div>
  );
}

export default App
