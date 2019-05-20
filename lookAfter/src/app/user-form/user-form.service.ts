import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user.model'

@Injectable({
  providedIn: 'root',
})
export class UserFormService {
  constructor(private http: HttpClient) {}
  url = 'https://httpbin.org/status'

  register(user: User, code = 200) {
    return this.http.post(`${this.url}/${code}`, user)
  }
}
