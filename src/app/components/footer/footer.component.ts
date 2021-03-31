import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer: string = 'Copyright © 2021 | Emil Michaiel';

  constructor() {
  }

  ngOnInit(): void {
  }

}
