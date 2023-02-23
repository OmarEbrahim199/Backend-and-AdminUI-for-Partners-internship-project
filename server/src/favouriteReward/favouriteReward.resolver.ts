import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FavouriteRewardResolverBase } from "./base/favouriteReward.resolver.base";
import { FavouriteReward } from "./base/FavouriteReward";
import { FavouriteRewardService } from "./favouriteReward.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FavouriteReward)
export class FavouriteRewardResolver extends FavouriteRewardResolverBase {
  constructor(
    protected readonly service: FavouriteRewardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
