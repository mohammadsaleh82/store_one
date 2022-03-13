import { Buy_Apple, Buy_Orange } from "./TypeFurit"

const fruitState = {
    apple: 124,
    orange: 14
}

const FruitReduicer = (state = fruitState, action) => {

    switch (action.type) {


        case Buy_Apple:
            return { ...state, apple: state.apple - action.payload }


        case Buy_Orange:
            return { ...state, orange: state.orange - action.payload }


        default: return state
    }

}

export default FruitReduicer;