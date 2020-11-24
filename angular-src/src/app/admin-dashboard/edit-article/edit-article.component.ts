import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import swal from 'sweetalert2';
import { Article } from 'src/app/models/article.model';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
  updatedArticle: Article;
  articleID: string;
  uploadArray = [];

  constructor(
    private articleService: ArticleService,
    private router: Router,
    public activeRouter: ActivatedRoute,
    private spinner: NgxSpinnerService

  ) {
    this.updatedArticle = new Article({})
    this.articleID = this.activeRouter.snapshot.params['id'];
  }

  ngOnInit() {
    this.spinner.show()
    this.articleService.getArticleById(this.articleID).subscribe(((data: any) => {
      this.spinner.hide()
      console.log('edit Article data---->>', data)
      this.updatedArticle = data;

    }), (err) => {
      console.log("error-->", err)
    })
  }




  update() {
    this.spinner.show()

    this.articleService.uploadArticle(this.updatedArticle, this.uploadArray, 'PUT')
      .subscribe((data: any) => {
        this.spinner.hide()

        console.log('Updated Successfully');
        swal.fire(
          'Blog Updated',
          'Success'
        ).then(() => {
          this.router.navigate(['admin/article']);
        })
      }),

      ((err) => {
        this.spinner.hide()

        console.log('Blog Adding Failed')
        swal.fire(
          'Blog Adding Fail'
        )
      }
      )
    console.log('submitted-->', this.updatedArticle)

  }


  fileChanged(ev) {
    this.uploadArray = ev.target.files;
  }

}
