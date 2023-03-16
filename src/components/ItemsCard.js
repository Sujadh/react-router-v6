import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./component.css";

function ItemsCard(props) {
  const { id, name, age } = props.data;
  const navigate = useNavigate()
  const handleNavigate = (value) => {
    navigate("/about/" + value)
  }
  return (
    <div className='card'>
      <h3>{name}</h3>
      <h5>{age}</h5>
      <button onClick={() => handleNavigate(`${id}`)}>Read More..</button>
    </div>
  )
}

export default ItemsCard;