import { ClaimedRewardCreateNestedManyWithoutRewardsInput } from "./ClaimedRewardCreateNestedManyWithoutRewardsInput";
import { FavouriteRewardCreateNestedManyWithoutRewardsInput } from "./FavouriteRewardCreateNestedManyWithoutRewardsInput";
import { OrganisationWhereUniqueInput } from "../organisation/OrganisationWhereUniqueInput";
import { RewardImageWhereUniqueInput } from "../rewardImage/RewardImageWhereUniqueInput";

export type RewardCreateInput = {
  city?: string | null;
  claimedRewards?: ClaimedRewardCreateNestedManyWithoutRewardsInput;
  country?: string | null;
  description?: string | null;
  discount?: number | null;
  expirationDate?: Date | null;
  favouriteRewards?: FavouriteRewardCreateNestedManyWithoutRewardsInput;
  latitude?: string | null;
  longitude?: string | null;
  miles?: number | null;
  organisation?: OrganisationWhereUniqueInput | null;
  rewardImage?: RewardImageWhereUniqueInput | null;
  title?: string | null;
  totalCount?: string | null;
};
