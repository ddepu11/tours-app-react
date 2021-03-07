import Button from "./Button";

const Tours = ({ image, price, name, info }) => {
  return (
    <div className="card">
      <div className="view">
        <img src={image} alt={name} />
      </div>
      <div className="top flex">
        <h5>{name}</h5>
        <p>{price}</p>
      </div>
      <div className="bottom">
        <p>
          {info}
          <Button btnStyle="show">Show More</Button>
        </p>
      </div>
      <Button className="btn" btnStyle="not-interested">
        Not Interested
      </Button>
    </div>
  );
};

export default Tours;
