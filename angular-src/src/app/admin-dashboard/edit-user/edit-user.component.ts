import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import swal from 'sweetalert2';
import { User } from 'src/app/models/user.model';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  updatedUser;
  userID;

  constructor(
    private userService: UserService,
    private router: Router,
    public activeRouter: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {
    this.updatedUser = new User({})
    this.userID = this.activeRouter.snapshot.params['id'];
  }

  ngOnInit() {
    this.spinner.show()
    this.userService.getUserById(this.userID).subscribe(((data: any) => {
      this.spinner.hide()

      console.log('edit user data---->>', data)
      this.updatedUser = data;

    }), (err) => {
      console.log("error-->", err)
    })
  }

  update() {

    swal.fire({
      title: 'Do you want to update the User?',
      text: "You won't be able to revert it back",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Update'
    }).then((result) => {
      if (result.value) {

        this.userService.editUser(this.updatedUser, this.userID).subscribe((data: any) => {
          console.log("User updated successfully");
          swal.fire(
            'Updated!',
            'User Details Updated.',
            'success'
          ).then(() => {
            this.router.navigate(['admin/user']);
          })
          this.ngOnInit();

        }, err => {

          swal.fire(
            'Not Updated!',
            'There was some error.',
            'error'
          )
          console.log("Error", err);

        })

      }
    })

    console.log("Submitted>>>>>>>>>", this.updatedUser);


  }

}
