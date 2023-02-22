import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { RewardTitle } from "../reward/RewardTitle";
import { UserTitle } from "../user/UserTitle";

export const FavouriteRewardCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="reward.id" reference="Reward" label="Reward">
          <SelectInput optionText={RewardTitle} />
        </ReferenceInput>
        <TextInput label="rewardId" source="rewardId" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Create>
  );
};
