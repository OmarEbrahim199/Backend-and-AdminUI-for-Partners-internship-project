import { CompanyDetail as TCompanyDetail } from "../api/companyDetail/CompanyDetail";

export const COMPANYDETAIL_TITLE_FIELD = "companyName";

export const CompanyDetailTitle = (record: TCompanyDetail): string => {
  return record.companyName || String(record.id);
};
