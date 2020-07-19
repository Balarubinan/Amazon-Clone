import proimg from "./images/amazon-watch.jpg";
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => parseInt(item.price) + amount, 0);
export const initialState = {
  basket: [],
  user: null,
};
function reducer(state, action) {
  console.log(action);
  console.log(action.type);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding item for basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
      var new_basket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        console.log("ITem found");
        new_basket.splice(index, 1);
      } else {
        console.warn("No item Found!");
      }
      return {
        ...state,
        basket: new_basket,
      };
      //logic for removing item for basket
      break;
    default:
      return state;
  }
}
export default reducer;
