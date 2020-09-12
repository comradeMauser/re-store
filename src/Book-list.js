import React, {Component} from 'react';
import {connect} from "react-redux";
import BookListItem from "./Book-list-item";
import HocContext from "./hoc-context";
import {booksLoaded, booksRequest, booksError} from "./actions";
import Loader from "react-loader-spinner"
import "./book-list.css";
import ErrorIndicator from "./Error-indicator";


class BookList extends Component {

    componentDidMount() {
        const {booksService, booksLoaded, booksRequest, booksError} = this.props
        booksRequest()
        booksService.getBooks()
            .then((data) => {
                booksLoaded(data)
            })
            .catch((error) => {
                booksError(error)
            })
    }

    render() {
        console.debug(this.props.books)
        const {books, loading, error} = this.props

        if (error) {
            //errIndicator
            return ErrorIndicator()
        }
        if (loading) {
            return <div className="loader">
                <Loader type="Watch" color="dimgray"/>
            </div>
        }
        return (
            <ul className="book list list-group list-unstyled">
                {
                    books.map(book => {
                        return (
                            <li key={book.id}
                                className="list-group-item"
                            >
                                <BookListItem book={book}/>
                            </li>
                        )
                    })}
            </ul>
        );
    }
}

const stateProps = (props) => {
    return {
        books: props.books,
        loading: props.loading,
        error: props.error
    }
};

const dispatchProps = {
    booksLoaded, booksRequest, booksError,
};

export default HocContext()(connect(stateProps, dispatchProps)(BookList));