import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
export class User {
  name: any;
  email: any;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  UserProfile!: User;
  constructor(public authService: AuthService) {
    this.authService.profileUser().subscribe((data: any) => {
      this.UserProfile = data;
    });
  }
  ngOnInit(): void {
  }

}
