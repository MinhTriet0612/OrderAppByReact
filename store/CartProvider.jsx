import CartConText from "./cart-context";
const CartProvider = (props) => {
  const addItemHandler = (item) => {};

  const removeItemHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
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
