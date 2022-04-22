/*
Written by Tucker Godsey

Generates a First Name based on Sex.
*/

// Variables
let maleNames = [];
let femaleNames = [];
let otherNames = [];
let allNames = [];

function GenerateName(sex)
{
    GenerateNameArrays();
    console.log(maleNames + femaleNames + otherNames)
    console.log(allNames)
}

function GenerateNameArrays()
{
    maleNames = ['Partrik', 'Jakub', 'Boone', 'Oliver', 'Zack', 'Emil', 'Yegor', 'Justin', 'Brendan', 'Sean', 'Carson', 'Gustav', 'Eric', 'Jack', 'Cole', 'Alexandre', 
    'Gavin', 'Jake', 'Adam', 'Gabriel', 'Vladislav', 'Dean', 'Andrew', 'J-F', 'Joonas', 'Elivs', 'Daniil', 'Brad', 'Cam', 'Kris', 'Kent', 'Bobert', 'Robert', 'John', 'Gerald',
    'Aidan', 'Aiden'];

    femaleNames = ['Cynthia', 'Scarlet', 'Olivia', 'Emma', 'Ava', 'Charlotte', 'Sarah', 'Ana', 'Cindy', 'Carol', 'Hannah', 'Natasha', 'Nyatasha', 'Azuki', 'Yui', 'Asuna',
    'Kaguya', 'Lexy', 'Jaden', 'Mary'];
    
    otherNames = ['Alex', 'Nico', 'Lex', 'Baily', 'Dylan', 'Joe', 'Arlo', 'Zane', 'Atlas', 'Whitley', 'Kane', 'Adian', 'Ashton', 'Blaine', 'Blair', 'Cameron', 'Colby',
    'Dakota', 'Dawson', 'Emery', 'Hunter', 'Julian', 'Peyton', 'Quinn', 'Sidney', 'Dalton', 'Mevlin']

    for(let i = 0; i < maleNames.length; i += i)
    {
        allNames[i] = maleNames[i];
    }
    for(let i = 0; i < femaleNames.length; i += i)
    {
        allNames[i] = femaleNames[i];
    }
    for(let i = 0; i < otherNames.length; i += i)
    {
        allNames[i] = otherNames[i];
    }
}