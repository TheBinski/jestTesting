class Problems {

    person;

    constructor() { }

    // Problem 1: Sum the entire array and return the answer
    sumArray(array) {
        let ans = 0;
        for(let i=0; i<array.length; i++){
            ans = array[i] + ans;
        }

        return ans;
    }

    // Problem 2: Capitalizing all words throughout the string
    // Example - Input: "hello world" --> Output: "Hello World"
    // Example 2 - Input: "hEllO WORLD" --> Output: "Hello World"
    capitalizeWords(str) {
        let words = str;
        let newArray = words.split(' ');
        newArray.forEach((word, i) => {
            let capital = word.charAt(0).toUpperCase();
            let lowrCase = word.toLowerCase();
            newArray[i] = capital + lowrCase.slice(1);
        });
        str = newArray.join(" ");
        return str;
    }

    // Problem 3: Match the list of foods with the list of prices
    // Output should be in a Map
    // If there are more foods than prices then do not include the foods without a price
    // If there are more prices than foods then ignore the extra prices in the final map
    createGroceryList(foods, prices) {
        let groceries = new Map();
        for(let i = 0; i<foods.length; i++){
                let food = foods[i];
                let price = prices[i];
                if(price[i] === null ){
                    break;
                }
                groceries.set(food, price);
        }
        return groceries;

    }

    // Problem 4: Creating a new object class
    // In this problem there is another class for a person below.
    // Have it create a new person and store it on the person variable of this class.
    // Make sure that the constructor for the Person class sets the properties of the parameters of this function.
    // Finally, there are a few comments of functions that will need to be completed in the Person class for the tests to pass.
    createPerson(firstName, lastName, age, hairColor, eyeColor) {
        this.person = new Person(firstName, lastName, age, hairColor, eyeColor);
    }

    // Problem 5: Check for differences between two lists
    // In this problem fill out the function to find all of the indices in which the values are different between the two inputted lists
    // Return these values in a list
    checkLists(listA, listB) {
        let finalList = [];
        for(let i = 0; i<listA.length; i++){
            if(listA[i]!==listB[i]){
                finalList.push(listA[i]);
                finalList.push(listB[i]);
            }
        }
        console.log(finalList);
        return finalList;
    }

}

class Person {

    firstName;
    lastName;
    age;
    hairColor;
    eyeColor;

    // Add Constructor here
    constructor(firstName, lastName, age, hairColor, eyeColor){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
    }

    // Problem 4: create a function called greeting() and have the it return a string saying "Hello, my name is <INSERT NAME>."
    greeting() {
        return "Hello, my name is " + this.firstName + " " + this.lastName + ".";
    }


    // Problem 4: create a birthday function called happyBirthday() that changes the age of the person by one
    happyBirthday() {
        this.age++;
    }
}



module.exports = Problems;