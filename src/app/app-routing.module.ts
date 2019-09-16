import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from '../app/product-add/product-add.component';
import { ProductGetComponent } from '../app/product-get/product-get.component';
import { ProductEditComponent } from '../app/product-edit/product-edit.component';


const routes: Routes = [
  {path: 'product-add', component: ProductAddComponent},
  {path: 'product-get', component: ProductGetComponent},
  {path: 'product-edit/:_id', component: ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
