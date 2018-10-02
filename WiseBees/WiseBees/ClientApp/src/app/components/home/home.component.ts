import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  CityList = [];
  constructor() { }

  ngOnInit() {
    this.CityList = [{ label: 'Chennai', value: 'Chennai' },
    { label: 'Salem', value: 'Salem' },
    { label: 'Erode', value: 'Erode' },
    { label: 'Madurai', value: 'Madurai' }];
  }
}
