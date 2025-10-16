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
