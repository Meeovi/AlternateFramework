import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class AgreementsScalarWhereWithAggregatesInput {
    AND?: AgreementsScalarWhereWithAggregatesInput[] | undefined;
    OR?: AgreementsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AgreementsScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    type?: StringNullableWithAggregatesFilter | undefined;
    author?: StringNullableWithAggregatesFilter | undefined;
    updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
