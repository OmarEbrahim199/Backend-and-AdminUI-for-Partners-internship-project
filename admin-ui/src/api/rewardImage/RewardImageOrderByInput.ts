import { SortOrder } from "../../util/SortOrder";

export type RewardImageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  largeImageUrl?: SortOrder;
  mediumImageUrl?: SortOrder;
  rewardId?: SortOrder;
  smallImageUrl?: SortOrder;
  updatedAt?: SortOrder;
};
