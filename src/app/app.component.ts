import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit{
  title = 'UserApp';
  users: any[] = [];
  sortByKey: string = '';
     
  constructor(private userService: UserService){}
    
  ngOnInit(){
      this.userService.getData().subscribe({next: (data: any) => this.users=data['users']});
  }

  sortBy(key: string) {
    this.sortByKey = key;
    this.users.sort((a, b) => a[key].localeCompare(b[key]));
  }

  deleteUser(user: any) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}
