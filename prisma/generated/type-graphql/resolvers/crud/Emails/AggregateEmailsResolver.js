"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEmailsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateEmailsArgs_1 = require("./args/AggregateEmailsArgs");
const Emails_1 = require("../../../models/Emails");
const AggregateEmails_1 = require("../../outputs/AggregateEmails");
const helpers_1 = require("../../../helpers");
let AggregateEmailsResolver = class AggregateEmailsResolver {
    async aggregateEmails(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateEmails_1.AggregateEmails, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateEmailsArgs_1.AggregateEmailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateEmailsResolver.prototype, "aggregateEmails", null);
AggregateEmailsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Emails_1.Emails)
], AggregateEmailsResolver);
exports.AggregateEmailsResolver = AggregateEmailsResolver;
