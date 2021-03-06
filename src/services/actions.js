export const booksAdded = (bookId) => {
    return {
        type: "BOOKS_ADDED",
        payload: bookId,
    }
};

export const bookDecrease = (bookId) => {
    return {
        type: "BOOK_DECREASE",
        payload: bookId,
    }
};

export const bookDelete = (bookId) => {
    return {
        type: "BOOK_DELETE",
        payload: bookId,
    }
};

const booksError = (err) => {
    return {
        type: "FETCH_BOOKS_FAILURE",
        payload: err
    }
};

const booksRequest = () => {
    return {
        type: "FETCH_BOOKS_REQUEST",
    }
};

const booksLoaded = (newBooks) => {
    return {
        type: "FETCH_BOOKS_SUCCESS",
        payload: newBooks
    }
};

const fetchBooks = (booksService, dispatch) => () => {
    dispatch(booksRequest())
    booksService.getBooks()
        .then((data) => {
            dispatch(booksLoaded(data))
        })
        .catch((error) => {
            dispatch(booksError(error))
        })
};

export default fetchBooks