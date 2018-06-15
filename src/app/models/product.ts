import { FirebaseFlatSnapshot } from "./firebase-flat-snapshot";


export class Product extends FirebaseFlatSnapshot{
    key: string;
    name: string;
    spec: string;
    unit: string;
    price: number;
    tag: string;

    constructor(obj? :any) {
        super(obj);
        this.key = obj&& obj.key || null;
        this.name = obj && obj.name || '';
        this.spec = obj && obj.spec || '';
        this.unit = obj && obj.unit || '';
        this.price = obj && obj.price || 0;
        this.tag = obj && obj.tag || '';
    }
}
