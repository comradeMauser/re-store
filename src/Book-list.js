import React, {Component} from 'react';
import {connect} from "react-redux"
import BookListItem from "./Book-list-item";


class BookList extends Component {
    render() {
        // console.debug(this.props.books)
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

const stateProps = (state) => {
    return {
        books: state.books
    }
}

export default connect(stateProps)(BookList);