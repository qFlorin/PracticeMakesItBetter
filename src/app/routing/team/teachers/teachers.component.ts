import { Component, OnInit, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
  standalone: true,
  imports: [RouterLink, TeacherDetailsComponent],
})
export class TeachersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  teachers = [
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
      name: 'Helene Engels',
      age: 32,
      major: 'CTO',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png',
      description:
        'Helene drives the technical strategy of the flowbite platform and brand.',
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
      name: 'Joseph Mcfall',
      age: 29,
      major: 'Marketing & Sale',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png',
      description:
        'Joseph drives the technical strategy of the flowbite platform and brand.',
    },
    {
      id: 5,
      name: 'William Harris',
      age: 35,
      major: 'Data Scientist',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
      description:
        'William drives the technical strategy of the flowbite platform and brand.',
    },
    {
      id: 6,
      name: 'Leslie Livingston',
      age: 27,
      major: 'UX Designer',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png',
      description:
        'Leslie drives the technical strategy of the flowbite platform and brand.',
    },
    {
      id: 7,
      name: 'James Smith',
      age: 31,
      major: 'Backend Developer',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',
      description:
        'James drives the technical strategy of the flowbite platform and brand.',
    },
    {
      id: 8,
      name: 'Neil Sims',
      age: 26,
      major: 'Project Manager',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png',
      description:
        'Neil drives the technical strategy of the flowbite platform and brand.',
    },
  ];

  openDialog(teacherId: number) {
    const dialog: HTMLDialogElement | null =
      document.querySelector('#teacherDialog');
    if (dialog) {
      dialog.showModal();
    }
  }
  closeDialog() {
    const dialog: HTMLDialogElement | null =
      document.querySelector('#teacherDialog');
    if (dialog) {
      dialog.close();
    }
  }
}
