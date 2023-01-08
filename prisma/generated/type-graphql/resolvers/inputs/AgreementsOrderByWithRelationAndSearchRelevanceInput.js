"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgreementsOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AgreementsOrderByRelevanceInput_1 = require("../inputs/AgreementsOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AgreementsOrderByWithRelationAndSearchRelevanceInput = class AgreementsOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsOrderByWithRelationAndSearchRelevanceInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsOrderByWithRelationAndSearchRelevanceInput.prototype, "author", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AgreementsOrderByWithRelationAndSearchRelevanceInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AgreementsOrderByRelevanceInput_1.AgreementsOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AgreementsOrderByRelevanceInput_1.AgreementsOrderByRelevanceInput)
], AgreementsOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
AgreementsOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AgreementsOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], AgreementsOrderByWithRelationAndSearchRelevanceInput);
exports.AgreementsOrderByWithRelationAndSearchRelevanceInput = AgreementsOrderByWithRelationAndSearchRelevanceInput;
