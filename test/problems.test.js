const problem = require('../src/problems');
const award = require('../src/award');

let prob;

beforeAll(() => {
    prob = new problem.Problems();
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

    let expectedList1 = [3, 6, 8];
    let expectedList2 = [0, 2, 4, 5];
    let expectedList3 = [1, 3, 5, 6, 7];

    const expectedOutputs = [expectedList1, expectedList2, expectedList3];

    for (let i = 0; i < inputsA.length; i++) {
        let actual = prob.checkLists(inputsA[i], inputsB[i]);

        let expected = expectedOutputs[i];

        expect(actual.length).toBe(expectedOutputs[i].length);
        actual.forEach((val, j) => {
            expect(val).toBe(expected[j]);
        });
    }

});

test('Problem 6: Assign the correct awards.', () => {

    const athletes = [
        new problem.Person('John', 'Smith', 23, 'Brown', 'Blue'),
        new problem.Person('Bill', 'Jones', 27, 'Brown', 'Blue'), 
        new problem.Person('Ryan', 'Jenkins', 29, 'Brown', 'Blue'), 
        new problem.Person('Jessica', 'Roberts', 21, 'Brown', 'Blue'),
        new problem.Person('Floyd', 'Mayweather', 21, 'Brown', 'Blue'), 
        new problem.Person('Rocky', 'Balboa', 21, 'Brown', 'Blue'), 
    ];
    
    const eventPoints = [
        [1,2,4,2],
        [5,2,1,3,4,1,2,4],
        [10,30,2,0,12,15,8],
        [22,23,4,11,19,18,45,23],
        [22,23,4,11,19,18,45,23,35,89],
        [35,45,50, 140, 300, 150, 89],
    ];
    
    const expectedMedals = [
        [],
        [
            new award('Bill Jones', 'Bronze', 11)
        ],
        [
            new award('Ryan Jenkins', 'Bronze', 10),
            new award('Ryan Jenkins', 'Silver', 54)
        ],
        [
            new award('Jessica Roberts', 'Bronze', 22),
            new award('Jessica Roberts', 'Silver', 60),
            new award('Jessica Roberts', 'Gold', 142),
        ],
        [
            new award('Floyd Mayweather', 'Bronze', 22),
            new award('Floyd Mayweather', 'Silver', 60),
            new award('Floyd Mayweather', 'Gold', 142),
            new award('Floyd Mayweather', 'Platinum', 289)
        ],
        [
            new award('Rocky Balboa', 'Bronze', 35),
            new award('Rocky Balboa', 'Silver', 80),
            new award('Rocky Balboa', 'Gold', 130),
            new award('Rocky Balboa', 'Platinum', 270),
            new award('Rocky Balboa', 'Platinum 2', 570),
            new award('Rocky Balboa', 'Platinum 3', 809)
        ],
    ]

    let actualMedals = prob.assignAwards(athletes, eventPoints);
    let expCounter = 0;

    expect(actualMedals['John_Smith'].length).toBe(expectedMedals[expCounter++].length);

    expect(actualMedals['Bill_Jones'].length).toBe(expectedMedals[expCounter].length);
    actualMedals['Bill_Jones'].forEach((val, i) => {
        expect(val.getOwner()).toBe(expectedMedals[expCounter][i].getOwner());
        expect(val.getName()).toBe(expectedMedals[expCounter][i].getName());
        expect(val.getPoints()).toBe(expectedMedals[expCounter][i].getPoints());
    });

    expCounter++;
    
    expect(actualMedals['Ryan_Jenkins'].length).toBe(expectedMedals[expCounter].length);
    actualMedals['Ryan_Jenkins'].forEach((val, i) => {
        expect(val.getOwner()).toBe(expectedMedals[expCounter][i].getOwner());
        expect(val.getName()).toBe(expectedMedals[expCounter][i].getName());
        expect(val.getPoints()).toBe(expectedMedals[expCounter][i].getPoints());
    });
    
    expCounter++;

    expect(actualMedals['Jessica_Roberts'].length).toBe(expectedMedals[expCounter].length);
    actualMedals['Jessica_Roberts'].forEach((val, i) => {
        expect(val.getOwner()).toBe(expectedMedals[expCounter][i].getOwner());
        expect(val.getName()).toBe(expectedMedals[expCounter][i].getName());
        expect(val.getPoints()).toBe(expectedMedals[expCounter][i].getPoints());
    });

    expCounter++;
    
    expect(actualMedals['Floyd_Mayweather'].length).toBe(expectedMedals[expCounter].length);
    actualMedals['Floyd_Mayweather'].forEach((val, i) => {
        expect(val.getOwner()).toBe(expectedMedals[expCounter][i].getOwner());
        expect(val.getName()).toBe(expectedMedals[expCounter][i].getName());
        expect(val.getPoints()).toBe(expectedMedals[expCounter][i].getPoints());
    });

    expCounter++;
    
    expect(actualMedals['Rocky_Balboa'].length).toBe(expectedMedals[expCounter].length);
    actualMedals['Rocky_Balboa'].forEach((val, i) => {
        expect(val.getOwner()).toBe(expectedMedals[expCounter][i].getOwner());
        expect(val.getName()).toBe(expectedMedals[expCounter][i].getName());
        expect(val.getPoints()).toBe(expectedMedals[expCounter][i].getPoints());
    });

});