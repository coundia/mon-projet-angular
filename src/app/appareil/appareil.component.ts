import { Component,Input, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
// variable explorer
export class AppareilComponent implements OnInit {
  // propriete binding
 @Input() appareilName: string ;
 @Input() appareilStatut: string ;
 @Input() appareilIndex: number ;
 @Input() id: number ;

  constructor(private appareilService : AppareilService) { }

  ngOnInit() {
  }
  getStatus() {
    return this.appareilStatut;
  }
  getColor() {
    if (this.appareilStatut === 'allume') {
      return 'green';
    }
    else{
      return 'red' ;
    }
  }
  onAllumer(){
    this.appareilService.allumer(this.appareilIndex);
  }
  onEteindre() {
    this.appareilService.eteindre(this.appareilIndex);
  }
}
