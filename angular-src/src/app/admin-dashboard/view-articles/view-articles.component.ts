import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import swal from 'sweetalert2'
import { ArticleService } from '../services/article.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-view-articles',
  templateUrl: './view-articles.component.html',
  styleUrls: ['./view-articles.component.scss']
})
export class ViewArticlesComponent implements OnInit {
  articleList;
  imgUrl;

  constructor(public articleService: ArticleService, public router: Router, private spinner: NgxSpinnerService) {
    this.articleList = []
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

  remove(id) {

    swal.fire({
      title: 'Do you want to delete the Article?',
      text: "You won't be able to revert it back",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.value) {

        this.articleService.deleteArticle(id).subscribe((data: any) => {
          console.log("Deleted successfully");
          swal.fire(
            'Deleted!',
            'Article Deleted.',
            'success'
          )
          // this.router.navigate(['/user']);
          this.ngOnInit();

        }, error => {

          swal.fire(
            'Not Deleted!',
            'There was some error.',
            'error'
          )
          console.log("Error", error);
        })

      }
    })

  }







}
