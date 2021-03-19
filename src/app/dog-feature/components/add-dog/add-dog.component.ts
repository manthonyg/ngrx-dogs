import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
('@angular/forms');

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.css'],
})
export class AddDogComponent implements OnInit {
  constructor() {}

  dogForm = new FormGroup({
    name: new FormControl(''),
  });

  ngOnInit(): void {}

  handleAddDog(): void {
    alert(this.dogForm.get('name').value);
    this.dogForm.reset();
  }
}
