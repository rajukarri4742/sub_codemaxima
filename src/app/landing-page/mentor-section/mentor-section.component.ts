import { Component, OnInit } from '@angular/core';
import { MentorSectionsData } from './mentor-section-data';

@Component({
  selector: 'app-mentor-section',
  templateUrl: './mentor-section.component.html',
  styleUrls: ['./mentor-section.component.scss']
})
export class MentorSectionComponent implements OnInit {
  mentorSectionsData:MentorSectionsData;
  constructor(private data:MentorSectionsData) {
    this.mentorSectionsData = data;
   }

  ngOnInit(): void {
  }

}
