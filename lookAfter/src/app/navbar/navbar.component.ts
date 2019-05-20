import { Component, OnInit } from '@angular/core'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { LoginComponent } from '../login/login.component'
import { UserFormComponent } from '../user-form/user-form.component'
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isCollapsed = true
  bsModalRef: BsModalRef
  config = {
    animated: true,
  }
  isLogged = false
  constructor(private modalService: BsModalService, private router: Router) {
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects
        this.isLogged = url === '/home' ? false : true
      }
    })
  }

  ngOnInit() {}

  openLoginModal() {
    this.bsModalRef = this.modalService.show(LoginComponent, this.config)
  }

  openUserFormModal() {
    this.bsModalRef = this.modalService.show(UserFormComponent, this.config)
  }

  scroll(id: string) {
    document
      .getElementById(id)
      .scrollIntoView({ block: 'end', behavior: 'smooth' })
  }

  logout() {
    this.router.navigateByUrl('/home')
  }
}
