import { Module } from "@nestjs/common";
import { CompanyDetailModuleBase } from "./base/companyDetail.module.base";
import { CompanyDetailService } from "./companyDetail.service";
import { CompanyDetailController } from "./companyDetail.controller";
import { CompanyDetailResolver } from "./companyDetail.resolver";

@Module({
  imports: [CompanyDetailModuleBase],
  controllers: [CompanyDetailController],
  providers: [CompanyDetailService, CompanyDetailResolver],
  exports: [CompanyDetailService],
})
export class CompanyDetailModule {}
