import { createContext, FC, useState, useContext } from "react";

const SearchContext = createContext({
  isSearchMode: false,
  setIsSearchMode: (val: boolean) => {},
  searchValue: "",
  setSearchValue: (val: string) => {},
});

const SearchProvider: FC<{ children: React.ReactElement }> = ({ children }) => {
  const [isSearchMode, setIsSearchMode] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <SearchContext.Provider
      value={{ isSearchMode, setIsSearchMode, searchValue, setSearchValue }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;

export const useSearchContext = () => useContext(SearchContext);
