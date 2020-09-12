const initState = {
    books: [],
    loading: true,
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "REQUEST":
            return {
                ...initState,
                loading: true
            };
        case "LOADED":
            return {
                books: action.payload,
                loading: false
            };
        default:
            return state
    }
};

export default reducer;
