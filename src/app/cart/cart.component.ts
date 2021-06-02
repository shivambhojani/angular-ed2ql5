import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  checkoutform = this.form.group({
    name: '',
    address: ''
  });
  constructor(private cartService: CartService, private form: FormBuilder) {}

  ngOnInit() {}
}
