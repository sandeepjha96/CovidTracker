import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CoronaServiceService } from '../corona-service.service';
import { HomeComponent } from '../home/home.component';
import { IStatewise } from '../interfaces/tracker.interface';

@Component({
  selector: 'app-state-data',
  templateUrl: './state-data.component.html',
  styleUrls: ['./state-data.component.scss']
})
export class StateDataComponent implements OnInit {
subscription:Subscription;
stateData:IStatewise;

  constructor(private hm:HomeComponent) { }

  ngOnInit() {
    //  this.hm.getDataOfState().subscribe(data => {
    //   this.stateData=data;
    // })
    this.hm.subject.subscribe(data => {
      this.stateData=data;
    })
  }
  
 
}
