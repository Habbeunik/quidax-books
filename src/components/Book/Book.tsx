import React from "react";

import cart from "../../icons/cart.svg";
import people from "../../icons/people.svg";
import likeIcon from "../../icons/like.svg";
import ratingIcon from "../../icons/rating.svg";
import { useCart } from "../../context/cart";
import { IBook } from "../../types";

import Styles from "./book.module.css";

type Props = {
  book: IBook;
  onClick: (id: number) => void;
};

const Book: React.FC<Props> = ({ book, onClick }) => {
  const { addToCart, setCartIsOpen } = useCart();
  const {
    title,
    authors,
    genres,
    available_copies,
    rating,
    price,
    likes,
    image_url,
    id,
  } = book;

  const authorsText = authors
    .map(
      (author) =>
        `${author.name}-${new Date(author.published_at).getFullYear()}`
    )
    .join(",");
  const genresText = genres?.map((genre) => genre.name).join(", ");
  const isOutOfStock = available_copies < 1;

  const handleAddToCart = (e: any) => {
    addToCart(id);
    setCartIsOpen(true);
    e.stopPropagation();
  };

  return (
    <div className={Styles.BookItem} onClick={() => onClick(id)}>
      <div className={Styles.BookItemImage}>
        <img src={image_url} alt={title} />
      </div>
      <div className={Styles.BookItemDetails}>
        <h5 className={Styles.BookItemTitle}>{title}</h5>
        <p className={Styles.BookItemText}>{authorsText}</p>
        <p className={Styles.BookItemText}>{genresText}</p>
        <div className={Styles.BookItemActions}>
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
        <div className="flex">
          <p className={Styles.BookItemText}>{price}</p>
          <p className={`${Styles.BookItemText} ${Styles.BookItemCopyText}`}>
            {available_copies} Copies Available
          </p>
        </div>
        <button
          disabled={isOutOfStock}
          className={Styles.BookAddToCart}
          onClick={handleAddToCart}
        >
          <img src={cart} alt="cart" />
          {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Book;
