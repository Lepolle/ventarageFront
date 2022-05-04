export const addItemToCart = (cartItemArray, cartItem) => {
  const existingCartItem = cartItemArray.find(
    (item) => item.id === cartItem.id
  );

  if (existingCartItem) {
    return cartItemArray.map((item) =>
      item.id === cartItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItemArray, { ...cartItem, quantity: 1 }];
};
