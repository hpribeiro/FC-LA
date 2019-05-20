import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  url = 'https://httpbin.org/status'

  login(user: any, code = 200) {
    return this.http.post(`${this.url}/${code}`, user)
  }
}
