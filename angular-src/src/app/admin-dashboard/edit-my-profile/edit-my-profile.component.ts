import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
import { UserService } from '../services/user.service';
import swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-edit-my-profile',
  templateUrl: './edit-my-profile.component.html',
  styleUrls: ['./edit-my-profile.component.scss']
})
export class EditMyProfileComponent implements OnInit {
  editedProfile;
  imgUrl;
  userID;
  uploadArray = []

  constructor(
    private userService: UserService,
    private router: Router,
    public activeRouter: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {
    this.editedProfile = new User({});
    this.userID = this.activeRouter.snapshot.params['id'];

    this.imgUrl = environment.ImgUrl
  }

  ngOnInit() {
    this.spinner.show()
    this.userService.getUserById(this.userID).subscribe(((data: any) => {
      this.spinner.hide()
      console.log('edit user data---->>', data)
      this.editedProfile = data;

    }), (err) => {
      console.log("error-->", err)
    })
  }

  update() {
    this.userService.uploadUser(this.editedProfile, this.uploadArray, 'PUT')
      .subscribe((data: any) => {
        console.log('Profile Updated Successfully');
        swal.fire(
          'Profile Updated',
          'Success'
        ).then(() => {
          this.router.navigate(['admin']);
        })
      }),

      ((err) => {
        console.log('Profile Editing Failed')
        swal.fire(
          'Profile Editing Failed'
        )
      }
      )
    console.log('submitted-->', this.editedProfile)

  }
  fileChanged(ev) {

    this.uploadArray = ev.target.files;

  }

}
