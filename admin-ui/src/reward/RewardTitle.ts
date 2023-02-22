import { Reward as TReward } from "../api/reward/Reward";

export const REWARD_TITLE_FIELD = "title";

export const RewardTitle = (record: TReward): string => {
  return record.title || String(record.id);
};
