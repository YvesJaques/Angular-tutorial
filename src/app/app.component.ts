import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = DUMMY_USERS
  selectedUserId = 'u1'

  get selectedUser() {
    console.log('Selected user with id ', this.selectedUserId)
    return this.users.find(user => user.id === this.selectedUserId)!
  }

  onSelectUser(id: string) {
    this.selectedUserId = id
  }
}
