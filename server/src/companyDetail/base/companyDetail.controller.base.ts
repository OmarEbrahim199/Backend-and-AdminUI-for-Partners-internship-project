/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CompanyDetailService } from "../companyDetail.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CompanyDetailCreateInput } from "./CompanyDetailCreateInput";
import { CompanyDetailWhereInput } from "./CompanyDetailWhereInput";
import { CompanyDetailWhereUniqueInput } from "./CompanyDetailWhereUniqueInput";
import { CompanyDetailFindManyArgs } from "./CompanyDetailFindManyArgs";
import { CompanyDetailUpdateInput } from "./CompanyDetailUpdateInput";
import { CompanyDetail } from "./CompanyDetail";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CompanyDetailControllerBase {
  constructor(
    protected readonly service: CompanyDetailService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CompanyDetail })
  @nestAccessControl.UseRoles({
    resource: "CompanyDetail",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: CompanyDetailCreateInput
  ): Promise<CompanyDetail> {
    return await this.service.create({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        businessAddress: true,
        businessCategory: true,
        businessEmail: true,
        businessPhoneNumber: true,
        companyName: true,
        companyUrl: true,
        createdAt: true,
        cvrNumber: true,
        id: true,
        logo: true,
        shortIntroductionToTheCompany: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [CompanyDetail] })
  @ApiNestedQuery(CompanyDetailFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CompanyDetail",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<CompanyDetail[]> {
    const args = plainToClass(CompanyDetailFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        businessAddress: true,
        businessCategory: true,
        businessEmail: true,
        businessPhoneNumber: true,
        companyName: true,
        companyUrl: true,
        createdAt: true,
        cvrNumber: true,
        id: true,
        logo: true,
        shortIntroductionToTheCompany: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CompanyDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CompanyDetail",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: CompanyDetailWhereUniqueInput
  ): Promise<CompanyDetail | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        businessAddress: true,
        businessCategory: true,
        businessEmail: true,
        businessPhoneNumber: true,
        companyName: true,
        companyUrl: true,
        createdAt: true,
        cvrNumber: true,
        id: true,
        logo: true,
        shortIntroductionToTheCompany: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CompanyDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CompanyDetail",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: CompanyDetailWhereUniqueInput,
    @common.Body() data: CompanyDetailUpdateInput
  ): Promise<CompanyDetail | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          businessAddress: true,
          businessCategory: true,
          businessEmail: true,
          businessPhoneNumber: true,
          companyName: true,
          companyUrl: true,
          createdAt: true,
          cvrNumber: true,
          id: true,
          logo: true,
          shortIntroductionToTheCompany: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CompanyDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CompanyDetail",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: CompanyDetailWhereUniqueInput
  ): Promise<CompanyDetail | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          businessAddress: true,
          businessCategory: true,
          businessEmail: true,
          businessPhoneNumber: true,
          companyName: true,
          companyUrl: true,
          createdAt: true,
          cvrNumber: true,
          id: true,
          logo: true,
          shortIntroductionToTheCompany: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
