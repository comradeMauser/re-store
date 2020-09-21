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

//books counter changing
const updateOrder = (state, indexInOrder, book, value) => {
    //remove position if no value
    if (value) {

        //others operations with counters
        if (indexInOrder > -1) {
            const counter = state.orderedBooks[indexInOrder].count
            //others operations with clones
            if (counter <= 0) {
                return updateOrder(state, indexInOrder, book)
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

const reducer = (state = initState, action) => {
    // console.debug(action.type)
    const book = state.books.find(book => book.id === action.payload)
    const indexInOrder = state.orderedBooks.findIndex(el => el.id === action.payload)
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
            return updateOrder(state, indexInOrder, book, 1);

        case "BOOK_DECREASE":
            // this case will Decrease by one books count or remove chosen position if it count equals 0
            return updateOrder(state, indexInOrder, book, -1)

        case "BOOK_DELETE":
            return updateOrder(state, indexInOrder, book)

        default:
            return state
    }
};

export default reducer;
