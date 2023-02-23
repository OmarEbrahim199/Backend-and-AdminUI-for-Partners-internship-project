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

import { REWARD_TITLE_FIELD } from "../reward/RewardTitle";
import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="ClaimedReward"
          target="UserId"
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
          reference="CompanyDetail"
          target="UserId"
          label="CompanyDetails"
        >
          <Datagrid rowClick="show">
            <TextField label="Business Address" source="businessAddress" />
            <TextField label="Business Category" source="businessCategory" />
            <TextField label="Business Email" source="businessEmail" />
            <TextField
              label="Business Phone Number"
              source="businessPhoneNumber"
            />
            <TextField label="Company Name" source="companyName" />
            <TextField label="Company URL" source="companyUrl" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="CVR Number" source="cvrNumber" />
            <TextField label="ID" source="id" />
            <TextField label="Logo" source="logo" />
            <TextField
              label="ShortIntroductionToTheCompany"
              source="shortIntroductionToTheCompany"
            />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FavouriteReward"
          target="UserId"
          label="FavouriteRewards"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="rewardId" source="rewardId" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
