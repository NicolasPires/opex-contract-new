import { Component, OnInit } from '@angular/core';
import { OpUserService } from '../op-user.service';
import { Router } from '@angular/router'
import { OpUser } from '../op-user.model';

@Component({
  selector: 'app-op-user-create',
  templateUrl: './op-user-create.component.html',
  styleUrls: ['./op-user-create.component.css']
})
export class OpUserCreateComponent implements OnInit {

  public objectOpUser: OpUser = new OpUser();
  
  constructor(
    private opUserService: OpUserService,
    private router: Router
  ) { }

  ngOnInit(): void {    
  }

  

  createOpUser(): void {
    this.opUserService.createObjectOpUser(this.objectOpUser).subscribe(() => {
      this.opUserService.showMessage('Usuário criado!')
      this.router.navigate(['/OpUsers'])
    })

  }

  cancel(): void {
    this.router.navigate(['/op-users']);
  }

}
