import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FavouriteRewardUpdateInput = {
  rewardId?: string | null;
  user?: UserWhereUniqueInput | null;
};
