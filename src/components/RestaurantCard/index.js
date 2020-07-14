import React from 'react'
import {
  Main
} from './style'

function RestaurantCard(props) {
  return(
    <Main>
      <img src={'http://soter.ninja/futureFoods/logos/habibs.jpg'} />
      <p className='Restaurante'>Nome Restaurante</p>
      <div>
        <span>{props.restaurantName}</span>
        <span>Frete R$ 6,00</span>
      </div>
    </Main>
  )
}

export default RestaurantCard