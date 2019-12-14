import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  query: string;

  constructor() { }

  ngOnInit() {}

  onSubmit() {
    console.log(`Searching for artist ${this.query}`);

  }

  valid8or() {
    return this.query.length >= 2;
  }
}
