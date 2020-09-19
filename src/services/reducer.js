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
const clonesBooks = (state, indexInOrder, book) => {
    //new updated position/line in the cart
    const cloneBook = {
        ...book,
        price: book.price + state.orderedBooks[indexInOrder].price, //compute later; upd: done!
        count: book.count + state.orderedBooks[indexInOrder].count,
    };
    //new state
    return {
        ...state,
        orderedBooks: [
            ...state.orderedBooks.slice(0, indexInOrder),
            cloneBook,
            ...state.orderedBooks.slice(indexInOrder + 1)
        ]
    }
}; // rewrite with index only

const addedBook = (state, book) => {
    return {
        ...state,
        orderedBooks: [
            ...state.orderedBooks,
            book
        ]
    }
};

const decBook = (state, decIndex, book) => {
    // if < 0 condition add later
    const decBook = {
        ...book,
        price: state.orderedBooks[decIndex].price - book.price, //compute it later; done!
        count: state.orderedBooks[decIndex].count - 1, //or book.count
    };

    return {
        ...state,
        orderedBooks: [
            ...state.orderedBooks.slice(0, decIndex),
            decBook,
            ...state.orderedBooks.slice(decIndex + 1)
        ]
    }
}
const reducer = (state = initState, action) => {
    // console.debug(action.type)
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
            return indexInOrder > -1 ?
                clonesBooks(state, indexInOrder, book) : addedBook(state, book);

        case "BOOK_INCREASE":
            console.debug("INC", action.payload);
            return clonesBooks(state, indexInOrder, book);

        case "BOOK_DECREASE":
            // console.log("decIndex:", decIndex)
            // console.log("state.orderedBooks[decIndex]:", state.orderedBooks[decIndex])
            // console.debug("DECREASE", action.payload);
            const decIndex = state.orderedBooks.findIndex(el => el.id === bookId)
            /*const decBook = {
                ...book,
                price: state.orderedBooks[decIndex].price - book.price, //compute it later;
                count: state.orderedBooks[decIndex].count - 1,
            }
            return {
                ...state,
                orderedBooks: [
                    ...state.orderedBooks.slice(0, decIndex),
                    decBook,
                    ...state.orderedBooks.slice(decIndex + 1)
                ]
            }*/
            return decBook(state, decIndex, book)

        case "BOOK_DELETE":
            console.debug("DELETE", action.payload);
            return state;

        //default action
        default:
            return state
    }
};

export default reducer;
