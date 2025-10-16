import { useState } from 'react'

function Searchbar({ onSearch }) {
  const [ingredients, setIngredients] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [filters, setFilters] = useState([])
  const [query, setQuery] = useState('')

const handleSearch = () => {
  onSearch({ query, ingredients, filters })
}

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
    setFilters(
      filters.includes(filter)
        ? filters.filter(f => f !== filter)
        : [...filters, filter]
    )
  }

  return (
    <div className="search-container">
      <div className="search-bar-row">
        <input 
        type="text" 
        id="recipe-search" 
        placeholder="Search recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />
        <button 
        id="search-btn"
        onClick={handleSearch}>Search</button>
      </div>

      <div className="ingredient-input">
        <input
          type="text"
          id="ingredient-entry"
          placeholder="Add ingredients (press Enter)"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <div id="ingredient-list">
          {ingredients.map((ingredient, i) => (
            <div key={i} className="ingredient-tag">
              {ingredient}
              <span onClick={() => removeIngredient(ingredient)}>&times;</span>
            </div>
          ))}
        </div>
      </div>

      <div className="filters">
        {['Vegan','Vegetarian','High Protein','Quick','Budget-Friendly','Top-Rated'].map(filter => (
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

export default Searchbar
