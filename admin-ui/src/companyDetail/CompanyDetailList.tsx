import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CompanyDetailList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CompanyDetails"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
