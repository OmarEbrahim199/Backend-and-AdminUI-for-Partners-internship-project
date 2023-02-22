import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RewardWhereUniqueInput } from "../reward/RewardWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ClaimedRewardWhereInput = {
  id?: StringFilter;
  qrCodeUrl?: StringNullableFilter;
  reward?: RewardWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
