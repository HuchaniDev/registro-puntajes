import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
})
export class RegistroComponent {

  users:User[]=[
    {"userCode": 800000001,	"userName": "Administrador","puntos":0},
    {"userCode": 650004907,	"userName": "ARGANDOÑA CAMARGO Andy","puntos":0},
    {"userCode": 650004656,	"userName": "CAZON ALARCON Ever","puntos":0},
    {"userCode": 650005506,	"userName": "ADUVIRI MAMANI Lizeth","puntos":0},
    {"userCode": 650005498,	"userName": "ARENAS ALARCON Kelly Esther","puntos":0},
    {"userCode": 650005349,	"userName": "CALDERON CASTRO Jose Luis","puntos":0},
    {"userCode": 650005427,	"userName": "CALLES LLUSCO Josias Fabian","puntos":0},
    {"userCode": 650005303,	"userName": "CHOQUE BERNAL Mauricio","puntos":0},
    {"userCode": 650005522,	"userName": "CONDORI JULIAN Cristhian","puntos":0},
    {"userCode": 650005488,	"userName": "GUERRERO QUISBERT Pablo Sebastian","puntos":0},
    {"userCode": 650005513,	"userName": "GUTIERREZ CHOQUE Yerson","puntos":0},
    {"userCode": 650005508,	"userName": "HUCHANI HUARANCA Daniel","puntos":0},
    {"userCode": 650005524,	"userName": "IGNACIO OLMOS Alejandro","puntos":0},
    {"userCode": 650005481,	"userName": "LEDEZMA SALVATIERRA Cristhian","puntos":0},
    {"userCode": 650005477,	"userName": "LLUTA CHOQUE Valentin","puntos":0},
    {"userCode": 650005507,	"userName": "LUNA ESCOBAR Luis Enrique","puntos":0},
    {"userCode": 650005501,	"userName": "MARTINEZ ALEJANDRO Cristian Donato","puntos":0},
    {"userCode": 650005301,	"userName": "MENA LAZARTE Salomon Alfredo","puntos":0},
    {"userCode": 650005391,	"userName": "MIRANDA YUCRA Facundo","puntos":0},
    {"userCode": 650005480,	"userName": "NINA MAMANI Cristian Nahuel","puntos":0},
    {"userCode": 650005585,	"userName": "PINTO AGUILAR Luis Kevin","puntos":0},
    {"userCode": 650005496,	"userName": "SANDY FLORES Juan Carlos","puntos":0},
    {"userCode": 650005476,	"userName": "SIÑANI POCOATA Yhon Elvis","puntos":0},
    {"userCode": 650005368,	"userName": "TERCEROS PRADO German Josue","puntos":0},
    {"userCode": 650005344,	"userName": "TORREZ OPORTO Luis Marcelo","puntos":0},
    {"userCode": 650005491,	"userName": "VILLCA MOLLISACA Nestor","puntos":0},
    {"userCode": 650005375,	"userName": "VILLCA NINA Miguel Angel","puntos":0},
    {"userCode": 650005510,	"userName": "ZAPATA CALIZAYA Edil","puntos":0}
];

  constructor(private userService:UsersService){
  }

  registrar(){

    this.users.forEach(function (element:User,index) {
      console.log("------------",index,"-------------");
      console.log("code:",element.userCode);
      console.log("name:",element.userName);

      
    }); 

  this.users.forEach(user => {
      this.userService.addUser(user);
    });
  }

}

