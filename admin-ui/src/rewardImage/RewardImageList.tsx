import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RewardImageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RewardImages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="largeImageUrl" source="largeImageUrl" />
        <TextField label="mediumImageUrl" source="mediumImageUrl" />
        <TextField label="rewardId" source="rewardId" />
        <TextField label="smallImageUrl" source="smallImageUrl" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
