import { useState } from "react";
import Header from "./components/Header/Index";
import { IBook } from "./types";

import bookJson from "./db/data.json";

import "./App.css";
import BookList from "./components/Book/BookList";
import BookDetails from "./components/Book/BookDetail";

const BOOKS = bookJson.data as unknown as IBook[];

function App() {
  const [viewBookId, setViewBookId] = useState<number | null>(null);

  const currentBook = BOOKS.find((book) => book.id === viewBookId);
  const handleBookClick = (bookId: number) => setViewBookId(bookId);
  const handleBookDetailsBackClick = () => setViewBookId(null);

  return (
    <div className="App">
      <Header />
      {viewBookId && currentBook ? (
        <BookDetails
          book={currentBook}
          onBackClick={handleBookDetailsBackClick}
        />
      ) : (
        <BookList books={BOOKS} onBookClick={handleBookClick} />
      )}
    </div>
  );
}

export default App;
