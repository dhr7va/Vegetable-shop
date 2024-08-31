import React from "react";

export default function VegetablesItems({ items, onBuy, onDelete, onQuantityChange }) {
    return (
        <li>
            {items.name} - Rs: {items.price} -{items.quantity}KG
            <input
                type="number"
                value={items.quantity}
                onChange={(e) => onQuantityChange(e.target.value)}
            />
            <button onClick={onBuy}>Buy</button>
            <button onClick={onDelete}>Delete</button>
        </li>
    )
}