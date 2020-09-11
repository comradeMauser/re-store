import React from 'react';
import {trash, plus, minus} from "./icons";
import "./order-card.css";


const OrderCard = (props) => {
    const {total} = props

    return (
        <div className="order-card">
            <h3>Your order:</h3>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>#</td>
                    <td>The Divine Comedy</td>
                    <td>2</td>
                    <td>$999</td>
                    <td>
                        <button className="btn btn-outline-success plus"> {plus} </button>
                        <button className="btn btn-outline-warning minus"> {minus} </button>
                        <button className="btn btn-outline-secondary trash"> {trash} </button>
                    </td>
                </tr>
                </tbody>
            </table>
            <div className="total">
                Total: ${total}
            </div>

        </div>
    );
};

export default OrderCard;