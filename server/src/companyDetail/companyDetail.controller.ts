import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CompanyDetailService } from "./companyDetail.service";
import { CompanyDetailControllerBase } from "./base/companyDetail.controller.base";

@swagger.ApiTags("companyDetails")
@common.Controller("companyDetails")
export class CompanyDetailController extends CompanyDetailControllerBase {
  constructor(
    protected readonly service: CompanyDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
