import {Component, OnInit} from '@angular/core';
import {SkillsService} from '../../services/skills.service';
import {Skill} from '../../models/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill;
  isLoading: boolean = true;

  constructor(private skillService: SkillsService) {
  }

  ngOnInit(): void {
    this.load();
  }

  private load() {
    this.skillService.getSkills().subscribe(
      skills => {
        this.skills = skills;
        this.isLoading = false;
      }
    );
  }

}
