import { Component, OnInit } from '@angular/core';
import { Heroe } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  
  heroe : Heroe = {name: 'Jose', id: 1};
  // heroes : Heroe[] = [{name: 'Jose', role: 'Admin', lastname: 'Aley', id:'1'}, 
  //                           {name: 'Majo', role: 'Admin', lastname: 'Aley', id:'2'},
  //                           {name: 'Juseth', role: 'Admin', lastname: 'Perez', id:'3'}]
  constructor() { }

  ngOnInit(){
    
    
    
  }

}
