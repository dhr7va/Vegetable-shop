import React, { useState } from "react";
import AddVegetablesForm from "./components/AddVegetablesForm/AddVegetablesForm";
import VegetablesList from "./components/VegetablesList/VegetablesList";
import TotalDisplay from "./components/TotalDisplay/TotalDisplay";

function App() {
  const [vegList, setVegList] = useState([]);
  const [total, setTotal] = useState(0);

  const addToShopHandler = (vegItem) => {
    setVegList((prevVegList) => [...prevVegList, vegItem]);
    setTotal(total + 1);
  }

  const handleBuy = (index, quantityToBuy) => {
    const updatedList = [...vegList];

    if (index >= 0 && index < updatedList.length && quantityToBuy > 0) {
      const item = updatedList[index];

      if (item.quantity >= quantityToBuy) {
        item.quantity -= quantityToBuy;
      } else {
        alert('Not enough quantity available');
        return;
      }

      if (item.quantity <= 0) {
        updatedList.splice(index, 1);
        setTotal(total - 1);
      }

      setVegList(updatedList);
    } else {
      alert('Invalid operation');
    }
  }



  const handleDelete = (index) => {
    const updatedList = vegList.filter((_, i) => i != index);
    setVegList(updatedList);
    setTotal(total - 1);

  }

  const handleQuantityChange = (index, value) => {
    const updatedList = [...vegList];
    updatedList[index].quantity = Number(value);

    if (updatedList[index].quantity <= 0) {
      handleDelete(index);
    } else {
      setVegList(updatedList);
    }
  }

  return (
    <>
      <h1>Veg Shop</h1>
      <AddVegetablesForm onAddToShop={addToShopHandler} />
      <VegetablesList
        vegList={vegList}
        onBuy={handleBuy}
        onDelete={handleDelete}
        onQuantityChange={handleQuantityChange}

      />
      <TotalDisplay total={total} />
    </>
  );
}

export default App;
