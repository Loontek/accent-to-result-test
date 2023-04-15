export interface IBrand {
    id: number;
    title: string;
    sort: string;
    code: string;
}

export interface IRegularPrice {
    currency: string;
    value: number;
}

export interface IProduct {
    id: number;
    title: string;
    image: string;
    brand: number;
    type: string;
    sku: string;
    regular_price: IRegularPrice;
    count?: number;
}