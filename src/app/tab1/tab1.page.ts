import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  users: Observable<any>;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    console.log('Tab1');
    this.getUserList();
  }

  getUserList() {
    this.apiService.getUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }
}
