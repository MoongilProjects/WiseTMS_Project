import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {

  menuActive: boolean;

  activeMenuId: string;

  ngOnInit() {
  
  }

  onMenuButtonClick(event: Event) {
    this.menuActive = !this.menuActive;
    event.preventDefault();
  }

  
}
