import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RewardListRelationFilter } from "../reward/RewardListRelationFilter";

export type OrganisationWhereInput = {
  id?: StringFilter;
  largeImageUrl?: StringNullableFilter;
  mediumImageUrl?: StringNullableFilter;
  name?: StringNullableFilter;
  rewards?: RewardListRelationFilter;
  smallImageUrl?: StringNullableFilter;
  website?: StringNullableFilter;
};
