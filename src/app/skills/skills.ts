import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class skills {
  skills: string[] = [
    'Angular',
    'UI/UX Designer',
    'HTML',
    'CSS',
    'Firebase',
    'Graphics Design',
    'Apache Cordova',
    'Node.js (Learning)',
    'React (Learning)',

  ];
};