/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ClaimedRewardWhereInput } from "./ClaimedRewardWhereInput";
import { Type } from "class-transformer";
import { ClaimedRewardOrderByInput } from "./ClaimedRewardOrderByInput";

@ArgsType()
class ClaimedRewardFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ClaimedRewardWhereInput,
  })
  @Field(() => ClaimedRewardWhereInput, { nullable: true })
  @Type(() => ClaimedRewardWhereInput)
  where?: ClaimedRewardWhereInput;

  @ApiProperty({
    required: false,
    type: [ClaimedRewardOrderByInput],
  })
  @Field(() => [ClaimedRewardOrderByInput], { nullable: true })
  @Type(() => ClaimedRewardOrderByInput)
  orderBy?: Array<ClaimedRewardOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ClaimedRewardFindManyArgs as ClaimedRewardFindManyArgs };