import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  asd;

  asd2;

  updateValue(ev)
  {
    this.asd2 = ev; 
  }

  constructor()
  {
    this.asd = '';
  }

  ngOnInit()
  {
    this.asd = '9993352809';
    this.asd2 = '9493588598';
  }
}
