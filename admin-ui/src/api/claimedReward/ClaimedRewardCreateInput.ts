import { RewardWhereUniqueInput } from "../reward/RewardWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ClaimedRewardCreateInput = {
  qrCodeUrl?: string | null;
  reward?: RewardWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
