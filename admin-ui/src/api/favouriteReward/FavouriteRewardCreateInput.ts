import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FavouriteRewardCreateInput = {
  rewardId?: string | null;
  user?: UserWhereUniqueInput | null;
};
