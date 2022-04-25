import { IBook } from "../../types";
import people from "../../icons/people.svg";
import cart from "../../icons/cart-white.svg";
import likeIcon from "../../icons/like.svg";
import ratingIcon from "../../icons/rating.svg";
import back from "../../icons/back.svg";
import Styles from "./book.module.css";

type Props = {
  book: IBook;
  onBackClick: () => void;
};

const BookDetails = ({ book, onBackClick }: Props) => {
  const {
    image_url,
    title,
    authors,
    likes,
    rating,
    genres,
    tags,
    price,
    full_description,
    available_copies,
  } = book;

  const isOutOfStock = available_copies < 1;

  return (
    <main className={Styles.bookDetailsBlock}>
      <nav onClick={onBackClick} className={Styles.bookDetailsNav}>
        <img src={back} alt="back" /> <h5>Back</h5>
      </nav>
      <div className={Styles.bookDetailsImgBlock}>
        <img src={image_url} alt={title} />
      </div>
      <h1>{title}</h1>
      <div>
        {authors.map((author) => (
          <div className={Styles.bookDetailsLabelBox}>
            <h5>{author.name}</h5>
            <span>{new Date(author.published_at).getFullYear()}</span>
          </div>
        ))}
      </div>
      <div className={`${Styles.BookItemActions} ${Styles.BookActions}`}>
        <div className={Styles.BookItemActionItem}>
          <img src={people} alt="people" />
          <p className={Styles.BookItemText}>31</p>
        </div>
        <div className={Styles.BookItemActionItem}>
          <img src={likeIcon} alt="people" />
          <p className={Styles.BookItemText}>{likes}</p>
        </div>
        <div className={Styles.BookItemActionItem}>
          <p className={Styles.BookItemText}>Rating: {rating}</p>
          <img src={ratingIcon} alt="people" />
        </div>
      </div>
      <div className={Styles.BookDetailsGenreTagBox}>
        <div className={Styles.bookDetailsLabelBox}>
          <h5>Genre</h5>
          <span>{genres?.map((genre) => genre.name).join(", ")}</span>
        </div>

        <div className={Styles.bookDetailsLabelBox}>
          <h5>Tags</h5>
          <span>{tags?.map((genre) => genre.name).join(", ")}</span>
        </div>
      </div>
      <button
        disabled={isOutOfStock}
        className={`${Styles.bookDetailsAddToCartButton} ${
          isOutOfStock ? Styles.bookDetailsOutOfStockButton : ""
        }`}
      >
        <img src={cart} alt="cart" />
        <div className={Styles.bookDetailsAddToCartInfo}>
          <h4>{isOutOfStock ? "Out of stock" : "Add to cart"}</h4>
          <p>{available_copies} copies available</p>
        </div>
        <p className={Styles.bookDetailsPrice}>{price}</p>
      </button>
      <p className={Styles.bookDetailsDesc}>{full_description}</p>
    </main>
  );
};

export default BookDetails;
