import React from 'react';
import Card from "./Card";
// import ErrorIndicator from "./Error-indicator";
import HocContext from "./hoc-context";
import Home from "./Home";
// import Spinner from "./Spinner";
import "./app.css";
import Header from "./Header";
import {Route, Switch} from "react-router-dom";
import About from "./About";


const App = ({booksService}) => {
    console.log(booksService.getBooks())
    return (
        <div className="App">
            <Header/>
            {/*<h2>show must go on</h2>*/}
            <Switch>
                <Route path={"/home/"} component={Home} exaxt={true}/>
                <Route path={"/card/"} component={Card} exaxt={true}/>
                <Route path={"/about/"} component={About} exaxt={true}/>
                <Route component={() => {
                    return <h3> that`s no use</h3>
                }}/>
            </Switch>
        </div>
    );
};

export default HocContext()(App);