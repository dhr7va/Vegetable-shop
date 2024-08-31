import React, { useState } from "react";
import AddVegetablesForm from "./components/AddVegetablesForm/AddVegetablesForm";
import VegetablesList from "./components/VegetablesList/VegetablesList";


function App() {
  const [vegList, setVegList] = useState([]);

  const addToShopHandler = (vegItem) => {
    console.log('Adding vegetable:', vegItem);
    setVegList((prevVegList) => [...prevVegList, vegItem]);
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
      }

      setVegList(updatedList);
    } else {
      alert('Invalid operation');
    }
  }



  const handleDelete = (index) => {
    const updatedList = vegList.filter((_, i) => i != index);
    setVegList(updatedList);
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
    </>
  );
}

export default App;
