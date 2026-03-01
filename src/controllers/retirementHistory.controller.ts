import { Request, Response } from 'express';

import { RetirementHistoryService } from "../services/retirementHistory.service";
import { RetirementType } from '../enums/retirementType.enum';
import { AppError } from '../utils/errorHandlerUtils/appError';

export class RetirementHistoryController {
    private retirementHistoryService: RetirementHistoryService;

    constructor(retirementHistoryService: RetirementHistoryService) {
        this.retirementHistoryService = retirementHistoryService;
    }

    // GET: obtener todos los registros del historial de baja
    async getRetirementHistoryEntries(req: Request, res: Response) {

        const page = Math.max(1, Number(req.query.page) || 1);
        const limit = Math.max(1, Number(req.query.limit) || 10);

        let type: RetirementType | undefined;

        if (req.query.type) {
            const queryType = String(req.query.type);

            if (Object.values(RetirementType).includes(queryType as RetirementType)) {
                type = queryType as RetirementType;
            } else {
                throw new AppError(`El parámetro de filtro '${queryType}' no es un tipo de baja válido.`, 400);
            }
        }

        const entries = await this.retirementHistoryService.findAllRetirementHistoryEntries(page, limit, type);
        return res.status(200).json(entries);

    }


}