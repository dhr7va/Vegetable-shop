import React, { useState } from "react";
import "./AddVegetablesForm.css";

export default function AddVegetablesForm(props) {
    const [enteredName, setEnteredName] = useState("");
    const [enteredPrice, setEnteredPrice] = useState("");
    const [enteredQuantity, setEnteredQuantity] = useState("");

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
    };

    const quantityChangeHandler = (event) => {
        setEnteredQuantity(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            name: enteredName,
            price: +enteredPrice,
            quantity: (enteredQuantity),
        };

        props.onAddToShop(expenseData);
        setEnteredName("");
        setEnteredPrice("");
        setEnteredQuantity("");
    };
    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        value={enteredName}
                        id="name"
                        onChange={nameChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        value={enteredPrice}
                        id="price"
                        onChange={priceChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="quantity">Quantity</label>
                    <input
                        type="number"
                        value={enteredQuantity}
                        id="quantity"
                        min="0"
                        onChange={quantityChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button
                    type="button"
                    onClick={() => {
                        props.onCancel();
                    }}
                >
                    Cancel
                </button>
                <button type="submit">Add To Shop</button>
            </div>
        </form>
    )
}

