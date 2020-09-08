import React from 'react';
import ErrorBoundary from "./Error-boundary";
import ErrorIndicator from "./Error-indicator";
import Spinner from "./Spinner";
import Loader from "react-loader-spinner"
import "./app.css";


const App = () => {
    return (
        <div className="App">
            <ErrorBoundary>
                <h1>show must go on</h1>
                <Loader type="Oval" color="red"/>
                <Spinner/>
                <ErrorIndicator/>
            </ErrorBoundary>
        </div>
    );
};

export default App;