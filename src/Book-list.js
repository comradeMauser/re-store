import React, {Component} from 'react';
import {connect} from "react-redux";
import BookListItem from "./Book-list-item";
import HocContext from "./hoc-context";
import booksLoaded from "./actions";


class BookList extends Component {

    componentDidMount() {
        const {booksService} = this.props
        const data = booksService.getBooks()

        this.props.booksLoaded(data)
    }

    render() {
        console.debug(this.props.books)
        const {books} = this.props
        return (
            <ul className="list-group">
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
        books: props.books
    }
};

const dispatchProps = {
    booksLoaded
};

export default HocContext()(connect(stateProps, dispatchProps)(BookList));