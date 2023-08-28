import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';
import { useState, useRef } from 'react';
import React from 'react';
const MealItemForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef(0)
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false)
            return;
        }
        else {
            setAmountIsValid(true)
        }
        console.log(enteredAmount);
        props.onAddToCart(enteredAmountNumber);
    }
    return (

        <form className={classes.form} onSubmit={submitHandler} >
            <Input label='Amount'
                ref={amountInputRef}
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: 1,
                    max: 5,
                    defaultValue: 1,
                }} />
            <button >+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount</p>}
        </form >
    )
}

export default MealItemForm;