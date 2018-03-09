import { FirebaseFlatSnapshot } from '../models/firebase-flat-snapshot';

export class Customer extends FirebaseFlatSnapshot {
    public key: string;
    public name: string;
    public tel: string;
    public addr: string;

    constructor(obj?: any) {
        super(obj);
        this.key = obj && obj.key || '';
        this.name = obj && obj.name || '';
        this.tel = obj && obj.tel || '';
        this.addr = obj && obj.addr || '';
    }
}
