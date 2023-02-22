import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { REWARD_TITLE_FIELD } from "./RewardTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ORGANISATION_TITLE_FIELD } from "../organisation/OrganisationTitle";
import { REWARDIMAGE_TITLE_FIELD } from "../rewardImage/RewardImageTitle";

export const RewardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="ClaimedReward"
          target="RewardId"
          label="ClaimedRewards"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="qrCodeUrl" source="qrCodeUrl" />
            <ReferenceField
              label="Reward"
              source="reward.id"
              reference="Reward"
            >
              <TextField source={REWARD_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FavouriteReward"
          target="RewardId"
          label="FavouriteRewards"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Reward"
              source="reward.id"
              reference="Reward"
            >
              <TextField source={REWARD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="rewardId" source="rewardId" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="userId" source="userId" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
