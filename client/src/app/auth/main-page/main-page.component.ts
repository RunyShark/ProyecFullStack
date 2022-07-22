import { Component } from '@angular/core';
import { Login, Register } from '../';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageModule {
  authLogin: Login = {
    email: '',
    password: '',
  };

  authRegister: Register = {
    email: '',
    name: '',
    password: '',
  };
}
