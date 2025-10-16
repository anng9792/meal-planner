import { useState } from 'react'
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
      type: "High Protein"
    },

    {
      id: 2,
      title: "Better Boxed Vegan Cake",
      image: "https://bigboxvegan.com/wp-content/uploads/2023/04/IMG_5110.jpeg",
      cookTime: "30 Mins",
      type: "Vegan"
    },

    {
      id: 3,
      title: "Katsudon",
      image: "https://doobydobap.com/wp-content/uploads/2021/08/IMG_0846-1688x2048.jpg",
      cookTime: "15 Mins",
    },

    {
      id: 4,
      title: "Homemade Hamburger Helper Beef Noodle",
      image: "https://cincyshopper.com/wp-content/uploads/2016/02/Homemade-Hamburger-Helper-Beef-Noodle-5.jpg",
      cookTime: "30 Mins",
    },
  ];
  const [results, setResults] = useState([defaultRecipes])
  
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
      filtered = filtered.filter(r =>
        filters.some(f => r.type.toLowerCase().includes(f.toLowerCase()))
      )
    }

    setResults(filtered)
  }

  return (
    <div>
      <h1>Meal Planner App</h1>
      <Searchbar onSearch={handleSearch} />     {/* render the Searchbar */}
      <Gallery results={results} />       {/* render the Gallery */}
      <RecipeCard />    {/* render the RecipeCard */}
    </div>
  )
}

export default App
