const initState = {
    books: [],
    loading: true,
    error: null,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "ERROR":
            return {
                ...initState,
                loading: false,
                error: action.payload
            };
        case "REQUEST":
            return {
                ...initState,
                loading: true,
                error: false,
            };
        case "LOADED":
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
