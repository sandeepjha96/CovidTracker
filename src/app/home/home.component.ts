import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from 'events';
import { Observable } from 'rxjs';
import { BehaviorSubject, Subject } from 'rxjs';
import { CoronaServiceService } from '../corona-service.service';
import { DistrictService } from '../district.service';
import { IStatewise, Itotal, Itracker } from '../interfaces/tracker.interface';
import { SortByPipe } from '../shared/SortByPipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [SortByPipe]
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
  subject: Subject<any> = new Subject<any>();
  customStatewise;


  @ViewChild('data') data1;
    constructor(private cs: CoronaServiceService,private ds:DistrictService,private cp: SortByPipe) {


     }

  ngOnInit() {
    this.showSummaryData();
  }
    selectedData(state: string)
    {
      this.state = state;
       this.statewise1 = this.statewise.filter(a => a.state == this.state);

this.stateData = this.statewise1[0];
this.sendDataOfState(this.stateData);



    }
    sendDataOfState(  a){
      this.subject.next(a);

      }
      getDataOfState(): Observable<any> {
      return this.subject.asObservable();
      }

      sortDataBasedOnState(){
        
if(this.stateToggle) {
this.customStatewise=this.cp.transform(this.statewise,"asc",'state');
this.statewise=this.customStatewise;
this.stateToggle = !this.stateToggle;
}else
{
  this.customStatewise=this.cp.transform(this.statewise,"desc",'state');
this.statewise=this.customStatewise;
this.stateToggle = !this.stateToggle;
}

      }
      sortDataBasedOnConfirmed(){
        
        if(this.stateToggle) {
        this.customStatewise=this.cp.transform(this.statewise,"asc",'confirmed');
        this.statewise=this.customStatewise;
        this.stateToggle = !this.stateToggle;
        }else
        {
          this.customStatewise=this.cp.transform(this.statewise,"desc",'confirmed');
        this.statewise=this.customStatewise;
        this.stateToggle = !this.stateToggle;
        }
        
              }

  showSummaryData() {
  this.cs.getDataStateWise().subscribe(data => {
    this.statewisecase = data.data.total;
    this.lastUpdated = data.lastOriginUpdate;
    this.statewise = data.data.statewise;
  }, err => console.log('HTTP Error', err), );
  }

  showHideData(data) {
    if (data && data['show'] == true) {
      data['show'] = false;
    } else {
      data['show'] = true;
    }
  }

}
