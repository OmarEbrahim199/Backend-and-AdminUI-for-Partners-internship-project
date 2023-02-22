import { ClaimedReward as TClaimedReward } from "../api/claimedReward/ClaimedReward";

export const CLAIMEDREWARD_TITLE_FIELD = "qrCodeUrl";

export const ClaimedRewardTitle = (record: TClaimedReward): string => {
  return record.qrCodeUrl || String(record.id);
};
