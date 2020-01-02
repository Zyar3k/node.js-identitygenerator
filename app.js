const fs = require('fs');

const genders = [
    'male',
    'female',
];

const maleNames = [
    'Rohan',
    'Kenyon',
    'Jeffery',
    'Bernard',
    'Humberto',
    'Tate',
    'Dexter',
    'Luke',
    'Julien',
    'Aarav',
    'Luca',
    'Malcolm',
    'Niko',
    'Braylen',
    'Orion',
    'Aydan',
    'Scott',
    'Shaun',
    'Lennon',
    'Darryl',
]; 
const femaleNames = [
    'Elsie',
    'Justine',
    'Liana',
    'Saniyah',
    'Simone',
    'Larissa',
    'Regina',
    'Rory',
    'Krista',
    'Jolie',
    'Athena',
    'Destiney',
    'Gina',
    'Crystal',
    'Lilia',
    'Arielle',
    'Julianna',
    'Mallory',
    'Miriam',
    'Jamie',
];

const lastNames = [
    'Santiago',
    'Cross',
    'Powell',
    'Phillips',
    'Blankenship',
    'Lynch',
    'Arias',
    'Duarte',
    'Fox',
    'Mcdonald',
    'Clay',
    'Shelton',
    'Dudley',
    'Wise',
    'Perez',
    'Harrington',
    'Velasquez',
    'Kaiser',
    'Stuart',
    'Howard',
];

people = [];


fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });