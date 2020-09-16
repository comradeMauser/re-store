import React from 'react';
import {connect} from "react-redux";
import {trash, plus, minus} from "../services/icons";
import "../styles/order-card.css";


const Order = (props) => {
    const {items, total, increase, decrease, trashCan} = props
    const bookOrdered = (item, index) => {
        const {id, author, price, count, title} = item
        return <tr key={id}>
            <td>{index + 1}</td>
            <td>{author} "{title}"</td>
            <td>{count}</td>
            <td>${price}</td>
            <td>
                <button className="btn btn-outline-success plus"
                        onClick={() => increase(id)}> {plus} </button>
                <button className="btn btn-outline-warning minus"
                        onClick={() => decrease(id)}> {minus} </button>
                <button className="btn btn-outline-secondary trash"
                        onClick={() => trashCan(id)}> {trash} </button>
            </td>
        </tr>
    }

    return (
        <div className="order-card">
            <h3>Your order:</h3>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Book</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                {items.map(bookOrdered)}
                </tbody>
            </table>
            <div className="total">
                Total: ${total}
            </div>
        </div>
    );
};

const mapStatetoProps = ({orderedBooks, orderAmount}) => {
    return {
        items: orderedBooks,
        total: orderAmount,
    }
};

const mapDispatchToProps = () => {
    return {
        increase: (id) => console.debug("INC", id),
        decrease: (id) => console.debug("DEC", id),
        trashCan: (id) => console.debug("THRAAAAASH!", id),
    }
};

export default connect(mapStatetoProps, mapDispatchToProps)(Order)