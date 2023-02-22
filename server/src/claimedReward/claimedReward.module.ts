import { Module } from "@nestjs/common";
import { ClaimedRewardModuleBase } from "./base/claimedReward.module.base";
import { ClaimedRewardService } from "./claimedReward.service";
import { ClaimedRewardController } from "./claimedReward.controller";
import { ClaimedRewardResolver } from "./claimedReward.resolver";

@Module({
  imports: [ClaimedRewardModuleBase],
  controllers: [ClaimedRewardController],
  providers: [ClaimedRewardService, ClaimedRewardResolver],
  exports: [ClaimedRewardService],
})
export class ClaimedRewardModule {}
