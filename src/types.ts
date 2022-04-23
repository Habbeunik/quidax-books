interface IAuthor {
  id: number;
  name: string;
  email: string;
  history: string;
  book: number;
  rating: number | null;
  published_at: string;
}

interface IGenre {
  id: number;
  name: string;
}

interface ITag {
  id: number;
  name: string;
}

export interface IBook {
  id: number;
  title: string;
  subtitle: string;
  publisher: string;
  release_date: string;
  number_of_purchases: number;
  likes: number;
  rating: number;
  price: number;
  currency: number;
  available_copies: number;
  full_description: string;
  featured: boolean | null;
  tag?: any;
  genres?: IGenre[];
  published_at: string;
  created_at: string;
  updated_at: string;
  authors: IAuthor[];
  tags: ITag[];
  image_url: string;
}
