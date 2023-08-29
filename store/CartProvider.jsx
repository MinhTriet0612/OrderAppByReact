import { useReducer } from "react";
import CartConText from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = [...state.items];
    const idOfItemsForCheckisAvailable = state.items.map((item) => item.id);
    if (!idOfItemsForCheckisAvailable.includes(action.item.id)) {
      updatedItems.push(action.item);
    } else {
      const currentIndexOfElement = idOfItemsForCheckisAvailable.indexOf(
        action.item.id
      );
      updatedItems[currentIndexOfElement].amount += action.item.amount;
    }
    const updatedAmountTotal =
      state.totalAmount + action.item.price * action.item.amount;
    return { items: updatedItems, totalAmount: updatedAmountTotal };
  } else if ((action.type = "REMOVE")) {
    const updatedItems = [...state.items];
    const idOfItemsForCheckisAvailable = state.items.map((item) => item.id);
    const indexToDelete = idOfItemsForCheckisAvailable.indexOf(action.item.id);

    const currentAmount = (updatedItems[indexToDelete].amount -=
      action.item.amount);
    if (currentAmount === 0) {
      const updatedAmountTotal =
        state.totalAmount - action.item.price * action.item.amount;
      updatedItems.splice(indexToDelete, 1);
      return { items: updatedItems, totalAmount: updatedAmountTotal };
    } else {
      const total = state.totalAmount - action.item.price * action.item.amount;
      return { items: updatedItems, totalAmount: total };
    }
  }
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (item) => {
    dispatchCartAction({ type: "REMOVE", item: item });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartConText.Provider value={cartContext}>
      {props.children}
    </CartConText.Provider>
  );
};
export default CartProvider;
