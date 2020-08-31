import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { Tab6Page } from '../tab6/tab6.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  posts: Observable<any>;
  postcomments: Observable<any>;
  commentObj: {
    msg: null,
    firstName: null,
    lastName: null,
    avatar: null,
    date: null
  };

  constructor(
    private apiService: ApiService,
    private modalController: ModalController
  ) {}

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

  getPostCommentList(id: string) {
    this.apiService.getPostComments(id).subscribe((data) => {
      console.log(data);
      this.postcomments = data;
      data.map(comment => {
        this.commentObj = {
          msg: comment.message,
          firstName: comment.owner.firstName,
          lastName: comment.owner.lastName,
          avatar: comment.owner.picture,
          date: comment.publishDate
        };
      });
      this.presentModal();
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: Tab6Page,
      componentProps: {
        'message': this.commentObj.msg,
        'firstName': this.commentObj.firstName,
        'lastName': this.commentObj.lastName,
        'avatar': this.commentObj.avatar,
        'date': this.commentObj.date
      }
    });
    return await modal.present();
  }
}
