import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable,} from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/interfaces/user.interface';
import { PreguntasService } from 'src/app/services/preguntas.service';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'list-participantes',
  templateUrl: './list-participantes.component.html'
})
export class ListParticipantesComponent implements OnInit {

  participantes$:Observable<User[]>;
  users:User[]=[];
  userlogged!:User;
  admin:boolean=false;
  fecha!:string;

  preguntaron:User[]=[{userName:'', puntos: 0, userCode:0},];

  participante?:User ; 

  participantes:User[]=[];
 


  constructor(
                private userService:UsersService,
                private auth:AuthService,
                private preguntaService:PreguntasService,
                private elementRef:ElementRef,){

    this.fecha=this.Fecha
    this.participantes$=this.userService.users;
    
    
  }

  ngOnInit(): void {
    this.isAdmin();
    console.log('refresh');
    this.getUsers();
    this.getParticipantes();
    console.log(this.users)
    
  }

  getUsers(){
    this.userService.users.subscribe(users=>{
      users.forEach((user:User)=>{
        this.users.push(user)
      });
    })
  }

  getParticipantes(){
    this.preguntaService.preguntas.subscribe(users=>{
      users.forEach((user:User)=>{
        this.participantes.push(user);
      })
    })
  }

  list(){
    this.userService;
  }

  isAdmin(){
    if(this.auth.userLogin=='800000001'){
      this.admin=true;
    }
  }

  userLogged():string{
    let name = '';
    this.users.forEach(user=>{
      if(user.userCode.toString()===this.auth.userLogin){
          name = user.userName;
          this.userlogged=user
      }
    })
    
    return name; 
  
  }

  logout():void{
    this.auth.logout();
  }

  // puntos
  preguntar(){
    this.preguntaService.preguntar(this.userlogged);
  }


  respPregunta(){
    this.participante = this.participantes.pop();
    let flag=false;
    if(this.participante){
      console.log('hay participante',this.participantes);
      
      this.preguntaron.forEach(user=>{
        if(user.userCode==this.participante?.userCode){
          console.log('ya pregunto');
          flag=true
        }
      });

      if(!flag) {
        this.preguntaron.push(this.participante!);
        
      }
        this.openPopup(1);
    }
    else{
      this.openPopup(2)
    }
    //
    console.log({'actualizado':this.preguntaron});
    
  }


  openPopup(opc:number) {
    const popup = this.elementRef.nativeElement.querySelector('#popup');
    const alertVacio = this.elementRef.nativeElement.querySelector('#listaVacia');

    switch(opc){
      case 0: popup.classList.add('hidden');
              break;
      case 1: popup.classList.remove('hidden');
              break;
      case 2: alertVacio.classList.remove('hidden');
              break;
      case 3: alertVacio.classList.add('hidden');
              break;
      default:
              break;
    }
    
    // if(opc==1){
    //   popup.classList.remove('hidden');
    // }
    // else if(opc==0){
    //   popup.classList.add('hidden')
    // }
    // else if(opc==2){
    //   alertVacio.classList.remove('hidden');
    // }
    // else if(opc==3){
    //   alertVacio.classList.add('hidden');
    // }
  }
  
  rechazar(){
    this.preguntaService.delete(Number(this.participante?.userCode))
    this.openPopup(0);
  }

  aceptar(){ 
    this.preguntaService.delete(Number(this.participante?.userCode))
    let puntos = Number(this.participante?.puntos)
    
    this.openPopup(0);
    this.sumarPuntos(puntos,true);

  }

  sumarPuntos(puntos:number, flag:boolean){
    if (this.fecha!=this.Fecha){
        this.fecha=this.Fecha
        console.log('son igual');
        this.userService.updatePuntos(Number(this.participante?.userCode),(puntos+1));
    
    }
  }

  get Fecha():string{
    let date = new Date();
    let day=date.getDate().toString().padStart(2, '0');
    let month= (date.getMonth()  + 1).toString().padStart(2, '0');;
    let year = date.getFullYear();
    return `${day}/${month}/${year}`
  }
}
