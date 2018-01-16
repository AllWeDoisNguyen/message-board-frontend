import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebService {

  constructor(private http: Http) {} // inject http into class constructor to use it and to save as a local reference for GetMessages

  getMessages() {
    return this.http.get('http://localhost:63145/api/messages').toPromise();
  }
}
