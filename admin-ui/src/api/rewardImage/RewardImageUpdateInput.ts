import { RewardUpdateManyWithoutRewardImagesInput } from "./RewardUpdateManyWithoutRewardImagesInput";

export type RewardImageUpdateInput = {
  largeImageUrl?: string | null;
  mediumImageUrl?: string | null;
  rewardId?: string | null;
  rewards?: RewardUpdateManyWithoutRewardImagesInput;
  smallImageUrl?: string | null;
};
