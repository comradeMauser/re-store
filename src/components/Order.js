import React from 'react';
import {connect} from "react-redux";
import {trash, plus, minus} from "../services/icons";
import {bookDecrease, bookDelete, booksAdded} from "../services/actions";
import "../styles/order-card.css";
import {bindActionCreators} from "redux";


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
                {/*{items.map(item => item.price).reduce((a, b) => +a + +b, 0)}*/}
            </div>
        </div>
    );
};

const mapStateToProps = ({order: {orderedBooks, orderAmount}}) => {
    return {
        items: orderedBooks,
        total: orderAmount,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            increase: (id) => booksAdded(id),
            decrease: (id) => bookDecrease(id),
            trashCan: (id) => bookDelete(id)
        }, dispatch
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Order)