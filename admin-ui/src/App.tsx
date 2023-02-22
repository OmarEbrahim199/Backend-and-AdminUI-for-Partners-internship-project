import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { RewardList } from "./reward/RewardList";
import { RewardCreate } from "./reward/RewardCreate";
import { RewardEdit } from "./reward/RewardEdit";
import { RewardShow } from "./reward/RewardShow";
import { ClaimedRewardList } from "./claimedReward/ClaimedRewardList";
import { ClaimedRewardCreate } from "./claimedReward/ClaimedRewardCreate";
import { ClaimedRewardEdit } from "./claimedReward/ClaimedRewardEdit";
import { ClaimedRewardShow } from "./claimedReward/ClaimedRewardShow";
import { FavouriteRewardList } from "./favouriteReward/FavouriteRewardList";
import { FavouriteRewardCreate } from "./favouriteReward/FavouriteRewardCreate";
import { FavouriteRewardEdit } from "./favouriteReward/FavouriteRewardEdit";
import { FavouriteRewardShow } from "./favouriteReward/FavouriteRewardShow";
import { OrganisationList } from "./organisation/OrganisationList";
import { OrganisationCreate } from "./organisation/OrganisationCreate";
import { OrganisationEdit } from "./organisation/OrganisationEdit";
import { OrganisationShow } from "./organisation/OrganisationShow";
import { RewardImageList } from "./rewardImage/RewardImageList";
import { RewardImageCreate } from "./rewardImage/RewardImageCreate";
import { RewardImageEdit } from "./rewardImage/RewardImageEdit";
import { RewardImageShow } from "./rewardImage/RewardImageShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Reward"
          list={RewardList}
          edit={RewardEdit}
          create={RewardCreate}
          show={RewardShow}
        />
        <Resource
          name="ClaimedReward"
          list={ClaimedRewardList}
          edit={ClaimedRewardEdit}
          create={ClaimedRewardCreate}
          show={ClaimedRewardShow}
        />
        <Resource
          name="FavouriteReward"
          list={FavouriteRewardList}
          edit={FavouriteRewardEdit}
          create={FavouriteRewardCreate}
          show={FavouriteRewardShow}
        />
        <Resource
          name="Organisation"
          list={OrganisationList}
          edit={OrganisationEdit}
          create={OrganisationCreate}
          show={OrganisationShow}
        />
        <Resource
          name="RewardImage"
          list={RewardImageList}
          edit={RewardImageEdit}
          create={RewardImageCreate}
          show={RewardImageShow}
        />
      </Admin>
    </div>
  );
};

export default App;
