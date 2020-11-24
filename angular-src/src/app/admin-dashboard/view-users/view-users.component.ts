import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import swal from 'sweetalert2'
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit {
  userList;
  imgUrl;


  constructor(public userService: UserService, private router: Router, private spinner: NgxSpinnerService) {
    this.userList = []
    this.imgUrl = "http://localhost:9090/image"
  }

  ngOnInit() {

    this.spinner.show()

    this.userService.getUser().subscribe(((data: any) => {
      this.spinner.hide()
      this.userList = data;
      console.log(data);

    }), (err => {
      console.log(err);
      this.spinner.hide()

    }));
  }




  remove(id) {

    swal.fire({
      title: 'Do you want to delete the User?',
      text: "You won't be able to revert it back",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.value) {

        this.userService.deleteUser(id).subscribe((data: any) => {
          console.log("Deleted successfully");
          swal.fire(
            'Deleted!',
            'User Deleted.',
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
