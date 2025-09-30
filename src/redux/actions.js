export const addToCart = (product, quantity) => ({
    type: 'ADD_TO_CART',
    payload: { product, quantity }
  });
  
  export const updateQuantity = (productId, quantity) => ({
    type: 'UPDATE_QUANTITY',
    payload: { id: productId, quantity }
  });
  
  export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId
  });