import { Filterbar } from "../../Components/Filterbar/Filterbar";
import { RecipeCard } from "../../Components/RecipeCard/RecipeCard";
import { useData } from "../../Context/dataContext";
import "./Home.css";

export const Home = () => {
  const {
    dataState: { filteredData },
  } = useData();
  
  return (
    <div className="home">
      <h1>Food Ordering App</h1>
      <Filterbar />
      {filteredData?.map((restraunt) => {
        return (
          <>
            <h2>
              Dishes By <span>{restraunt?.name}</span>
            </h2>
            <div className="home-recipe-container">
              {restraunt?.menu?.map((recipe) => (
                <RecipeCard recipe={{ ...recipe, rstName: restraunt?.name,rstId:restraunt?.id }}/>
              ))}
            </div>
          </>
        );
      })}
    </div>
  );
};
