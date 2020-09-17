const initState = {
    books: [],
    loading: true,
    error: null,
    orderedBooks: [
        /*{
            id: 5,
            author: "Author5",
            title: "Book5",
            price: 999,
            coverImage: "https://data.fantlab.ru/images/editions/big/5684",
        }, {
            id: 6,
            author: "Author6",
            title: "Book6",
            price: 999,
            coverImage: "https://data.fantlab.ru/images/editions/big/5684",
        }, {
            id: 7,
            author: "Autho71",
            title: "Book7",
            price: 999,
            coverImage: "https://data.fantlab.ru/images/editions/big/5684",
        },*/
    ],
    orderAmount: 13666
};

// f() will create position with clones in list orders, then => updated state with this position
const clonesBooks = (state, cloneInCart, book) => {
    const cloneInCartIndex = state.orderedBooks.findIndex(el => el.id === cloneInCart.id)

    //new updated position/line in the cart
    const addedBook = {
        ...book,
        price: book.price * (cloneInCart.count + 1), //compute later; upd: done!
        count: book.count + cloneInCart.count,
    };

    //new state
    return {
        ...state,
        orderedBooks: [
            ...state.orderedBooks.slice(0, cloneInCartIndex),
            addedBook,
            ...state.orderedBooks.slice(cloneInCartIndex + 1)
        ]
    }
};

const addedBook = (state, book) => {
    return {
        ...state,
        orderedBooks: [
            ...state.orderedBooks,
            book
        ]
    }
};

const reducer = (state = initState, action) => {
    // console.debug(action.type)
    switch (action.type) {
        case "FETCH_BOOKS_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case "FETCH_BOOKS_REQUEST":
            return {
                ...state,
                loading: true,
                error: false,
            };
        case "FETCH_BOOKS_SUCCESS":
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: false,
            };
        case "BOOKS_ADDED":
            const bookId = action.payload
            const book = state.books.find(book => book.id === bookId)
            const cloneInCart = state.orderedBooks.find(el => el.id === bookId)
            // if clone => updated position, else usual adding
            return cloneInCart ?
                clonesBooks(state, cloneInCart, book) : addedBook(state, book);
        default:
            return state
    }
};

export default reducer;
