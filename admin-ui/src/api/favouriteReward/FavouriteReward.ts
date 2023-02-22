import { User } from "../user/User";

export type FavouriteReward = {
  createdAt: Date;
  id: string;
  rewardId: string | null;
  updatedAt: Date;
  user?: User | null;
};
