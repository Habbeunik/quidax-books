import React from "react";
import { IBook } from "../../types";
import Book from "./Book";

type Props = {
  books?: IBook[];
};

const BookList: React.FC<Props> = ({ books }) => {
  return (
    <main>
      {books ? (
        books.map((book) => <Book key={book.id} book={book} />)
      ) : (
        <h2>loading ...</h2>
      )}
    </main>
  );
};

export default BookList;
