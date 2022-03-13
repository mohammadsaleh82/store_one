import { Provider } from "react-redux";
import MyStore from "./MyStore"
import store from "../Redux/store"

const App = () => {

    return (
        <Provider store={store}>
            <MyStore />
        </Provider>

    )
}

export default App;