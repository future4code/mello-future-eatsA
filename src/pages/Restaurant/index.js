import React, { useState, useEffect, useContext } from 'react';

import { useHistory, useParams } from 'react-router';

import CartContext from '../../Context/CartContext/context';
import api from '../../services/api';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const RestaurantsPage = () => {
  const [products, setProducts] = useState([]);
  const [logoUrl, setLogoUrl] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [category, setCategory] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [shippingPrice, setShippingPrice] = useState('');
  const [restaurantAddress, setRestaurantAddress] = useState('');
  const [productAmount, setProductAmount] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState('');

  const { getRestaurantDetail: sendRestaurantDetail, dispatch } = useContext(
    CartContext
  );
  const { restaurantId } = useParams();
  const history = useHistory();

  useEffect(() => {
    getRestaurantDetail();
    // eslint-disable-next-line
  }, []);

  const getRestaurantDetail = async () => {
    const axiosConfig = {
      headers: {
        auth: String(localStorage.getItem('token')),
      },
    };

    try {
      const response = await api.get(
        `restaurants/${restaurantId}`,
        axiosConfig
      );
      setProducts(response.data.restaurant.products);
      setLogoUrl(response.data.restaurant.logoUrl);
      setRestaurantName(response.data.restaurant.name);
      setCategory(response.data.restaurant.category);
      setDeliveryTime(response.data.restaurant.deliveryTime);
      setShippingPrice(response.data.restaurant.shipping);
      setRestaurantAddress(response.data.restaurant.address);
    } catch (error) {
      console.log(error);
    }
  };

  const backToFeed = () => {
    history.push('/feed');
  };

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = (id) => () => {
    setSelectedProduct(products.filter((item) => item.id === id));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendToCart = () => {
    sendRestaurantDetail(restaurantId);

    dispatch({
      type: 'ADD_TO_CART',
      product: selectedProduct,
      quantity: productAmount,
    });

    handleClose();
  };

  const body = (
    <div style={modalStyle}>
      <div id="simple-modal-description">Selecione a quantidade desejada</div>
      <select onChange={(e) => setProductAmount(e.target.value)}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
      </select>
      <button onClick={sendToCart}>ADICIONAR AO CARRINHO</button>
    </div>
  );

  return (
    <div>
      <div>
        <img onClick={backToFeed} alt="Drop Right" />
        <h1>Restaurante</h1>
      </div>
      <div>
        <img src={logoUrl} alt="Logo" />
        <p>{restaurantName}</p>
        <p>{category}</p>
        <p>{deliveryTime} min</p>
        <p>Frete R${shippingPrice}</p>
        <p>{restaurantAddress}</p>
      </div>
      {products &&
        products.map((product) => {
          return (
            <div>
              <div>{product.category}</div>
              <div>
                <img src={product.photoUrl} alt="ImgFood" />
                <div>
                  <button>1</button>
                  <p>{product.name}</p>
                  <p>{product.description}</p>
                  <p>R${product.price}</p>
                  <button type="button" onClick={handleOpen(product.id)}>
                    adicionar
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      {/* ------------------------------- */}
      <div>
        <div
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </div>
      </div>
      {/* ------------------------------- */}
    </div>
  );
};

export default RestaurantsPage;
