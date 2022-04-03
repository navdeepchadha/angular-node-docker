import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lotr',
    pathMatch: 'full',
  },
  {
    path: 'lotr',
    loadChildren: () => import('./lotr/lotr.module').then((m) => m.LotrModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
