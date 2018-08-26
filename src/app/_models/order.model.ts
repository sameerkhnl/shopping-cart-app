import {OrderDetails} from './order_details.model';

export class Order {
  constructor(private id: string, private amount: number, private customerAddress: string, private customerEmail: string, private customerName: string, private customerPhone: string, private orderDate: Date, private orderNum: string, private orderDetails: OrderDetails[]) {

  }
}
