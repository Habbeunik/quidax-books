import cartIcon from "../../icons/cart.svg";
import cartWhite from "../../icons/cart-white.svg";
import back from "../../icons/back.svg";
import { IBook } from "../../types";

import bookJson from "../../db/data.json";
import Styles from "./cart.module.css";
import CartItem from "./CartItem";
import { useCart } from "../../context/cart";
import { formatCurrencyInteger } from "../../utils/currency";

const bookMap: { [key: string | number]: IBook } = bookJson.data.reduce(
  (obj, book) => ({ ...obj, [book.id]: book }),
  {}
);

const Cart = () => {
  const { cart, setCartIsOpen, cartIsOpen } = useCart();
  const subTotal = cart.reduce(
    (sum, item) => sum + bookMap[item.bookId].price * item.quantity,
    0
  );
  return (
    <section
      className={`${Styles.CartBox} ${cartIsOpen ? Styles.CartIsActive : ""}`}
    >
      <nav className={Styles.CartNav}>
        <button
          className={Styles.CartNavBack}
          onClick={() => setCartIsOpen(false)}
        >
          <img src={back} alt="cart" />
          <span>Back</span>
        </button>
        <div className={Styles.CartNavLabel}>
          <p>Your Cart</p>
          <img src={cartIcon} alt="back" />
        </div>
      </nav>
      <div className={Styles.CartItemList}>
        {cart.map((cartItem) => (
          <CartItem
            key={cartItem.bookId}
            book={bookMap[cartItem.bookId]}
            quantity={cartItem.quantity}
          />
        ))}
      </div>
      <div className={Styles.CartBottom}>
        <div className={Styles.CartSubTotal}>
          <p>Subtotal</p>
          <p className={Styles.CartSubTotalPrice}>
            {formatCurrencyInteger(subTotal, "usd")}
          </p>
        </div>
        <button className={Styles.CartButton}>
          <img src={cartWhite} alt="cart" />
          <h4>Proceed to Checkout</h4>
        </button>
      </div>
    </section>
  );
};

export default Cart;
