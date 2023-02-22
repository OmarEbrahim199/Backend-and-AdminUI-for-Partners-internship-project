import { Module } from "@nestjs/common";
import { RewardImageModuleBase } from "./base/rewardImage.module.base";
import { RewardImageService } from "./rewardImage.service";
import { RewardImageController } from "./rewardImage.controller";
import { RewardImageResolver } from "./rewardImage.resolver";

@Module({
  imports: [RewardImageModuleBase],
  controllers: [RewardImageController],
  providers: [RewardImageService, RewardImageResolver],
  exports: [RewardImageService],
})
export class RewardImageModule {}
