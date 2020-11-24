import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ArticleService } from '../admin-dashboard/services/article.service';
import { NgxSpinnerService } from "ngx-spinner";
import { UserService } from '../admin-dashboard/services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  articleList;
  imgUrl;
  recentFourList;
  topThree;
  fourth;
  userList;

  constructor(public articleService: ArticleService, private spinner: NgxSpinnerService, public userService: UserService) {
    this.articleList = [];
    this.recentFourList = [];
    this.topThree = [];
    this.fourth = {}
    this.userList = []


    this.imgUrl = environment.ImgUrl
  }

  ngOnInit() {
    this.spinner.show()
    this.articleService.getArticle().subscribe(((data: any) => {
      this.spinner.hide()
      this.articleList = data.reverse();
      for (let i = 0; i < 4; i++) {
        this.recentFourList.push(this.articleList[i])
      }
      for (let i = 0; i < 3; i++) {
        this.topThree.push(this.recentFourList[i])
      }
      this.fourth = this.recentFourList[3]


      console.log(data);

    }), (err => {

      console.log(err);
    }));



    this.userService.getUser().subscribe(((data: any) => {
      this.userList = data
      console.log(data)
    }), err => {
      console.log(err)

    })






  }

}
