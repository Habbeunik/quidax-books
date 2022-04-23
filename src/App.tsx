import { useMemo } from "react";

import Header from "./components/Header/Index";
import BookList from "./components/Book/BookList";
import { IBook } from "./types";
import { useSearchContext } from "./context/search";

import bookJson from "./db/data.json";

import "./App.css";

const BOOKS = bookJson.data as unknown as IBook[];
const featuredBooks = BOOKS.filter((book) => book.featured);

function App() {
  const { isSearchMode, searchValue } = useSearchContext();
  const filteredBooks = useMemo(() => {
    if (searchValue.trim()) {
      return BOOKS.filter((book) => {
        const matchPool = [
          book.title.toLowerCase(),
          ...book.authors.map((author) => author.name.toLowerCase()),
          ...(book.genres?.map((genre) => genre.name.toLowerCase()) || []),
          ...book.tags.map((tag) => tag.name.toLowerCase()),
        ].join(" ");

        return matchPool.includes(searchValue.toLowerCase());
      });
    }

    return BOOKS;
  }, [searchValue]);

  return (
    <div className="App">
      <Header />
      {!isSearchMode && (
        <section className="Slider">
          {featuredBooks.map((book) => (
            <div key={book.id} className="BookCover">
              <img src={book.image_url} alt={book.title} />
            </div>
          ))}
        </section>
      )}
      <main className="BookList">
        {isSearchMode && searchValue ? (
          <h4 className="Headline">
            3 results <span className="fontWLight">found for</span> `
            {searchValue}`
          </h4>
        ) : (
          <h4 className="Headline">All Books</h4>
        )}
        <BookList books={filteredBooks} />
      </main>
    </div>
  );
}

export default App;
