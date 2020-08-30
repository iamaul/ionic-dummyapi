import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  tags: Observable<any>;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    console.log('Tab3');
    this.getTagList();
  }

  getTagList() {
    this.apiService.getTags().subscribe((data) => {
      console.log(data);
      this.tags = data;
    });
  }
}
