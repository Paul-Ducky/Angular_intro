import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Friend } from './friend';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  private http: HttpClient;
  private url = 'http://localhost:9050/'; // http://localhost:9050/addFriend to add  /editFriend to edit etc etc

  constructor(http: HttpClient) {
    this.http = http;
  }

  method: any; addFriend(friend: Friend): Observable<Friend> {
    return this.http.post<Friend>(this.url + 'addFriend' , friend);
  }
}
