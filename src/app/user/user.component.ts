import { Component, EventEmitter, input, Input, Output, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

// type User = {
//   id: string
//   avatar: string
//   name: string
// }

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input({ required: true }) user!: User
  @Input({ required: true }) selected!: boolean

  @Output() select = new EventEmitter<string>()
  // select = output<string>()

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
