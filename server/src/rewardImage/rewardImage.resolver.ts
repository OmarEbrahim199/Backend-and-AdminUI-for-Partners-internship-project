import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RewardImageResolverBase } from "./base/rewardImage.resolver.base";
import { RewardImage } from "./base/RewardImage";
import { RewardImageService } from "./rewardImage.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Rewardimage)
export class RewardImageResolver extends RewardImageResolverBase {
  constructor(
    protected readonly service: RewardImageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
