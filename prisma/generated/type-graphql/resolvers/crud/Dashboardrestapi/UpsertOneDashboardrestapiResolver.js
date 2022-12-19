"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneDashboardrestapiResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneDashboardrestapiArgs_1 = require("./args/UpsertOneDashboardrestapiArgs");
const Dashboardrestapi_1 = require("../../../models/Dashboardrestapi");
const helpers_1 = require("../../../helpers");
let UpsertOneDashboardrestapiResolver = class UpsertOneDashboardrestapiResolver {
    async upsertOneDashboardrestapi(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardrestapi.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardrestapi_1.Dashboardrestapi, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneDashboardrestapiArgs_1.UpsertOneDashboardrestapiArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneDashboardrestapiResolver.prototype, "upsertOneDashboardrestapi", null);
UpsertOneDashboardrestapiResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardrestapi_1.Dashboardrestapi)
], UpsertOneDashboardrestapiResolver);
exports.UpsertOneDashboardrestapiResolver = UpsertOneDashboardrestapiResolver;
