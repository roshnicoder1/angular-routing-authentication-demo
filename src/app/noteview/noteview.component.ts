import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../routing.service';

@Component({
  selector: 'app-noteview',
  templateUrl: './noteview.component.html',
  styleUrls: ['./noteview.component.css']
})
export class NoteviewComponent implements OnInit {

  constructor(private routeService: RoutingService) { }

  ngOnInit() {
  }

  editNote(){
    // console.log("edit from note view");
    this.routeService.routeToEditNoteView();
  }
}
