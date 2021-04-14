import { Component, OnInit } from '@angular/core';
import { MycartserviceService } from 'src/app/mycartservice.service';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {
  homedata:any;

  constructor(private myhomeserve:MycartserviceService) { }

  ngOnInit(): void {
    this.myhomeserve.Getcarthomeimg().subscribe((data)=>{this.homedata=data.data;})
    console.log(this.homedata,'myhomedata');

  }

}
