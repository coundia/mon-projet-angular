import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {


  isAuth = false;
  // les pipes
  lastUpdate = new Date();
  // async for promise
  lastUpdateP = new Promise((resolve, reject ) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      },4000
    );
  });
  // var
  appareilOne = 'Machine a laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur';
  appareils : any [] ;
  appareilSubscription: Subscription ;
  // property bind
  constructor(private appareilService: AppareilService) {

    setTimeout(
      () => {this.isAuth = true; }, 4000
    );
  }
  // event bind
  onAllumer() {
    // console.log('On allume tout !');
    this.appareilService.allumerTout();
  }
  onEteindre() {
    // console.log('On allume tout !');
    this.appareilService.etteindreTout();
  }
  //
  ngOnInit() {
    // throw new Error('Method not implemented.');
    // this.appareils = this.appareilService.appareils;
    // observer les observables appareilSubject
    // les operateurs se placent entre subject et subscribe pour des traitement particulier
    this.appareilService.appareilSubject.subscribe(
      (appareils:any[])=> {
        this.appareils =appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
    //get All from server
    this.appareilService.getAll();

  }
  onSave(){
    this.appareilService.saveAll();
  }
  onGet(){
    this.appareilService.getAll();
  }
}
