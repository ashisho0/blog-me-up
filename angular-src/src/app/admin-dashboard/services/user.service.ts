import { Injectable } from '@angular/core';
import { BaseService } from './../../shared/services/base.service'
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model'
import { Observable } from 'rxjs';



@Injectable()
export class UserService extends BaseService {
    constructor(
        public http: HttpClient
    ) {
        super('user');
    }

    getUser() {
        // console.log(this.url);
        return this.http.get(this.url, this.getOptions());
    }
    addUser(data) {
        console.log(data, this.url)
        return this.http.post(this.url + 'add', data, this.getOptionsWithToken());
    }

    getUserById(id) {
        return this.http.get(this.url + id, this.getOptions());

    }
    editUser(updatedData: User, id) {
        return this.http.put(this.url + 'edit/' + id, updatedData, this.getOptionsWithToken());


    }
    deleteUser(id) {
        return this.http.delete(this.url + id, this.getOptionsWithToken());

    }


    search() {
        // to be continued
    }


    // edit User with file upload XHR 
    uploadUser(user: User, files: Array<any>, method) {
        return new Observable((observer) => {

            const xhr = new XMLHttpRequest();
            const formData = new FormData();

            if (files.length) {
                formData.append('image', files[0], files[0].name)
            }

            for (let key in user) {
                formData.append(key, user[key])
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
                endUrl = this.url + 'edit/' + user._id + '?token=' + localStorage.getItem('token')
            }
            else {
                endUrl = this.url + 'add' + '?token=' + localStorage.getItem('token')

            }
            xhr.open(method, endUrl, true);
            xhr.send(formData)

        })


    }





}




