import { Buy_Pitza } from "./FoodType"

const Foods = {
    pitza: 12
}

const FoodReducer = (state = Foods, action) => {

    switch (action.type) {
        case Buy_Pitza:
            return { ...state, pitza: state.pitza - action.payload}

        default:
            return state
    }
}

export default FoodReducer;