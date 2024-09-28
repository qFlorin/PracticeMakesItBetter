import { Component, inject } from '@angular/core';
import { Course } from '../Models/course';
import { CurrencyPipe, NgFor } from '@angular/common';
import { CourseService } from '../Services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  standalone: true,
  imports: [CurrencyPipe, NgFor],
})
export class CoursesComponent {
  coursesService = inject(CourseService);
  AllCourses: Course[] = this.coursesService.courses;
}
