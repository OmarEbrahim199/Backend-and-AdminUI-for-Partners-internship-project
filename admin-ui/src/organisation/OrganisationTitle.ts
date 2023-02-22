import { Organisation as TOrganisation } from "../api/organisation/Organisation";

export const ORGANISATION_TITLE_FIELD = "name";

export const OrganisationTitle = (record: TOrganisation): string => {
  return record.name || String(record.id);
};
