import { useParams } from "react-router-dom";
import AddReviewDialogBox from "../../Components/AddReviewDialogBox/AddReviewDialogBox";
import { useData } from "../../Context/dataContext";
import "./Restraunt.css";

export const Restraunt = () => {
  const { restrauntId } = useParams();
  const {
    dataState: { restaurantsData },
  } = useData();
  console.log(restaurantsData);
  const foundRestaurant = restaurantsData?.find(
    ({ id }) => +id === +restrauntId
  );

  return (
    <div className="restaurant">
      <div className="restaurant-container">
        <div className="restaurant-container-info-container">
          <div className="restaurant-container-info">
            <h1>{foundRestaurant?.name}</h1>
            <p>{foundRestaurant?.address}</p>
            <p>{foundRestaurant?.phone}</p>
            <p> Average rating: {"3.3"}</p>
          </div>

          <AddReviewDialogBox rstId={restrauntId}>
            <div className="restaurant-container-action">
              <button>Add Review</button>
            </div>
          </AddReviewDialogBox>
        </div>
        <hr />

        <h3>Reviews</h3>
        {foundRestaurant?.ratings?.map((review) => (
          <>
            <div className="restaurant-container-review">
              <div className="review-user">
                <div className="review-user-header">
                  <img src={review?.pp} height="40" />
                  <span>{review?.revName}</span>
                </div>
                <p>{review?.comment}</p>
              </div>
              <div className="review-user-rating">{review?.rating}</div>
            </div>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
};
