import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OpUser } from '../op-user.model';
import { OpUserService } from '../op-user.service';

@Component({
  selector: 'app-op-user-delete',
  templateUrl: './op-user-delete.component.html',
  styleUrls: ['./op-user-delete.component.css']
})
export class OpUserDeleteComponent implements OnInit {

  public objectOpUser: OpUser = new OpUser();

  constructor(
    private service: OpUserService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.getObjectOpUser(id);
  }

  getObjectOpUser(id: number) {
    this.service.getObjectOpUserById(id).subscribe(res => {
      this.objectOpUser = res;
    });
  }

  deleteObjectOpUser() {
    this.service.deleteObjectOpUser(Number(this.objectOpUser.id)).subscribe(res => {
      this.service.showMessage('Usuário excluído com sucesso!');
      this.router.navigate(['/OpUsers']);
    });
  }

  cancel(): void {
    this.router.navigate(['/OpUsers'])
  }

}
