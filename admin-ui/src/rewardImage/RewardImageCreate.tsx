import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RewardTitle } from "../reward/RewardTitle";

export const RewardImageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
