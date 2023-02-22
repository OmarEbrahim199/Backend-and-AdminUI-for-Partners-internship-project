import { ClaimedRewardListRelationFilter } from "../claimedReward/ClaimedRewardListRelationFilter";
import { FavouriteRewardListRelationFilter } from "../favouriteReward/FavouriteRewardListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  claimedRewards?: ClaimedRewardListRelationFilter;
  favouriteRewards?: FavouriteRewardListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
