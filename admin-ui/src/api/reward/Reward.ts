import { ClaimedReward } from "../claimedReward/ClaimedReward";
import { Organisation } from "../organisation/Organisation";
import { RewardImage } from "../rewardImage/RewardImage";

export type Reward = {
  city: string | null;
  claimedRewards?: Array<ClaimedReward>;
  country: string | null;
  createdAt: Date;
  description: string | null;
  discount: number | null;
  expirationDate: Date | null;
  id: string;
  latitude: string | null;
  longitude: string | null;
  miles: number | null;
  organisation?: Organisation | null;
  rewardImage?: RewardImage | null;
  title: string | null;
  totalCount: string | null;
  updatedAt: Date;
};
