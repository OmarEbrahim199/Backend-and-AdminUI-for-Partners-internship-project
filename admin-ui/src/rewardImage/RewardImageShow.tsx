import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ORGANISATION_TITLE_FIELD } from "../organisation/OrganisationTitle";
import { REWARDIMAGE_TITLE_FIELD } from "./RewardImageTitle";

export const RewardImageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="largeImageUrl" source="largeImageUrl" />
        <TextField label="mediumImageUrl" source="mediumImageUrl" />
        <TextField label="rewardId" source="rewardId" />
        <TextField label="smallImageUrl" source="smallImageUrl" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Reward"
          target="RewardImageId"
          label="Rewards"
        >
          <Datagrid rowClick="show">
            <TextField label="city" source="city" />
            <TextField label="country" source="country" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="discount" source="discount" />
            <TextField label="expirationDate" source="expirationDate" />
            <TextField label="ID" source="id" />
            <TextField label="latitude" source="latitude" />
            <TextField label="longitude" source="longitude" />
            <TextField label="miles" source="miles" />
            <ReferenceField
              label="Organisation"
              source="organisation.id"
              reference="Organisation"
            >
              <TextField source={ORGANISATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="RewardImage"
              source="rewardimage.id"
              reference="RewardImage"
            >
              <TextField source={REWARDIMAGE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="title" source="title" />
            <TextField label="totalCount" source="totalCount" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
