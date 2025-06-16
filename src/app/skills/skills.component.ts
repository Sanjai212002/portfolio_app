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
    'NgRx',
    'REST APIs',
    'Responsive Design',
    'Git & GitHub',
    'Json',
    'Angular Material',
    'Bootstrap'
  ];

}
