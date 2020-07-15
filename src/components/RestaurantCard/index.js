import React from 'react'
import {
  Main
} from './style'

function RestaurantCard(props) {
  return(
    <Main>
      <img src={props.logo} />
      <p className='Restaurante'>{props.restaurantName}</p>
      <div>
        <span>{props.deliveryTime}</span>
        <span>{props.shipping}</span>
      </div>
    </Main>
  )
}

export default RestaurantCard