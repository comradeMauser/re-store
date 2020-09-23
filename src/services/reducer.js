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
    const {booksList: {books}, order} = state
    const book = books.find(book => book.id === payload)
    const indexInOrder = order.orderedBooks.findIndex(el => el.id === payload)

    return updateBook(order, indexInOrder, book, value)
};

//books counter changing
const updateBook = (order, indexInOrder, book, value) => {
    const {orderedBooks} = order
    //remove position if no value
    if (value) {
        //others operations with counters
        if (indexInOrder > -1) {
            const counter = orderedBooks[indexInOrder].count
            //others operations with clones
            if (counter <= 0) {
                return updateBook(order, indexInOrder, book)
            } else
                return cloneBook(order, indexInOrder, book, value)
        }
        //adding not cloned books
        else {
            return {
                ...order,
                orderedBooks: [
                    ...orderedBooks,
                    book
                ]
            }
        }
    } else {
        return {
            ...order,
            orderedBooks: [
                ...orderedBooks.slice(0, indexInOrder),
                ...orderedBooks.slice(indexInOrder + 1),
            ]
        }
    }
};

// f() will create position with clones in list orders, then => updated state with this position
const cloneBook = (order, indexInOrder, book, value) => {
    const {orderedBooks} = order
    //new updated position/line in the cart
    const cloneBook = {
        ...book,
        price: orderedBooks[indexInOrder].price + (book.price * value),
        count: orderedBooks[indexInOrder].count + (book.count * value),
    };

    return {
        ...order,
        orderedBooks: [
            ...orderedBooks.slice(0, indexInOrder),
            cloneBook,
            ...orderedBooks.slice(indexInOrder + 1)
        ],
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
            return state
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
            return state
    }
};

const reducer = (state = initState, action) => {
    // console.debug(action.type)
    switch (action.type) {
        case "FETCH_BOOKS_FAILURE":
        case "FETCH_BOOKS_REQUEST":
        case "FETCH_BOOKS_SUCCESS":
            return {
                ...state,
                booksList: updateBookList(state, action)
            };

        case "BOOKS_ADDED":
        case "BOOK_DECREASE":
        case "BOOK_DELETE":
            return {
                ...state, order: updateOrder(state, action)
            };

        default:
            return state
    }
};

export default reducer;
