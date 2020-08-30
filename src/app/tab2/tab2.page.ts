import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  posts: Observable<any>;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    console.log('Tab2');
    this.getPostList();
  }

  getPostList() {
    this.apiService.getPosts().subscribe((data) => {
      console.log(data);
      this.posts = data;
    });
  }
}
