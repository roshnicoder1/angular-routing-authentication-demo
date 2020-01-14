import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../routing.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {

  constructor(private routeService: RoutingService) { }

  ngOnInit() {
  }

  editNote(){
    // console.log("edit from note view");
    this.routeService.routeToEditNoteView();
  }
}
