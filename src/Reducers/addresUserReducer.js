export const instialState = {
  userAddress: {},
};

export const CartReduceres = (state, action) => {
  switch (action.type) {
    case 'ADD_ADDRESS':
      return {
        ...state,
        userAddres: action.payload.addresUser,
      };
    case 'EDIT_ADDRESS':
      return {
        ...state,
        userAddres: action.payload.addresUser,
      };
  }
};
