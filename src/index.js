import React from 'react';
import ReactDOM from 'react-dom';
import BooksService from "./services/service";
import {Provider} from "react-redux";
import ErrorBoundary from "./services/Error-boundary";
import {ServiceProvider} from "./services/service-context"
import {BrowserRouter as Router} from "react-router-dom";
import App from "./components/App";
import store from "./services/store";

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