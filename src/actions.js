const booksLoaded = (newBooks) => {
    return {
        type: "LOADED",
        payload: newBooks
    }
};

export default booksLoaded;