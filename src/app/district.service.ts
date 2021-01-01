import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {
 data1;
 district;
 districtdata: Subject<any> = new Subject<any>();

   url = 'https://api.covid19india.org/state_district_wise.json';

  constructor(private http: HttpClient) { }

  getDataDistrictWise(state) {
    this.http.get(this.url).subscribe(data => {
      this.data1 = data;
      this.district = this.data1[state].districtData;
      this.districtdata.next(this.district);
    }
    )
  }

}
