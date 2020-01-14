import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router: Router) { }

  routeToDashboard(){
    this.router.navigate(['view','dashboard']);
  }

  routeToListView(){
    this.router.navigate(['view','dashboard','listview']);
  }

  routeToNoteView(){
    this.router.navigate(['view','dashboard','noteview']);
  }

  routeToEditNoteView(){
    this.router.navigate(['view','dashboard',{outlets:{editNoteOutlet:['editnote',101]}}]);
  }
}
