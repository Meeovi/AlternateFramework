"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgreementsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AgreementsScalarFieldEnum;
(function (AgreementsScalarFieldEnum) {
    AgreementsScalarFieldEnum["id"] = "id";
    AgreementsScalarFieldEnum["created_at"] = "created_at";
    AgreementsScalarFieldEnum["name"] = "name";
    AgreementsScalarFieldEnum["type"] = "type";
    AgreementsScalarFieldEnum["author"] = "author";
    AgreementsScalarFieldEnum["updated_at"] = "updated_at";
})(AgreementsScalarFieldEnum = exports.AgreementsScalarFieldEnum || (exports.AgreementsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AgreementsScalarFieldEnum, {
    name: "AgreementsScalarFieldEnum",
    description: undefined,
});
