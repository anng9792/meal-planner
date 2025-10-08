import Searchbar from './components/Searchbar'
import Gallery from './components/Gallery'
import RecipeCard from './components/RecipeCard'  // 👈 fixed casing
import './index.css'

function App() {
  return (
    <div>
      <h1>Meal Planner App</h1>
      <Searchbar />     {/* render the Searchbar */}
      <Gallery />       {/* render the Gallery */}
      <RecipeCard />    {/* render the RecipeCard */}
    </div>
  )
}

export default App
