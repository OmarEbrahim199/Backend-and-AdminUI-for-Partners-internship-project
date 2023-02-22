import { RewardImage as TRewardImage } from "../api/rewardImage/RewardImage";

export const REWARDIMAGE_TITLE_FIELD = "largeImageUrl";

export const RewardImageTitle = (record: TRewardImage): string => {
  return record.largeImageUrl || String(record.id);
};
