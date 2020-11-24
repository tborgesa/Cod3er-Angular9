import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientCrudComponent } from './views/client-crud/client-crud.component';
import { HomeComponent } from './views/home/home.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "client",
    component: ClientCrudComponent
  },
  {
    path: "client/create",
    component: ClientCreateComponent
  },
  {
    path: "client/update/:id",
    component: ClientUpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }