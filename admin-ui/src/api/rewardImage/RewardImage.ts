import { Reward } from "../reward/Reward";

export type RewardImage = {
  createdAt: Date;
  id: string;
  largeImageUrl: string | null;
  mediumImageUrl: string | null;
  rewardId: string | null;
  rewards?: Array<Reward>;
  smallImageUrl: string | null;
  updatedAt: Date;
};
