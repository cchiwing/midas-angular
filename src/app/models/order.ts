import { FirebaseFlatSnapshot } from '../models/firebase-flat-snapshot';

export class Order extends FirebaseFlatSnapshot {
    public client: string;
    public remark: string;
    public items: string;
    public timestamp: string;
    public authorKey: string;

    constructor(obj?: any) {
        super(obj);
        this.client = obj && obj.client || '';
        this.remark = obj && obj.remark || '';
        this.items = obj && obj.items || '';
        this.timestamp = obj && obj.timestamp || '';
        this.authorKey = obj && obj.authorKey || '';
    }
}
