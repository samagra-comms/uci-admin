import {Component, OnInit} from '@angular/core';
import {LoginService} from '../shared/http-services/login.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StorageService} from '../shared/services/storage.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;


  constructor(private loginService: LoginService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      loginId: ['', [Validators.required]],
      password: ['', Validators.required],
      applicationId: [environment.nlApplicationId],
    });
    this.checkLogin();
  }

  checkLogin(): void {
    if (StorageService.getItem('accessToken') && StorageService.getItem('self')) {
      this.router.navigate(['/uci-admin']);
    }
  }

  onSubmit() {
    const reqData = {
      ...this.loginForm.value
    };

    this.loginService.authenticate(reqData)
      .subscribe(data => {
          if (data.data && data.data.user) {
            StorageService.setItem('accessToken', data.data.user.token);
            StorageService.setItem('self', data.data.user.user);
            this.router.navigate(['/uci-admin']);
          }
        },
        error => {
        });
  }

}
