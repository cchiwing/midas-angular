import { FirebaseFlatSnapshot } from '../models/firebase-flat-snapshot';
import { Customer } from './customer';

export class Order extends FirebaseFlatSnapshot {
    // invoice info //
    public uid: string;
    public invoiceNum: string;
    public date: string;
    public remark: string; 
    
    public numOfItem: number;
    public orderPrice: number;

    public isPrinted: boolean;

    // customer info //
    public customer: Customer;

    // item info //
    public itemListKey: string;

    constructor(obj?: any) {
        super(obj);
        this.uid = obj && obj.uid || '';
        this.invoiceNum = obj && obj.invoiceNum || '';
        this.date = obj && obj.date || '';
        this.remark = obj && obj.remark || '';

        this.numOfItem = obj && obj.numOfItem || 0;
        this.orderPrice = obj && obj.orderPrice || 0;
        this.isPrinted = obj && obj.isPrinted || false;

        this.customer = obj && obj.customer || new Customer();
    }
}

/*

new Order({
    uid: string,
    invoiceNum: string,
    date: string,
    numOfItem: number,
    orderPrice: number,
    remark: string,
    customerKey: string,
    customer: Customer,
    itemListKey: string,
});

*/
