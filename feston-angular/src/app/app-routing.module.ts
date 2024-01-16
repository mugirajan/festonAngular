import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component'; 


const routes: Routes = [
  {path:"home",component: HomeComponent},
  {path:"about",component: AboutComponent},
  {path:"Service",component: ServiceComponent},

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[HomeComponent,AboutComponent]

