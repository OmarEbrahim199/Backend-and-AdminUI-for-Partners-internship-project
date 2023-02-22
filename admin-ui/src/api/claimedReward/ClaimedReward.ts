import { Reward } from "../reward/Reward";
import { User } from "../user/User";

export type ClaimedReward = {
  createdAt: Date;
  id: string;
  qrCodeUrl: string | null;
  reward?: Reward | null;
  rewardId: string | null;
  updatedAt: Date;
  user?: User | null;
  userId: string | null;
};
