import React from 'react'


const Ingredient = (props) => {
  return (
    <div>Ingredient
    <p>Ingredient Name: {props.name}, Ingredient Color: {props.color} </p>
    </div>
  )
}

export default Ingredient