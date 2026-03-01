import { ProductStatus } from "../enums/product.enums";

export interface ProductSearchFilters {
  productSearch?: string;
  departmentCode?: string;
  statuses?: ProductStatus[];
}