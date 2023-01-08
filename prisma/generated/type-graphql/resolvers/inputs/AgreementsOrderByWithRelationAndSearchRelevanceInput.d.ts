import { AgreementsOrderByRelevanceInput } from "../inputs/AgreementsOrderByRelevanceInput";
export declare class AgreementsOrderByWithRelationAndSearchRelevanceInput {
    id?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    author?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    _relevance?: AgreementsOrderByRelevanceInput | undefined;
}
