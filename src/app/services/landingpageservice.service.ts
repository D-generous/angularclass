import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface contactinterface{
  firstname: string,
  lastname: string,
  phonenumber: string,
  address: string,
  gender: string,
  email: string,
  // newfirst:string

}

@Injectable({
  providedIn: 'root'
})
export class LandingpageserviceService {

  public retrieveStorage:contactinterface[] = JSON.parse(localStorage['contacts'])


  constructor() { }

  public item = 'My name is Alok'
  public numberarray:number[]=[1,2,3,4,5,6,7,8,9,10]

  public returnItem(){
    return this.item
  }

  returnStorage():Observable<any[]>{
    return of (this.retrieveStorage)
  }

  public getStudents(){
    return JSON.parse(localStorage['newstudents'])
  }

}
