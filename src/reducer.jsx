// defining all application level states and action definition to make changes to the state

export const initialState = {
  basket: [],
};

//selector

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
  }
  return state;
};

export default reducer;
