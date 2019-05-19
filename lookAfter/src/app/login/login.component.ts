import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { BsModalRef } from 'ngx-bootstrap/modal'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  isSubmitted = false
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public bsModalRef: BsModalRef
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    })
  }

  get formControls() {
    return this.loginForm.controls
  }

  login() {
    console.log(this.loginForm.value)
    this.isSubmitted = true
    if (this.loginForm.invalid) {
      return
    }
    this.bsModalRef.hide()
    this.router.navigateByUrl('/dashboard')
  }
}
