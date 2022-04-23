import MobileHeader from "./MobileHeader";

import Styles from "./header.module.css";

const Header = () => {
  return (
    <header className={Styles.AppHeader}>
      <MobileHeader />
    </header>
  );
};

export default Header;
