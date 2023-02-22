import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { RewardTitle } from "../reward/RewardTitle";
import { UserTitle } from "../user/UserTitle";

export const FavouriteRewardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
