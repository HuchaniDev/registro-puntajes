import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  password:string='';
  loginError:boolean=false;

  constructor(private authService:AuthService, private router:Router){

  }

  login():void{
    this.authService.login(this.password).subscribe(
      success=>{
        if(success){
          this.loginError=false;
          console.log({'login succes':this.loginError});
          this.redirectToList()

        }else{
          this.loginError=true;
          console.log({'login error':this.loginError});
          this.router.navigate(['']);
        }
      }
    )
  }

  redirectToList() {
    this.router.navigate(['/participantes']);
  }

}
