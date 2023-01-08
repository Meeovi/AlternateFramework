"use strict";
var AgreementsWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgreementsWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let AgreementsWhereInput = AgreementsWhereInput_1 = class AgreementsWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgreementsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AgreementsWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgreementsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AgreementsWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AgreementsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AgreementsWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], AgreementsWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], AgreementsWhereInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], AgreementsWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], AgreementsWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], AgreementsWhereInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], AgreementsWhereInput.prototype, "updated_at", void 0);
AgreementsWhereInput = AgreementsWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("AgreementsWhereInput", {
        isAbstract: true
    })
], AgreementsWhereInput);
exports.AgreementsWhereInput = AgreementsWhereInput;
