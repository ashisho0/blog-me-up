import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../admin-dashboard/services/article.service';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.scss']
})
export class AllBlogsComponent implements OnInit {
  articleList;
  imgUrl;

  constructor(public articleService: ArticleService, private spinner: NgxSpinnerService) {
    this.articleList = [];
    this.imgUrl = environment.ImgUrl



  }

  ngOnInit() {
    this.spinner.show()
    this.articleService.getArticle().subscribe(((data: any) => {
      this.spinner.hide()
      this.articleList = data;
      console.log(data);

    }), (err => {
      console.log(err);
    }));

  }

}
