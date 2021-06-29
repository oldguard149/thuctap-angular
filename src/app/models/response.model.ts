import { Category } from "./category.model";
import { Product } from "./product.model";

export interface Response {
    docs: any[],
    totalDocs: number,
    limit: number,
    totalPages: number,
    page: number,
    pagingCounter: number,
    hasPrevPage: boolean,
    hasNextPage: boolean,
    prevPage: number | null,
    nextPage: number | null
}

export interface ProductsResponse extends Response {
    docs: Product[];
}

export interface CategoryResponse extends Response {
    docs: Category[];
}

export interface ResponseMessage {
    type: 'success' | 'failure';
    content: string;
}