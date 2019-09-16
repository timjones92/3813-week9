import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../products';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  // Send new product to server to add to db
  add(product:Products) {
    return this.http.post<any>("http://localhost:3000/api/add", product);
  }

  // Get all products from db by connecting to server
  getlist() {
    return this.http.get<any>("http://localhost:3000/api/read");
  }

  // Get all products from db by connecting to server
  getproduct(productID) {
    return this.http.post<any>("http://localhost:3000/api/getproduct", {'productid':productID});
  }

  // Send products to server to update products in db
  updateProduct(product:Products) {
    return this.http.post<any>("http://localhost:3000/api/update", product);
  }

  // Send product by ID to server to delete in db
  deleteProduct(productID) {
    return this.http.post<any>("http://localhost:3000/api/delete", {'productid':productID});
  }

  // Check if id is valid in db
  checkvalidid(productID) {
    return this.http.post<any>('http://localhost:3000/api/checkvalidid', {'id':productID});
  }
}
