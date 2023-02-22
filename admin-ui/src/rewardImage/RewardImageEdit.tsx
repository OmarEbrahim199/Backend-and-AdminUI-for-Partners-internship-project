import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RewardTitle } from "../reward/RewardTitle";

export const RewardImageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="largeImageUrl" source="largeImageUrl" />
        <TextInput label="mediumImageUrl" source="mediumImageUrl" />
        <TextInput label="rewardId" source="rewardId" />
        <ReferenceArrayInput
          source="rewards"
          reference="Reward"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RewardTitle} />
        </ReferenceArrayInput>
        <TextInput label="smallImageUrl" source="smallImageUrl" />
      </SimpleForm>
    </Edit>
  );
};
