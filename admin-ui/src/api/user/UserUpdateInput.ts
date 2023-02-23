import { ClaimedRewardUpdateManyWithoutUsersInput } from "./ClaimedRewardUpdateManyWithoutUsersInput";
import { CompanyDetailUpdateManyWithoutUsersInput } from "./CompanyDetailUpdateManyWithoutUsersInput";
import { FavouriteRewardUpdateManyWithoutUsersInput } from "./FavouriteRewardUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  claimedRewards?: ClaimedRewardUpdateManyWithoutUsersInput;
  companyDetails?: CompanyDetailUpdateManyWithoutUsersInput;
  favouriteRewards?: FavouriteRewardUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
