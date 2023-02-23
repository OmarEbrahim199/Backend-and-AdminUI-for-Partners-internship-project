import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const CompanyDetailEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Business Address" source="businessAddress" />
        <TextInput label="Business Category" source="businessCategory" />
        <TextInput label="Business Email" source="businessEmail" type="email" />
        <TextInput label="Business Phone Number" source="businessPhoneNumber" />
        <TextInput label="Company Name" source="companyName" />
        <TextInput label="Company URL" source="companyUrl" />
        <TextInput label="CVR Number" multiline source="cvrNumber" />
        <TextInput label="Logo" source="logo" />
        <TextInput
          label="ShortIntroductionToTheCompany"
          multiline
          source="shortIntroductionToTheCompany"
        />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
