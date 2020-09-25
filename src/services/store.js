import {applyMiddleware, createStore} from "redux";
import reducer from "./reducer";

const logMiddleware = () => (next) => (action) => {
    console.debug(action.type);
    return next(action)
};

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === "string") {
        return next({
            type: action
        })
    }
    return next(action)
};

const store = createStore(reducer, applyMiddleware(stringMiddleware, logMiddleware));

export default store;