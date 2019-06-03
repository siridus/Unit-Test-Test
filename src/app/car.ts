export class Car {
    type: string;
    value: number;

    constructor(t: string, v: number) {
        this.type = t;
        this.value = v;
    }

    getType(): string {
        return this.type;
    }

    getValue(): number {
        return this.value;
    }

}
