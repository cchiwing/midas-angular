import { FirebaseFlatSnapshot } from '../models/firebase-flat-snapshot';

export class Client extends FirebaseFlatSnapshot {
    public name: string;
    public tel: string;
    public addr: string;

    constructor(obj?: any) {
        super(obj);
        this.name = obj && obj.name || '';
        this.tel = obj && obj.tel || '';
        this.addr = obj && obj.addr || '';
    }
}
