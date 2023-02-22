import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const OrganisationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Organisations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="largeImageUrl" source="largeImageUrl" />
        <TextField label="mediumImageUrl" source="mediumImageUrl" />
        <TextField label="name" source="name" />
        <TextField label="smallImageUrl" source="smallImageUrl" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="website" source="website" />
      </Datagrid>
    </List>
  );
};
