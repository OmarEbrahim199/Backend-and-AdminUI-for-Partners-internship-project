import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FavouriteRewardWhereInput = {
  id?: StringFilter;
  rewardId?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
