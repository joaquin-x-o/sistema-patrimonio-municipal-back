export const formatLegacyDepartmentCode = (isLegacy: boolean, originalDepartmentCode: string): string => {
    
    // Prefijo establecido por la organización gubernamental
    const prefix: string = 'MSM';
    
    let finalProductCode: string;

    if (isLegacy) {
        finalProductCode = `${prefix} - ${originalDepartmentCode}`; 
    } else {
        finalProductCode = originalDepartmentCode;
    }

    return finalProductCode;
};