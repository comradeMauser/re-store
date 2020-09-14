const initState = {
    books: [],
    loading: true,
    error: null,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_BOOKS_FAILURE":
            return {
                ...initState,
                loading: false,
                error: action.payload
            };
        case "FETCH_BOOKS_REQUEST":
            return {
                ...initState,
                loading: true,
                error: false,
            };
        case "FETCH_BOOKS_SUCCESS":
            return {
                books: action.payload,
                loading: false,
                error: false,
            };
        default:
            return state
    }
};

export default reducer;
