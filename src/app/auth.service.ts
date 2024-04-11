import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UsersService } from './services/users.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  private loggedIn = new BehaviorSubject<boolean>(false);
  private user!:any[];

  private userLogin:string='';

  constructor(private userservice:UsersService)  {
    this.userservice.users.subscribe((users:any[])=>{
      this.user = users;
    },(error)=>{
      console.log("error de get datos");
    }
    );
  }

  ngOnInit() {
  }

  login(password: string): Observable<boolean>{

    for(let i of this.user){
      console.log(i.userName,"->",(i.userCode));
      if (password ===(i.userCode).toString()){
        this.loggedIn.next(true);
        console.log("encontrado:",i.userCode);
        this.userLogin=password;
        return of(true).pipe(delay(1000));
      }
    }
    return of(false).pipe(delay(1000)); // Simula una respuesta asincrónica
    

  // if (password === "222") {
  //     this.loggedIn.next(true);
  //     return of(true).pipe(delay(1000)); // Simula una respuesta asincrónica
  //   } else {
  //     return of(false).pipe(delay(1000)); // Simula una respuesta asincrónica
  //   }
  }

  logout(): void {
    // Simula un cierre de sesión
    this.loggedIn.next(false);
  }

  isLoggedIn(): boolean {

    return this.loggedIn.value;
  }

  get logged():string{
    return this.userLogin;
  }

}