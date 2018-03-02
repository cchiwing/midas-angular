import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { Order } from '../../models/order';
import { AuthService } from '../../core/auth.service';

export class User {
  constructor(public name: string) { }
}


@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})

export class OrderFormComponent implements OnInit {

  page = 0;
  myControl = new FormControl();

  options = [
    new User('Mary'),
    new User('Shelley'),
    new User('Igor')
  ];

  filteredOptions: Observable<User[]>;

  client = '';
  remark = '';
  items = '';

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this.filter(name) : this.options.slice())
      );
  }

  filter(name: string): User[] {
    return this.options.filter(option =>
      option.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  onCancel(): void {
    console.log('order-form result: ', this.client +', '+ this.remark +', '+ this.items);
  }

  onSubmit(): void{
    try {
      const order = new Order({
        clientName: this.client,
        remark: this.remark,
        items: this.items,
        timestamp: new Date().getTime(),
        authorKey: this.auth.currentUserId
      });
      console.log('Submit successed', order);
    }catch (e){
      console.log('Submit failed', e);
    }
  }
}
