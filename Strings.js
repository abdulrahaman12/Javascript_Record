//1. IndexOf

// let myname = ("Sandvik,Mining,and,Rock,Technology");
// console.log(myname.indexOf('a'));

//2. LastIndexOf - starting from begininng of text it will consider the last text referring to 'o' and read its index number. 
// console.log(myname.lastIndexOf('o'));

//3. Slice (start index, end index)
// postivie index no - starting from front
// negative index no - starting from last 
// And if its (2,4) - it won't 4th index it will display till 3 
// Returns a new array
// let slice1 = "You are from sandvik";
// console.log(slice1.slice(4,-7))
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const myBest = fruits.slice(-3, -1);
// console.log(myBest)

//4. Substring
// It will start only from begininng therefore no it will read negative index
// As same as slice 
// let Substring1 = "You belong to bangalore"
// console.log(Substring1.substring(0,3));

//5. Substr
// () - start index , length till where it should read the index 
// let Substr1 = "You belong to bangalore";
// console.log(Substr1.substr(0,10))

//6. Replace

// It will replace the strings 

// ("Existing", "to be replaced")

// let replace1 = "Start working on Javascript";
// let replacedone = replace1.replace("Start", "Last");
// console.log(replace1);

//7. charAt
// Returns the character at specific location by inputting the index number.
// let char = "My school is vijay";
// let char1 = char.charAt(1);
// console.log(char1)
//7. charCodeAt

// Returns the specific character code of specific index.
// let char = "My school is vijay";
// let char1 = char.charCodeAt(1);
// console.log(char1)

//8. touppercase & lowercase
//9. concat
// It will join the string with exsisting one
// let concat = "Santosh";
// let concatenate = concat.concat(" " + "Raju");
// console.log(concatenate);

//10. trim 
// Mostly used to trim the whitespaces in the string
// let trim1 = "     It will trim the spaces";
// let trimmer = trim1.trim("");
// console.log(trimmer);

//11. split
// splits the strings with ','(commas)
// ("looks for character to split from there", "till length")
// let text = "How are you doing today?";
// let split = text.split("o");
// console.log(split);

//12. toLocaleString
//13. Date & Time
//14. includes

// let includes = "check the following senetence";
// let check = includes.includes("following");
// console.log(check);

//15. Splice - (starting index, index to delete if it is 2 it will delete 2 index values)
// It will not create a new array instead it will modify in an exsisting array 
// Also it will delete an string (2,2) - (start index, to delete an index)
// (2,0, "Ritu") - It will add into an exsisting array after 2nd index
// var a = ['Sanjay','Aman', 'Rehaman','Rahul'];
// let ab= a.splice(-2,1,'Neha');
// console.log(a);
