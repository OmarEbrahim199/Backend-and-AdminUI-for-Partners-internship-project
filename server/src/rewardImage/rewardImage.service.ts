import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RewardImageServiceBase } from "./base/rewardImage.service.base";

@Injectable()
export class RewardImageService extends RewardImageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
