import { Component, Input, OnInit } from '@angular/core';
import { DistrictService } from '../district.service';
import { CoronaServiceService } from '../corona-service.service';
import { Istateunassigned } from '../interfaces/district.interface';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {
  @Input() districtData;
districtD:Istateunassigned;
 myArray =[];
 
  constructor(private cs: CoronaServiceService,private ds:DistrictService) {

         }

  ngOnInit() {
    this.ds.districtdata.subscribe(data => {
      this.districtD=data;
       const districtDataArray = [];
      Object.keys(data).forEach((key, index) => {
        districtDataArray.push(
          Object.assign({}, { stateName: key }, data[key])
        );
      });
      this.myArray = districtDataArray;
      console.log(this.myArray);
      this.districtData = this.myArray;
  });
    
    this.getDis(this.districtData);
}

  getDis(s1){
    this.ds.getDataDistrictWise(s1);
  }

}