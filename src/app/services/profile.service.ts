import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ProfileService {

  private username: string;
  private clientid = '4695ad11ee85d3f7c386';
  private clientsecret = 'ede0314bd8f7151f48dda6ab09ab4dda86c462f0';

  constructor(private http: Http) {
    console.log();
    this.username = 'vanmo9';
  }

  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
      .map(res => res.json());
  }

  getProfileRepos() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
      .map(res => res.json());
  }

  updateProfile(username: string) {
    this.username = username;
  }

}
