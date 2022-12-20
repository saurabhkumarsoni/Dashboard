import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
  api = config.API_URL

  constructor(private http: HttpClient) { }

  signIn(data: any){
    return this.http.post(this.api + 'abc', data)
  }
  saveData(data: any){
    return this.http.get(this.api + 'empData2.json')
    .pipe(map((resData: any) =>{
      const userArray = [];
      for(const key in resData){
        if(resData.hasOwnProperty(key)){
          userArray.push({userId: key, ...resData[key]})
        }
      }
      return userArray;
    }))
  }
 
}
