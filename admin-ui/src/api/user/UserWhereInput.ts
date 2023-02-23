import { ClaimedRewardListRelationFilter } from "../claimedReward/ClaimedRewardListRelationFilter";
import { CompanyDetailListRelationFilter } from "../companyDetail/CompanyDetailListRelationFilter";
import { FavouriteRewardListRelationFilter } from "../favouriteReward/FavouriteRewardListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  claimedRewards?: ClaimedRewardListRelationFilter;
  companyDetails?: CompanyDetailListRelationFilter;
  favouriteRewards?: FavouriteRewardListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
