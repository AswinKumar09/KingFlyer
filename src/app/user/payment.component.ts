import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { bookingHistoryService } from "../services/bookingHistoryService";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  isNetBanking: boolean = false; 
  isCreditCard: boolean = false; 
  isDebitCard: boolean = false; 
  isSelected:boolean = false;
  bId:string;
  email:string;
  netBanking:any=3; 
  uId:string;
  constructor(private route:ActivatedRoute, private router:Router,
  private bService:bookingHistoryService) { }

  ngOnInit() {
    this.bId=this.route.snapshot.paramMap.get("id");
    this.uId=this.route.snapshot.paramMap.get("uid");
    this.email = this.route.snapshot.paramMap.get("email");
  }
  updateUI(mode){
    this.isNetBanking=false; 
    this.isCreditCard=false; 
    this.isDebitCard=false;
    if(mode=="3")
      this.isNetBanking=true;
    else if(mode=="2")
      this.isCreditCard=true; 
    else if(mode=="1")
      this.isDebitCard=true;
  }

  mail() {
    this.bService.mail(this.bId,this.email).subscribe({
      complete:() => {
        this.router.navigate(["/user/dash/"+this.uId]);
      }
    });
  }

}
