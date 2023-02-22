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

export const OrganisationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="largeImageUrl" source="largeImageUrl" />
        <TextInput label="mediumImageUrl" source="mediumImageUrl" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="rewards"
          reference="Reward"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RewardTitle} />
        </ReferenceArrayInput>
        <TextInput label="smallImageUrl" source="smallImageUrl" />
        <TextInput label="website" source="website" />
      </SimpleForm>
    </Edit>
  );
};
