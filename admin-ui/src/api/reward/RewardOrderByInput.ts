import { SortOrder } from "../../util/SortOrder";

export type RewardOrderByInput = {
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  discount?: SortOrder;
  expirationDate?: SortOrder;
  id?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  miles?: SortOrder;
  organisationId?: SortOrder;
  rewardImageId?: SortOrder;
  title?: SortOrder;
  totalCount?: SortOrder;
  updatedAt?: SortOrder;
};
