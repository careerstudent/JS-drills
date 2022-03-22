myName = "Mallorie Corbin"

const numberOfStates = 50

let sum = 5 + 4

/* revisisting covalence labs
 
I NEEDED A REFRESHER */

function sayHello (){
    alert ("Hello World");
};

function checkAge(name, age) {
    if (age < 21 ) {
        alert ("Sorry " + name + ", you are not old enough to visit this site!")
    }
}

checkAge("Charles", 21)
checkAge("Abby", 27)
checkAge("James", 18)
checkAge("John", 17)

myFavoriteVeggies = ["okra", "mushrooms", "spinach", "tomatoes", "brussels"];

for (let i = 0; i < myFavoriteVeggies.length; i++){
    console.log(myFavoriteVeggies[i]);
}

let pet = {
    name: "Shaka",
    breed: "pitbull terrier"
};

console.log(pet.name, pet.breed);

let kinfolk = [
    {
        name: "Mikaylah",
        age: 23
    },
    {
        name: "Jaylan",
        age: 22
    },
    {
        name: "Unyea",
        age: 16
    },
    {
        name: "Jakayla",
        age: 14
    }
];

for (let i = 0; i < kinfolk.length; i++) {
    checkAge(kinfolk[i].name, kinfolk[i].age);
}

function getLength (){
    return
}
