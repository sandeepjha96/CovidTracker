import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from 'events';
import { BehaviorSubject } from 'rxjs';
import { CoronaServiceService } from '../corona-service.service';
import { DistrictService } from '../district.service';
import { IStatewise, Itotal, Itracker } from '../interfaces/tracker.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
stateData ;
  Data: any;
  stateToggle: boolean = false;
  statewisecase: Itotal ;
  lastUpdated: string;
  statewise: IStatewise[];
  statewise2: IStatewise[];
  statewise1: IStatewise[];
  f: IStatewise[];
  state: string;
  @ViewChild('data') data1; 
    constructor(private cs: CoronaServiceService,private ds:DistrictService) {


     }

  ngOnInit() {
    this.showSummaryData();
  }
    selectedData(state: string)
    {
      this.state = state;
       this.statewise1 = this.statewise.filter(a => a.state==this.state);
     
this.stateData= this.statewise1[0];
this.cs.sendDataOfState(this.stateData);

     

    }
  showSummaryData() {
  this.cs.getDataStateWise().subscribe(data => {
    this.statewisecase = data.data.total;
    this.lastUpdated = data.lastOriginUpdate;
    this.statewise = data.data.statewise;
  }, err => console.log('HTTP Error', err), );
  }

  showHideData(data) {
    if(data && data['show'] == true) {
      data['show'] = false;
    } else {
      data['show'] = true;
    }
  }

}
