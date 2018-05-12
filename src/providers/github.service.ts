import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/Observable/of';

import { User } from '../models/user.interface';
import { Repository } from '../models/repository.interface';

import { USER_LIST } from '../mocks/user.mocks';
import { REPOSITORY_LIST } from '../mocks/repository.mocks';


/*
  Generated class for the GitHubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GitHubService {

  constructor(/* public http: HttpClient */) {
    console.log('Hello GitHubServiceProvider Provider');
  }

  /* 
    Finding the repositories from within the REPOSITORY_LIST, equal to the username passed in.
    Returning the resulats as an Observable.
 */

  mockGetRepositoryInformation(username: string): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username))
  }

  /* 
    Finding the username from within the USER_LIST, equal to the username passed in.
    Returning the resulats as an Observable.
 */
  mockGetuserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  }

}
