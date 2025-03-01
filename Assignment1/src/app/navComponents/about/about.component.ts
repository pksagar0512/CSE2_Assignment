import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  public teamMembers = [
    {
      name: 'Jane Doe',
      position: 'CEO & Founder',
      bio: 'Jane has over 15 years of experience in the industry and founded the company in 2015.',
      image: 'assets/images/jane-doe.jpg'
    },
    {
      name: 'John Smith',
      position: 'CTO',
      bio: 'John leads our technical team with expertise in cloud architecture and software development.',
      image: 'assets/images/john-smith.jpg'
    },
    {
      name: 'Sarah Johnson',
      position: 'Design Lead',
      bio: 'Sarah brings creative vision to all our projects with her background in UX/UI design.',
      image: 'assets/images/sarah-johnson.jpg'
    }
  ];

  public companyHistory = [
    { year: 2015, milestone: 'Company founded' },
    { year: 2017, milestone: 'Launched our first major product' },
    { year: 2019, milestone: 'Expanded to international markets' },
    { year: 2021, milestone: 'Reached 1 million customers' },
    { year: 2023, milestone: 'Opened new headquarters' }
  ];

  public missionStatement = 'Our mission is to create innovative solutions that empower businesses and individuals to achieve their full potential.';
  
  public visionStatement = 'We envision a future where technology seamlessly integrates with everyday life, making complex tasks simple and accessible to everyone.';
}
