// //TASK 1: Completed
// //TASK 2:
let Name = "moiz,";
console.log ( "Hello" , Name , `${"Do you have some money?"}`);
// //TASK 3:
let person = "siddiq";
console.log("lowecase:",person.toLowerCase());
console.log("uppercase:",person.toUpperCase());
console.log("titlecase:",person.replace(/\b\w/g, c=> c.toUpperCase()));
// //TASK 4:
let famous_person:string = "Hazrat Ali";
let quote: string = "He tongue is like a sword, use it with care."
console.log(`${famous_person} once said, "${quote}"`);
// //TASK 5:
let Author = "Hazrat Muhammad SAW";
let Quote = "The greatest richness is the richness of the soul."
console.log(`${Author} once said,"${Quote}"`);
// //TASK 6:
let Person = "\t\n Mubashir  \t\n";
console.log("original:" , Person);
console.log("stripped:" , Person.trim());
// //TASK 7 and 8:
console.log(5+3)
console.log(12-4)
console.log(2*4)
console.log(16/2)

// //TASK 9 AND 10
// Author: [Malaika]
// Date : [Saturday ,January 11, 2024]
// printing my favorite number.
let favoritenumber = 6;
//revealing my  favorite number in this message.
console.log(`this is my favorite number. "${favoritenumber}"`);



// //TASK 11:
let names = ["maida","hani","rahimeen"]
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

// //TASK 12:
let NAmes = ["maida","hani","rahimeen"];
let message = "where are you going."
console.log(NAmes[0]+" "+message);
console.log(NAmes[1]+" "+message);
console.log(NAmes[2],message);

// //TASK 13:
let transport = ["Lamborgini","Audi","ferrari"];
transport.map(item => console.log(`I have a ${item}`));

// // TASK 14:
let guest = ["Madiha","Nimra","Ayesha"]
guest.forEach(list => console.log(`salam ${list} would you like dinner with me?`));

// TASK 15 :
let guestlist = ["Madiha","Nimra","Ayesha"];
let notcome = guestlist[2];
console.log(notcome,"was not come for dinner");
guestlist.splice(2,2,"Malaika");
guestlist.forEach(guest1 => console.log(`salam ${guest1} would you like to dinner with me?`));

// // TASK 16 :
let guests = ["Madiha","Nimra","Ayesha"];
let dontcome = guests[2];
console.log(dontcome,"was not come for dinner");
guests.splice(0,0,"Malaika");
console.log("Good News! we have found a bigger dinner table");
guests.unshift("Nawal");
guests.push("Sawera");
let middle : number = Math.floor(guests.length / 2);
guests.splice(middle,0,"Fatima");
console.log("updated list of our guests");
guests.forEach(oneguest => console.log(`Salam ${oneguest} would you like to dinner with me`));

// TASK 17
let guestss = ["Madiha","Nimra","Ayesha"];
let nocome = guestss[2];
console.log(nocome,"was not come for dinner");
guestss.splice(0,0,"Malaika");
console.log("Good News! we have found a bigger dinner table");
guestss.unshift("Nawal");
guestss.push("Sawera");
let middlee : number = Math.floor(guestss.length / 2);
guestss.splice(middlee,0,"Fatima");
console.log("updated list of our guests");
guestss.forEach(oneguest => console.log(`Salam ${oneguest} would you like to dinner with me`));

console.log("Unfortunately! the dinner table won't arrive at the time , so I can invite only two person with me");

while(guestss.length > 2) {
    let removedguests = guestss.pop()
    console.log(`sorry ${removedguests} I can't invite you for dinner`);


}
console.log("Invitation to the last two guests");
guestss.forEach(last2 => console.log(`luckly ${last2} , you are invited for dinner`));
guestss.pop();
guestss.pop();

console.log("Empty List :",guestss);

// TASK 18

