import { cuisineData } from "../../db";
import "./Filterbar.css";

export const Filterbar = () => {
  return (
    <div className="filterbar">
      <h3>Select Your Cuisine</h3>
      {cuisineData?.map((recipe) => (
        <button key={recipe.id} className="filterbar-btn">
          {recipe?.name}
        </button>
      ))}
    </div>
  );
};
