import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import classes from './MealsSummary.module.css';


const Meals = () => {
    return <div className={classes.meals}>
        <MealsSummary />
        <AvailableMeals />
    </div>
}

export default Meals;