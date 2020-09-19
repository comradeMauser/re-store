import React from 'react';
import Card from "./Card";
// import ErrorIndicator from "./Error-indicator";
import HocContext from "../services/hoc-context";
import Home from "./Home";
// import Spinner from "./Spinner";
import "../styles/app.css";
import Header from "./Header";
import {Route, Switch} from "react-router-dom";
import About from "./About";
import Books from "./Books";
import OrderCart from "./Order";


const App = () => {

    return (
        <main role="main" className="container">
            <Header amount={13} total={666}/>
            {/*<h2>show must go on</h2>*/}
            <OrderCart amount={13}/>
            <Switch>
                <Route path={"/home/"} component={Home} exaxt={true}/>
                <Route path={"/card/"} component={Card} exaxt={true}/>
                <Route path={"/books/"} component={Books} exaxt={true}/>
                <Route path={"/about/"} component={About} exaxt={true}/>
                <Route path={"/amount/"} component={OrderCart} exaxt={true}/>
                <Route component={() => {
                    return <h3> that`s no use
                        (App component)</h3>
                }}/>
                {/*<Redirect to={"/"}/>*/}
            </Switch>
        </main>
    );
};

export default HocContext()(App);