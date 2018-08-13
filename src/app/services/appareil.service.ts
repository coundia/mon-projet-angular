import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppareilService {
  //subject
  appareilSubject = new Subject <any []>() ;
// array appareils
  private appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'eteint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allume'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'eteint'
    }
  ];
  // accesseurs
 emitAppareilSubject() {
   //rendre accessible une copie du array apppareils
   this.appareilSubject.next(this.appareils.slice());
 }
  //methodes
  allumerTout(){
    for(let app of this.appareils){
      app.status='allume';
    }
    this.emitAppareilSubject();
  }
  etteindreTout() {
    for(let app of this.appareils) {
      app.status='eteint';
    }
    this.emitAppareilSubject();
  }
  allumer(i: number){
    this.appareils[i].status = "allume";
    this.emitAppareilSubject();
  }
  eteindre(i: number){
    this.appareils[i].status = "eteint";
    this.emitAppareilSubject();
  }
  //find
  getAppareilById(id: number){
    const appareil = this.appareils.find(
      (obj)=>{
        return obj.id === id;
      }
    );
    return appareil;
  }
  //add appareil
  add(name:string,status:string){
   const app={
     id: 0,
     name: '',
     status: ''
   };
   app.name=name;
   app.status=status;
   app.id=this.appareils[this.appareils.length-1].id+1;
   this.appareils.push(app);
   this.emitAppareilSubject();

  }

constructor(private httpClient: HttpClient){}
// save all appareil
saveAll() {
   this.httpClient.put('https://http-client-demo-11369.firebaseio.com/appareils.json',this.appareils)
     .subscribe(
       ()=>{console.log("Ok")},
       (error)=>{
         console.log(error);
       }
     );
}
// get all appareil
  getAll() {
    this.httpClient
      .get<any[]>('https://http-client-demo-11369.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          console.log('Get all success !');
          this.appareils = response;
          this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );

  }
}
