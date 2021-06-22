import {Category} from './category.model';

export interface Product {
    _id: string,
    desciption: string | null, // can sua cho nay
    sku: string,
    images: string[],
    videos: string[],
    price: number,
    quantity: number,
    is_active: boolean,
    category: Category[],
    promotion: string | null, // check here
    specifications: Object | string,
    title: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    __v: number,
    id: string
    is_commented?: boolean,
    comments?: string[],
    avg_rate?: number | null
}