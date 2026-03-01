import { IsNotEmpty, IsString, MinLength} from 'class-validator';


export class UpdateUserPasswordDto {

    @IsNotEmpty()
    @IsString()
    oldPassword!: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres.' })
    
    newPassword!: string;

}