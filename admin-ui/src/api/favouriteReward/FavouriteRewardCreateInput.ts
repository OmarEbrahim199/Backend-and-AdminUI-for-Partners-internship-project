import { RewardWhereUniqueInput } from "../reward/RewardWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FavouriteRewardCreateInput = {
  reward?: RewardWhereUniqueInput | null;
  rewardId?: string | null;
  user?: UserWhereUniqueInput | null;
  userId?: string | null;
};
