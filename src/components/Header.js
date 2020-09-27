import React from 'react';
import {Link} from "react-router-dom";
import "../styles/header.css";
import {connect} from "react-redux";


const Header = (props) => {
    const {items} = props
    const amount = parseInt(items.map(book => book.count).reduce((a, b) => a + b, 0))
    const total = parseInt(items.map(book => book.price).reduce((a, b) => a + b, 0))

    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand" to="/">Store</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/home/"}>Home</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/books">Books</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/"}>Pricing</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/about/"}>About</Link></li>
                    </ul>

                    <li className="books-amount">
                        <Link to={"/amount/"}>
                            <button className="btn btn-outline-danger btn-block">Order:
                                <span className="amount">{amount}</span> books for
                                <span className="total">${total}</span></button>
                        </Link>
                    </li>

                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

const mapStateToProps = ({order: {orderedBooks}}) => {
    return {
        items: orderedBooks,
    }
};

export default connect(mapStateToProps)(Header);