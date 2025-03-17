const problem = require('../src/problems')

let prob;

beforeAll(() => {
    prob = new problem();
});

test('Problem 1: Sum Array', () => {
    expect(prob.sumArray([1,2,3,4,5])).toBe(15);
    expect(prob.sumArray([10,20,30,40,50])).toBe(150);
    expect(prob.sumArray([10,1,4,3,2])).toBe(20);
    expect(prob.sumArray([-10,1,4,3,2])).toBe(0);
    expect(prob.sumArray([-10,1,4,3,2])).toBe(0);
    expect(prob.sumArray([25, 43, 9, -32, 18, 103, -65])).toBe(101);
});

test('Problem 2: Capitalize words', () => {

    const test1 = prob.capitalizeWords('dog');
    const test2 = prob.capitalizeWords('DOG');
    const test3 = prob.capitalizeWords('the dog chased its tail.');
    const test4 = prob.capitalizeWords('THE Dog chAseD its tAIl.');

    expect(test1).toBe('Dog');
    expect(test2).toBe('Dog');
    expect(test3).toBe('The Dog Chased Its Tail.');
    expect(test4).toBe('The Dog Chased Its Tail.');

});

test("Problem 3: Grocery List", () => {
    const testFoods1 = ['Apple', 'Chicken', 'Milk', 'Eggs'];
    const testPrices1 = [3, 10, 6, 8];

    const testFoods2 = ['Apple', 'Chicken', 'Milk', 'Eggs', 'Cake'];
    const testPrices2 = [3, 10, 6, 8, 15, 17, 20];

    const testFoods3 = ['Apple', 'Chicken'];
    const testPrices3 = [3, 10, 6, 8, 15, 17, 20];

    const test1 = prob.createGroceryList(testFoods1, testPrices1);
    const test2 = prob.createGroceryList(testFoods2, testPrices2);
    const test3 = prob.createGroceryList(testFoods3, testPrices3);

    expect(test1.get('Apple')).toBe(testPrices1[0]);
    expect(test1.get('Chicken')).toBe(testPrices1[1]);
    expect(test1.get('Milk')).toBe(testPrices1[2]);
    expect(test1.get('Eggs')).toBe(testPrices1[3]);
    expect(test1.get('Cake')).toBeUndefined();

    expect(test2.get('Apple')).toBe(testPrices2[0]);
    expect(test2.get('Chicken')).toBe(testPrices2[1]);
    expect(test2.get('Milk')).toBe(testPrices2[2]);
    expect(test2.get('Eggs')).toBe(testPrices2[3]);
    expect(test2.get('Cake')).toBe(testPrices2[4]);

    expect(test3.get('Apple')).toBe(testPrices3[0]);
    expect(test3.get('Chicken')).toBe(testPrices3[1]);
    expect(test3.get('Milk')).toBeUndefined();
    expect(test3.get('Eggs')).toBeUndefined();
    expect(test3.get('Cake')).toBeUndefined();

});

test('Problem 4: Create a Person class', () => {

    prob.createPerson("Joe", "Smith", 43, "Brown", "Green");

    let expectedObj = prob.person;

    expect(expectedObj).toBeDefined();
    expect(expectedObj.firstName).toBe("Joe");
    expect(expectedObj.lastName).toBe("Smith");
    expect(expectedObj.age).toBe(43);
    expect(expectedObj.hairColor).toBe("Brown");
    expect(expectedObj.eyeColor).toBe("Green");

    let actualGreeting = expectedObj.greeting();

    expect(actualGreeting).toBe("Hello, my name is Joe Smith.");

    expectedObj.happyBirthday();

    expect(expectedObj.age).toBe(44);

    let finalExpectedAge = 44;

    for (let i = 0; i < 32; i++) {
        expectedObj.happyBirthday();
        finalExpectedAge++;
    }

    expect(expectedObj.age).toBe(finalExpectedAge);
});

test('Problem 5: Find the differences of two lists.', () => {

    let list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let list2 = ["Dog", "Cat", "Turtle", "Penguin", "Tiger", "Fish"];
    let list3 = [-1, 1, 1, 1, 1, -1, -1, -1, 1];

    let list4 = [1, 2, 3, 8, 5, 6, 4, 8, 2];
    let list5 = ["Dogo", "Cat", "", "Penguin", "Lion", "Pelican"];
    let list6 = [-1, -1, 1, -1, 1, 1, 1, 1, 1];

    const inputsA = [list1, list2, list3];
    const inputsB = [list4, list5, list6];

    let expectedList1 = [3, 5, 7];
    let expectedList2 = [0, 2, 4, 5];
    let expectedList3 = [1, 3, 5, 6, 7];

    const expectedOutputs = [expectedList1, expectedList2, expectedList3];

    for (let i = 0; i < inputsA.length; i++) {
        let actual = prob.checkLists(inputsA[i], inputsB[i]);

        expect(actual.length).toBe(expectedOutputs[i].length);
        actual.forEach((val, i) => {
            expect(val).toBe(expectedOutputs[i]);
        });
    }

});

test('Problem 6: Assign the correct awards.', () => {

    

});