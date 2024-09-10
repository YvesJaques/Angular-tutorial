import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = DUMMY_USERS

  onSelectUser(id: string) {
    console.log('Selected user with id ', id)
  }
}
