import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Store from "./Store";
import { Address, Restaurant } from "./model/restaurant";
import BestMenu from "./BestMenu";

let data: Restaurant = {
  name: "누나네 식당",
  category: "western",
  address: {
    city: "incheon",
    detail: "somewhere",
    zipCode: 2342352,
  },
  menu: [
    { name: "rose pasta", price: 2000, category: "PASTA" },
    { name: "garlic steak", price: 3000, category: "PASTA" },
  ],
};

const App: React.FC = () => {
  // useState를 부를때 제네릭과 함께 사용
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);

  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address });
  };
  // setMyRestaurant(4); 에러가 생긴다.

  const showBestMenuName = (name: string) => {
    return name;
  };

  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress} />
      <BestMenu name="불고기피자" category="피자" showBestMenuName={showBestMenuName} />
    </div>
  );
};

export default App;
