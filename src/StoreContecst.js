import React from "react";
import store from "./Component/Redux/reduxstore";

const StoreContext = React.createContext(null)

export default StoreContext
export const Provider = (props) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}


