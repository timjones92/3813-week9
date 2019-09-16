import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../Services/product-data.service';
import { Products } from '../products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {
  products: Products[] = [];
  
  constructor(private productData:ProductDataService, private router:Router) { }

  ngOnInit() {
    this.productData.getlist().subscribe((data) => {
      this.products = data;
      console.log(this.products)
    });
  }

  deleteproduct(id) {
    if (confirm("Are you sure you want to delete this item?")) {
      this.productData.deleteProduct(id).subscribe((data) => {
        this.products = data;
      });
    }
  }

}
