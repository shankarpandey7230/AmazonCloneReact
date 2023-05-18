// defining all application level states and action definition to make changes to the state

export const initialState = {
  basket: [],
};

//selector
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
