/*
Written by Tucker Godsey

Generates a First Name based on Sex. Includes a File Reader to read all names from.
*/

// Variables
const fileMale = document.getElementById('fileMale');
let fileReader = new FileReader();

function GenerateName(sex)
{
    fileReader.readAsArrayBuffer(fileMale.files[0]);
    console.log(fileReader.result);
}
