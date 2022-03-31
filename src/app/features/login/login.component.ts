import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginFrom!: FormGroup;

  constructor(private fromBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginFrom = this.fromBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    this.http.get<any>('http://localhost:3000/users?username=' + this.loginFrom.value.username).subscribe(response => {
      const user = response.find((a: any) => {
        return a.username === this.loginFrom.value.username && a.password === this.loginFrom.value.password;
      });
      if (user){
        this.loginFrom.reset();
        this.router.navigate(['homepage']);
      }else{
        alert('User not found!');
      }
    }, error => {
      alert('Something went wrong!');
    });
  }
}
