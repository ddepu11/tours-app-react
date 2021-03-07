import { useState } from "react";
import Button from "./Button";

const Tours = ({ image, price, name, info, onClick, id }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShow = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="card">
      <div className="view">
        <img src={image} alt={name} />
      </div>
      <div className="top flex">
        <h5>{name}</h5>
        <p>&#x20B9;{price}</p>
      </div>
      <div className="bottom">
        <p>
          {showMore ? info : `${info.slice(0, 295).trim()}...`}
          <Button onClick={toggleShow} btnStyle="show">
            {showMore ? "Show Less" : "Show More"}
          </Button>
        </p>
      </div>
      <Button
        id={id}
        onClick={onClick}
        className="btn"
        btnStyle="not-interested"
      >
        Not Interested
      </Button>
    </div>
  );
};

export default Tours;
