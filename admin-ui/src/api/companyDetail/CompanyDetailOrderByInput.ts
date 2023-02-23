import { SortOrder } from "../../util/SortOrder";

export type CompanyDetailOrderByInput = {
  businessAddress?: SortOrder;
  businessCategory?: SortOrder;
  businessEmail?: SortOrder;
  businessPhoneNumber?: SortOrder;
  companyName?: SortOrder;
  companyUrl?: SortOrder;
  createdAt?: SortOrder;
  cvrNumber?: SortOrder;
  id?: SortOrder;
  logo?: SortOrder;
  shortIntroductionToTheCompany?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
