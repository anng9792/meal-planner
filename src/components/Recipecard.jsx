import { useState } from "react";

function RecipeCard({ recipe }) {
  const [hovered, setHovered] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(recipe.link || window.location.href);
    alert("Recipe link copied to clipboard!");
  };

  return (
    <div
      className="recipe-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <h3>{recipe.title}</h3>
      <p>{recipe.cookTime}</p>

      {hovered && (
        <div className="hover-buttons">
          <button onClick={() => window.open(recipe.link, "_blank")}>
            View
          </button>
        </div>
      )}
    </div>
  );
}

export default RecipeCard;
