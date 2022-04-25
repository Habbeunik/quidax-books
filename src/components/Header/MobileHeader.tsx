import logo from "../../icons/logo.svg";
import books from "../../icons/books.svg";
import cartIcon from "../../icons/cart.svg";

import Styles from "./header.module.css";
import MobileSearchBox from "./MobileSearchBox";
import { useCart } from "../../context/cart";

const MobileHeader = () => {
  const { setCartIsOpen, cart } = useCart();
  const noOfCartItems = cart.reduce(
    (sum, cartItem) => sum + cartItem.quantity,
    0
  );

  return (
    <>
      <div className={Styles.HeaderLogoSection}>
        <img src={logo} alt="logo" />
        <h3>Quidax Books</h3>
      </div>
      <div className={Styles.HeaderActionSectionMobile}>
        <MobileSearchBox />
        <img className={Styles.HeaderActionMobile} src={books} alt="search" />
        <button
          className={`${Styles.HeaderActionItem} NoneButton`}
          onClick={() => setCartIsOpen(true)}
        >
          <img
            className={Styles.HeaderActionMobile}
            src={cartIcon}
            alt="cart"
          />
          {noOfCartItems > 0 ? (
            <div className={Styles.HeaderNotification}>{noOfCartItems}</div>
          ) : null}
        </button>
      </div>
    </>
  );
};

export default MobileHeader;
