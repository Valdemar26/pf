import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getItemsFromJsonFile(): Observable<any> {
    return this.http
    // .get<any>(environment.deltasApiUrl, {headers: this.headers});
      .get<any>('../../../assets/json/data.json');
  }

}
