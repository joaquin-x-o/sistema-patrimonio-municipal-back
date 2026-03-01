import { Expose} from "class-transformer";
import { RetirementType } from "../../enums/retirementType.enum";


export class RetirementHistoryResponseDto {
    @Expose()
    documentReference!: string;

    @Expose()
    retirementReason!: string;

    @Expose()
    retirementType!: RetirementType;

    @Expose()
    transactionDate!: string;

    @Expose()
    product!: {productCode: number, name:string}

    @Expose()
    user!: { name: string, surname: string };

    @Expose()
    department!: {departmentCode: string, name:string, responsibleName: string}
}