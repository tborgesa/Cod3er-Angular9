import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientCrudComponent } from './views/client-crud/client-crud.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "client",
    component: ClientCrudComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
