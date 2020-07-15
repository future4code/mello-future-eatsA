import React, { useState, useEffect } from 'react';
import { MdSearch } from "react-icons/md";
import axios from 'axios';
import styled from 'styled-components'
import RestaurantCard from '../../components/RestaurantCard';
import HomeIcon from '../../assets/images/homepage.svg'
import ShoppingCart from '../../assets/images/shopping-cart.svg'
import Avatar from '../../assets/images/avatar.svg'
import { useHistory } from 'react-router-dom';

const AppContainer = styled.div`

  input {
    padding-left: 56.3px;
  }
`

const Filters = styled.div`
  max-width: 360px;
  width: 100%;
  margin-top: 22px;
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  overflow: auto;

  span {
    margin-left: 16px;
    padding: 16px;
  }
`

const Search = styled.div`
  margin: 16px;
`

const SearchIcon = styled.span`
  margin-top: -40px;
  margin-left: 17px;
  padding: 0;
  display: flex;
  flex-direction: row;
  top: 1px;
  color: #13abe1;
  position: relative;
  left: 0px;
`;



export default function FeedPage() {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantsFilter, setRestaurantsFilter] = useState([])
  const [search, setSearch] = useState('')

  const history = useHistory()


  const categories = ['Árabe', 'Asiática', 'Hamburguer', 'Italiana', 'Sorvetes', 'Carnes', 'Mexicana', 'Baiana', 'Petiscos']


  useEffect(() => {
    getRestaurants()
  }, [])

  useEffect(() => {
    filterByInput()
  }, [search])

  
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVLb2tqZE9Va216YW9idHVSbkZKIiwibmFtZSI6Ikxlb25hbSIsImVtYWlsIjoiZGV2Lmxlb25hbUBnbWFpbC5jb20iLCJjcGYiOiIxMjMuNDU2Ljc4OS0xMCIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSdWEgZG9zIGJvYm9zLCAwMDAsIDk4IC0gVmlsYSBkZSBPeiIsImlhdCI6MTU5NDczNzQ2OX0.ySk_6jplN3oNpXVwlX8I6Zh0_D4foS7idcVgm5rP4yo"



  const getRestaurants = () => {
    
    const authorization = {
      headers: {
        auth: token
      }
    }

    axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants`, authorization)
      .then((response) => {
        setRestaurants(response.data.restaurants)
        setRestaurantsFilter(response.data.restaurants)
      }).catch((err) => {
        alert('Ops! Tivemos um problema na conexão. (tente atualizar a página)')
        console.log(err)
      })
  }

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

  


  return <AppContainer>
    <Search>
      <input onChange={onChangeSearch} value={search} placeholder="Restaurante"/>
      <SearchIcon>
        <MdSearch size={24} color={"#b8b8b8"}/>
      </SearchIcon>
    </Search>

    <Filters>
      {categories.map((item) => {
        return <span key={item} onClick={() => filterByCategory(item)}>{item}</span>
      })}
    </Filters>
    
    {restaurantsFilter.map(restaurant => {
      return (
        <div className="feed" key={restaurant.id}>
          <RestaurantCard
            imageRestaurant={restaurant.logoUrl}
            restaurantName={restaurant.name}
            deliveryTime={restaurant.deliveryTime}
            shipping={restaurant.shipping}
          />
        </div>
      )
    })}
    <footer>
      <div>
        <img src={HomeIcon} onClick={getRestaurants}/>
      </div>

      <div>
        <img src={ShoppingCart}/>
      </div>

      <div>
        <img src={Avatar} onClick={() => history.push('/')}/>
      </div>
    </footer>
  </AppContainer>;
}
