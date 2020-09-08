import React from 'react';
import ErrorIndicator from "./Error-indicator";
import HocContext from "./hoc-context";
import Spinner from "./Spinner";
import Loader from "react-loader-spinner"
import "./app.css";


const App = ({booksService}) => {
    console.log(booksService.getBooks())
    return (
        <div className="App">
                <h1>show must go on</h1>
                <Loader type="Oval" color="red"/>
                <Spinner/>
                <ErrorIndicator/>
        </div>
    );
};

export default HocContext()(App);