import { Cross1Icon, CrossCircledIcon, Pencil1Icon } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./RecipeCard.css";

export const RecipeCard = ({ recipe }) => {
  const [imageLoading, setImageLoading] = useState(true);
  return (
    <div className="recipecard">
      <div className="recipecard-header">
        <div className="recipecard-img-container">
          {recipe?.image && (
            <img
              src={recipe?.image}
              style={{
                visibility: recipe?.image && imageLoading ? "hidden" : "",
              }}
              onLoad={() => setImageLoading(false)}
            />
          )}
          <div className="recipecard-icon-container">
            <EditModal recipe={recipe}>
              <Pencil1Icon />
            </EditModal>
            <CrossCircledIcon onClick={deleteRecipeHandler} />
          </div>
        </div>
      </div>
      <div className="recipecard-info">
        <h4>{recipe?.name}</h4>
        <div>
          <span>Cuisine Type</span>
          <span>{recipe?.type}</span>
        </div>
        <div>
          <span>Ingredients</span>
          <Link to={`/recipe/${recipe?.id}`}>{"view >"}</Link>
        </div>
        <div>
          <span>Instruction</span>
          <Link to={`/recipe/${recipe?.id}`}>{"view >"}</Link>
        </div>
      </div>
    </div>
  );
};
