import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  title: string;
  image?: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      status: 'Active',
      title: 'Manager',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'User',
      status: 'Inactive',
      title: 'Developer',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: '3',
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      role: 'User',
      status: 'Active',
      title: 'Designer',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
      id: '4',
      name: 'Bob Brown',
      email: 'bob.brown@example.com',
      role: 'Admin',
      status: 'Active',
      title: 'CTO',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
      id: '5',
      name: 'Charlie Davis',
      email: 'charlie.davis@example.com',
      role: 'User',
      status: 'Inactive',
      title: 'Intern',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      id: '6',
      name: 'Diana Evans',
      email: 'diana.evans@example.com',
      role: 'User',
      status: 'Active',
      title: 'HR',
      image: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      id: '7',
      name: 'Ethan Foster',
      email: 'ethan.foster@example.com',
      role: 'Admin',
      status: 'Active',
      title: 'CEO',
      image: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      id: '8',
      name: 'Fiona Green',
      email: 'fiona.green@example.com',
      role: 'User',
      status: 'Inactive',
      title: 'Marketing',
      image: 'https://randomuser.me/api/portraits/women/8.jpg',
    },
    {
      id: '9',
      name: 'George Harris',
      email: 'george.harris@example.com',
      role: 'User',
      status: 'Active',
      title: 'Sales',
      image: 'https://randomuser.me/api/portraits/men/9.jpg',
    },
    {
      id: '10',
      name: 'Hannah White',
      email: 'hannah.white@example.com',
      role: 'User',
      status: 'Inactive',
      title: 'Support',
      image: 'https://randomuser.me/api/portraits/women/10.jpg',
    },
  ];
  getUsers(): Observable<User[]> {
    return of(this.users).pipe(delay(200));
  }

  addUser(user: User): Observable<User> {
    this.users.push(user);
    return of(user).pipe(delay(2000));
  }

  editUser(
    id: string,
    updatedUser: Partial<User>
  ): Observable<User | undefined> {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
      return of(this.users[userIndex]).pipe(delay(2000));
    }
    return of(undefined).pipe(delay(2000));
  }

  deleteUser(id: string): Observable<boolean> {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
      return of(true).pipe(delay(2000));
    }
    return of(false).pipe(delay(2000));
  }
}
