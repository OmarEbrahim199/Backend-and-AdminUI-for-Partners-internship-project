import { Module } from "@nestjs/common";
import { FavouriteRewardModuleBase } from "./base/favouriteReward.module.base";
import { FavouriteRewardService } from "./favouriteReward.service";
import { FavouriteRewardController } from "./favouriteReward.controller";
import { FavouriteRewardResolver } from "./favouriteReward.resolver";

@Module({
  imports: [FavouriteRewardModuleBase],
  controllers: [FavouriteRewardController],
  providers: [FavouriteRewardService, FavouriteRewardResolver],
  exports: [FavouriteRewardService],
})
export class FavouriteRewardModule {}
