import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  userposts: Observable<any>;
  profile: Observable<any>;
  username: string;
  private userId: string;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    console.log('Tab4');
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getUserProfile();
    this.getUserPostList();
  }

  getUserProfile() {
    this.apiService.getUserProfile(this.userId).subscribe((data) => {
      console.log(data);
      this.username = data.firstName + data.lastName;
      this.profile = data;
    });
  }

  getUserPostList() {
    this.apiService.getUserPosts(this.userId).subscribe((data) => {
      console.log(data);
      this.userposts = data;
    });
  }
}
