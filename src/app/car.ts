export class Car {
    type: string;
    value: number;
    description: string;

    constructor(t: string, v: number, d: string) {
        this.type = t;
        this.value = v;
        this.description = d;
    }

    getType(): string {
        return this.type;
    }

    getValue(): number {
        return this.value;
    }

    getDescription(): string {
        return this.description;
    }
}
