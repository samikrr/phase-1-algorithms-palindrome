function isPalindrome(word) {
  // Write your algorithm here
  word = word.toLowerCase();

  //initialize first and last characters of the word
  let start = 0;
  let end = word.length -1;

  while(start <= end){
    if(word[start] !== word[end]){
      return false;
    }
    start++;
    end--;
  }
return true;

}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
console.log("Expecting:true");
  console.log("=>", isPalindrome("abba"));

    console.log("");

  console.log("Expecting:true");
  console.log("=>", isPalindrome("racecar"));
  
  console.log("");

  console.log("Expecting:true");
  console.log("=>", isPalindrome("a")); 
  
  console.log("");

  console.log("Expecting:false");
  console.log("=>", isPalindrome("robot"));

  console.log("");


  console.log("Expecting:false");
  console.log("=>", isPalindrome("ab"));



module.exports = isPalindrome;
