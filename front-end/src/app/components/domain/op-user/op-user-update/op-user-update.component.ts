import { OpUser } from './../op-user.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OpUserService } from '../op-user.service';

@Component({
  selector: 'app-op-user-update',
  templateUrl: './op-user-update.component.html',
  styleUrls: ['./op-user-update.component.css']
})
export class OpUserUpdateComponent implements OnInit {

  public objectOpUser: OpUser = new OpUser();

  constructor(
    private service: OpUserService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.getObjectOpUser(id);
  }

  getObjectOpUser(id: number) {
    this.service.getObjectOpUserById(id).subscribe(res => {
      this.objectOpUser = res;
    });
  }

  updateObjectOpUser() {
    this.service.updateObjectOpUser(this.objectOpUser).subscribe(res => {
      this.service.showMessage('Usuário atualizado com sucesso!');
      this.router.navigate(['/OpUsers']);
    });
  }

  cancel(): void {
    this.router.navigate(['/OpUsers'])
  }

}
