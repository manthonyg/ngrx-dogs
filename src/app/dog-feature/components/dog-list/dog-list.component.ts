import { Component, OnInit } from '@angular/core';
import { DogService } from '../../service/dog.service';
import { Dog } from '../../models/dog.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css'],
})
export class DogListComponent implements OnInit {
  constructor(private _dogService: DogService) {}
  dogSubscription: Subscription;
  dogs: Dog[];

  ngOnInit(): void {
    this.dogSubscription = this._dogService.fetchDogs().subscribe((dogs) => {
      this.dogs = dogs;
    });
  }

  ngOnDestroy() {
    this.dogSubscription.unsubscribe();
  }
}
