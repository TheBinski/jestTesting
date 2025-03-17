class Problems {
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

}

module.exports = Problems;