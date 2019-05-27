export interface Review {
  _id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: number;
  course?: string;
  review?: string;
}
export interface ReviewsListInterface {
  review: Review[];
}

export interface ReviewInterface {
  review: Review;
}

interface ServiceInit {
  status: "init";
}
interface ServiceLoading {
  status: "loading";
}
interface ServiceLoaded<T> {
  status: "loaded";
  payload: T;
}
interface ServiceError {
  status: "error";
  error: Error;
}
export type Service<T> =
  | ServiceInit
  | ServiceLoading
  | ServiceLoaded<T>
  | ServiceError;
