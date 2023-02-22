import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FavouriteRewardService } from "./favouriteReward.service";
import { FavouriteRewardControllerBase } from "./base/favouriteReward.controller.base";

@swagger.ApiTags("favouriteRewards")
@common.Controller("favouriteRewards")
export class FavouriteRewardController extends FavouriteRewardControllerBase {
  constructor(
    protected readonly service: FavouriteRewardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
