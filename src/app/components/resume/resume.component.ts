import {Component, OnInit} from '@angular/core';
import {ResumeService} from '../../services/resume.service';
import {Resume} from '../../models/resume.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  resumes: Resume;
  isLoading: boolean = true;

  constructor(private resumeService: ResumeService) {
  }

  ngOnInit(): void {
    this.load();
  }

  private load() {
    this.resumeService.getResume().subscribe(
      resume => {
        this.resumes = resume;
        this.isLoading = false;
      }
    );
  }

}
