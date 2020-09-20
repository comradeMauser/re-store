import React, {Component} from 'react';
import {connect} from "react-redux";
import BookListItem from "./Book-list-item";
import HocContext from "../services/hoc-context";
import fetchBooks, {booksAdded} from "../services/actions";
import Loader from "react-loader-spinner"
import "../styles/book-list.css";
import ErrorIndicator from "../services/Error-indicator";

const BookList = ({books, addToCart}) => {
    return (
        <ul className="book list list-group list-unstyled">
            {
                books.map(book => {
                    return (
                        <li key={book.id}
                            className="list-group-item"
                        >
                            <BookListItem book={book} addToCart={addToCart}/>
                        </li>
                    )
                })}
        </ul>
    );
};


class BookListContainer extends Component {

    componentDidMount() {
        const {fetchBooks} = this.props
        fetchBooks()
    }

    render() {
        console.debug(this.props.books)
        const {books, loading, error, addToCart} = this.props

        if (error) {
            return ErrorIndicator()
        }
        if (loading) {
            return <div className="loader">
                <Loader type="Watch" color="dimgray"/>
            </div>
        }
        return (
            <BookList books={books} addToCart={addToCart}/>
        );
    }
}

const mapStateToProps = ({books, loading, error}) => {
    return {
        books, loading, error
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {booksService} = ownProps
    return {
        fetchBooks: fetchBooks(booksService, dispatch),
        addToCart: (id) => {
            dispatch(booksAdded(id))
        }
    }
};

export default HocContext()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));