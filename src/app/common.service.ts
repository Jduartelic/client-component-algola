import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
  

@Injectable()  
export class CommonService {  
  
  constructor(private http: Http) { }  
  
  getNews(){       
    return this.http.get('http://localhost:3800/getNews').pipe(
      map((response: Response) => response.json())
    )             
  }  
  deleteUser(id){ 
    const httpOptions = {
      headers: new Headers({
        "content-type": "application/x-www-form-urlencoded"
      })
    };
    return this.http.post(`http://localhost:3800/removeNews/${id}`, {'id': id}, httpOptions).pipe(
            map((response: Response) =>response.json())               
    )
  }  
}