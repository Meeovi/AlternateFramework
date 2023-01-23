import { GraphQLResolveInfo } from "graphql";
import { AggregateRewardsArgs } from "./args/AggregateRewardsArgs";
import { CreateManyRewardsArgs } from "./args/CreateManyRewardsArgs";
import { CreateOneRewardsArgs } from "./args/CreateOneRewardsArgs";
import { DeleteManyRewardsArgs } from "./args/DeleteManyRewardsArgs";
import { DeleteOneRewardsArgs } from "./args/DeleteOneRewardsArgs";
import { FindFirstRewardsArgs } from "./args/FindFirstRewardsArgs";
import { FindFirstRewardsOrThrowArgs } from "./args/FindFirstRewardsOrThrowArgs";
import { FindManyRewardsArgs } from "./args/FindManyRewardsArgs";
import { FindUniqueRewardsArgs } from "./args/FindUniqueRewardsArgs";
import { FindUniqueRewardsOrThrowArgs } from "./args/FindUniqueRewardsOrThrowArgs";
import { GroupByRewardsArgs } from "./args/GroupByRewardsArgs";
import { UpdateManyRewardsArgs } from "./args/UpdateManyRewardsArgs";
import { UpdateOneRewardsArgs } from "./args/UpdateOneRewardsArgs";
import { UpsertOneRewardsArgs } from "./args/UpsertOneRewardsArgs";
import { Rewards } from "../../../models/Rewards";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateRewards } from "../../outputs/AggregateRewards";
import { RewardsGroupBy } from "../../outputs/RewardsGroupBy";
export declare class RewardsCrudResolver {
    aggregateRewards(ctx: any, info: GraphQLResolveInfo, args: AggregateRewardsArgs): Promise<AggregateRewards>;
    createManyRewards(ctx: any, info: GraphQLResolveInfo, args: CreateManyRewardsArgs): Promise<AffectedRowsOutput>;
    createOneRewards(ctx: any, info: GraphQLResolveInfo, args: CreateOneRewardsArgs): Promise<Rewards>;
    deleteManyRewards(ctx: any, info: GraphQLResolveInfo, args: DeleteManyRewardsArgs): Promise<AffectedRowsOutput>;
    deleteOneRewards(ctx: any, info: GraphQLResolveInfo, args: DeleteOneRewardsArgs): Promise<Rewards | null>;
    findFirstRewards(ctx: any, info: GraphQLResolveInfo, args: FindFirstRewardsArgs): Promise<Rewards | null>;
    findFirstRewardsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstRewardsOrThrowArgs): Promise<Rewards | null>;
    findManyRewards(ctx: any, info: GraphQLResolveInfo, args: FindManyRewardsArgs): Promise<Rewards[]>;
    findUniqueRewards(ctx: any, info: GraphQLResolveInfo, args: FindUniqueRewardsArgs): Promise<Rewards | null>;
    findUniqueRewardsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueRewardsOrThrowArgs): Promise<Rewards | null>;
    groupByRewards(ctx: any, info: GraphQLResolveInfo, args: GroupByRewardsArgs): Promise<RewardsGroupBy[]>;
    updateManyRewards(ctx: any, info: GraphQLResolveInfo, args: UpdateManyRewardsArgs): Promise<AffectedRowsOutput>;
    updateOneRewards(ctx: any, info: GraphQLResolveInfo, args: UpdateOneRewardsArgs): Promise<Rewards | null>;
    upsertOneRewards(ctx: any, info: GraphQLResolveInfo, args: UpsertOneRewardsArgs): Promise<Rewards>;
}