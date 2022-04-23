import { IBook } from "../../types";

import back from "../../icons/back.svg";

type Props = {
  book: IBook;
};

const BookDetails = ({ book }: Props) => {
  const { image_url, title } = book;
  return (
    <main>
      <nav>
        <img src={back} alt="back" /> <h5>Back</h5>
      </nav>
      <div>
        <img src={image_url} alt={title} />
        <h1>{title}</h1>
      </div>
    </main>
  );
};

export default BookDetails;
