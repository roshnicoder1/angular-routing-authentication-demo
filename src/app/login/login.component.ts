import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../routing.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username: string = "admin";
  password: string = "password";
  constructor(private routeService: RoutingService,private authService: AuthenticationService) { }

  ngOnInit() {
  }

  login(){
    this.authService.authorizeUser({"username":this.username,"password":this.password})
    .subscribe((res)=>{
      console.log(res.token);
      this.authService.setToken(res.token);
      this.routeService.routeToDashboard();
    },(error)=>{
      console.log(error.message);
    })
  }
}
