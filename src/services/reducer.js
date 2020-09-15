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

const reducer = (state = initState, action) => {
    console.debug(action.type)
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
            const id = action.payload
            const book = state.books.find(book => book.id === id)
            const newBook = {
                id: book.id,
                author: book.author,
                title: book.title,
                price: book.price,
                count: book.count,
                coverImage: book.coverImage,
            }
            return {
                ...state,
                orderedBooks: [
                    ...state.orderedBooks,
                    newBook
                ]
            };
        default:
            return state
    }
};

export default reducer;
