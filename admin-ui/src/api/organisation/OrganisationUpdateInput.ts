import { RewardUpdateManyWithoutOrganisationsInput } from "./RewardUpdateManyWithoutOrganisationsInput";

export type OrganisationUpdateInput = {
  largeImageUrl?: string | null;
  mediumImageUrl?: string | null;
  name?: string | null;
  rewards?: RewardUpdateManyWithoutOrganisationsInput;
  smallImageUrl?: string | null;
  website?: string | null;
};
