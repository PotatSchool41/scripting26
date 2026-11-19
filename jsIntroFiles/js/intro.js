
//JS statements are ACTIONS we tell Javascript to perform
//change this content, update or add this, change the look of that

//using the console for testing
console.log("Hello World!");


//STRINGS are pieces of text and must alway go WITHIN quotes
console.log("GUTENTAAAAAAAAAAAAAAAAAAAAAG");


//conversely, NUMBERS do not go within quotes
console.log(45);


//Numbers allows you to do math stuff like seeing if something is less than something else
console.log(42 + 7);



//simple variables
//variables are temporary holders of data - it can change depending on conditions that we set in the code
let albetross;
let robin;

//we give variables a VALUE when we want them to hold something
albetross= "bird";
robin = "bird";



//variables also don't have quotes when we want to use them - although their values can
console.log(albetross);
albetross="Fluoride";
console.log(albetross);
robin="Phosphorus"


//we can overwrite or set an NEW VALUE to a pre-existing variable 
//when we do so, we don't use the keyword var again




//as you can see what is printed out to the console the second time is different because we changed the value of the variable

//CONCATENATION - This is the fancy coding word for 'adding things together'. Not in a math sense but adding bit of text or values together
//for example, what is we want to pring to the console "My favourite animal is [and whatever is in the animal variable"
console.log("My favourite albatross is a " + albetross);



//We aren't bound to just putting stuff in the console!!! This is a great way to test and debug and find errors

//Changing the DOM - Document Object Model
//We can change the content on ANY element on a page with it's ID
//we use the JavaScript METHOD getElementById() to select something
//We use the PROPERTY .innerHTML to state that we want to change the HTML that is inside of it
document.getElementById('column1').innerHTML = albetross+". <h3>Yummers</h3>";
document.getElementById('column1').innerHTML += "<p>das not </p>" +albetross;





//We can change more than just the content! We can change the looks
//This time we will add the id 'column2' to the next column over and then change the css of it!
//we will select it by the id
//Then use the .style to say we want to change the css of it and then state which property we want to change
document.getElementById('column2').style.color = "#39047F" ;
document.getElementById('column2').style.backgroundColor = "pink";


//LOGIC!
//THE MOST powerful aspect about any kind of coding is that we can use logic to create a custom interaction with the user
//This means we can give the browser instructions on what to do depending on something else
//For example, in a game, perhaps you can pick up a better weapon, which in turn causes more damage
//So the amount of damage points is BASED on which weapon is being used 




//we will create a variable that holds the 'weapon' that the user has	
let weapon;
weapon = "Balls";
let damage;
//Then we will print out content to the page depending on which weapon they have
//This is LOGIC
//we will use an 'IF STATEMENT' to change the message they receive based on the variable holding the weapon
if (weapon == "Balls")
{
damage = 100;
}
// if(weapon == "squibs")
// {
// damage = 20
// }
else 
{
   damage = 3; 
}
document.getElementById('column3').innerHTML = "Weapon: " + weapon + "<p> Damage: </p>" + damage;



//Let's take it a step further and say the opponent has a health of 100 points
let opHealth;
opHealth = 100;

//Send a message to column3 with what the opponent's health is
document.getElementById('column3').innerHTML += "<p> </p>" + opHealth + "<h4> Enemy health</h4>";

//then we will define damage points for each type of weaapon




//use the console to test is the damage variable is working correctly



//Let's change column3 and send the user a message
//CONCATENTATE the 'weapon' name and the STRING ' have this much damage: ' and then the 'damage' amount



//Now let's say the user has hit the opponent with their weapon
//We need to MINUS the 'damage' from the opponents 'health'
opHealth = opHealth - damage;
if(opHealth = 0)
{
    document.getElementById('column3').innerHTML += "<p> </p>" + opHealth + "<h4> Enemy health</h4>";
}
else
{
    document.getElementById('column3').innerHTML += "<p> ouch!</p>" +  "<h4> Enemy health</h4>";
}

//then send the message with the new 'health' value



//Hit them AGAIN and send the new health message




//then send the message with the new 'health' value



