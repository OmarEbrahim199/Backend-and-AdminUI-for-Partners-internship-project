import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { REWARD_TITLE_FIELD } from "../reward/RewardTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ClaimedRewardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="qrCodeUrl" source="qrCodeUrl" />
        <ReferenceField label="Reward" source="reward.id" reference="Reward">
          <TextField source={REWARD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="rewardId" source="rewardId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="userId" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
