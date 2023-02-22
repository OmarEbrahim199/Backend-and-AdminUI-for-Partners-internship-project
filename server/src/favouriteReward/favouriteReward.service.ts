import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FavouriteRewardServiceBase } from "./base/favouriteReward.service.base";

@Injectable()
export class FavouriteRewardService extends FavouriteRewardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
