import RecipeCard from "./RecipeCard";

function Gallery({ results }) {
  return (
    <div id="gallery" className="gallery">
      <h2 className="gallery_title"></h2>
      <div id="gallery_grid" className="gallery_grid">
        {results.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Gallery
