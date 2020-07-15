import React, { useState, useEffect } from 'react'
import axios from 'axios'
import RestaurantCard from '../../components/RestaurantCard'

function FeedPage() {
  const [restaurants, setRestaurants] = useState([])
  const [restaurantsFilter, setRestaurantsFilter] = useState([])
  const [search, setSearch] = useState('')

  function onChangeSearch(event) {
    setSearch(event.target.value)
  }

  function filterByCategory(category) {
    setRestaurantsFilter(restaurants.filter((restaurant) => {
      return restaurant.category === category
    }))
  }

  function filterByInput() {
    setRestaurantsFilter(restaurants.filter((restaurant) => {
      return restaurant.name.toLowerCase().includes(search)
    }))
  }

  useEffect(() => {
    getRestaurants()
  }, [])

  useEffect(() => {
    filterByInput()
  }, [search])

  function getRestaurants() {
    const headers = {
      auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFJdkR3REw3ejN0ME1VMjh6UFhRIiwibmFtZSI6InBhdWxvcG1hIiwiZW1haWwiOiJudWxsc3RyaW5nc0Bob3RtYWlsLmNvbSIsImNwZiI6Ijk2My4zNDIuNDAyLTAwIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlFTIDA2LCBjb25qdW50byA2MTBCLCAxNzcsIDcxIC0gQXJlYWwiLCJpYXQiOjE1OTQ2NjYxMTF9.VYrwxA_b3pgJr1mUxsDoREKcfcGRBjruidNYU8Q080A'
    }
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants', {headers})
      .then((response) => {
        setRestaurants(response.data.restaurants)
        setRestaurantsFilter(response.data.restaurants)
      })
      .catch((error) => {
        alert(error)
      })
  }
  const categories = ['Árabe', 'Asiática', 'Hamburguer', 'Italiana', 'Sorvetes']
  return(
    <main>
      <h3>Restaurantes</h3>
      {categories.map((category) => {
        return(
          <span onClick={() => filterByCategory(category)}>{category} </span>
        )
      })}
      <br/>
      <input 
        type='text' 
        value={search}
        onChange={onChangeSearch}
      />
      {restaurantsFilter.map((restaurant) => {
        return(
          <RestaurantCard 
            restaurantName={restaurant.name}
            deliveryTime={restaurant.deliveryTime}
            shipping={restaurant.shipping}
            logo={restaurant.logoUrl}
          />
        )
      })}
    </main>
  )
}

export default FeedPage