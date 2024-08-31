import React from "react";
import VegetablesItems from "../VegetableItems/VegetablesItems";

export default function VegetablesList({ vegList, onBuy, onDelete, onQuantityChange }) {
    return (
        <ul>
            {
                vegList.map((item, index) => (
                    <VegetablesItems
                        key={index}
                        items={item}
                        onBuy={(quantity) => onBuy(index, quantity)}
                        onDelete={() => onDelete(index)}
                        onQuantityChange={(value) => onQuantityChange(index, value)}
                    />
                ))
            }
        </ul>
    );
}
