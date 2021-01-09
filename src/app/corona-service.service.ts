import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Ibanners } from './interfaces/banners.interface';
import { Itracker } from './interfaces/tracker.interface';

@Injectable({
  providedIn: 'root'
})
export class CoronaServiceService {

  url_statewise = 'https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise';
  url_banner ='https://api.covid19india.org/website_data.json';
    constructor(private http: HttpClient) { }

  getDataStateWise(): Observable<Itracker> {
    return this.http.get<Itracker>(this.url_statewise).pipe(
     tap (
      success => console.log('success'),
      error => console.log('error')
   )
    );
  }
 getBanners() : Observable<Ibanners> {
  return this.http.get<Ibanners>(this.url_banner).pipe(
    tap (
     success => console.log('success'),
     error => console.log('error')
  )
   );
 }
 

}
