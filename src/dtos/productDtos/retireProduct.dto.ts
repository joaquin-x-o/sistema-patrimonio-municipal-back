import { IsNotEmpty, IsString, IsEnum, IsDateString } from 'class-validator';
import { Transform } from 'class-transformer';
import { trimString } from '../../utils/dtoUtils/classTransformers.util';
import { RetirementType } from '../../enums/retirementType.enum';

export class RetireProductDto {

    @IsNotEmpty({ message: 'Es obligatorio indicar el motivo de la baja del producto.' })
    @IsString({ message: 'El motivo debe ser un texto.' })
    @Transform(trimString)
    unusableReason!: string;

    @IsNotEmpty({ message: 'Es obligatorio indicar el documento de referencia (Nro de resolución).' })
    @IsString({ message: 'El documento de referencia debe ser un texto.' })
    @Transform(trimString)
    documentReference!: string;

    @IsNotEmpty({ message: 'Es obligatorio indicar el tipo de retiro.' })
    @IsEnum(RetirementType, { message: 'Es tipo de retiro indicado no es válido.' })
    retirementType!: RetirementType;

    @IsNotEmpty()
    @IsDateString({}, { message: 'La fecha de baja ingresada no es válida.' })
    retirementDate!: string;
}