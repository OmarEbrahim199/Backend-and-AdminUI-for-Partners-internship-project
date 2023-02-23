import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CompanyDetailShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Business Address" source="businessAddress" />
        <TextField label="Business Category" source="businessCategory" />
        <TextField label="Business Email" source="businessEmail" />
        <TextField label="Business Phone Number" source="businessPhoneNumber" />
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
      </SimpleShowLayout>
    </Show>
  );
};
