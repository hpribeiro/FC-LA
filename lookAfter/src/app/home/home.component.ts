import { Component, OnInit } from '@angular/core'
import Products from '../../assets/data/products.json'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products = Products
  constructor() {}

  ngOnInit() {}
}
