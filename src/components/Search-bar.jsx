import { useState } from 'react'

function Searchbar() {
  const [ingredients, setIngredients] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [filters, setFilters] = useState([])

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault()
      setIngredients([...ingredients, inputValue])
      setInputValue('')
    }
  }

  const removeIngredient = (ingredient) => {
    setIngredients(ingredients.filter(i => i !== ingredient))
  }

  const toggleFilter = (filter) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter(f => f !== filter))
    } else {
      setFilters([...filters, filter])
    }
  }

  return (
    <div className="search-container">
      {/* Search row */}
      <div className="search-bar-row">
        <input 
          type="text"
          id="recipe-search"
          placeholder="Search recipes..."
        />
        <button id="search-btn">Search</button>
      </div>

      {/* Ingredient entry */}
      <div className="ingredient-input">
        <input 
          type="text"
          id="ingredient-entry"
          placeholder="Add ingredients you already have (press Enter)"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <div id="ingredient-list">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="ingredient-tag">
              {ingredient} <span onClick={() => removeIngredient(ingredient)}>&times;</span>
            </div>
          ))}
        </div>
      </div>

      {/* Filter buttons */}
      <div className="filters">
        {['Vegan','Vegetarian','High Protein','Quick','Budget-Friendly','Top-Rated'].map((filter) => (
          <button 
            key={filter}
            className={`filter-btn ${filters.includes(filter) ? 'active' : ''}`}
            onClick={() => toggleFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Search-bar
