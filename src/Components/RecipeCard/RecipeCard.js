import { useState } from "react";
import { Link } from "react-router-dom";
import "./RecipeCard.css";

export const RecipeCard = ({ recipe }) => {
  console.log(recipe)
  const [imageLoading, setImageLoading] = useState(true);
  return (
    <div className="recipecard">
      <div className="recipecard-header">
        <div className="recipecard-img-container">
          {recipe?.imgSrc && (
            <img
              src={recipe?.imgSrc}
              style={{
                visibility: recipe?.imgSrc && imageLoading ? "hidden" : "",
              }}
              onLoad={() => setImageLoading(false)}
            />
          )}
          <div className="recipecard-icon-container">
            {/* <EditModal recipe={recipe}>
              <Pencil1Icon />
            </EditModal>
            <CrossCircledIcon onClick={deleteRecipeHandler} /> */}
          </div>
        </div>
      </div>
      <div className="recipecard-info">
        <h4>{recipe?.name}</h4>
        <div>
          <span>Rs.{recipe?.price} for {recipe?.qty}</span>
        </div>
        <div>
          <span>{recipe?.rstName}</span>
        </div>
      </div>
    </div>
  );
};
