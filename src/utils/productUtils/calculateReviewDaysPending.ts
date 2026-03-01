import { ProductStatus } from "../../enums/product.enums";
import { todayAR } from "../formattersUtils/localTimeFormat.util";

// calcular los dias pendientes en que aun no se resolvió la revisión del producto
export function calculateReviewDaysPending(status: ProductStatus, statusDate: string | null, needsCheckReview: boolean): number {

    if (!statusDate) return 0;

    if (status === ProductStatus.LOST || status === ProductStatus.IN_REVIEW || status === ProductStatus.UNUSABLE || needsCheckReview) {
        return calculateDaysPending(statusDate);
    }

    return 0;
}

function calculateDaysPending(statusDate: string): number {

  const todayDate = new Date(`${todayAR()}T00:00:00`);
  const statusMidnight = new Date(`${statusDate}T00:00:00`);

  const diffMs = todayDate.getTime() - statusMidnight.getTime();

  const diffDays = Math.max(0, Math.floor(diffMs / 86400000));

  return diffDays;
}