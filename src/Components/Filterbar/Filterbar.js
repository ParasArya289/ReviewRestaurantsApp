import { useEffect, useState } from "react";
import { useData } from "../../Context/dataContext";
import { cuisineData } from "../../db";
import { filterData } from "../../Utils/Utils";
import "./Filterbar.css";

export const Filterbar = () => {
  const [currentCuisine, setCurrentCuisine] = useState("");
  console.log(currentCuisine)
  const { dispatchData } = useData();
  useEffect(() => {
    filterData(currentCuisine, dispatchData);
  }, [currentCuisine]);
  return (
    <div className="filterbar">
      <h3>Select Your Cuisine</h3>
      {cuisineData?.map((recipe) => (
        <button
          key={recipe.id}
          className="filterbar-btn"
          value={recipe?.id}
          onClick={(e) => setCurrentCuisine(e.target.value)}
        >
          {recipe?.name}
        </button>
      ))}
    </div>
  );
};
