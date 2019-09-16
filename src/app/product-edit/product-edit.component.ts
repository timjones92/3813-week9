import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../Services/product-data.service';
import { Products } from '../products';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
  animations: [
    trigger('iderrorState', [
      state('show', style({
        opacity:1,
        display:'block'
      })),
      state('hide', style({
        opacity:0,
        display:'none'
      })),
      transition('show => hide',animate('1000ms ease-out')),
      transition('hide => show', animate('400ms ease-in')),
    ]),
    trigger('noticeState', [
      state('show', style({
        opacity:1,
        display:'block'
      })),
      state('hide', style({
        opacity:0,
        display:'none'
      })),
      transition('show => hide',animate('1000ms ease-out')),
      transition('hide => show', animate('400ms ease-in')),
    ])
  ]
})
export class ProductEditComponent implements OnInit {
  product: Products;
  productname: string = "";
  productdesc: string = "";
  productprice: number = null;
  productunits: number = null;
  productid: number = null;
  productobjid = null;
  sub;
  getproductsid;
  

  constructor(private productData: ProductDataService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      this.getproductsid = params.get('_id');
    });
    
    this.productData.getproduct(this.getproductsid).subscribe((data) => {
      this.product = data[0];
      this.productobjid = data[0]._id;
      this.productid = this.product.id;
      this.productname = this.product.name;
      this.productdesc = this.product.description;
      this.productprice = this.product.price;
      this.productunits = this.product.units;
    })
  }

  updateProduct() {
    this.product.name = this.productname;
    this.product.description = this.productdesc;
    this.product.price = this.productprice;
    this.product.units = this.productunits;
    this.productData.updateProduct(this.product).subscribe((data) => {
      this.router.navigateByUrl('/product-get');
    })
  }

  
}
