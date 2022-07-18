import type { Image } from './image'

export type Game = {
  title: string;
  description: string;
  excerpt: string;
  platforms: string[];
  genres: string[];
  tags: string[];

  developer: string;
  publisher: string;

  coverImage: Image;
  thumbnails: Image[];

  dateReleased: string;
  dateUpdated?: string;

  price: number;
  salePrice?: number;

  rating: GameRating;
  reviews: GameReview[];
}

export type GamePreview = Pick<Game, "title" | "coverImage" | "price" | "salePrice">

export type GameRating = {}
export type GameReview = {}
