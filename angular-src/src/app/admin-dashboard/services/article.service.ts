import { Injectable } from '@angular/core';
import { BaseService } from './../../shared/services/base.service'
import { HttpClient } from '@angular/common/http';
import { Article } from '../../models/article.model';
import { Observable } from 'rxjs';


@Injectable()
export class ArticleService extends BaseService {
    constructor(
        public http: HttpClient
    ) {
        super('article');
    }

    getArticle() {
        return this.http.get(this.url, this.getOptions());
    }
    addArticle(data) {
        return this.http.post(this.url + 'add', data, this.getOptionsWithToken());
    }

    getArticleById(id) {

        return this.http.get(this.url + id, this.getOptions());

    }
    editArticle(updatedData: Article, id) {
        return this.http.put(this.url + 'edit/' + id, updatedData, this.getOptionsWithToken());


    }
    deleteArticle(id) {
        return this.http.delete(this.url + id, this.getOptionsWithToken());

    }


    // Add and edit article with file upload XHR 

    uploadArticle(article: Article, files: Array<any>, method) {
        return new Observable((observer) => {

            const xhr = new XMLHttpRequest();
            const formData = new FormData();

            if (files.length) {
                formData.append('image', files[0], files[0].name)
            }

            for (let key in article) {
                formData.append(key, article[key])
            }

            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        observer.next(xhr.response)
                    }
                    else {
                        observer.error(xhr.response);
                    }
                }
            }
            let endUrl;
            if (method == 'PUT') {
                endUrl = this.url + 'edit/' + article._id + '?token=' + localStorage.getItem('token')
            }
            else {
                endUrl = this.url + 'add' + '?token=' + localStorage.getItem('token')

            }
            xhr.open(method, endUrl, true);
            xhr.send(formData)

        })


    }






}




