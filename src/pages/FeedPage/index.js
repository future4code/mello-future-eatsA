import React, { useState, useEffect } from 'react';
import { MdSearch } from 'react-icons/md';
import axios from 'axios';
import RestaurantCard from '../../components/RestaurantCard';
import {
  Search,
  AppContainer,
  SearchIcon,
  Filters,
  NoResultsText,
  FixedHeader,
} from './style';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeaderNoArrow from '../../components/HeaderNoArrow';

//GREEN
import HomeIconGreen from '../../assets/images/homepage-green.svg';

export default function FeedPage() {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantsFilter, setRestaurantsFilter] = useState([]);
  const [search, setSearch] = useState('');
  const [clickedSameCategory, setClickedSameCategory] = useState('');
  const [categoryCopy, setCategoryCopy] = useState('');

  const categories = [
    'Árabe',
    'Asiática',
    'Hamburguer',
    'Italiana',
    'Sorvetes',
    'Carnes',
    'Mexicana',
    'Baiana',
    'Petiscos',
  ];

  useEffect(() => {
    getRestaurants();
  }, []);

  useEffect(() => {
    filterByInput();
  }, [search]);

  const token = window.localStorage.getItem('token');

  const getRestaurants = () => {
    const authorization = {
      headers: {
        auth: token,
      },
    };

    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants`,
        authorization
      )
      .then((response) => {
        setRestaurants(response.data.restaurants);
        setRestaurantsFilter(response.data.restaurants);
      })
      .catch((err) => {
        alert(
          'Ops! Tivemos um problema na conexão. (tente atualizar a página)'
        );
        console.log(err);
      });
  };

  function onChangeSearch(event) {
    setSearch(event.target.value);
  }

  function filterByCategory(category) {
    setRestaurantsFilter(
      restaurants.filter((restaurant) => {
        return restaurant.category === category;
      })
    );
    if (categoryCopy !== category) {
      setCategoryCopy(category);
      setClickedSameCategory(false);
    } else {
      setClickedSameCategory(true);
      setRestaurantsFilter(restaurants);
    }
  }

  function filterByInput() {
    setRestaurantsFilter(
      restaurants.filter((restaurant) => {
        return restaurant.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }
  console.log(clickedSameCategory);

  return (
    <>
      <AppContainer>
        {search ? (
          <Header title="Busca" />
        ) : (
          <HeaderNoArrow title="FutureEats" />
        )}
        <FixedHeader>
          <Search>
            <input
              onChange={onChangeSearch}
              value={search}
              placeholder="Restaurante"
            />
            <SearchIcon>
              <MdSearch size={24} color={'#b8b8b8'} />
            </SearchIcon>
          </Search>
          <Filters>
            {categories.map((item) => {
              return (
                <span
                  tabIndex="1"
                  samecategory={clickedSameCategory}
                  key={item}
                  onClick={() => filterByCategory(item)}
                >
                  {item}
                </span>
              );
            })}
          </Filters>
        </FixedHeader>

        {restaurantsFilter.length === 0 ? (
          <NoResultsText>Não encontramos :(</NoResultsText>
        ) : (
          restaurantsFilter.map((restaurant) => {
            return (
              <div className="feed" key={restaurant.id}>
                <RestaurantCard
                  imageRestaurant={restaurant.logoUrl}
                  restaurantName={restaurant.name}
                  deliveryTime={restaurant.deliveryTime}
                  shipping={restaurant.shipping}
                />
              </div>
            );
          })
        )}
      </AppContainer>
      <Footer homeIcon={true} />
    </>
  );
}
