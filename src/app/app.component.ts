import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppareilService} from './services/appareil.service';
import {reject} from 'q';
import {Observable, Subscription} from 'rxjs';
import { interval } from 'rxjs';

// add the observable
// import {Observable} from 'rxjs';

// decorateur
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , OnDestroy{

  secondes: number ;
  // stop counter
  counterSubscribe: Subscription;
  ngOnInit() {
    const counter = interval(1000);
    //observer un observable
    this.counterSubscribe = counter.subscribe(
      (value: number) => {
        this.secondes = value;
        },
      (error: any) => {
        console.log("erreur !");
      },
      ()=>{
        console.log("Complte");
      }
    );
  }
  ngOnDestroy(): void {
    //detruire la subscrip du obs
    this.counterSubscribe.unsubscribe();
  }

constructor(){}
}
