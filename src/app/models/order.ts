import { FirebaseFlatSnapshot } from '../models/firebase-flat-snapshot';

export class Order extends FirebaseFlatSnapshot {
    public clientKey: string;
    public timestamp: string;

    constructor(obj?: any) {
        super(obj);
        this.clientKey = obj && obj.clientKey || '';
        this.timestamp = obj && obj.timestamp || '';
    }
}
