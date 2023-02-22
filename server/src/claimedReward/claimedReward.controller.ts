import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ClaimedRewardService } from "./claimedReward.service";
import { ClaimedRewardControllerBase } from "./base/claimedReward.controller.base";

@swagger.ApiTags("claimedRewards")
@common.Controller("claimedRewards")
export class ClaimedRewardController extends ClaimedRewardControllerBase {
  constructor(
    protected readonly service: ClaimedRewardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
