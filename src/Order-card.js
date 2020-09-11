import React from 'react';
import {trash, plus, minus} from "./icons";


const OrderCard = (props) => {
    const {amount, total} = props

    return (
        <div>
            {/*  <h3>Your ordered books</h3>
            <div className="card border-warning mb-3">
                <div className="card-header"><h4>Your ordered books</h4></div>
                <div className="card-body">
                    <h4 className="card-title"><h3>Your ordered books</h3></h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                </div>
            </div>*/}
            <div className="container">order</div>
            <table className="table">
                <thead>
                <th>#</th>
                <th>Item</th>
                <th>Count</th>
                <th>Price</th>
                <th>Action</th>
                </thead>

                <tbody>
                <td>#</td>
                <td>The Divine Comedy</td>
                <td>2</td>
                <td>$999</td>
                <td>
                    <button className="btn btn-outline-success plus"> {plus} </button>
                    <button className="btn btn-outline-warning minus"> {minus} </button>
                    <button className="btn btn-outline-secondary trash"> {trash} </button>
                </td>
                </tbody>
            </table>
            <div className="total">
                {amount}/{total}
            </div>

        </div>
    );
};

export default OrderCard;