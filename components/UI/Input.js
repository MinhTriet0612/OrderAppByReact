import classes from './Input.module.css'
import React from 'react';
const Input = React.forwardRef(function Input(props, ref) {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} onChange={props.onChange} {...props.input} />
    </div>
    // nguyen minh triet
});
export default Input;