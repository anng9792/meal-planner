function Gallery({ results }) {
  return (
    <div id="gallery" className="gallery">
      <h2 className="gallery_title">Gallery</h2>
      <div id="gallery_grid" className="gallery_grid">
        {results.map((recipe) => (
          <div key={recipe.id} className="gallery_card">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="gallery_image"
            />
            <h3 className="card-title">{recipe.title}</h3>
            <p className="cooktime">⏱ {recipe.cookTime}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
