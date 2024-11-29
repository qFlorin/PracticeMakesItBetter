import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  standalone: true,
})
export class StudentsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  students = [
    {
      id: 1,
      name: 'Bonnie Green',
      age: 30,
      major: 'CEO & Web Developer',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
      description:
        'Bonnie drives the technical strategy of the flowbite platform and brand.',
    },
    {
      id: 2,
      name: 'Jese Leos',
      age: 32,
      major: 'CTO',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
      description:
        'Jese drives the technical strategy of the flowbite platform and brand.',
    },
    {
      id: 3,
      name: 'Michael Gough',
      age: 28,
      major: 'Senior Front-end Developer',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',
      description:
        'Michael drives the technical strategy of the flowbite platform and brand.',
    },
    {
      id: 4,
      name: 'Lana Byrd',
      age: 29,
      major: 'Marketing & Sale',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png',
      description:
        'Lana drives the technical strategy of the flowbite platform and brand.',
    },
  ];
}
