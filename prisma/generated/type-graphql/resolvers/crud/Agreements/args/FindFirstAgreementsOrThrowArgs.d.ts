import { AgreementsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/AgreementsOrderByWithRelationAndSearchRelevanceInput";
import { AgreementsWhereInput } from "../../../inputs/AgreementsWhereInput";
import { AgreementsWhereUniqueInput } from "../../../inputs/AgreementsWhereUniqueInput";
export declare class FindFirstAgreementsOrThrowArgs {
    where?: AgreementsWhereInput | undefined;
    orderBy?: AgreementsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: AgreementsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "type" | "author" | "updated_at"> | undefined;
}
