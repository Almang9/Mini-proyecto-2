import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor( private fireAuth: AngularFireAuth) { }
  //login base
  private baseLogin (authProvider: firebase.default.auth.AuthProvider): Promise<firebase.default.auth.UserCredential> {
    return this.fireAuth.signInWithPopup(authProvider);
  }
  //login de Google
  public googleLogin():Promise<void>{ 
      return this.baseLogin(new firebase.default.auth.GoogleAuthProvider()).then((response) =>{
        if (response) {
          localStorage.setItem("currentUser",JSON.stringify(response));
        }
      }).catch((ERR) =>{
          console.log(ERR);
      })
  }
  public emailSignUp(userData: {email: string, password:string, displayName: string}): Promise<void>
  { return new Promise((resolve,reject) => {
        this.fireAuth.createUserWithEmailAndPassword(userData.email,userData.password).then((response) => {
          if(response){
            response.user.updateProfile({displayName: userData.displayName,photoURL: ''}).then(() =>{
            localStorage.setItem('currentUser',JSON.stringify(response.user));
            }).catch((ERR) => {
              console.log(ERR);
              reject(ERR);
            })
            
            resolve(response as any);
          }
        }).catch((ERR) =>{
          console.log(ERR);
          reject(ERR);
        })
      })

      }

      public emailLogin(userData:{email: string, password: string}) : Promise<void>{
          return new Promise((resolve,reject) =>{
            this.fireAuth.signInWithEmailAndPassword(userData.email,userData.password).then((response) =>{
              if (response){
                localStorage.setItem('currentUser',JSON.stringify(response));
                resolve(response as any)
              }
            }).catch((ERR) =>{
              console.log(ERR);
              reject(ERR);
            })
          })
      }
  //método de logOut
  public logOut(): Promise<void>{
    return this.fireAuth.signOut().then((response) => {
      localStorage.removeItem('currentUser');

    }).catch((ERR) => {
      console.log(ERR);
    })
}
public esAuthenticado(): boolean{
  return localStorage.getItem('currentUser') != null;
}

public getCurrentUser(): Observable<firebase.default.User>{
  return this.fireAuth.authState;
}
}
