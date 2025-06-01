import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [
    'Angular',
    'TypeScript',
    'RxJS',
    'HTML & CSS',
    'JavaScript',
    'NgRx / State Management',
    'REST APIs',
    'Responsive Design',
    'Git & GitHub',
    'Unit Testing (Jasmine/Karma)',
    'Angular Material',
    'Agile / Scrum'
  ];

}
