import { Reward } from "../reward/Reward";
import { User } from "../user/User";

export type FavouriteReward = {
  createdAt: Date;
  id: string;
  reward?: Reward | null;
  rewardId: string | null;
  updatedAt: Date;
  user?: User | null;
  userId: string | null;
};
