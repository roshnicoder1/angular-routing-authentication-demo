import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../routing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  isListView: boolean = true;
  constructor(private routeService: RoutingService) { }


  ngOnInit() {
  }

  switchView(){

    if(this.isListView){
      this.routeService.routeToNoteView();
      this.isListView = false;
    } else {
      this.routeService.routeToListView();
      this.isListView = true;
    }
    // console.log("switch view called");

  }
}
