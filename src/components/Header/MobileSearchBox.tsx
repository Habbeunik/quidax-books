import React from "react";
import search from "../../icons/search.svg";
import back from "../../icons/back.svg";
import cancel from "../../icons/cancel.svg";

import Styles from "./header.module.css";

const MobileSearchBox = () => {
  const [isSearchActive, setIsSearchActive] = React.useState<boolean>(false);
  const toogleSearchActive = () => setIsSearchActive(!isSearchActive);

  return (
    <>
      <button
        className={`NoneButton ${Styles.HeaderActionMobile}`}
        onClick={toogleSearchActive}
      >
        <img src={search} alt="search" />
      </button>
      {isSearchActive && (
        <div className={Styles.MobileSearchBoxLayer}>
          <button className="NoneButton" onClick={toogleSearchActive}>
            <img alt="back-icon" src={back} />
          </button>
          <div className={Styles.MobileSearchBox}>
            <input type="text" className={Styles.MobileSearchInput} />
            <button className={Styles.MobileSearchButton}>
              <img alt="cancel-icon" src={cancel} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileSearchBox;
