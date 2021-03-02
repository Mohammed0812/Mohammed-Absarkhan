import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PurchaseComponent} from './purchase/purchase.component';
import {ReportComponent} from './report/report.component';
import {AboutComponent} from './about/about.component';
import {ProductComponent} from './product/product.component';

const routes: Routes = [
  {path:"about", component:AboutComponent},
  {path:"product", component:ProductComponent},
  {path:"purchase", component:PurchaseComponent},
  {path:"report", component:ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [AboutComponent,ProductComponent,PurchaseComponent,ReportComponent];
