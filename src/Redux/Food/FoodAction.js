import { Buy_Pitza } from "./FoodType"

export const BuyPitza = (count) => {
    return {
        type: Buy_Pitza,
        payload:count
    }
}

export default BuyPitza;