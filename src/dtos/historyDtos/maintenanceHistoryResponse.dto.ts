import { Expose} from "class-transformer";

export class MaintenanceHistoryResponseDto {
    @Expose()
    repairDate!: string;
    
    @Expose()
    repairDescription!: string;
    
    @Expose()
    unusableDate!: string;
    
    @Expose()
    breakdownReason!: string;

    @Expose()
    cost!: number;

    @Expose()
    user!: { name: string, surname: string };
}