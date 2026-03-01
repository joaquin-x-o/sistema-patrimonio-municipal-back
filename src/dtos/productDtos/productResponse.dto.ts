import { Exclude, Expose } from 'class-transformer';
import { ProductCategory, ProductCondition, ProductStatus } from "../../enums/product.enums";

@Exclude()
export class ProductResponseDto {

    @Expose()
    name!: string;

    @Expose()
    description!: string;

    @Expose()
    observation!: string;

    @Expose()
    productCode!: number;

    @Expose()
    category!: ProductCategory;

    @Expose()
    physicalCondition!: ProductCondition;

    @Expose()
    status!: ProductStatus;

    @Expose()
    statusUpdatedAt!: string;

    @Expose()
    reviewDaysPending!: number;

    @Expose()
    isLegacy!: boolean;

    @Expose()
    registrationDate!: string | null;

    @Expose()
    pendingReviewReason!: string | null;

    @Expose()
    lastCheckDate!: string | null;

    @Expose()
    needsCheckReview!: boolean;

    @Expose()
    dateUnusable!: string | null;

    @Expose()
    unusableReason!: string | null;

    @Expose()
    isRetired!: boolean | null

    @Expose()
    retirementDate!: string | null;

    @Expose()
    createdAt!: Date;

    @Expose()
    updatedAt!: Date;

    @Expose()
    department!: { departmentCode: string, name: string };

    @Expose()
    user!: { name: string, surname: string };
}