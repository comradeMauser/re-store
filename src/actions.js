const booksRequest = () => {
    return {
        type: "REQUEST",
    }
};

const booksLoaded = (newBooks) => {
    return {
        type: "LOADED",
        payload: newBooks
    }
};

export {booksLoaded, booksRequest};