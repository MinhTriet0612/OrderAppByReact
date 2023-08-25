import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css'

const MealItem = ({ Obj }) => {
    const Price = `$${Obj.price.toFixed(2)}`;

    return (
        <li className={classes.meal}>
            <div>
                <h3>{Obj.name}</h3>
                <div className={classes.description}>{Obj.description}</div>
                <div className={classes.price}>{Price}</div>
            </div>
            <div>
                <MealItemForm />
            </div>
        </li>
    )
}


export default MealItem;