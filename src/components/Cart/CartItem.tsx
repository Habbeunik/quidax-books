import Styles from "./cart.module.css";
import { IBook } from "../../types";
import { useCart } from "../../context/cart";
import { formatCurrencyInteger } from "../../utils/currency";

type IProps = {
  book: IBook;
  quantity: number;
};

const CartItem = ({ book, quantity }: IProps) => {
  const { id, title, price, image_url, currency } = book;
  const { addToCart, removeFromCart } = useCart();

  return (
    <div className={Styles.CartItem}>
      <div className={Styles.CartItemImage}>
        <img src={image_url} alt={title} />
      </div>
      <div className={Styles.CartItemDesc}>
        <div className={Styles.CartItemFlex}>
          <h5 className={Styles.CartItemTitle}>{title}</h5>
          <p className={Styles.CartItemPrice}>
            {formatCurrencyInteger(price, currency)}
          </p>
        </div>
        <div className={Styles.CartItemFlex}>
          <p className={Styles.CartItemAuthor}>Edmond Lau</p>
          <div className={Styles.CartItemActions}>
            <button onClick={() => removeFromCart(id)}>-</button>
            <p>{quantity}</p>
            <button onClick={() => addToCart(id)}>+</button>
          </div>
        </div>
        <div className={Styles.CartItemFlex}>
          <button
            className="NoneButton"
            onClick={() => removeFromCart(id, true)}
          >
            Remove
          </button>
          <h5>{formatCurrencyInteger(price * quantity, currency)}</h5>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
