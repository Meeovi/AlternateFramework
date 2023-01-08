import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class AgreementsWhereInput {
    AND?: AgreementsWhereInput[] | undefined;
    OR?: AgreementsWhereInput[] | undefined;
    NOT?: AgreementsWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    type?: StringNullableFilter | undefined;
    author?: StringNullableFilter | undefined;
    updated_at?: DateTimeNullableFilter | undefined;
}
