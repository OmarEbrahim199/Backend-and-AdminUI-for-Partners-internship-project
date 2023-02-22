import { ClaimedReward } from "../claimedReward/ClaimedReward";
import { FavouriteReward } from "../favouriteReward/FavouriteReward";
import { JsonValue } from "type-fest";

export type User = {
  claimedRewards?: Array<ClaimedReward>;
  createdAt: Date;
  favouriteRewards?: Array<FavouriteReward>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
