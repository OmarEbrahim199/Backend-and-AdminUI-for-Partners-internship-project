import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RewardImageService } from "./rewardImage.service";
import { RewardImageControllerBase } from "./base/rewardImage.controller.base";

@swagger.ApiTags("rewardImages")
@common.Controller("rewardImages")
export class RewardImageController extends RewardImageControllerBase {
  constructor(
    protected readonly service: RewardImageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
