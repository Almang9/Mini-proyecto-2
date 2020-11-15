import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup = null;
  constructor( private authenticator: AuthServiceService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }
createForm(){
  this.loginForm = this.fb.group({
    email: '',
    password: ''})

}
googleLogin():void{
  this.authenticator.googleLogin().then(() => {
    if (this.authenticator.esAuthenticado()){
      this.router.navigate(['']);
    }
  }).catch((ERR) =>{
    console.log(ERR)
  })
}
onSubmit(){
  const userData = {
    email: this.loginForm.get('email').value,
    password: this.loginForm.get('password').value
  }
  this.authenticator.emailLogin(userData).then(() =>{
  this.router.navigate(['']);

  }).catch((ERR) =>{
    console.log(ERR);
  })
}
}
