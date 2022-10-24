import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/login';
import { AuthService } from 'src/app/services/auth.service';
import { MenuComponent } from 'src/app/shared/menu/menu.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  user: string = '';
  pass: string = '';

  loginData: Login = {user: '', pass: ''};

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {

    this.loginData.user = this.user
    this.loginData.pass = this.pass

    console.log(this.loginData);


    this.auth.login(this.loginData.user, this.loginData.pass).subscribe({
      next: (data) => {
        sessionStorage.setItem('IsAuth', data);
        console.log(data);
        
        this.router.navigate(['/Store']);
      }
    })

  }

}
