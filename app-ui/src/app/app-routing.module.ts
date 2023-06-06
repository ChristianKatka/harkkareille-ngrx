import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsContainerComponent } from './cars/cars.container';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "auto",
  },
  {
    path: "auto",
    component: CarsContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
