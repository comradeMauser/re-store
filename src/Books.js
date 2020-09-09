import React from 'react';
import BookList from "./Book-list";


const Books = () => {
    const books = [
        {
            id: 1,
            author: "Ivan Yefremov",
            title: "Andromeda Nebula",
            price: 99,
        }, {
            id: 2,
            author: "Victor Pelevin",
            title: "Generation P",
            price: 88,
        }
    ]

    return (
        <BookList books={books}/>
    );
};

export default Books;