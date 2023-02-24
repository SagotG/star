import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'people',
    loadChildren: () =>
      import('./people/people.module').then((m) => m.PeopleModule),
  },
  {
    path: 'planets',
    loadChildren: () =>
      import('./planets/planets.module').then((m) => m.PlanetsModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./people/people.module').then((m) => m.PeopleModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
