import { Component, EventEmitter, input, Input, Output, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input({ required: true }) user!: {
    id: string
    avatar: string
    name: string
  }

  @Output() select = new EventEmitter<string>()
  // select = output<string>()

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
