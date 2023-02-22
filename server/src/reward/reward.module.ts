import { Module } from "@nestjs/common";
import { RewardModuleBase } from "./base/reward.module.base";
import { RewardService } from "./reward.service";
import { RewardController } from "./reward.controller";
import { RewardResolver } from "./reward.resolver";

@Module({
  imports: [RewardModuleBase],
  controllers: [RewardController],
  providers: [RewardService, RewardResolver],
  exports: [RewardService],
})
export class RewardModule {}
