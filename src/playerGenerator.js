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
let captaincy = "";

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
const docCaptaincy = document.getElementById("captaincy");

// TEMP: Generate list of names
GenerateNames();

// TEMP: Generate a Player
GeneratePlayer();

// Generate a Hockey Player
function GeneratePlayer() 
{
    // Run individual methods
    ReturnName();
    ReturnJersey();
    ReturnPhysicalStats();
    ReturnTeam();

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
    docCaptaincy.innerHTML = captaincy;
}

// Return a random jersey number. 1-98. 99 is sacred. Also return player position and captaincy
function ReturnJersey() 
{
    // Jersey Number
    jerseyNumber = Math.floor(Math.random() * 97) + 1 // Add 1 to prevent 0s.

    // lmao
    if(jerseyNumber === 69)
    {
        jerseyNumber = jerseyNumber + " lol";
    }

    // Position
    positions = ['Left Wing', 'Center', 'Right Wing', 'Defenseman', 'Defenseman', 'Goaltender'];
    position = positions[Math.floor(Math.random() * positions.length)];

    // Captaincy (Weighted)
    const capList = ["", "Assistant Captain", "Captain"];
    const capWeights = [90, 7, 3];
    let capWeight = 0;

    // Generate total weight
    capWeights.forEach(Element => {
        capWeight += capWeight + Element;
    })

    // Random number draw
    let capRand = Math.floor(Math.random() * capWeight);

    // Loop though our Captaincies and compare against our weight
    for(let i = 0; i < capList.length; i = i + 1)
    {
        // Compare number to the current weight. If number is less than weight, randomize our height. Otherwise subtract the weight and try the next item
        if(capRand <= capWeights[i])
        {
            captaincy = capList[i];
            break;   
        }
        else
        {
            capRand -= capWeights[i];
        }
    }
}


// Height, Weight, Handedness, and Sex
function ReturnPhysicalStats()
{
    // Weighted height.
    const heightRanges = [48, 58, 68, 78, 88];
    const heightWeights = [1, 5, 10, 5, 1]
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

    // Handedness
    if(Math.random() < .5)
    {
        handed = "Right";
    }
    else
    {
        handed = "Left";
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

// Return City and Team Name
function ReturnTeam()
{
    const teamNames = ['Blue Jackets', 'Red Jackets', 'Hurricanes', 'Devils', 'Islanders', 'Mainlanders', 'Rangers', 'Nearers', 'Flyers', 'Penguins', 'Flightless Birds', 'Capitals', 'Bruins', 'Sabers', 'Red Wings', 'Panthers', 'Cougars', 'Canadiens', 'Americans', 'Senators', 'Lightning', 
    'Maple Leafs', 'Coyotes', 'Blackhawks', 'Avalanche', 'Stars', 'Wild', 'Predators', 'Prey', 'Blues', 'Sads', 'Jets', 'Planes', 'Spitfire', 'Ducks', 'Flames', 'Waters', 'Oilers', 'Kings', 'Queens', 'Sharks', 'Fish', 'Kraken', 'Flying Spaghetti Monster', 'Golden Knights', 'Black Knights',
    'White Knights', 'Stripes', 'Tendies', 'Cyclones', 'Monsters', 'Ice Hogs', 'Gamers', 'Cola Drinkers', 'Idlers', 'Influencers', 'Redditors', 'Enthusiasts', 'Beer Leaguers'];

    const cities = ['Columbus', 'Cincinnati', 'Toronto', 'Boston', 'Tampa Bay', 'Miami', 'Seattle', 'Las Vegas', 'Los Angeles', 'Detroit', 'Kalamazoo', 'Cleveland', 'San Francisco', 'Calgary', 'Ontario', 'Quebec', 'Dallas', 'Houston', 'London', 'Mexico City', 'Dayton', 'Daytona', 
    'Williamsburg', 'Milford', 'Cedar Point', 'Tokyo', 'Paris', 'Shanghai', 'Kyiv', 'New York', 'Chicago', 'Washington', 'Philadelphia', 'Pheonix', 'Arizona', 'Florida', 'Denver', 'Colorado', 'St. Paul', 'Minnesota', 'Pittsburgh', 'San Jose', 'Nashville', 'Buffalo', 
    'Montreal', 'Raleigh', 'Carolina', 'Vancouver', 'Ottawa', 'Edmonton', 'Winnipeg'];

    teamName = teamNames[Math.floor(Math.random() * teamNames.length)];
    city = cities[Math.floor(Math.random() * cities.length)];
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
    // TODO: Create large arrays of First and Last names.
}