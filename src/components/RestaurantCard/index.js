import React from 'react'
import {
  Main
} from './style'

function RestaurantCard(props) {
  return(
    <Main>
      <img src={props.imageRestaurant} />
      <p className='Restaurante'>{props.restaurantName}</p>
      <div>
        <span>{props.deliveryTime} min</span>
        <span>Frete R$ {props.shipping}</span>
      </div>
    </Main>
  )
}

export default RestaurantCard