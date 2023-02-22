import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrganisationServiceBase } from "./base/organisation.service.base";

@Injectable()
export class OrganisationService extends OrganisationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
