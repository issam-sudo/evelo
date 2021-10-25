import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EveloContainerComponent } from './core/components/evelo-container/evelo-container.component';

const routes: Routes = [
  
  {path:'' , component:EveloContainerComponent},
    {path:'**', redirectTo:'', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
