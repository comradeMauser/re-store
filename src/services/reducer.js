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


const updOrder = (state, indexInOrder, book, value) => {

    if (indexInOrder > -1) {
        console.log(`hi, if ${value}`)

        return cloneBook(state, indexInOrder, book, value)

    } else {
        console.log(`hi, else ${value}`)

        return {
            ...state,
            orderedBooks: [
                ...state.orderedBooks,
                book
            ]
        }
    }
}


// f() will create position with clones in list orders, then => updated state with this position
const cloneBook = (state, indexInOrder, book, value) => {
    console.log("value:", value)
    //new updated position/line in the cart
    const cloneBook = {
        ...book,
        // price: book.price + state.orderedBooks[indexInOrder].price,
        // count: book.count + state.orderedBooks[indexInOrder].count,
        price: state.orderedBooks[indexInOrder].price + (book.price * value),
        count: state.orderedBooks[indexInOrder].count + (book.count * value),
    };
    console.debug(`${book.price},
    ${book.count}`)
    //new state
    return {
        ...state,
        orderedBooks: [
            ...state.orderedBooks.slice(0, indexInOrder),
            cloneBook,
            ...state.orderedBooks.slice(indexInOrder + 1)
        ]
    }
};

const addBook = (state, book) => {
    console.log("addBook()")
    return {
        ...state,
        orderedBooks: [
            ...state.orderedBooks,
            book
        ]
    }
};

const decBook = (state, indexInOrder, book) => {
    //new updated position/line in the cart
    const decrBook = {
        ...book,
        price: state.orderedBooks[indexInOrder].price - book.price, //compute it later; done!
        count: state.orderedBooks[indexInOrder].count - 1, //or book.count
    };
    const counter = decrBook.count
    const newState = {
        ...state,
        orderedBooks: [
            ...state.orderedBooks.slice(0, indexInOrder),
            decrBook,
            ...state.orderedBooks.slice(indexInOrder + 1)
        ]
    }
    return counter > -1 ? newState : deleteBook(state, indexInOrder)
};

const deleteBook = (state, indexInOrder) => {
    return {
        ...state,
        orderedBooks: [
            ...state.orderedBooks.slice(0, indexInOrder),
            ...state.orderedBooks.slice(indexInOrder + 1),
        ]
    }
};

const reducer = (state = initState, action) => {
    console.debug(action.type)
    const bookId = action.payload
    const book = state.books.find(book => book.id === bookId)
    const indexInOrder = state.orderedBooks.findIndex(el => el.id === bookId)

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
            // if clone => updated position, else usual adding
            /*   return indexInOrder > -1 ?
                   cloneBook(state, indexInOrder, book) : addBook(state, book);
   */
            return updOrder(state, indexInOrder, book, 1);

        case "BOOK_INCREASE":
            return updOrder(state, indexInOrder, book, 1);

        case "BOOK_DECREASE":
            // return decBook(state, indexInOrder, book)
            return updOrder(state, indexInOrder, book, -1)

        case "BOOK_DELETE":
            return deleteBook(state, indexInOrder);

        //default action
        default:
            return state
    }
};

export default reducer;
