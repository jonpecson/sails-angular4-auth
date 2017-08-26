import { Component, OnInit } from '@angular/core';
import { ApiHandler } from "app/providers/api-handler.service";
import { RequestMethod } from "@angular/http";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiHandler) {
    // this.api.get('/currency').map(res => <string>res.json())
    // .do((res: string) => {
    //   console.log(res);
    // });

    // this.api.callService('/currency', RequestMethod.Get).map(res => <string>res.json())
    // .do((res: string) => {
    //   console.log(res);
    // });

    this.api.callService('bank', RequestMethod.Get).subscribe((x) => {
      console.log(x);
    })


  }

  ngOnInit() {

  }

}