let countriesvisit :string[] = ["Canada","Brazil","Australia","Denmark"];
// 1
console.log("Original order:", countriesvisit);
// 2
console.log("Alphabetical order:",[...countriesvisit] .sort());
// 3
console.log("Still in original order:",countriesvisit);
// 4
console.log("Reverse order:",[...countriesvisit].reverse());
// 5
console.log("Still in original order:",countriesvisit);
// 6
console.log("Original array reversed:",countriesvisit.reverse());
// 7
console.log("Back to original order:",countriesvisit.reverse());
// 8
console.log("Sort in Alphabetical order:",countriesvisit.sort());
// 9
console.log("Original array reversed again:",countriesvisit.reverse());

// TASK 19
let guests2 = ["Madiha","Nimra","Ayesha"];
let guestlength = guests2.length;
console.log(`We are inviting total ${guestlength} guests`);

// // TASK 20
let cities : string[] = ["Karachi","Islamabad","Lahore","Quetta"];
console.log("List of cities in Pakistan");
cities.forEach(city => console.log(city));

// // TASK 21
interface itcourse {
    course : string;
    location : string;
    student:number;
} 

let itcourse = {
    course : "Typescript",
    location : "Governer house karachi",
    student : 20,
}
console.log(itcourse);

// TASK 22

let errorArray : string []= ["A","B","C","D","E","F"];

// console.log(errorArray[16]);

console.log(errorArray[3]);

// TASK 23

let six = 6; 

let eleven= 11;
// test 1
console.log("Test 1: six equal to 6?");
console.log(six == 6);

// test 2 
console.log("\n Test 2 : seven equal to 11?");
console.log( eleven == 11);

// test 3
console.log("\n Test 3 : 6 is not equal to 11?");
console.log(six != eleven);

// test 4
console.log("\n Test 4 : 11 is greater than 6?");
console.log( eleven > 6 );

// test 5
console.log("\n Test 5 : 6 is smaller than 11?");
console.log( six < eleven);

// test 6(
console.log("\n Test 6 : 11 is smaller than 6?");
console.log(eleven < six);

// test 7
console.log("\n Test 7 : 6 is equal to 11?");
console.log( six == eleven);

// test 8 
console.log("\n Test 8 : eleven is equal to 11?");
console.log( eleven != eleven);

// test 9
console.log("\n Test 9 : 6 is greater than 11?");
console.log(six > eleven );

// test 10 
console.log("\n Test 10 : 50 is greater than 100 ?");
console.log( 50 > 100);

// TASK 24
let Mango = "Mango";
let upper = "MANGO";
let ten = 10 ;
let twenty = 20 ;
let fruits = ["Apple","Banana","orange",];


// euqality or not equality
console.log("Is Mango is equal to Mango ?");
console.log( Mango == "Mango");

console.log("Is Mango is not equal to Mango?");
console.log( Mango != "Mango");

// lowercase 
console.log("Is MANGO  equal to mango after converting in lowercase ?");
console.log(upper.toLowerCase() == "Mango");

console.log("Is MANGO  not equal to mango after converting in lowercase ?");
console.log(upper.toLowerCase() != "Mango");

// numerical test
console.log("\n Ten is equal to twenty ?");
console.log( ten == twenty);

console.log("\n Ten is not equal to twenty ?");
console.log( ten != twenty);

console.log("\n Ten is greater than twenty ?");
console.log( ten > twenty);

console.log("\n Ten is smaller than twenty ?");
console.log( ten < twenty);

console.log("\n Ten is greater than or equal to 5 ?");
console.log( ten >= 5);

console.log("\n twenty is less than or equal to 10");
console.log( twenty <= 10); 

//  "and" and "or" operator
console.log("\n Twenty is not equal to 10 and Twenty is greater than 10");
console.log( twenty != 10 && twenty > 10);

console.log("\n Twenty is not equal to 10 and Twenty is greater than 10");
console.log( twenty != 10 && twenty > 30);

console.log("\n 20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 is greater than 50 or 20 is not  equal to 20");
console.log(20 > 50 || 20 != 20);

// wheather test
console.log("\n Is orange include in my fruit array");
console.log(fruits.includes("orange"));

console.log("\n Is orange not include in my fruit array");
console.log(!fruits.includes("orange"));

