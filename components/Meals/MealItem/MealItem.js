import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css'
import { useCallback, useContext, useState } from 'react';
import CartConText from '../../../store/cart-context';

const MealItem = ({ Obj }) => {
    const cartCtx = useContext(CartConText)
    const Price = `$${Obj.price.toFixed(2)}`;
    const addToCartHandler = (amount) => {
        cartCtx.addItem({ id: Obj.id, name: Obj.name, amount: amount, price: Obj.price })
    }
    return (
        <li className={classes.meal}>
            <div>
                <h3>{Obj.name}</h3>
                <div className={classes.description}>{Obj.description}</div>
                <div className={classes.price}>{Price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}

export default MealItem;