import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'people',
    loadChildren: () =>
      import('./routes/people/people.module').then((m) => m.PeopleModule),
  },
  {
    path: 'planets',
    loadChildren: () =>
      import('./routes/planets/planets.module').then((m) => m.PlanetsModule),
  },
  {
    path: 'films',
    loadChildren: () =>
      import('./routes/films/films.module').then((m) => m.FilmsModule),
  },
  {
    path: 'species',
    loadChildren: () =>
      import('./routes/species/species.module').then((m) => m.SpeciesModule),
  },
  {
    path: 'starships',
    loadChildren: () =>
      import('./routes/starships/starships.module').then(
        (m) => m.StarshipsModule
      ),
  },
  {
    path: 'vehicles',
    loadChildren: () =>
      import('./routes/vehicles/vehicles.module').then((m) => m.VehiclesModule),
  },
  {
    path: '**',
    redirectTo: 'people',
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
