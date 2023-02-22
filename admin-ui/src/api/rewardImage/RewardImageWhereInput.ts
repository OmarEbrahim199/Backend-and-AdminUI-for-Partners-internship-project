import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RewardListRelationFilter } from "../reward/RewardListRelationFilter";

export type RewardImageWhereInput = {
  id?: StringFilter;
  largeImageUrl?: StringNullableFilter;
  mediumImageUrl?: StringNullableFilter;
  rewardId?: StringNullableFilter;
  rewards?: RewardListRelationFilter;
  smallImageUrl?: StringNullableFilter;
};
