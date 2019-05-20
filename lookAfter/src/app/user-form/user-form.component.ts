import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { User } from '../models/user.model'
import { UserFormService } from './user-form.service'
import { NgxSpinnerService } from 'ngx-spinner'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  registerForm: FormGroup
  submitted = false
  user: any = new User()
  constructor(
    private formBuilder: FormBuilder,
    private userFormService: UserFormService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    })
  }

  get formControls() {
    return this.registerForm.controls
  }

  onSubmit() {
    this.spinner.show()
    this.submitted = true

    if (this.registerForm.invalid) {
      this.spinner.hide()
      return
    }
    this.user.email = 'eve.holt@reqres'
    this.user = {
      email: this.user.email,
      password: this.user.password,
    }
    this.userFormService.create(this.user).subscribe(
      response => {
        console.log(response)
        this.spinner.hide()
      },
      error => {
        console.log(error)
        this.spinner.hide()
      }
    )
  }
}
