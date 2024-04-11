import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { ParticipantesService } from 'src/app/services/participantes.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'list-participantes',
  templateUrl: './list-participantes.component.html'
})
export class ListParticipantesComponent implements OnInit{

  participantes$:Observable<any[]>;

  users:any[]=[];

  admin:boolean=false;



  constructor(
    private participanteService:ParticipantesService, 
    private userService:UsersService,
    private auth:AuthService){
    this.participantes$=this.participanteService.participantes;
    this.isAdmin();
    
  }

  ngOnInit(): void {
    this.userService.users.subscribe(
      (users:any[])=>  {
        this.users = users;
      },(error)=>{
        console.log("error aobtener la lista")
      }
    )
  }


  isAdmin(){
    if(this.auth.logged=='800000001'){
      this.admin=true;

    }
  }

  userLogged(){
    // this.userLogged= this.userService.users.subscribe(
    //   (user:any[])=>{
    //     if(user.userCode)
    //   }
    // )
  }
}


