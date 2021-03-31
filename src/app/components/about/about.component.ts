import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../services/profile.service';
import {Profile} from '../../models/profile.model';

@Component({
  selector: 'app-home',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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

}
