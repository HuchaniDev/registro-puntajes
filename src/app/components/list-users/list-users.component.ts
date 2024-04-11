import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'list-users',
  templateUrl: './list-users.component.html'
})
export class ListUsersComponent {

  items$:Observable<any[]>;
  
  constructor(private userService:UsersService){
    this.items$ = userService.users;
  }

}
