/*
Written by Tucker Godsey

Generates a Hockey Player using randomized variables.
*/

// Variables for Player
let firstName = "";
let lastName = "";
let jerseyNumber = 0;
let height = 0; // In inches
let weight = 0; // In pounds
let sex = "";
let city = "";
let teamName = "";
let position = "";
let handed = "";

// Arrays
let firstNames = ['Partrik', 'Jakub', 'Boone', 'Oliver', 'Zack'];
let lastNames = ['Laine', 'Voracek', 'Jenner', 'Bjorkstrand', 'Werenski'];

// Get Documents to print stats to
const docFirstName = document.getElementById("firstName");
const docLastName = document.getElementById("lastName");
const docJerseyNumber = document.getElementById("jerseyNumber");
const docHeight = document.getElementById("height");
const docWeight = document.getElementById("weight");
const docSex = document.getElementById("sex");
const docCity = document.getElementById("city");
const docTeamName = document.getElementById("teamName");
const docPosition = document.getElementById("position");
const docHanded = document.getElementById("handed");

// TEMP: Generate list of names
GenerateNames();

// TEMP: Generate a Player
GeneratePlayer();

// Generate a Hockey Player
function GeneratePlayer() 
{
    // Run individual methods
    ReturnName();
    ReturnJerseyNumber();
    ReturnPhysicalStats();

    // TEMP: Some filler stats
    city = "Columbus";
    teamName = "Blue Jackets";
    position = "Left Wing";
    handed = "Right";

    // TEMP: Return Player
    ReturnPlayer(firstName, lastName, jerseyNumber, height, weight, sex, city, teamName, position, handed);
}

// Return a Player
function ReturnPlayer(firstName, lastName, jerseyNumber, height, weight, sex, city, teamName, position, handed)
{
    docFirstName.innerHTML = firstName;
    docLastName.innerHTML = lastName;
    docJerseyNumber.innerHTML = jerseyNumber;
    docHeight.innerHTML = height;
    docWeight.innerHTML = weight;
    docSex.innerHTML = sex;
    docCity.innerHTML = city;
    docTeamName.innerHTML = teamName;
    docPosition.innerHTML = position;
    docHanded.innerHTML = handed;
    
}

// Get a random jersey number. 1-98. 99 is sacred
function ReturnJerseyNumber() 
{
    jerseyNumber = Math.floor(Math.random() * 97) + 1 // Add 1 to prevent 0s.

    // lmao
    if(jerseyNumber === 69)
    {
        jerseyNumber = jerseyNumber + " lol";
    }
}


// Height, Weight, and Sex
function ReturnPhysicalStats()
{
    // Weighted height.
    const heightRanges = [48, 58, 68, 78, 88];
    const heightWeights = [1, 3, 5, 3, 1]
    let heightWeight = 0;
    let heightInch = 0; // height in inches. idk why I have to declare it here.

    // Generate total weight
    heightWeights.forEach(Element => {
        heightWeight = heightWeight + Element;
    });

    // Random number draw
    let heightRand = Math.floor(Math.random() * heightWeight);

    // Loop through the Ranges and compare against our Weight
    for(let i = 0; i < heightRanges.length; i = i + 1)
    {
        // Compare number to the current weight. If number is less than weight, randomize our height. Otherwise subtract the weight and try the next item
        if(heightRand <= heightWeights[i])
        {
            // Randomize the height between our range. The number in the array is the bottom of the array, and can go up by 9.
            heightInch = heightRanges[i] + Math.floor(Math.random() * 9);
            height = (Math.floor(heightInch / 12)) + "'" + (Math.floor(heightInch % 12)) + '"';
            break;   
        }
        else
        {
            heightRand -= heightWeights[i];
        }
    }

    // According to this dumb sport-net page, the average height is 6'1" (73inch) and 200lbs. Ratio of 200/73, or 2.74. Basically, if we take our height in inches, we can just multiply it by that to get our weight
    // https://sport-net.org/what-is-the-average-height-and-weight-of-an-nhl-player/
    // I'll +- 25 pounds just for fun too. Why not. This is really dumb anyway.
    let tempWeight = Math.floor(heightInch * 2.74);

    if(Math.random() < .5)
    {
        weight = tempWeight + Math.floor(Math.random() * 25) + "lbs";;
    }
    else
    {
        weight = tempWeight - Math.floor(Math.random() * 25) + "lbs";;
    }

    // Sex
    let numbSex = Math.floor(Math.random() * 1000); // The Number for Sex. ;)
    if(numbSex < 499)
    {
        sex = "Female";
    }
    else if(numbSex < 999)
    {
        sex = "Male";
    }
    else // .1% chance lets go
    {
        sex = "yes"
    }
}

// Return a First and Last name from a list
function ReturnName()
{
    // Get random name from arrays. First and last.
    firstName = firstNames[Math.round(Math.random() * (firstNames.length - 1))];
    lastName = lastNames[Math.round(Math.random() * (lastNames.length - 1))];
}

function GenerateNames() 
{
    // TODO: Automatically fill in First and Last names somehow instead of our dumb declaration up top
}