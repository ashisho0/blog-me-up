import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from '../services/article.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';



@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {
  newArticle;
  uploadArray = []

  constructor(public articleService: ArticleService, public router: Router) {
    this.newArticle = new Article({})

  }

  ngOnInit() {
  }

  add() {
    this.articleService.uploadArticle(this.newArticle, this.uploadArray, 'POST')
      .subscribe((data: any) => {
        console.log('Added Successfully');
        swal.fire(
          'Blog Added',
          'Success'
        ).then(() => {
          this.router.navigate(['admin/article']);
        })
      }),

      ((err) => {
        console.log('Blog Adding Failed')
        swal.fire(
          'Blog Adding Fail'
        )
      }
      )
    console.log('submitted-->', this.newArticle)

  }


  fileChanged(ev) {

    this.uploadArray = ev.target.files;

  }
}
