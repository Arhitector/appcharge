export interface IProduct {
    productImage: string,
    amount: string,
    productTextColor: string
}
export interface IPrice {
    amount: number,
    currencySymbol: string,
}
export interface IItem {
    bgImage: string,
    timeLeftMs: number,
    maxAvailable: number,
    available: number,
    price: IPrice,
    products: IProduct[]
};

export interface IBundle extends IProduct {
    id: string;
    item: IItem;
}
