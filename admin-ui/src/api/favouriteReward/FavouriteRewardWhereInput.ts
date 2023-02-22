import { StringFilter } from "../../util/StringFilter";
import { RewardWhereUniqueInput } from "../reward/RewardWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FavouriteRewardWhereInput = {
  id?: StringFilter;
  reward?: RewardWhereUniqueInput;
  rewardId?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  userId?: StringNullableFilter;
};
