import { RewardImageWhereInput } from "./RewardImageWhereInput";
import { RewardImageOrderByInput } from "./RewardImageOrderByInput";

export type RewardImageFindManyArgs = {
  where?: RewardImageWhereInput;
  orderBy?: Array<RewardImageOrderByInput>;
  skip?: number;
  take?: number;
};
