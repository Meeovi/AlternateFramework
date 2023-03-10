"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByEmailsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByEmailsArgs_1 = require("./args/GroupByEmailsArgs");
const Emails_1 = require("../../../models/Emails");
const EmailsGroupBy_1 = require("../../outputs/EmailsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByEmailsResolver = class GroupByEmailsResolver {
    async groupByEmails(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [EmailsGroupBy_1.EmailsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByEmailsArgs_1.GroupByEmailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByEmailsResolver.prototype, "groupByEmails", null);
GroupByEmailsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Emails_1.Emails)
], GroupByEmailsResolver);
exports.GroupByEmailsResolver = GroupByEmailsResolver;
