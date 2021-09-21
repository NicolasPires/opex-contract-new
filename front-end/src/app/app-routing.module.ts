import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpUserCreateComponent } from './components/domain/op-user/op-user-create/op-user-create.component';
import { OpUserDeleteComponent } from './components/domain/op-user/op-user-delete/op-user-delete.component';
import { OpUserUpdateComponent } from './components/domain/op-user/op-user-update/op-user-update.component';
import { HomeComponent } from './views/home/home.component';
import { OpUserViewComponent } from './views/op-user-view/op-user-view.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "OpUsers",
    component: OpUserViewComponent,
  },
  {
    path: "OpUser/create",
    component: OpUserCreateComponent,
  },
  {
    path: "OpUser/update/:id",
    component: OpUserUpdateComponent,
  },
  {
    path: "OpUser/delete/:id",
    component: OpUserDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
