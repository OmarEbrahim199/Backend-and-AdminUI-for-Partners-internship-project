import { Reward } from "../reward/Reward";
import { User } from "../user/User";

export type ClaimedReward = {
  createdAt: Date;
  id: string;
  qrCodeUrl: string | null;
  reward?: Reward | null;
  updatedAt: Date;
  user?: User | null;
};
