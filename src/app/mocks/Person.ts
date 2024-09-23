// src/app/person-data.ts

export interface Address {
  city: string;
  state: string;
  zip: string;
}

export interface Person {
  id: number;
  name: string;
  job: string;
  salary: number;
  address: Address;
}

export const persons: Person[] = [
  {
    id: 1,
    name: 'John Doe',
    job: 'Software Engineer',
    salary: 70000,
    address: {
      city: 'New York',
      state: 'NY',
      zip: '10001',
    },
  },
  {
    id: 2,
    name: 'Jane Smith',
    job: 'Product Manager',
    salary: 80000,
    address: {
      city: 'San Francisco',
      state: 'CA',
      zip: '94101',
    },
  },
  {
    id: 3,
    name: 'Alice Johnson',
    job: 'UX Designer',
    salary: 65000,
    address: {
      city: 'Austin',
      state: 'TX',
      zip: '73301',
    },
  },
  {
    id: 4,
    name: 'Bob Brown',
    job: 'Data Scientist',
    salary: 90000,
    address: {
      city: 'Seattle',
      state: 'WA',
      zip: '98101',
    },
  },
  {
    id: 5,
    name: 'Charlie Davis',
    job: 'DevOps Engineer',
    salary: 75000,
    address: {
      city: 'Denver',
      state: 'CO',
      zip: '80201',
    },
  },
  {
    id: 6,
    name: 'Diana Evans',
    job: 'Marketing Specialist',
    salary: 60000,
    address: {
      city: 'Chicago',
      state: 'IL',
      zip: '60601',
    },
  },
  {
    id: 7,
    name: 'Ethan Foster',
    job: 'Sales Manager',
    salary: 85000,
    address: {
      city: 'Miami',
      state: 'FL',
      zip: '33101',
    },
  },
  {
    id: 8,
    name: 'Fiona Green',
    job: 'HR Manager',
    salary: 70000,
    address: {
      city: 'Boston',
      state: 'MA',
      zip: '02101',
    },
  },
  {
    id: 9,
    name: 'George Harris',
    job: 'Business Analyst',
    salary: 72000,
    address: {
      city: 'Atlanta',
      state: 'GA',
      zip: '30301',
    },
  },
  {
    id: 10,
    name: 'Hannah White',
    job: 'Project Manager',
    salary: 78000,
    address: {
      city: 'Los Angeles',
      state: 'CA',
      zip: '90001',
    },
  },
];
