import React, { useState } from "react";

export default function VegetablesItems({ items, onBuy, onDelete, onQuantityChange }) {
    const [inputQuantity, setInputQuantity] = useState('');

    const handleBuyClick = () => {
        const quantityToBuy = Number(inputQuantity);

        if (quantityToBuy > 0) {
            onBuy(quantityToBuy);
            setInputQuantity('');
        } else {
            alert('Please enter a valid quantity');
        }
    };

    return (
        <li>
            {items.name} - Rs: {items.price} - {items.quantity}KG
            <input
                type="number"
                value={inputQuantity}
                onChange={(e) => setInputQuantity(e.target.value)}
                min="0"
            />
            <button onClick={handleBuyClick}>Buy</button>
            <button onClick={onDelete}>Delete</button>
        </li>
    );
}
