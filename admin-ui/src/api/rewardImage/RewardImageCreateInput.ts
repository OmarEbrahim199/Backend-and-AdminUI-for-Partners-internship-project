import { RewardCreateNestedManyWithoutRewardImagesInput } from "./RewardCreateNestedManyWithoutRewardImagesInput";

export type RewardImageCreateInput = {
  largeImageUrl?: string | null;
  mediumImageUrl?: string | null;
  rewardId?: string | null;
  rewards?: RewardCreateNestedManyWithoutRewardImagesInput;
  smallImageUrl?: string | null;
};
