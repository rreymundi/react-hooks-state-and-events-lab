import React, { useState } from "react";

function Item({ name, category }) {

  const [status, setStatus] = useState(false)

  const itemClass = status ? "in-cart" : ""
  const buttonText = status ? 'Remove From Cart' : 'Add to Cart'
  
  function handleClick(){
    setStatus(status => !status)
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
