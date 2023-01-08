import { AgreementsAvgOrderByAggregateInput } from "../inputs/AgreementsAvgOrderByAggregateInput";
import { AgreementsCountOrderByAggregateInput } from "../inputs/AgreementsCountOrderByAggregateInput";
import { AgreementsMaxOrderByAggregateInput } from "../inputs/AgreementsMaxOrderByAggregateInput";
import { AgreementsMinOrderByAggregateInput } from "../inputs/AgreementsMinOrderByAggregateInput";
import { AgreementsSumOrderByAggregateInput } from "../inputs/AgreementsSumOrderByAggregateInput";
export declare class AgreementsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    author?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    _count?: AgreementsCountOrderByAggregateInput | undefined;
    _avg?: AgreementsAvgOrderByAggregateInput | undefined;
    _max?: AgreementsMaxOrderByAggregateInput | undefined;
    _min?: AgreementsMinOrderByAggregateInput | undefined;
    _sum?: AgreementsSumOrderByAggregateInput | undefined;
}
