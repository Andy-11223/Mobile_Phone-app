import { User } from "./user.model";

export interface Comment {
  id: number;
  body: string;
  postId: number;
  user: User;
}
