import { Component } from '@angular/core';
import { interval, Observable, tap, timeInterval } from 'rxjs';

@Component({
  selector: 'app-uncommond-page',
  templateUrl: './uncommond-page.component.html',
  styleUrls: ['./uncommond-page.component.css']
})
export class UncommonPageComponent {

  //i18nSelect
  public name: string = 'Gerson';
  public gender: 'male'|'female' = 'male';
  
  public invitationMap = {
    male: 'invitarlo',
    'female': 'invitarla'
  }




  changeClient():void{
    this.name = 'Melisa'
    this.gender = 'female'
  }

  //i18nPlural SOLO GUARDA MAS DE 3
  public clients: string[] = ['Maria', 'Fernando','Marcos','Eduardo', 'Melisa','Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ninguna persona esperando.',
    '=1': 'tenemos una persona esperando',
    'other': 'tenemos # personas esperando'
  }

  deleteClient():void{
   this.clients.pop();
  }

  //KeyValue Pipe
  public person ={
    name: 'Gerson',
    age: 25,
    address: 'Guatemala'
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve('tenemos data en la promesa');
      console.log('viendo valores ')
    }, 3500);
  })

}
