import { ClaimedRewardUpdateManyWithoutUsersInput } from "./ClaimedRewardUpdateManyWithoutUsersInput";
import { FavouriteRewardUpdateManyWithoutUsersInput } from "./FavouriteRewardUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  claimedRewards?: ClaimedRewardUpdateManyWithoutUsersInput;
  favouriteRewards?: FavouriteRewardUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
