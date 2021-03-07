import React, { useEffect, useState } from "react";
import "./App.css";
import Tour from "./components/Tours";
import tours from "./tours";

export default function App() {
  const [toursArr, setToursArr] = useState([]);

  useEffect(() => setToursArr(tours), []);

  function onClick(e) {
    const { id } = e.target;

    setToursArr(toursArr.filter((item) => item.id !== id));
  }

  return (
    <div className="container">
      <h1 className="heading">Our Different Tours </h1>
      <div className="line"></div>
      {toursArr.map(({ name, image, info, price, id }, index) => (
        <Tour
          onClick={onClick}
          id={id}
          name={name}
          info={info}
          image={image}
          price={price}
          key={index}
        />
      ))}
    </div>
  );
}
