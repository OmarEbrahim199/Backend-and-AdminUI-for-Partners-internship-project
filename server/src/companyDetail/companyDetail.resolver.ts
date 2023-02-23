import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CompanyDetailResolverBase } from "./base/companyDetail.resolver.base";
import { CompanyDetail } from "./base/CompanyDetail";
import { CompanyDetailService } from "./companyDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CompanyDetail)
export class CompanyDetailResolver extends CompanyDetailResolverBase {
  constructor(
    protected readonly service: CompanyDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
