export const productReducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_PRODUCT":
      const data = Object.values(action.payload);
      return data;

    default:
      return state;
  }
};
