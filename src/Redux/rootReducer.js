import { combineReducers } from "redux";
import FruitReduicer from "./Fruit/FruitReducer";
import FoodReducer from "./Food/FoodReducer";

const root=combineReducers({
    fruit:FruitReduicer,
    food:FoodReducer
})

export default root;