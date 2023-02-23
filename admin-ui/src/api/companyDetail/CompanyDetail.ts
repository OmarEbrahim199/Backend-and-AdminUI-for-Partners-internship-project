import { User } from "../user/User";

export type CompanyDetail = {
  businessAddress: string;
  businessCategory: string | null;
  businessEmail: string | null;
  businessPhoneNumber: string | null;
  companyName: string;
  companyUrl: string | null;
  createdAt: Date;
  cvrNumber: string;
  id: string;
  logo: string | null;
  shortIntroductionToTheCompany: string | null;
  updatedAt: Date;
  user?: User | null;
};
