import React, { useState } from "react";
import AddVegetablesForm from "./components/AddVegetablesForm/AddVegetablesForm";
import VegetablesList from "./components/VegetablesList/VegetablesList";


function App() {
  const [vegList, setVegList] = useState([]);

  const addToShopHandler = (vegItem) => {
    console.log('Adding vegetable:', vegItem);
    setVegList((prevVegList) => [...prevVegList, vegItem]);
  }

  const handleBuy = (index) => {
    const updatedList = [...vegList];
    updatedList[index].quantity += 1;
    setVegList(vegList);
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
