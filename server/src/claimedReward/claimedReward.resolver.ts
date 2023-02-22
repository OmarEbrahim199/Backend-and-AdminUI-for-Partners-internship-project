import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ClaimedRewardResolverBase } from "./base/claimedReward.resolver.base";
import { ClaimedReward } from "./base/ClaimedReward";
import { ClaimedRewardService } from "./claimedReward.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Claimedreward)
export class ClaimedRewardResolver extends ClaimedRewardResolverBase {
  constructor(
    protected readonly service: ClaimedRewardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
