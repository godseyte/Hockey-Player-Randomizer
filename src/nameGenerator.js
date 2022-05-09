/*
Written by Tucker Godsey

Generates a First Name based on Sex.
*/

// Variables
let maleNames = [];
let femaleNames = [];
let otherNames = [];
let allNames = [];
let selectedName = "";

GenerateNameArrays();

function GenerateName(sex)
{
    if(sex === "male")
    {
        selectedName = maleNames[Math.round(Math.random() * (maleNames.length - 1))];
        return selectedName;
    }
    if (sex === "female")
    {
        selectedName = femaleNames[Math.round(Math.random() * (femaleNames.length - 1))];
        return selectedName;
    }
    if(sex === "other")
    {
        selectedName = otherNames[Math.round(Math.random() * (otherNames.length - 1))];
        return selectedName;
    }
    if(sex === "all"){
        selectedName = allNames[Math.round(Math.random() * (maleNames.length + femaleNames.length + otherNames.length - 1))];
        return selectedName;
    }
    //console.log(maleNames + femaleNames + otherNames)
    console.log(allNames)
}

function GenerateNameArrays()
{
    maleNames = ['Partrik', 'Jakub', 'Boone', 'Oliver', 'Zack', 'Emil', 'Yegor', 'Justin', 'Brendan', 'Sean', 'Carson', 'Gustav', 'Eric', 'Jack', 'Cole', 'Alexandre', 
    'Gavin', 'Jake', 'Adam', 'Gabriel', 'Vladislav', 'Dean', 'Andrew', 'J-F', 'Joonas', 'Elivs', 'Daniil', 'Brad', 'Cam', 'Kris', 'Kent', 'Bobert', 'Robert', 'John', 'Gerald',
    'Aidan', 'Aiden', 'Pierre', 'Alexander', 'Jason', 'Jeremy', 'Jeremiah', 'Bryce', 'Tucker', 'Gary', 'Will', 'William', 'Peter', 'Tony', 'Steve', 'Stephen'];

    femaleNames = ['Cynthia', 'Scarlet', 'Olivia', 'Emma', 'Ava', 'Charlotte', 'Sarah', 'Ana', 'Cindy', 'Carol', 'Hannah', 'Natasha', 'Nyatasha', 'Azuki', 'Yui', 'Asuna',
    'Kaguya', 'Lexy', 'Jaden', 'Mary', 'Sylvia', 'Samantha', 'Haley', 'Harley', 'Ivy', 'Mel', 'Angela', 'Yuna', 'Miko', 'Aloy'];
    
    otherNames = ['Alex', 'Nico', 'Lex', 'Baily', 'Dylan', 'Joe', 'Arlo', 'Zane', 'Atlas', 'Whitley', 'Kane', 'Adian', 'Ashton', 'Blaine', 'Blair', 'Cameron', 'Colby',
    'Dakota', 'Dawson', 'Emery', 'Hunter', 'Julian', 'Peyton', 'Quinn', 'Sidney', 'Dalton', 'Mevlin']

    /* for (let i = 0; i < maleNames.length; i += i) {
        allNames[i] = maleNames[i];
    }
    for (i = 0; i < femaleNames.length; i += i) {
        allNames[allNames.length + 1] = femaleNames[i];
    }
    for (i = 0; i < otherNames.length; i += i) {
        allNames[allNames.length + 1] = otherNames[i];
    } */
    
    allNames.push(...maleNames, ...femaleNames, ...otherNames);
}