const output = document.querySelector('body p:nth-of-type(2)');

/* STEP 1: Creating an array
When declaring and initializing an array, you can include strings, numbers, booleans, and even other arrays */
let myArray = new Array("string", true, 100);
/* STEP 2: Reading and changing array elements
You can refer to a particular element in an array with it's index number */
myArray[1] = false;
myArray[3][0] = 6;
output.textContent = `The third element in the array is ${String(myArray[2])}, which is a ${typeof myArray[2]}`;

// You can also change a particular element
console.log('the second element of the array is', myArray[1]);
// An array within an array is called a multidimensional array - it can be accessed by specifying the index of the first array, then the item within it
/* STEP 3: Determining array length
Being able to figure out how many elements are contained in an array is a critical feature of JavaScript programming */
output.textContent = `myArray has ${myArray[3].length} elements inside it`;
// In particular, looping through arrays
for (let i = 0; i < myArray[3].length; i++) {
    //check if element is an array
    if (Array.isArray(myArray[i])) {
        console.log(`The element at index ${i} is an array with ${myArray[i].length} elements inside it`);
    } else {
        console.log(`The element at index ${i} is not an array, it is a ${typeof myArray[i]}`);
    }
}
/* STEP 4: Convert a string to an array
If there is a common character that can act as a delimiter in a string, we can use this character to create an array */
let orig6 = "Toronto Maple Leafs, Chicago Blackhawks, Montreal Canadiens, Boston Bruins, Detroit Red Wings, New York Rangers";
// Output one of the array items
output.textContent = `The first element in the array is ${orig6.split(", ")[0]}`;

// Output the last element of the array
output.textContent = `The last element in the array is ${orig6.split(", ")[orig6.split(", ").length - 1]}`;
/* STEP 5: Convert an array back to a string
Use join() and toString() - note that join() allows you to choose and insert a delimiter, while toString() does not */
let orig6String = orig6Array.join(" / ");
/* STEP 6: Adding and removing items from an array
Without the ability to edit the contents of an array, this type of variable would have limited use - but adding and removing array items is pretty straightforward */

// Adding one or more items to an array with push()
orig6.push("Buffalo Sabres", "New York Islanders");
// If you would like to capture how many elements are in the array after you have edited it, then…

// Removing an item from an array with pop()
let itemRemoved = orig6Array.pop();
// pop() returns the item that was removed, rather than the length of the updated array, so…

// To do the same thing, that is, to add and remove an item from the beginning of the array, use shift() and unshift()
let removedItem = orig6Array.shift();
numitems = orig6Array.unshift("Ottawa Senators", "Winnipeg Jets");
// We can also modify the array contents by deleting or substituting elements, or inserting one or more elements at a certain place with splice()
orig6Array.splice(2, 1, "Florida Panthers", "Tampa Bay Lightning");
/* That's it for the basics of working with arrays! With these tools at your disposal, a whole new world of possibilities with JavaScript are at your command */