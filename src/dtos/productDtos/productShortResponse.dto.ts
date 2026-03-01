import { Exclude, Expose } from 'class-transformer';
import { ProductCategory, ProductCondition, ProductStatus } from "../../enums/product.enums";

@Exclude()
export class ProductShortResponseDto {

    @Expose()
    name!: string;

    @Expose()
    productCode!: number;

    @Expose()
    category!: ProductCategory;

    @Expose()
    physicalCondition!: ProductCondition;

    @Expose()
    isLegacy!: boolean;

    @Expose()
    status!: ProductStatus;

    @Expose()
    statusUpdatedAt!: string;
    
    @Expose()
    reviewDaysPending!: number;

    @Expose()
    dateUnusable!: string;

    @Expose()
    needsCheckReview!: boolean;

    @Expose()
    lastCheckDate!: string | null;

    @Expose()
    pendingReviewReason!: string | null;

    @Expose()
    unusableReason!: string | null;

    @Expose()
    isRetired!: boolean | null

    // se transforma la entidad a un objeto simple
    @Expose()
    department!: { departmentCode: string, name: string };
}