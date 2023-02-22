/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ClaimedRewardWhereUniqueInput } from "../../claimedReward/base/ClaimedRewardWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ClaimedRewardUpdateManyWithoutUsersInput {
  @Field(() => [ClaimedRewardWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ClaimedRewardWhereUniqueInput],
  })
  connect?: Array<ClaimedRewardWhereUniqueInput>;

  @Field(() => [ClaimedRewardWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ClaimedRewardWhereUniqueInput],
  })
  disconnect?: Array<ClaimedRewardWhereUniqueInput>;

  @Field(() => [ClaimedRewardWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ClaimedRewardWhereUniqueInput],
  })
  set?: Array<ClaimedRewardWhereUniqueInput>;
}

export { ClaimedRewardUpdateManyWithoutUsersInput as ClaimedRewardUpdateManyWithoutUsersInput };