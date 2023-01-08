import { AgreementsOrderByWithAggregationInput } from "../../../inputs/AgreementsOrderByWithAggregationInput";
import { AgreementsScalarWhereWithAggregatesInput } from "../../../inputs/AgreementsScalarWhereWithAggregatesInput";
import { AgreementsWhereInput } from "../../../inputs/AgreementsWhereInput";
export declare class GroupByAgreementsArgs {
    where?: AgreementsWhereInput | undefined;
    orderBy?: AgreementsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "type" | "author" | "updated_at">;
    having?: AgreementsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
