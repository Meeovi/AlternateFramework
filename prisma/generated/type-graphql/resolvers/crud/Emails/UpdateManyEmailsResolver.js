"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyEmailsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyEmailsArgs_1 = require("./args/UpdateManyEmailsArgs");
const Emails_1 = require("../../../models/Emails");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyEmailsResolver = class UpdateManyEmailsResolver {
    async updateManyEmails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyEmailsArgs_1.UpdateManyEmailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyEmailsResolver.prototype, "updateManyEmails", null);
UpdateManyEmailsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Emails_1.Emails)
], UpdateManyEmailsResolver);
exports.UpdateManyEmailsResolver = UpdateManyEmailsResolver;
