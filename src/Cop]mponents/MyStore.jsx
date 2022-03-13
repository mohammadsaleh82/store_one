import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import BuyPitza from "../Redux/Food/FoodAction"
import { BuyApple, BuyOrange } from "../Redux/Fruit/ActionFruit"

const MyStore = () => {

const [count,setCount]=useState({
    apple:1,
    orange:1,
    pitza:1
})

    const { apple, orange } = useSelector(state => state.fruit)
    const { pitza } = useSelector(state => state.food)
    const dispatch = useDispatch()

    return (
        <div className="main">
            <div>
                <h3>تعداد سیب ها: {apple}</h3>
                <h3>تعداد پرتقال ها: {orange}</h3>
                <h3>تعداد پیتزا ها: {pitza}</h3>
                <div>
                    <input type="number" onChange={(e)=>setCount({...count,apple:e.target.value})} value={count.apple} placeholder="نعداد سیب"  />
                    <button className="apple" onClick={() => dispatch(BuyApple(count.apple))}>خرید سیب</button>
                </div>

                <div>
                    <input type="number" onChange={(e)=>setCount({...count,orange:e.target.value})} value={count.orange} placeholder="تعداد پرتقال"  />
                    <button className="orange" onClick={() => dispatch(BuyOrange(count.orange))}>خرید پرتقال</button>
                </div>

                <div>
                    <input type="number" onChange={(e)=>setCount({...count,pitza:e.target.value})} value={count.pitza} placeholder="تعداد ساندویچ" />
                    <button className="pit" onClick={() => dispatch(BuyPitza(count.pitza))}>خرید ساندویچ </button>
                </div>
            </div>

        </div>
    )
}

// const StateToProps = state => {
//     return {
//         apple: state.apple,
//         orange: state.orange
//     }
// }

// const dispatchToProps = dispatch => {
//     return {
//         BuyApple: () => dispatch(BuyApple()),
//         BuyOrange: () => dispatch(BuyOrange())
//     }
// }
// export default connect(StateToProps, dispatchToProps)(MyStore);

export default MyStore;