import { cuisineData, restaurantsData } from "../db";

export const initDataState = {
  cuisineData: [...cuisineData],
  restaurantsData: [...restaurantsData],
  filteredData: [],
  user: [],
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "INIT_FILTERED_DATA":
      return {
        ...state,
        filteredData: [...action.payload],
      };
  }
};
