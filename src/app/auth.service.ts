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
  public userLogin:string='';
  

  private user:any[]=[];

  constructor(private userservice:UsersService)  {
    this.getusers()

    const loggedInStatus = localStorage.getItem('loggedIn');
    const userLog =localStorage.getItem('userCode');
    if(loggedInStatus){
      this.loggedIn.next(JSON.parse(loggedInStatus));
      this.userLogin= String(userLog);
    }


  }

  ngOnInit() {
  }

  getusers(){
    this.userservice.users.subscribe((users:any[])=>{
      this.user = users;
    },(error)=>{
      console.log("error de get datos");
    }
    );
  }

  login(password: string): Observable<boolean>{

    for(let i of this.user){
      console.log(i.userName,"->",(i.userCode));
      if (password ===(i.userCode).toString()){
        this.loggedIn.next(true);
        console.log("encontrado:",i.userCode);
        this.userLogin=password;
        this.saveLoggedInStatus(true, password)
        console.log('usuario logged: ',this.userLogin)
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

  saveLoggedInStatus(status:boolean, user:string){
    localStorage.setItem('loggedIn',JSON.stringify(status));
    this.loggedIn.next(status);

    localStorage.setItem('userCode',user);
  }

  getLoggedInStatus():BehaviorSubject<boolean>{
    return this.loggedIn;
  }


  logout(): void {
    // Simula un cierre de sesión
    this.loggedIn.next(false);
    this.saveLoggedInStatus(false,'');
  }

  isLoggedIn(): boolean {
    return this.loggedIn.value;
  }

  

}