import { IsNotEmpty, IsString, IsArray, IsInt, IsDateString } from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { trimString } from '../../utils/dtoUtils/classTransformers.util';
import { todayAR } from '../../utils/formattersUtils/localTimeFormat.util';

export class BulkRetireProductDto {

    @IsNotEmpty()
    @IsArray({ message: 'Debe enviar una lista de códigos de productos por dar de baja' })
    @Type(() => Number)
    @IsInt({ each: true })
    productCodes!: number[];

    @IsNotEmpty({ message: 'Es obligatorio indicar el motivo de la baja del producto.' })
    @IsString({ message: 'El motivo debe ser un texto.' })
    @Transform(trimString)
    unusableReason!: string;

    @IsNotEmpty({ message: 'Es obligatorio indicar el documento de referencia (Nro de resolución).' })
    @IsString({ message: 'El documento de referencia debe ser un texto.' })
    @Transform(trimString)
    documentReference!: string;

    @IsNotEmpty()
    @IsDateString({},{ message: 'La fecha de baja ingresada no es válida.' })
    retirementDate: string = todayAR(); // Si no envían fecha, asume hoy
}