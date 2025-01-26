export default class Review {
  date: Date;
  header: string;
  medium: string;
  rating: number;
  review: string;

  constructor(date: Date, header: string, medium: string, rating: number, review: string) {
    this.date = date;
    this.header = header;
    this.medium = medium;
    this.rating = rating;
    this.review = review;
  }
}
