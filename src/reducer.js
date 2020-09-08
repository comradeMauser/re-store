const initState = {
    books: []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "LOADED":
            return {
                books: action.payload
            }
        default:
            return state
    }
};

export default reducer;
