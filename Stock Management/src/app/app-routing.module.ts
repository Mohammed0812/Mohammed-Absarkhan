import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PurchaseComponent} from './purchase/purchase.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {path:"about", component:AboutComponent},
  {path:"purchase", component:PurchaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [AboutComponent, PurchaseComponent];
