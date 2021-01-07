import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';
import { CoronaServiceService } from '../corona-service.service';
import { Ifactoids } from '../interfaces/banners.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  facts:string[];
bannerData:string ;
  subscription:Subscription;
  count;
  storebannerSubject: BehaviorSubject<any> = new BehaviorSubject("");

  constructor(private cs:CoronaServiceService) { }

  ngOnInit() {
   this.cs.getBanners().subscribe(data => {
   this.facts = data.factoids.map(item  => {
     return item.banner;
   }


   )
   this.count = this.facts.length - 1;
  this.bannerData = this.facts[0];
  const time = interval(3000);
  let i =0;
  this.subscription = time.subscribe( (val: any) => {
    val = this.openSnack(this.facts[i]);
  this.storebannerSubject.next(val);

  if (i <= this.count) {
    i = i + 1;
  } else {
    i = 0;
  }
  });
});


 }

openSnack(data) {
    return this.storebannerSubject.subscribe(v => {
    this.bannerData = data;
  })
}
}
