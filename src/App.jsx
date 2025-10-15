import { useState } from 'react'
import Searchbar from './components/Searchbar'
import Gallery from './components/Gallery'
import RecipeCard from './components/RecipeCard'
import { recipes } from './data/recipes'
import './index.css'

function App() {
  const [results, setResults] = useState([])
  
  const handleSearch = ({ query, ingredients, filters }) => {
    console.log("Searching for:", query)
    console.log("With ingredients", ingredients)
    console.log("Filters:", filters)

    let filtered = recipes

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
