import { Buy_Apple, Buy_Orange } from "./TypeFurit"

export const BuyApple=(count)=>{
    return {
        type:Buy_Apple,
        payload:count
    }
}

export const BuyOrange=(count)=>{

    return {
        type:Buy_Orange,
        payload:count
    }
}