//console log just to test that your JS is linked properly
console.log("SIGMA");
//create a variable for the number of buildings in the city and start it at zero
let buildNum = 0;
let face;
if (buildNum < 1)
{
    face = ":(";
}
else
{
 face = ":)";
}

//send a message to the page to inform the user of how many buildings there are in their city. This will happen right away when the page loads
document.getElementById('city').innerHTML = buildNum + " Buildings in your city. " + face;
//Functions --
//Think of this as a group of instructions that will always run together
//Create a function that will run when the first button is clicked
//This gets trigger by the submit button in the form. This trigger is known as an EVENT! (Button click event)
//It will:
//-- Print a message to the console
//--Add one to the variable that is tracking the number of buildings
//---Print a message with the number of buildings
//---Place an image graphic into the other div
function build1()
{
    console.log("weegoo");
    buildNum++;    
    if (buildNum < 9.5)
{
    face = ":(";
}
else
{
 face = ":)";
}
    document.getElementById('city').innerHTML = buildNum + " Buildings in your city. " + face;

    document.getElementById('cityGraphic').innerHTML += "<img src='images/BuildingBlock1.png' alt='Building One'>";

}
function build2()
{
    console.log("woogee");
    buildNum++;    
    if (buildNum <= 9.5)
{
    face = ":(";
}
else
{
 face = ":)";
}
    document.getElementById('city').innerHTML = buildNum + " Buildings in your city. " + face;

    document.getElementById('cityGraphic').innerHTML += "<img src='images/BuildingBlock2.png' alt='Building Two'>";

}
function build3()
{
    console.log("goon.");
    buildNum++;    
    if (buildNum <= 9.5)
{
    face = ":(";
}
else
{
 face = ":)";
}
    document.getElementById('city').innerHTML = buildNum + " Buildings in your city. " + face;

    document.getElementById('cityGraphic').innerHTML += "<img src='images/BuildingBlock3.png' alt='Building Three'>";

}
//Create a function for the second button that prints a message with the number of buildings and the graphic for the second building

//Create a function for the third button that prints a message with the number of buildings and the graphic for the second building
