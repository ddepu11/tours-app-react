import React from "react";
import "./App.css";
import Tour from "./components/Tours";
import tours from "./tours";

export default function App() {
  return (
    <div className="container">
      <h1 className="heading">Our Different Tours </h1>
      <div className="line"></div>
      {tours.map(({ name, image, info, price }, index) => (
        <Tour name={name} info={info} image={image} price={price} key={index} />
      ))}
    </div>
  );
}
