import { createContext, useContext, useState } from "react";

interface ICart {
  bookId: number;
  quantity: number;
}

interface IContext {
  cartIsOpen: boolean;
  setCartIsOpen: (val: boolean) => void;
  cart: ICart[];
  setCart: (val: ICart[]) => void;
}

const CartContext = createContext<IContext>({
  cartIsOpen: false,
  setCartIsOpen: (val: boolean) => {},
  cart: [],
  setCart: (cart: ICart[]) => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<ICart[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CartContext.Provider
      value={{ cart, setCart, cartIsOpen: isOpen, setCartIsOpen: setIsOpen }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const { cart, setCart, ...restContext } = useContext(CartContext);

  const addToCart = (bookId: number) => {
    const itemInIndex = cart.findIndex(
      (cartItem) => cartItem.bookId === bookId
    );
    if (itemInIndex > -1) {
      const cartCopy = [...cart];
      const cartItem = cartCopy[itemInIndex];
      cartCopy[itemInIndex] = { ...cartItem, quantity: cartItem.quantity + 1 };
      setCart(cartCopy);
      return;
    }

    setCart([...cart, { bookId, quantity: 1 }]);
  };

  const removeFromCart = (bookId: number, removeAll: boolean = false) => {
    const itemInIndex = cart.findIndex(
      (cartItem) => cartItem.bookId === bookId
    );
    const cartItem = cart[itemInIndex];
    if (cartItem.quantity > 1 && !removeAll) {
      const cartCopy = [...cart];
      cartCopy[itemInIndex] = { ...cartItem, quantity: cartItem.quantity - 1 };
      setCart(cartCopy);
      return;
    }

    setCart(cart.filter((item) => item.bookId !== bookId));
  };

  return { ...restContext, cart, addToCart, removeFromCart };
};
