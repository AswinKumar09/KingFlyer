import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from "@angular/router";
import { Router } from '@angular/router';
import { UserService } from "../services/UserService";
import { Usermodel } from '../model/userModel';
@Component({
  selector: 'app-payment-status',
  templateUrl: './payment-status.component.html',
  styleUrls: ['./payment-status.component.css']
})
export class PaymentStatusComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }
  
  id:string;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
  
  }

  back() {
    this.router.navigate(["/user/dash/"+this.id]);
  }

}
