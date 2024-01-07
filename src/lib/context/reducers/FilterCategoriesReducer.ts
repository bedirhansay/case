export const FilterCategoriesReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_CAT":
      return action.payload;

    default:
      return state;
  }
};
