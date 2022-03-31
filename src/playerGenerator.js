/*
Written by Tucker Godsey

Generates a Hockey Player using randomized variables.
*/

// Variables
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

// TEMP: Generate a Player
GeneratePlayer();

// Generate a Hockey Player
function GeneratePlayer() 
{
    firstName = "Patrik";
    lastName = "Laine";
    jerseyNumber = "29";
    height = 77 + "inch";
    weight = 216 + "lbs";
    sex = "yes";
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