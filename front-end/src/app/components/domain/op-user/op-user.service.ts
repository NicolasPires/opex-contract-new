import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OpUser } from './op-user.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpUserService {

  public OpUserBackUrl: string = environment.backUrl + '/' + 'OpUser';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  // Fetch all objects OpUser
  getObjectsOpUser(): Observable<OpUser[]> {
    return this.http.get<OpUser[]>(this.OpUserBackUrl + 's');
  }

  getObjectsOpUserPag(page: number, size: number): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(this.OpUserBackUrl + 's/' + page + '/' + size, { observe: 'response' });
  }

  // Fetch objects OpUser by id without relationships
  getObjectsOpUserWithoutRelationships(): Observable<OpUser[]> {
    return this.http.get<OpUser[]>(this.OpUserBackUrl + '/OpUsersWithOutRelationships');
  }

  getObjectsOpUserWithoutRelationshipsPag(page: number, size: number): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(`${this.OpUserBackUrl}sWithoutRelationships/${page + 1}/${size}`, { observe: 'response' });
  }

  // Create object OpUser
  createObjectOpUser(objectOpUser: OpUser): Observable<OpUser> {
    return this.http.post(this.OpUserBackUrl + 's', objectOpUser);
  }

  // Fetch object OpUser by id
  getObjectOpUserById(id: number): Observable<OpUser> {
    return this.http.get<OpUser>(this.OpUserBackUrl + 's/' + id);
  }

  // Fetch object OpUser by id without relationships
  getObjectOpUserWithoutRelationships(id: number): Observable<OpUser> {
    return this.http.get<OpUser>(this.OpUserBackUrl + 'WithoutRelationships' + '/' + id);
  }

  // Update object OpUser
  updateObjectOpUser(objectOpUser: OpUser): Observable<OpUser> {
    return this.http.put<OpUser>(this.OpUserBackUrl + 's/' + objectOpUser.id, objectOpUser);
  }

  // Delete object OpUser
  deleteObjectOpUser(id: number): Observable<OpUser> {
    return this.http.delete(this.OpUserBackUrl + '/' + id);
  }

}
