import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-op-user-view',
  templateUrl: './op-user-view.component.html',
  styleUrls: ['./op-user-view.component.css']
})
export class OpUserViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToOpUserCreate(): void { 
    this.router.navigate(['/OpUser/create']);
  }

}
