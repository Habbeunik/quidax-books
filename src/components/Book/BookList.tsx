import React from "react";
import { IBook } from "../../types";
import Book from "./Book";
import { useSearchContext } from "../../context/search";
import { useMemo } from "react";
import Styles from "./book.module.css";

type Props = { books: IBook[]; onBookClick: (id: number) => void };

const getSearchResult = (searchValue: string, books: IBook[]) => {
  if (searchValue.trim()) {
    return books.filter((book) => {
      const matchPool = [
        book.title.toLowerCase(),
        ...book.authors.map((author) => author.name.toLowerCase()),
        ...(book.genres?.map((genre) => genre.name.toLowerCase()) || []),
        ...book.tags.map((tag) => tag.name.toLowerCase()),
      ].join(" ");

      return matchPool.includes(searchValue.toLowerCase());
    });
  }

  return books;
};

const BookList: React.FC<Props> = ({ books, onBookClick }) => {
  const featuredBooks = books.filter((book) => book.featured);

  const { isSearchMode, searchValue } = useSearchContext();
  const filteredBooks = useMemo(
    () => getSearchResult(searchValue, books),
    [searchValue, books]
  );

  return (
    <main>
      {!isSearchMode && (
        <section className="Slider">
          {featuredBooks.map((book) => (
            <div
              onClick={() => onBookClick(book.id)}
              key={book.id}
              className="BookCover"
            >
              <img src={book.image_url} alt={book.title} />
            </div>
          ))}
        </section>
      )}
      <section className="BookList">
        {isSearchMode && searchValue ? (
          <h4 className="Headline">
            3 results <span className="fontWLight">found for</span> `
            {searchValue}`
          </h4>
        ) : (
          <h4 className="Headline">All Books</h4>
        )}
        <div className={Styles.BookItemList}>
          {filteredBooks.map((book) => (
            <Book key={book.id} book={book} onClick={onBookClick} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default BookList;
