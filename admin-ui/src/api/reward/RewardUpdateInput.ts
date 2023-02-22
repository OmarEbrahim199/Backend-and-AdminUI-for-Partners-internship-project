import { ClaimedRewardUpdateManyWithoutRewardsInput } from "./ClaimedRewardUpdateManyWithoutRewardsInput";
import { FavouriteRewardUpdateManyWithoutRewardsInput } from "./FavouriteRewardUpdateManyWithoutRewardsInput";
import { OrganisationWhereUniqueInput } from "../organisation/OrganisationWhereUniqueInput";
import { RewardImageWhereUniqueInput } from "../rewardImage/RewardImageWhereUniqueInput";

export type RewardUpdateInput = {
  city?: string | null;
  claimedRewards?: ClaimedRewardUpdateManyWithoutRewardsInput;
  country?: string | null;
  description?: string | null;
  discount?: number | null;
  expirationDate?: Date | null;
  favouriteRewards?: FavouriteRewardUpdateManyWithoutRewardsInput;
  latitude?: string | null;
  longitude?: string | null;
  miles?: number | null;
  organisation?: OrganisationWhereUniqueInput | null;
  rewardImage?: RewardImageWhereUniqueInput | null;
  title?: string | null;
  totalCount?: string | null;
};
