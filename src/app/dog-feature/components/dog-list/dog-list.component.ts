import { Component, OnInit } from '@angular/core';
import { DogService } from '../../service/dog.service';
import { Dog } from '../../models/dog.model';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { fetchDogs } from '../../store/dog.actions';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css'],
})
export class DogListComponent implements OnInit {
  dogs$: Observable<{ dogs: Dog[] }>;

  constructor(private _dogStore: Store<{ dogs: { dogs: Dog[] } }>) {}

  ngOnInit(): void {
    this.dogs$ = this._dogStore.select('dogs');
    this._dogStore.dispatch(fetchDogs());
  }
}
