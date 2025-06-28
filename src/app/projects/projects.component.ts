import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
projectList = [
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio using Angular and CSS.',
      image: 'portfolio-logo.png',
      link: 'https://github.com/Sanjai212002/portfolio_app'
    },
    {
      title: 'CRUD Application',
      description: 'This application users to perform four operations',
      image: 'crud_logo.png',
      link: 'https://github.com/Sanjai212002/crud-app.git'
    }
  ];
}
