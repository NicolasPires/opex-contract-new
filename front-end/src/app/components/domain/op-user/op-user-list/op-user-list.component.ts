import { OpUserService } from './../op-user.service';
import { Component, OnInit } from '@angular/core';
import { OpUser } from '../op-user.model';


@Component({
  selector: 'app-op-user-list',
  templateUrl: './op-user-list.component.html',
  styleUrls: ['./op-user-list.component.css']
})
export class OpUserListComponent implements OnInit {

  objectsOpUser!: OpUser[]
  displayedColumns = ['id', 'name', 'email', 'code_', 'is_opex', 'is_capex', 'is_opex_sec', 'last_access', 'action']
  
  constructor(private opUserService: OpUserService) { }

  ngOnInit(): void {
    this.opUserService.getObjectsOpUser().subscribe(objectsOpUser => {
      this.objectsOpUser = objectsOpUser
    })
  }

}

