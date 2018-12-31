import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { HelloworldComponent} from './helloworld/helloworld.component';
import { SampledirectivesComponent } from './sampledirectives/sampledirectives.component';
const routes: Routes = [
  {path:'simpleform', component:SimpleformComponent}, 
  {path:'helloworld',component:HelloworldComponent},
  {path:'sampledirectives', component:SampledirectivesComponent},
  //{path:'',redirectTo: '/helloworld', pathMatch:'full'},
 // {path:'**',component: HelloworldComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
