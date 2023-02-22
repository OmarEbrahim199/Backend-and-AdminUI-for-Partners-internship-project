import { RewardCreateNestedManyWithoutOrganisationsInput } from "./RewardCreateNestedManyWithoutOrganisationsInput";

export type OrganisationCreateInput = {
  largeImageUrl?: string | null;
  mediumImageUrl?: string | null;
  name?: string | null;
  rewards?: RewardCreateNestedManyWithoutOrganisationsInput;
  smallImageUrl?: string | null;
  website?: string | null;
};
