"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardgraphqlAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let DashboardgraphqlAvgOrderByAggregateInput = class DashboardgraphqlAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], DashboardgraphqlAvgOrderByAggregateInput.prototype, "id", void 0);
DashboardgraphqlAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DashboardgraphqlAvgOrderByAggregateInput", {
        isAbstract: true
    })
], DashboardgraphqlAvgOrderByAggregateInput);
exports.DashboardgraphqlAvgOrderByAggregateInput = DashboardgraphqlAvgOrderByAggregateInput;
