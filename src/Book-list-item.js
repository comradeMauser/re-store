import React from 'react';
import "./book-list-item.css";


const BookListItem = ({book}) => {
    const {id, price, title, author, coverImage} = book
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImage} alt="cover"/>
            </div>
            <div className="books-details">
                <a className="book-title" href={`/books/${id}`}>{title}</a>
                <div className="book-author">{author}</div>
                <div className="book-id">article: {id}</div>
                <div className="book-price">price: {price}</div>
            </div>
        </div>
    );
};

export default BookListItem;