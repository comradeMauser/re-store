import React from 'react';
import ReactDOM from 'react-dom';
import BooksService from "./service";
import {Provider} from "react-redux";
import ErrorBoundary from "./Error-boundary";
import {ServiceProvider} from "./service-context"
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import store from "./store";

const booksService = new BooksService()

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <ServiceProvider value={booksService}>
                <Router>
                    <App/>
                </Router>
            </ServiceProvider>
        </ErrorBoundary>
    </Provider>

    , document.getElementById('root')
);