// TASK 25
let Alien_colour = "red";

if(Alien_colour === "green") {
    console.log("Alien colour is green the player just earned 5 points.");
}
if (Alien_colour === "red") {
    console.log("Alien colour is red.");
}

// // TASK 26
let alien = "green "

if (alien === "green") {
    console.log("the player just earned 5 points for shooting the alien.");
}
else {
    console.log("the player just earned 10 points.");
}

// second version
if(alien === "blue") {
    console.log("Iam come from if statement");
}
else{
    console.log("Iam come from else statement");   
}

// TASK 27
let aliencolour = "green";

// version 1
if (aliencolour === "green") {
    console.log("you shoot down green alien you have earned 5 points.");
}
else if(aliencolour === "yellow") {
    console.log("you shoot down yellow alien you have earned 10 points.");
}
else if(aliencolour === "red") {
    console.log("you shoot down red alien you have earned 15 points.");
}

// version 2
let aliencolour2 = "yellow";

if (aliencolour2 === "green") {
    console.log("you shoot down green alien you have earned 5 points.");
}
else if (aliencolour2 === "yellow") {
    console.log("you shoot down yellow alien you have earned 10 points.");
}
else if (aliencolour2 === "red") {
    console.log("you shoot down red alien you have earned 15 points.");
}

// version 3
let aliencolour3 = "red";

if (aliencolour3 === "green"){
    console.log("you shoot down green alien you have earned 5 points.");
}
else if (aliencolour3 === "yellow"){
    console.log("you shoot down yellow alien you have earned 10 points.");
}
else if (aliencolour3 === "red"){
    console.log("you shoot down red alien you have earned 15 points.");
}

// TASK 28

let age = 19

if(age < 2){
    console.log("You are a Baby");
}
else if(age >= 2 &&  age < 4){
    console.log("You are a Toddler");
}
else if (age >= 4 && age < 13){
    console.log("You are a kid");
}
else if (age >= 13 && age < 20 ){
    console.log("You are a Teenager");
}
else if (age >= 20 && age < 65 ){
    console.log("You are a Adult");
}
else if (age >= 65 ){
    console.log("You are a Elder");
}


// TASK 29

let favorite_fruit = ["Apple","Mango","Strawberry"]

if (favorite_fruit.includes("Apple")){
    console.log("I Really like Apple");
}
if (favorite_fruit.includes("Orange")){
    console.log("I Really like Orange");
}
if (favorite_fruit.includes("Mango")){
    console.log("I Really like Mango");
}
if (favorite_fruit.includes("Pear")){
    console.log("I Really like Pear");
}
if (favorite_fruit.includes("Strawberry")){
    console.log("I Really like Strawberry");
}

// TASK 30

let username = ["Malaika","Moiz","Maida","Mubasher"]
username.forEach(user => {
    if(user === "Malaika"){
        console.log(`Hello ${user}, Would you like to see a status report. `);
    }
    else{
        console.log(`Hello ${user},Thank you for logging in again.`);
    }
});

// TASK 31

let user2 = ["Malaika","Moiz","Maida","Mubasher"];
user2 = []

if(user2.length === 0){
    console.log("We need to find some users!");
}
else{
    user2.forEach(use =>{
        if (use === "Malaika"){
            console.log(`Hello ${use}, Would you like to see a status report. `);
        }
        else{
            console.log(`Hello ${use},Thank you for logging in again.`);
        }
    })
};

// TASK 32

let current_user = ["Malaika","Nimra","Madiha","Ayesha","Sawera"]

let new_user = ["Nawal","Asia","Nimra","Shabana","Malaika"]

new_user.forEach(newuse => {
let our_condition = current_user.some(current => current.toLocaleLowerCase() === newuse.toLocaleLowerCase());
if (our_condition){
    console.log(`Sorry ${newuse} is already taken! `);
}
else {
    console.log(`This username ${newuse} is available`);
    
}
});


