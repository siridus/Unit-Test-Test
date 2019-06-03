export class Car {
    id: number;
    type: string;
    description: string;
    price: number;

    constructor(id: number, type: string, description: string, price: number) {
        this.id = id;
        this.type = type;
        this.description = description;
        this.price = price;
    }
}
