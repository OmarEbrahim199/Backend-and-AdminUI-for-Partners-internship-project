import { FavouriteRewardWhereInput } from "./FavouriteRewardWhereInput";
import { FavouriteRewardOrderByInput } from "./FavouriteRewardOrderByInput";

export type FavouriteRewardFindManyArgs = {
  where?: FavouriteRewardWhereInput;
  orderBy?: Array<FavouriteRewardOrderByInput>;
  skip?: number;
  take?: number;
};
