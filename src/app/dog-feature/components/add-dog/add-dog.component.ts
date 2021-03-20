import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
('@angular/forms');
import { Store } from '@ngrx/store';
import { addDog } from '../../store/dog.actions';
import { Dog } from '../../models/dog.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.css'],
})
export class AddDogComponent implements OnInit {
  dogs$: Observable<Dog[]> = this._dogStore.select((state) => state.dogs);

  constructor(private _dogStore: Store<{ dogs: Dog[] }>) {}

  dogForm = new FormGroup({
    name: new FormControl(''),
  });

  ngOnInit(): void {}

  handleAddDog(): void {
    const dogName = this.dogForm.get('name').value;
    this._dogStore.dispatch(addDog({ name: dogName }));
    this.dogForm.reset();
  }
}
