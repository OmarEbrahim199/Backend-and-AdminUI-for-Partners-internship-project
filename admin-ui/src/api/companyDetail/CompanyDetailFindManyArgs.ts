import { CompanyDetailWhereInput } from "./CompanyDetailWhereInput";
import { CompanyDetailOrderByInput } from "./CompanyDetailOrderByInput";

export type CompanyDetailFindManyArgs = {
  where?: CompanyDetailWhereInput;
  orderBy?: Array<CompanyDetailOrderByInput>;
  skip?: number;
  take?: number;
};
