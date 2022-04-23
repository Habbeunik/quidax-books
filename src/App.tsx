import Header from "./components/Header/Index";
import BookList from "./components/Book/BookList";
import { IBook } from "./types";

import bookJson from "./db/data.json";

import "./App.css";

const BOOKS = bookJson.data as unknown as IBook[];
const featuredBooks = BOOKS.filter((book) => book.featured);

function App() {
  return (
    <div className="App">
      <Header />
      <section className="Slider">
        {featuredBooks.map((book) => (
          <div key={book.id} className="BookCover">
            <img src={book.image_url} alt={book.title} />
          </div>
        ))}
      </section>
      <main className="BookList">
        <h4 className="Headline">All Books</h4>
        <BookList books={BOOKS} />
      </main>
    </div>
  );
}

export default App;
