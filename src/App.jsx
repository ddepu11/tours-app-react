import React, { useEffect, useState } from "react";
import "./App.css";
import Tour from "./components/Tours";
import tours from "./tours";
import Button from "./components/Button";

export default function App() {
  const [toursArr, setToursArr] = useState([]);

  useEffect(() => setToursArr(tours), []);

  function onClick(e) {
    const { id } = e.target;
    setToursArr(toursArr.filter((item) => item.id !== id));
  }
  function reFresh() {
    setToursArr(tours);
  }
  return (
    <div className="container">
      <h1 className="heading">
        {toursArr.length !== 0 ? "Our Different Tours" : "No Tours Left"}
      </h1>
      <div className="line"></div>
      {toursArr.length !== 0 ? (
        toursArr.map(({ name, image, info, price, id }, index) => (
          <Tour
            onClick={onClick}
            id={id}
            name={name}
            info={info}
            image={image}
            price={price}
            key={index}
          />
        ))
      ) : (
        <Button onClick={reFresh} btnStyle="refersh-btn">
          Refersh
        </Button>
      )}
    </div>
  );
}