// TASK 33

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for(let onenum of numbers){
    let ordinal : string;

    if (onenum === 1){
        ordinal ="st"
    }
    else if (onenum === 2){
        ordinal ="nd"
    }
    else if (onenum === 3){
        ordinal = "rd"
    }
    else{
        ordinal = "th"
    }
    console.log(`${onenum}${ordinal}`);
    
};

// TASK 34

let pizza = ["chicken Tikka","Malai cheese","Fajita"]

for(let onepizza of pizza){
    console.log(`I like ${onepizza} Pizza`);
};
console.log("Pizza is my Love");

// TASK 35

let petAnimal = ["Cat","Dog","Rabbit"]

for( let onepet of petAnimal){
    console.log(`A ${onepet} Would make a great pet!`);
}

console.log("Any of these Animal would make a great pet!");

// TASK 36

function make_shirt(size : string , printmessage : string){
    console.log(`you selected ${size} size shirt with ${printmessage} prints on shirt `);   
}

make_shirt("Medium","Queen");

// TASK 37

function shirt (size : string = "Large", printmessage : string ="I Love Typescript"){
console.log(`Creating a ${size} shirt with ${printmessage}  prints on the shirt.`);
}

shirt()
shirt ("Medium")
shirt("small","I love Javascript")

// TASK 38

function describe_city(city : string, country : string = "Pakistan"){
    console.log(`${city}  is in ${country}`);
    
};
describe_city("Karachi")
describe_city("Lahore")
describe_city("Makkah","Saudi Arabia")

// TASK 39

function city_country(city : string , country : string ) : string {
    return `${city},${country}`;
}
console.log(city_country("Karachi","Pakistan"));
console.log(city_country("Maxico","America"));
console.log(city_country("Mumbai","India"));

// TASK 40

function make_album(artist_name:string, album_title:string,track?:number){
    let album:{artist:string,title:string,track?:number} ={
        artist : artist_name,
        title : album_title
    };
    if (track !== undefined){
        album.track = track;
    }
    return album
}

let album1 = make_album("Malaika","Album title 1")
let album2 = make_album("Moiz","Album title 2")
let album3 =make_album("Maida","album title 3", 9)

console.log(album1);
console.log(album2);
console.log(album3);


// TASK 41

function show_magicians(magician :string[]){
    magician.forEach(name => console.log(name))
}

let magicians_name = ["sufyan","Moiz","Mubashir"]

show_magicians(magicians_name);

// TASK 42

function show_magicians1(magician :string[]){
    magician.forEach(name => console.log(name))
}

function make_great(magicians :string[]){
    return magicians.map(name => `The Great Magician ${name}`);
}

let magicians_name1 = ["sufyan","Moiz","Mubashir"]

let great = make_great(magicians_name1);

show_magicians1(great);

// TASK 43


function show_magicians2(magician :string[]){
    magician.forEach(name => console.log(name))
}

function make_great1(magicians :string[]){
    return magicians.map(name => `The Great Magician ${name}`);
}

let magicians_name2= ["sufyan","Moiz","Mubashir"]

let copy_name = magicians_name2.slice()

let copy_great = make_great1(copy_name)


console.log("Original Array\n");

show_magicians2(magicians_name2)

console.log("\nCopied Array\n");

show_magicians2(copy_great)


// TASK 44

function make_Sandwich(...items :string[]){
    console.log("\n Making a Sandwich with the following items: \n");

    items.forEach(singleitem => console.log(singleitem));

    console.log("\n Now Enjoying the Sandwich");
    
}
make_Sandwich("Chicken","Cheese","Butter","Fries")
make_Sandwich("Mayo","Eggs","Lettuce")
make_Sandwich("Chicken","Cheese","Eggs","Butter","Fries","Mayo")

// TASK 45



type Cars ={
    manufacture:string 
    model:string  
    [key :string ]:any
}
function My_Car (manufacture:string , model:string , optional:Record<string,any>): Cars {
    return{
    manufacture,
    model,
    ...optional
    }
}
let P_car: Cars = My_Car("Volkswagen Group ","Audi A3",{color:"Grey",year:"2024"}) 
console.log(P_car);


  // Alhumdulilah Task Completed










