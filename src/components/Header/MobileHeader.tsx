import logo from "../../icons/logo.svg";
import books from "../../icons/books.svg";
import cart from "../../icons/cart.svg";

import Styles from "./header.module.css";
import MobileSearchBox from "./MobileSearchBox";
import { useCart } from "../../context/cart";

const MobileHeader = () => {
  const { setCartIsOpen } = useCart();
  return (
    <>
      <div className={Styles.HeaderLogoSection}>
        <img src={logo} alt="logo" />
        <h3>Quidax Books</h3>
      </div>
      <div className={Styles.HeaderActionSectionMobile}>
        <MobileSearchBox />
        <img className={Styles.HeaderActionMobile} src={books} alt="search" />
        <button className={"NoneButton"} onClick={() => setCartIsOpen(true)}>
          <img className={Styles.HeaderActionMobile} src={cart} alt="cart" />
        </button>
      </div>
    </>
  );
};

export default MobileHeader;
