import React, {Component} from 'react';
import {connect} from "react-redux";
import BookListItem from "./Book-list-item";
import HocContext from "../hoc-context";
import fetchBooks from "../actions";
import Loader from "react-loader-spinner"
import "../styles/book-list.css";
import ErrorIndicator from "../Error-indicator";


class BookList extends Component {

    componentDidMount() {
        const {fetchBooks} = this.props
        fetchBooks()
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

const mapStateToProps = (props) => {
    return {
        books: props.books,
        loading: props.loading,
        error: props.error
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {booksService} = ownProps
    return {
        fetchBooks: fetchBooks(booksService, dispatch)
    }
};


export default HocContext()(connect(mapStateToProps, mapDispatchToProps)(BookList));