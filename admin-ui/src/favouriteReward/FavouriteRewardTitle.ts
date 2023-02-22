import { FavouriteReward as TFavouriteReward } from "../api/favouriteReward/FavouriteReward";

export const FAVOURITEREWARD_TITLE_FIELD = "rewardId";

export const FavouriteRewardTitle = (record: TFavouriteReward): string => {
  return record.rewardId || String(record.id);
};
