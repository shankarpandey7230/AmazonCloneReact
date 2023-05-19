// here we define all the application level states and define actions to make the changes to the state

export const initialState = {
  basket: [],
};

//Selector

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

    case "REMOVE_FROM_BASKET":
      // eslint-disable-next-line no-case-declarations
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      // eslint-disable-next-line no-case-declarations
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product(id: ${action.id}) as its not in the basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
