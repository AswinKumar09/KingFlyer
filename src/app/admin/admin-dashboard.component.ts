import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flightService';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  productList:any[];

  constructor(private service:FlightService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(){
    this.service.getAll().subscribe((Response)=>{
    this.productList=Response as any[];
    console.log("request return",this.productList);
    })
  }


    remove(productId){
      this.service.remove(productId).subscribe({
       complete:()=>{
       this.loadProducts();
     }

    })

    }






}
