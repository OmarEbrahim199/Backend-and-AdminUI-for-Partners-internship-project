import { ClaimedRewardCreateNestedManyWithoutUsersInput } from "./ClaimedRewardCreateNestedManyWithoutUsersInput";
import { FavouriteRewardCreateNestedManyWithoutUsersInput } from "./FavouriteRewardCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  claimedRewards?: ClaimedRewardCreateNestedManyWithoutUsersInput;
  favouriteRewards?: FavouriteRewardCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
