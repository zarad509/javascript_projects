// PALINDROME
const input = document.getElementById("input") //creating const input and getting the line that we want

//logic of reversing the string
function reverseString(str) { //create a function called reverseString with str as parameter

    return str.split("").reverse().join(""); //split str into array of characters -> reverse the characters -> join back the characters
    // returning it to the user 
    
}

//onclick button
function check() { 
    const value =  input.value; //creating a const called value which is whateber the user inputs
    const reverse = reverseString(value); //reverse whatever user inputs


//alerts 
    if (value == 0) {
        alert ("please type something");
        return; //stops the rest of alerts
    }
    if (value === reverse) { 
        alert("yay! It's a palindrome!!");
    } else {
        alert("wrong xd");
    }

    

//remove input after checking
    input.value = "";
    }


// ----------------------------------------


//REVERSE YOUR SENTENCE
const input2 = document.getElementById("input2")

//logic behind reverse the sentence
function reverseWords(words) {
    return words.split(" ").reverse().join(" ");

}

//calling onclick button - logic only happens if button is clicked
function reverse() {
    const value2 = input2.value;
    const reverse2 = reverseWords(value2);

//alerts
    if (value2.includes(" ")) { //if value has a space
        alert(reverse2);
    } else {
        alert ("please separate your words with a space");
    }

}


