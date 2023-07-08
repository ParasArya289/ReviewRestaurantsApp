import { restaurantsData } from "../db";

export const filterData = (cusineId, dispatch) => {
  let filteredArr = [];
  if (cusineId) {
    filteredArr = restaurantsData?.filter(
      ({ cuisine_id }) => +cusineId === +cuisine_id
    );
  }
  dispatch({ type: "INIT_FILTERED_DATA", payload: filteredArr });
};
