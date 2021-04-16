import { Component } from '@angular/core';
import { Friend} from './friend';
import { AddFriendService } from './add-friend.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(addFriendService: AddFriendService, httpClient: HttpClient) {
    this.addFriendService = addFriendService;
    this.httpClient = httpClient;
  }

  private addFriendService: AddFriendService;
  private httpClient: HttpClient;
  private fUrl = 'http://localhost:9050/allFriends';
  public message: string;
  public allFriends;
  private options = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  private reqOption = {
    headers: new HttpHeaders(this.options)
  };

  languages = ['html', 'css', 'javascript', 'php', 'C#', 'Java', 'ruby'];
  friendModel = new Friend(null, null, null, null, null);

  subFriend(friend: Friend): void {
    this.addFriendService.addFriend(friend).subscribe(data => this.fetchFriends(this.fUrl) , error => 'you lost a friend due to bad code');
  }

  public async fetchFriends(url: string): Promise<any>{
    this.message = 'Fetching...';
    this.allFriends = '';
    this.allFriends = await this.httpClient
      .get<any>(url, this.reqOption)
      .pipe(delay(1000))
      .toPromise();
    this.message = 'Fetched';
    console.log(this.message);
    console.log(this.allFriends);
  }

  ngOnInit(): any {
    this.fetchFriends(this.fUrl);
  }
}
