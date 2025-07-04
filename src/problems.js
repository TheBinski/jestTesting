const Award = require('../src/award');

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
        for(let i = 0; i < listA.length; i++){
            if(listA[i]!=listB[i]){
                finalList.push(i);
            }
        }
        return finalList;
    }

    // Problem 6: Using the award class from the src folder fill out the function below to assign someone awards based on their point totals
    // Inputs: List of participants of class Person, list containing lists of Points from each event
    // Output: Object of a List of awards that corresponds to the Person who received them. List starts with the lowest awards first.
    // Example object output --> { 'FirstName_LastName': [ Array of Awards ] } --> Array of Awards is an array with the elements being the Award objects. 
    // NOTE: Do not award Participation Medals
    /*
    * Bronze >= 10
    * Silver >= 50
    * Gold >= 100
    * Platinum >= 250
    * If someone gets 250 points and then proceeds to get another 250.
    * Then they get another Platinum with the number of the corresponding Platinum award they just earned. This only counts for Platinum. 
    * Example is someone has 790 points. They should have [Bronze, Silver, Gold, Platinum, Platinum 2, Platinum 3]
    * Assume that the eventPoints are in the correct order as the order of the athletes list.
    */
    assignAwards(athletes, eventPoints) {
        let json = {"participants": athletes,
            "points": eventPoints,
        };

        this.awards = new Award();
        let sum = 0;
        for(let i=0; i<=eventPoints.length; i++){
            sum += i;
        }

        console.log(athletes);
        console.log(eventPoints);
        console.log(json);
        console.log(sum);

        return {};
    }

    //Problem 6.1: Finding Sub Array Totals
    //Sum all of the nested arrays and output an array of the totals
    sumAllArrays(arrays) {
        let totals = [];
        if (Array.isArray(arrays)) {
        
            console.log(Array.isArray(arrays));
            for(let i =0; i<=arrays.length;i++){
                let subArray = arrays[i];
                let sum = 0;

                if (Array.isArray(subArray)) {
                    for(let j=0; j < arrays[i].length; j++){
                        sum += arrays[i][j];
                    }
                    
                    totals.push(sum);
                }
               
            }

        }
        
        return totals;
    }

    // Problem 7: Fill in the sorting methods below.
    // Have them return the newly sorted array.
    // The Array will only ever consist of numbers.
    // If you need to make additional methods outside of these methods then feel free to do so.
    // Do in order. It is a single test and they are being tested in the order below.
    // Bubble
    // Selection
    // Insertion
    // Merge
    // Quick

    bubbleSort(unsortedArray) {
        for(let i = 0; i<unsortedArray.length; i++){
            for(let j = 0; j<unsortedArray.length; j++){
                if(unsortedArray[j] > unsortedArray[j+1]){
                    let tempVal = unsortedArray[j];
                    unsortedArray[j] = unsortedArray[j+1];
                    unsortedArray[j+1] = tempVal;
                }
            }
        }

        return unsortedArray;
    }

    selectionSort(unsortedArray) {
        for(let i = 0; i < unsortedArray.length - 1; i++){
            let minindex = i;
            for(let j = 0; j < unsortedArray.length; j++){
                if(unsortedArray[j]<unsortedArray[minindex]){
                    minindex = j;
                }
            }
            if(minindex !== i){
                [unsortedArray[i], unsortedArray[minindex]] = [unsortedArray[minindex], unsortedArray[i]];
            }
        }
        return unsortedArray;
    }

    insertionSort(unsortedArray) {
        for(let i = 1; i < unsortedArray.length; i++){
            let key = unsortedArray[i];
            let j = i - 1;
            while (j >= 0 && unsortedArray[j] > key){
                unsortedArray[j + 1] = unsortedArray[j];
                j = j- 1;
            }
            unsortedArray[j + 1] = key;
        }

        return unsortedArray;
    }

    mergeSort(unsortedArray) {
        if(unsortedArray.length ===1){
            return unsortedArray;
        }
        
        return [];
    }

    quickSort(unsortedArray) {
        return [];
        
    }

    // Problem 8: Program Duck Duck Goose
    // Rules: You are given a list of player names and a number at which people are considered the goose.
    // Loop through the list and when you get to the goose number delete the member from the list.
    // Do this until only one player remains and return the player's name.
    // Make sure to continue in the list from where you left off after removing a player from the list.
    // Inputs: players(Array of Strings) --> List of player names, gooseNumber(Number) --> Number til goose
    // EXAMPLE: 
    // Goose Number = 4
    // Players = [ Mary, Tom, Bob ]
    // Goose 1 --> Mary
    // Players = [ Tom, Bob ]
    // Goose 2 --> Bob
    // Players = [ Tom ]
    // Answer == Tom
    playDuckDuckGoose(players, gooseNumber) {

        let counter = 1;
        let position = 0;
        while(counter <= gooseNumber){

            if(counter == gooseNumber){
            players.splice(position, 1);
            counter=1;
            }
            else{
                counter++;
                position++;
            }

            if(position>=players.length){
                position = 0;
            }

            if(players.length == 1){
                break;
            }
            
        }
            
        return players[0];
    }

    // Problem 9: 
    // Determine if the inputted number is a Palindrome and return true if it is
    isPalindrome(number) {
        let numberVar = number;
        let numberString = numberVar.toString();
        let characterArray = numberString.split('');
        characterArray.reverse();
        let reversedString = characterArray.join('');
        numberVar = parseFloat(reversedString);

        if (numberVar == number) {
            return true;
        }
        else {
            return false;
        }
    }       
    // Problem 10: 
    // Take the input deckOfCards and take the back half of it and put it in the front
    // If the deck is not an even number then leave the extra card on the bottom
    // Do NOT return the answer. This should affect the original deckOfCards just as it would with a real deck of cards.
    cutDeck(deckOfCards) {
        // console.log(deckOfCards);
        let midPoint = Math.ceil(deckOfCards.length/2);
        //console.log(midPoint);
        let secondHalf = deckOfCards.slice(midPoint);
        //console.log(secondHalf);
        let firstHalf = deckOfCards.slice(0, midPoint);
        //console.log(firstHalf);
        let final = secondHalf.concat(firstHalf);
        
        for(let i =0; i< final.length; i++){
            deckOfCards[i] = final[i];
        }

        //final.forEach((card, index) => {
            //deckOfCards[index] = card;
       // });

        console.log("Deck of Cards - ", deckOfCards);

        // deckOfCards = 100;
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

module.exports = {
    Problems: Problems, 
    Person: Person
};