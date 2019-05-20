import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { User } from '../models/user.model'
import { UserFormService } from './user-form.service'
import { NgxSpinnerService } from 'ngx-spinner'
import { ToastrService } from 'ngx-toastr'
import { BsModalRef } from 'ngx-bootstrap/modal'

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
    private spinner: NgxSpinnerService,
    private toastrService: ToastrService,
    public bsModalRef: BsModalRef
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      mockError: [false, Validators.required],
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
    this.user = { ...this.registerForm.value }
    const code = this.user.mockError ? 400 : 200
    this.userFormService.register(this.user, code).subscribe(
      response => {
        this.spinner.hide()
        this.bsModalRef.hide()
        this.toastrService.success(
          'You are ready to login and enjoy!!😄',
          'Registered with success'
        )
        this.user.createAt = new Date()
        localStorage.setItem('user', JSON.stringify(this.user))
      },
      error => {
        this.spinner.hide()
        this.toastrService.error('Please try again later', 'Something wrong 😞')
      }
    )
  }
}
