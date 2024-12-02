import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
export interface Teacher {
  id: number;
  name: string;
  age: number;
  major: string;
  image: string;
  description: string;
}

export interface Student {
  id: number;
  name: string;
  position: string;
  image: string;
  description: string;
}
@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor() {}

  teachers: Teacher[] = [
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

  students: Student[] = [
    {
      id: 1,
      name: 'Bonnie Green',
      position: 'CEO/Co-founder',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
      description:
        'Bonnie has over 20 years of experience in the tech industry and is passionate about innovation.',
    },
    {
      id: 2,
      name: 'Helene Engels',
      position: 'CTO/Co-founder',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png',
      description:
        'Helene is a tech visionary with a background in software engineering and AI.',
    },
    {
      id: 3,
      name: 'Jese Leos',
      position: 'SEO & Marketing',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
      description:
        'Jese specializes in digital marketing strategies and SEO optimization.',
    },
    {
      id: 4,
      name: 'Joseph Mcfall',
      position: 'Sales',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png',
      description:
        'Joseph has a strong background in sales and customer relationship management.',
    },
    {
      id: 5,
      name: 'Lana Byrd',
      position: 'Web Designer',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png',
      description:
        'Lana is a creative web designer with a keen eye for detail and user experience.',
    },
    {
      id: 6,
      name: 'Leslie Livingston',
      position: 'Graphic Designer',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png',
      description:
        'Leslie excels in graphic design and has a passion for creating visually stunning content.',
    },
    {
      id: 7,
      name: 'Michael Gough',
      position: 'React Developer',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',
      description:
        'Michael is a skilled React developer with a focus on building scalable web applications.',
    },
    {
      id: 8,
      name: 'Neil Sims',
      position: 'Vue.js Developer',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png',
      description:
        'Neil is an expert in Vue.js and has a passion for front-end development.',
    },
  ];

  getTeacherById(id: number): Observable<Teacher | undefined> {
    const teacher = this.teachers.find((teacher) => teacher.id === id);
    return of(teacher).pipe(delay(400));
  }

  getTeachers(): Observable<any[]> {
    return of(this.teachers).pipe(delay(0));
  }

  getStudentById(id: number): Observable<Student | undefined> {
    const student = this.students.find((student) => student.id === id);
    return of(student).pipe(delay(500));
  }

  getStudents(): Observable<Student[]> {
    return of(this.students).pipe(delay(0));
  }
}
