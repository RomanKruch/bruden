export type TPriceFilterValue = number[];

export type TListView = 'grid' | 'list';

export type TSelectValues = 'def' | 'priceUp' | 'priceDown' | 'rating';

export interface ITag {
    tag: string;
    id: string;
    active: boolean;
}

export interface IProduct {
    id: string;
    img: any;
    title: string;
    price: number;
    tag: string;
    description: string;
}