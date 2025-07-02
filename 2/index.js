const input = document.getElementById("input")


function reverseString(str) { //create function called reverseString
// created str as parameter cuz it requires more logic  
//we're gonna return str as an array
//we split the value of str by letters hence "" 
//then reverse the array and join the letters together again as a string

    return str.split("").reverse().join("");
    
}

// this is the function that will be called when we click the button
function check() { 
    const value =  input.value;
    const reverse = reverseString(value); //calling the reverseString function and passing the value of input to it
    // this will reverse the string and store it in the reverse variable
    // then we can use it to alert the user or do whatever we want with it

    if (value === reverse) {
        alert("yay! It's a palindrome!!");
    } else {
        alert("wrong xd");
    }

    //remove input after checking
    input.value = "";
    }


