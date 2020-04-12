import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient){
  }

  makePost(url:string, requestData:any): Observable<any> {
    let completeUrl = environment.baseUrl+url;
    return this.http.post<any>(completeUrl, { ...requestData});
  }

  makeGet(url:string):Observable<any>{
    let completeUrl = environment.baseUrl+url;
    return this.http.get(completeUrl);
  }
}
