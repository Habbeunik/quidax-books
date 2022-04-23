import React from "react";
import search from "../../icons/search.svg";
import back from "../../icons/back.svg";
import cancel from "../../icons/cancel.svg";
import { useSearchContext } from "../../context/search";

import Styles from "./header.module.css";

const MobileSearchBox = () => {
  const { isSearchMode, searchValue, setIsSearchMode, setSearchValue } =
    useSearchContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleBackClick = () => {
    setIsSearchMode(false);
    setSearchValue("");
  };

  return (
    <>
      <button
        className={`NoneButton ${Styles.HeaderActionMobile}`}
        onClick={() => setIsSearchMode(true)}
      >
        <img src={search} alt="search" />
      </button>
      <div
        className={`${Styles.MobileSearchBoxLayer} ${
          isSearchMode ? Styles.MobileSearchBoxLayerActive : ""
        }`}
      >
        <button className="NoneButton" onClick={handleBackClick}>
          <img alt="back-icon" src={back} />
        </button>
        <div className={Styles.MobileSearchBox}>
          <input
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            className={Styles.MobileSearchInput}
          />
          <button className={Styles.MobileSearchButton}>
            <img alt="cancel-icon" src={cancel} />
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileSearchBox;
