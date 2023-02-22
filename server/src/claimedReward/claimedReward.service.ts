import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClaimedRewardServiceBase } from "./base/claimedReward.service.base";

@Injectable()
export class ClaimedRewardService extends ClaimedRewardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
