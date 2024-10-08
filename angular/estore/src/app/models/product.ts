export class Product {
    id: number;
    name: string;
    price: number;
    ratings: number;

    constructor(id: number, name: string, price: number, ratings: number){
        this.id = id;
        this.name = name;
        this.price = price;
        this.ratings = ratings;
    }
}
