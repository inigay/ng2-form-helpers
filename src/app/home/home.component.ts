import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  asd;

  constructor()
  {
    this.asd = '';
  }

  ngOnInit()
  {
    this.asd = '9993352809';
  }
}
