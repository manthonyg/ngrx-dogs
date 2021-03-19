import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDogComponent } from './dog-feature/components/add-dog/add-dog.component';
import { DogListComponent } from './dog-feature/components/dog-list/dog-list.component';

const routes: Routes = [
  {
    path: '',
    component: DogListComponent,
  },
  { path: 'add', component: AddDogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
