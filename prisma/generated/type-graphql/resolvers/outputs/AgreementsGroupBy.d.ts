import { AgreementsAvgAggregate } from "../outputs/AgreementsAvgAggregate";
import { AgreementsCountAggregate } from "../outputs/AgreementsCountAggregate";
import { AgreementsMaxAggregate } from "../outputs/AgreementsMaxAggregate";
import { AgreementsMinAggregate } from "../outputs/AgreementsMinAggregate";
import { AgreementsSumAggregate } from "../outputs/AgreementsSumAggregate";
export declare class AgreementsGroupBy {
    id: bigint;
    created_at: Date | null;
    name: string | null;
    type: string | null;
    author: string | null;
    updated_at: Date | null;
    _count: AgreementsCountAggregate | null;
    _avg: AgreementsAvgAggregate | null;
    _sum: AgreementsSumAggregate | null;
    _min: AgreementsMinAggregate | null;
    _max: AgreementsMaxAggregate | null;
}
