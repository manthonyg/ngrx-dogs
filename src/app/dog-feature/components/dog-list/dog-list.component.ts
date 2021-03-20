import { Component, OnInit } from '@angular/core';
import { DogService } from '../../service/dog.service';
import { Dog } from '../../models/dog.model';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { fetchDogs, deleteDog } from '../../store/dog.actions';
import { AppState } from '../../../app.state';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css'],
})
export class DogListComponent implements OnInit {
  constructor(
    private _dogStore: Store<{ dogState: AppState }>,
    private _router: Router
  ) {}

  dogs$: Observable<Dog[]> = this._dogStore.select(
    ({ dogState }) => dogState.dogs
  );
  errorMessage$: Observable<string> = this._dogStore.select(
    ({ dogState }) => dogState.errorMessage
  );

  ngOnInit(): void {
    this._dogStore.dispatch(fetchDogs());
  }

  handleDeleteDog(dogName: string) {
    this._dogStore.dispatch(deleteDog({ name: dogName }));
  }
}
