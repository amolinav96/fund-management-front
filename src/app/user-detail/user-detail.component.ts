import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { TableTransactionComponent } from '../table-transaction/table-transaction.component';
import { TableSubscriptionComponent } from "../table-subscription/table-subscription.component";

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [TableTransactionComponent, TableSubscriptionComponent],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {

  userServiceImpl: UserService;
  userModel: User;

  constructor(userService: UserService) {
    this.userServiceImpl = userService;
    this.getUserDetail();
  }

  getUserDetail() {
    this.userServiceImpl.getById().subscribe(
      (data: User) => {
        this.userModel = data;
        console.log('response user service: ' + this.userModel.fullName)
      });
  }

}
