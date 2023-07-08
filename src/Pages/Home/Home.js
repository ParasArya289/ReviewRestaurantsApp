import { Filterbar } from "../../Components/Filterbar/Filterbar";
import { RecipeCard } from "../../Components/RecipeCard/RecipeCard";
import { useData } from "../../Context/dataContext";
import "./Home.css";

export const Home = () => {
  const {
    dataState: { filteredData },
  } = useData();
  console.log(filteredData);
  return (
    <div className="home">
      <Filterbar />
      {filteredData?.map((restraunt) => {
        return (
          <>
            <h2>Dishes By <span>{restraunt?.name}</span></h2>
            <div className="home-recipe-container">
              {restraunt?.menu?.map(({ recipe }) => (
                <RecipeCard recipe={recipe} />
              ))}
            </div>
          </>
        );
      })}
    </div>
  );
};
