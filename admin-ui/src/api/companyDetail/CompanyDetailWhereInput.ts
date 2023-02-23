import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CompanyDetailWhereInput = {
  businessAddress?: StringFilter;
  businessCategory?: StringNullableFilter;
  businessEmail?: StringNullableFilter;
  businessPhoneNumber?: StringNullableFilter;
  companyName?: StringFilter;
  companyUrl?: StringNullableFilter;
  cvrNumber?: StringFilter;
  id?: StringFilter;
  logo?: StringNullableFilter;
  shortIntroductionToTheCompany?: StringNullableFilter;
};
