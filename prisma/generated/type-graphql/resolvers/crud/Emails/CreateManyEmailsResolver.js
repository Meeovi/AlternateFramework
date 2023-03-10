"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyEmailsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyEmailsArgs_1 = require("./args/CreateManyEmailsArgs");
const Emails_1 = require("../../../models/Emails");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyEmailsResolver = class CreateManyEmailsResolver {
    async createManyEmails(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).emails.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyEmailsArgs_1.CreateManyEmailsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyEmailsResolver.prototype, "createManyEmails", null);
CreateManyEmailsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Emails_1.Emails)
], CreateManyEmailsResolver);
exports.CreateManyEmailsResolver = CreateManyEmailsResolver;
