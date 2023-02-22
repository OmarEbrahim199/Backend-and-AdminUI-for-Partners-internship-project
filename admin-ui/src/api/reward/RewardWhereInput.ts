import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClaimedRewardListRelationFilter } from "../claimedReward/ClaimedRewardListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FavouriteRewardListRelationFilter } from "../favouriteReward/FavouriteRewardListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { OrganisationWhereUniqueInput } from "../organisation/OrganisationWhereUniqueInput";
import { RewardImageWhereUniqueInput } from "../rewardImage/RewardImageWhereUniqueInput";

export type RewardWhereInput = {
  city?: StringNullableFilter;
  claimedRewards?: ClaimedRewardListRelationFilter;
  country?: StringNullableFilter;
  description?: StringNullableFilter;
  discount?: IntNullableFilter;
  expirationDate?: DateTimeNullableFilter;
  favouriteRewards?: FavouriteRewardListRelationFilter;
  id?: StringFilter;
  latitude?: StringNullableFilter;
  longitude?: StringNullableFilter;
  miles?: FloatNullableFilter;
  organisation?: OrganisationWhereUniqueInput;
  rewardImage?: RewardImageWhereUniqueInput;
  title?: StringNullableFilter;
  totalCount?: StringNullableFilter;
};
