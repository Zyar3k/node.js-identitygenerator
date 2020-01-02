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

const randChoice = arr => {
    return arr[Math.floor(Math.random()*arr.length)];
};

function PersonalData(gender, name, lastName, age, phoneNumber) {
    this.gender = gender;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.phoneNumber = phoneNumber;
};

const personalDataPush = (personalData, name, lastName, age, phoneNumber) => {
    people.push(new PersonalData(personalData, name, lastName, age, phoneNumber));
};

for (let i = 0; i < 20; i++) {
    const gender = randChoice(genders);
    const lastName = randChoice(lastNames);
    const age = Math.floor(Math.random()*(78-18+1)+18);
    const phoneNumber = Math.floor(Math.random()*(9999999-1000000)+1000000);

    let name;
    if (gender === 'male') {
        name = randChoice(maleNames);
    } else {
        name = randChoice(femaleNames);
    }
    
    personalDataPush(gender, name, lastName, age, phoneNumber)
};

const jsonPersonalData = JSON.stringify(people);

fs.writeFile('people.json', jsonPersonalData, (err) => {
    if (err) throw err;
    console.log('File has been successfully generated! Check people.json');
  });