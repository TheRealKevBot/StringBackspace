// Assume "#" is like a backspace in string. 
// This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

function cleanString(s) {
	// your code...
}; 

console.log(cleanString('abc#d##c'), "Answer: 'ac'")
console.log(cleanString('abc####d##c#'), "Answer: ''" )