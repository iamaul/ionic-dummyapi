import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> {
    return this.httpClient.get('https://dummyapi.io/data/api/user', {
      headers: {'app-id': environment.appApiId}
    }).pipe(map(data => data['data']));
  }

  getPosts(): Observable<any> {
    return this.httpClient.get('https://dummyapi.io/data/api/post', {
      headers: {'app-id': environment.appApiId}
    }).pipe(map(data => data['data']));
  }

  getTags(): Observable<any> {
    return this.httpClient.get('https://dummyapi.io/data/api/tag', {
      headers: {'app-id': environment.appApiId}
    }).pipe(map(data => data['data']));
  }

  getUserPosts(id: string): Observable<any> {
    return this.httpClient.get(`https://dummyapi.io/data/api/user/${id}/post`, {
      headers: {'app-id': environment.appApiId}
    }).pipe(map(data => data['data']));
  }

  getUserProfile(id: string): Observable<any> {
    return this.httpClient.get(`https://dummyapi.io/data/api/user/${id}`, {
      headers: {'app-id': environment.appApiId}
    }).pipe(map(data => data));
  }

  getPostTags(tag: string): Observable<any> {
    return this.httpClient.get(`https://dummyapi.io/data/api/tag/${tag}/post`, {
      headers: {'app-id': environment.appApiId}
    }).pipe(map(data => data['data']));
  }

  getPostComments(id: string): Observable<any> {
    return this.httpClient.get(`https://dummyapi.io/data/api/post/${id}/comment`, {
      headers: {'app-id': environment.appApiId}
    }).pipe(map(data => data['data']));
  }
}

