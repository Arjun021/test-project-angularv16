import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/pages/home', pathMatch: 'full' },
  {
    path: 'pages',
    loadChildren: () =>
      import('./public-layout/public-layout.module').then((m) => m.PublicLayoutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
