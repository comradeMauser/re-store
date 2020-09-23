const initState = {
    booksList: {
        books: [],
        loading: true,
        error: null,
    },
    order: {
        orderedBooks: [],
        orderAmount: 13666,
    },

};

const updateCart = (state, payload, value) => {
    const book = state.books.find(book => book.id === payload)
    const indexInOrder = state.orderedBooks.findIndex(el => el.id === payload)

    return updateBook(state, indexInOrder, book, value)
};

//books counter changing
const updateBook = (state, indexInOrder, book, value) => {
    //remove position if no value
    if (value) {
        //others operations with counters
        if (indexInOrder > -1) {
            const counter = state.orderedBooks[indexInOrder].count
            //others operations with clones
            if (counter <= 0) {
                return updateBook(state, indexInOrder, book)
            } else
                return cloneBook(state, indexInOrder, book, value)
        }
        //adding not cloned books
        else {
            return {
                ...state,
                orderedBooks: [
                    ...state.orderedBooks,
                    book
                ]
            }
        }
    } else {
        return {
            ...state,
            orderedBooks: [
                ...state.orderedBooks.slice(0, indexInOrder),
                ...state.orderedBooks.slice(indexInOrder + 1),
            ]
        }
    }
};

// f() will create position with clones in list orders, then => updated state with this position
const cloneBook = (state, indexInOrder, book, value) => {
    //new updated position/line in the cart
    const cloneBook = {
        ...book,
        price: state.orderedBooks[indexInOrder].price + (book.price * value),
        count: state.orderedBooks[indexInOrder].count + (book.count * value),
    };

    return {
        ...state,
        orderedBooks: [
            ...state.orderedBooks.slice(0, indexInOrder),
            cloneBook,
            ...state.orderedBooks.slice(indexInOrder + 1)
        ]
    }
};
const updateBookList = (state, action) => {
    switch (action.type) {
        case "FETCH_BOOKS_FAILURE":
            return {
                books: [],
                loading: false,
                error: action.payload
            };
        case "FETCH_BOOKS_REQUEST":
            return {
                books: [],
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
            console.log("[eq!")
    }
};
const updateOrder = (state, action) => {
    switch (action.type) {

        case "BOOKS_ADDED":
            // this case includes functions Adding and Increase books count
            return updateCart(state, action.payload, 1);

        case "BOOK_DECREASE":
            // this case will Decrease by one books count or remove chosen position if it count equals 0
            return updateCart(state, action.payload, -1);

        case "BOOK_DELETE":
            return updateCart(state, action.payload);

        default:
            console.log("suck my balls, shithead!")
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
            // this case includes functions Adding and Increase books count
            return updateCart(state, action.payload, 1);

        case "BOOK_DECREASE":
            // this case will Decrease by one books count or remove chosen position if it count equals 0
            return updateCart(state, action.payload, -1);

        case "BOOK_DELETE":
            return updateCart(state, action.payload);

        default:
            return state
    }
};

export default reducer;
