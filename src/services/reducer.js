import updateBooksList from "./reducers/updateBooksList";
import updateOrder from "./reducers/updateOrder";

//initState was not removed for the edification of posterity
const initState = {
    booksList: {
        books: [],
        loading: true,
        error: null,
    },
    order: {
        orderedBooks: [],
        orderAmount: 0,
    },

};

const reducer = (state = initState, action) => {
    return {
        booksList: updateBooksList(state, action),
        order: updateOrder(state, action)
    }
};

export default reducer;
