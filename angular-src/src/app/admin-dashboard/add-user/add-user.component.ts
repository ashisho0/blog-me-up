import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from '../services/user.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  newUser;

  constructor(public userService: UserService, public router: Router) {
    this.newUser = new User({})
  }

  ngOnInit() {
  }



  add() {
      this.userService.addUser(this.newUser).subscribe((data: any) => {
        console.log('Added Successfully');
        swal.fire(
          'User Added',
          'Success'
        ).then(() => {
          this.router.navigate(['admin/user']);
        })
      }),

        ((err) => {
          console.log('Staff Adding Failed')
          swal.fire(
            'User Adding Fail'
          )
        }
        )
    console.log('submitted-->', this.newUser)

  }



}
