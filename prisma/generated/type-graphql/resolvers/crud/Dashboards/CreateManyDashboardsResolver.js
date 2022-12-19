"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyDashboardsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyDashboardsArgs_1 = require("./args/CreateManyDashboardsArgs");
const Dashboards_1 = require("../../../models/Dashboards");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyDashboardsResolver = class CreateManyDashboardsResolver {
    async createManyDashboards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboards.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyDashboardsArgs_1.CreateManyDashboardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyDashboardsResolver.prototype, "createManyDashboards", null);
CreateManyDashboardsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboards_1.Dashboards)
], CreateManyDashboardsResolver);
exports.CreateManyDashboardsResolver = CreateManyDashboardsResolver;
