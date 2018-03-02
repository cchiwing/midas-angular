import { FirebaseFlatSnapshot } from '../models/firebase-flat-snapshot';

export class Order extends FirebaseFlatSnapshot {
    public clientName: string;
    public remark: string;
    public items: string;
    public timestamp: string;
    public authorKey: string;

    constructor(obj?: any) {
        super(obj);
        this.clientName = obj && obj.clientName || '';
        this.remark = obj && obj.remark || '';
        this.items = obj && obj.items || '';
        this.timestamp = obj && obj.timestamp || '';
        this.authorKey = obj && obj.authorKey || '';
    }
}
