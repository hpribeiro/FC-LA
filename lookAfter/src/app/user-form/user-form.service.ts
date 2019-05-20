import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user.model'

@Injectable({
  providedIn: 'root',
})
export class UserFormService {
  constructor(private http: HttpClient) {}
  url = 'https://reqres.in/api/register'

  create(user: User) {
    return this.http.post(this.url, user)
  }
}
