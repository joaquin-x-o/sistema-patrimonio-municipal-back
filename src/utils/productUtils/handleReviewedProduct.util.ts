import { Product } from "../../entities/Product";
import { ProductStatus } from "../../enums/product.enums";

export function handleReviewReason(product: Product, newReason: string) {

    let finalReason = newReason;

    if (product.status === ProductStatus.IN_REVIEW && product.pendingReviewReason) {
        finalReason = `${newReason} (Revisión previa: ${product.pendingReviewReason})`;
    }

    return finalReason;
}