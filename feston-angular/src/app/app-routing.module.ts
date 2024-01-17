import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:"home",component: HomeComponent},
  {path:"about",component: AboutComponent},
  {path:"shop",component:ShopComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[HomeComponent,AboutComponent,ShopComponent]

