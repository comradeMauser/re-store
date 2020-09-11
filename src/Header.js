import React from 'react';
import {Link} from "react-router-dom";
import "./header.css";


const Header = (props) => {
    const {amount, total} = props

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
                            <Link className="nav-link" to={"/card/"}>Card</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/books">Books</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/"}>Pricing</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/about/"}>About</Link></li>
                        {/*  <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                               aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Separated link</a>
                            </div>
                        </li>*/}
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

export default Header;