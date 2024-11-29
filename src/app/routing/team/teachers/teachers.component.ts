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
}
