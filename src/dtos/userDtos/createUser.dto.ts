import { IsNotEmpty, IsString, IsEnum, IsOptional, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';
import { UserRole } from '../../enums/user.enums';
import { trimString } from '../../utils/dtoUtils/classTransformers.util';

export class CreateUserDto {

  @IsNotEmpty({ message: 'El nombre es obligatorio.' })
  @IsString({ message: 'El nombre debe ser un texto.' })
  @Transform(trimString)
  name!: string;

  @IsNotEmpty({ message: 'El apellido es obligatorio.' })
  @IsString({ message: 'El apellido debe ser un texto.' })
  @Transform(trimString)
  surname!: string;

  @IsNotEmpty({ message: 'El nombre de usuario es obligatorio.' })
  @IsString({ message: 'El nombre de usuario debe ser un texto.' })
  @Transform(trimString)
  username!: string;

  @IsNotEmpty({ message: 'La contraseña es obligatoria.' })
  @IsString({ message: 'La contraseña debe ser un texto.' })
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres.' })
  password!: string;

  @IsOptional()
  @IsEnum(UserRole, { message: 'El rol indicado no es válido.' })
  role?: UserRole;
}
