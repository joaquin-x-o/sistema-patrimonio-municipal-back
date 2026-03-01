import { TransformFnParams } from 'class-transformer';

export const trimString = ({ value }: TransformFnParams) => {
    if (typeof value === 'string') {
        return value.trim();
    }
    return value;
};
