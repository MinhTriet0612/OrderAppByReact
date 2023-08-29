import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartConText from "../../store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartConText);
  const AddAmount = (item) => {
    return cartCtx.addItem(item);
  };
  const RemoveAmount = (item) => {
    cartCtx.removeItem(item);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          price={item.price}
          amount={item.amount}
          name={item.name}
          onRemove={() =>
            RemoveAmount({
              id: item.id,
              name: item.name,
              description: item.description,
              price: item.price,
              amount: 1,
            })
          }
          onAdd={() =>
            AddAmount({
              id: item.id,
              name: item.name,
              description: item.description,
              price: item.price,
              amount: 1,
            })
          }
        />
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClick} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
