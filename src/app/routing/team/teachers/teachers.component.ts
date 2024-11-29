import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
  standalone: true,
})
export class TeachersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  teachers = [
    {
      id: 1,
      name: 'Bonnie Green',
      position: 'CEO/Co-founder',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
    },
    {
      id: 2,
      name: 'Helene Engels',
      position: 'CTO/Co-founder',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png',
    },
    {
      id: 3,
      name: 'Jese Leos',
      position: 'SEO & Marketing',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
    },
    {
      id: 4,
      name: 'Joseph Mcfall',
      position: 'Sales',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png',
    },
    {
      id: 5,
      name: 'Lana Byrd',
      position: 'Web Designer',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png',
    },
    {
      id: 6,
      name: 'Leslie Livingston',
      position: 'Graphic Designer',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png',
    },
    {
      id: 7,
      name: 'Michael Gough',
      position: 'React Developer',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',
    },
    {
      id: 8,
      name: 'Neil Sims',
      position: 'Vue.js Developer',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png',
    },
  ];
}
