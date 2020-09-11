import React, {Component} from 'react';
import {connect} from "react-redux";
import BookListItem from "./Book-list-item";
import HocContext from "./hoc-context";
import booksLoaded from "./actions";
import Loader from "react-loader-spinner"
import "./book-list.css";


class BookList extends Component {

    componentDidMount() {
        const {booksService, booksLoaded} = this.props
        booksService.getBooks()
            .then((data) => {
                booksLoaded(data)
            })
    }

    render() {
        console.debug(this.props.books)
        const {books, loading} = this.props

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
    }
};

const dispatchProps = {
    booksLoaded
};

export default HocContext()(connect(stateProps, dispatchProps)(BookList));