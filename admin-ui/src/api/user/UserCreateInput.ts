import { ClaimedRewardCreateNestedManyWithoutUsersInput } from "./ClaimedRewardCreateNestedManyWithoutUsersInput";
import { CompanyDetailCreateNestedManyWithoutUsersInput } from "./CompanyDetailCreateNestedManyWithoutUsersInput";
import { FavouriteRewardCreateNestedManyWithoutUsersInput } from "./FavouriteRewardCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  claimedRewards?: ClaimedRewardCreateNestedManyWithoutUsersInput;
  companyDetails?: CompanyDetailCreateNestedManyWithoutUsersInput;
  favouriteRewards?: FavouriteRewardCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
