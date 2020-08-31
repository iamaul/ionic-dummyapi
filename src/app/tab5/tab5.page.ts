import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  posttags: Observable<any>;
  tagname: string;
  private tagUri: string;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    console.log('Tab5');
    this.tagUri = this.activatedRoute.snapshot.paramMap.get('tag');
    this.getPostTagList();
  }

  getPostTagList() {
    this.apiService.getPostTags(this.tagUri).subscribe((data) => {
      console.log(data);
      this.tagname = this.tagUri;
      this.posttags = data;
    });
  }
}
