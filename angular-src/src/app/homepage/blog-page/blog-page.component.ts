import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../admin-dashboard/services/article.service';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  article: Article;
  articleID: string;
  imgUrl: string;

  constructor(
    private articleService: ArticleService,
    private router: Router,
    public activeRouter: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {
    this.article = new Article({})

    this.articleID = this.activeRouter.snapshot.params['id'];
    this.imgUrl = environment.ImgUrl

  }



  ngOnInit() {
    this.spinner.show()
    this.articleService.getArticleById(this.articleID).subscribe(((data: any) => {
      this.spinner.hide()
      console.log('Clicked Article data---->>', data)
      this.article = data

    }), (err) => {
      console.log("error-->", err)
    })
  }

}
