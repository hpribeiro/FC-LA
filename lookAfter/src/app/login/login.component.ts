import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { BsModalRef } from 'ngx-bootstrap/modal'
import { Router } from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner'
import { ToastrService } from 'ngx-toastr'
import { LoginService } from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  submitted = false
  loginData: any
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private bsModalRef: BsModalRef,
    private spinner: NgxSpinnerService,
    private toastrService: ToastrService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      mockError: [false, Validators.required],
    })
  }

  get formControls() {
    return this.loginForm.controls
  }

  login() {
    this.submitted = true
    if (this.loginForm.invalid) {
      return
    }

    this.loginData = { ...this.loginForm.value }
    const code = this.loginData.mockError ? 400 : 200
    this.loginService.login(this.loginData, code).subscribe(
      response => {
        this.spinner.hide()
        this.bsModalRef.hide()
        this.router.navigateByUrl('/dashboard')
      },
      error => {
        this.spinner.hide()
        this.toastrService.error('Please try again later', 'Something wrong 😞')
      }
    )
  }
}
