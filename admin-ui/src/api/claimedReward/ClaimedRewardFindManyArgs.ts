import { ClaimedRewardWhereInput } from "./ClaimedRewardWhereInput";
import { ClaimedRewardOrderByInput } from "./ClaimedRewardOrderByInput";

export type ClaimedRewardFindManyArgs = {
  where?: ClaimedRewardWhereInput;
  orderBy?: Array<ClaimedRewardOrderByInput>;
  skip?: number;
  take?: number;
};
