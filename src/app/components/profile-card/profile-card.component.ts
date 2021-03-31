import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../services/profile.service';
import {Profile} from '../../models/profile.model';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  profile: Profile = new Profile();
  isLoading: boolean = true;

  constructor(private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.load();
  }

  private load() {
    this.profileService.getProfile().subscribe(
      profile => {
        this.profile = profile;
        this.isLoading = false;
      }
    );
  }

  navigate(url: string) {
    location.assign(url);
  }

}
