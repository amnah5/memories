import React from "react";
function product(props) {
  const memorie = props.memorie;

  return (
    <div className="Product">
      <img className="photo" src={memorie.photo} />
      <h5>{memorie.name}</h5>
      <p>{memorie.date}</p>
    </div>
  );
}

export default product;
