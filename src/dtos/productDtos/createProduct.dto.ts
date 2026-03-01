import { IsNotEmpty, IsString, IsNumber, IsOptional, IsEnum, IsBoolean, ValidateIf, IsDateString } from 'class-validator';
import { Transform } from 'class-transformer';
import { ProductCategory, ProductCondition, ProductStatus } from "../../enums/product.enums";
import { trimString } from '../../utils/dtoUtils/classTransformers.util';

export class CreateProductDto {

    // datos obligatorios

    @IsNotEmpty({ message: 'El nombre del producto es obligatorio.' })
    @IsString({ message: 'El nombre debe ser un texto.' })
    @Transform(trimString)
    name!: string;

    @IsNotEmpty({ message: 'La descripción es obligatoria.' })
    @IsString()
    @Transform(trimString)
    description!: string;

    @IsNotEmpty({ message: 'El código de producto es obligatorio.' })
    @IsNumber({ allowNaN: false }, { message: 'El código de producto debe ser un número.' })
    productCode!: number;

    @IsNotEmpty({ message: 'El código de departamento es obligatorio.' })
    @IsString()
    @Transform(trimString)
    departmentCode!: string;

    // datos opcionales

    @IsOptional()
    @IsString()
    @Transform(trimString)
    observation?: string;

    @IsOptional()
    @IsBoolean()
    isLegacy?: boolean;

    @IsOptional()
    @IsEnum(ProductCategory, { message: 'La categoría indicada no es válida.' })
    category?: ProductCategory;

    @IsOptional()
    @IsEnum(ProductCondition, { message: 'La condición del producto indicada no es válida.' })
    physicalCondition?: ProductCondition;

    @IsOptional()
    @IsDateString({},{ message: 'La fecha de registro debe ser válida.' })
    registrationDate?: string;

    @IsOptional()
    @IsEnum(ProductStatus, { message: 'El estado del producto indicado no es válido.' })
    status?: ProductStatus;

    @ValidateIf(p => p.status === ProductStatus.IN_REVIEW)
    @IsOptional()
    @IsString()
    @Transform(trimString)
    pendingReviewReason?: string;
}