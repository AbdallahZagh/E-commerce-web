const initialState = {
    cartItems: []
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
          const existingItem = state.cartItems.find(
            item => item.id === action.payload.product.id
          );
          
          if (existingItem) {
            // Update quantity if same product
            return {
              ...state,
              cartItems: state.cartItems.map(item =>
                item.id === action.payload.product.id
                  ? { ...item, quantity: item.quantity + action.payload.quantity }
                  : item
              )
            };
          }
          // Add new product
          return {
            ...state,
            cartItems: [...state.cartItems, {
              ...action.payload.product,
              quantity: action.payload.quantity
            }]
          };
  
      case 'UPDATE_QUANTITY':
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: Math.max(action.payload.quantity, 1) }
              : item
          )
        };
  
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload)
        };
  
      default:
        return state;
    }
  };
  
  export default rootReducer;