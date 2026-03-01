import { IsNotEmpty, IsString, IsArray, IsInt, IsDateString } from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { trimString } from '../../utils/dtoUtils/classTransformers.util';
import { todayAR } from '../../utils/formattersUtils/localTimeFormat.util';

export class BulkTransferProductDto {

    @IsNotEmpty()
    @IsArray({message: 'Debe enviar una lista de códigos de productos por transferir'})
    @Type(() => Number)
    @IsInt({ each: true})
    productCodes!: number[] ;

    @IsNotEmpty({ message: 'Es necesario indicar el departamento destino del producto.' })
    @IsString({ message: 'El código de departamento debe ser texto.' })
    @Transform(trimString)
    destinationDepartmentCode!: string;

    @IsNotEmpty({ message: 'Es obligatorio indicar el motivo por el cual el producto es transferido.' })
    @IsString()
    @Transform(trimString)
    reasonForMovement!: string;

    @IsNotEmpty()
    @IsDateString({}, { message: 'La fecha de transferencia no es válida.' })
    transferDate: string = todayAR(); 
}