import { SortOrder } from "../../util/SortOrder";

export type ClaimedRewardOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  qrCodeUrl?: SortOrder;
  rewardId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
