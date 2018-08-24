import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Router } from "@angular/router";
@Component({
  selector: 'app-userdash-header',
  templateUrl: './userdash-header.component.html',
  styleUrls: ['./userdash-header.component.css']
})
export class UserdashHeaderComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }

  id:any;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
  }
  submit() {
    this.router.navigate(["/allFlights/"+this.id]);
  }

}
