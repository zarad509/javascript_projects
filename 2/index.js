const input = document.getElementById("input")


function reverseString(str) { //create function called reverseString
// str is parameter cuz it requires more logic  
//we're gonna return str as an array

//we split the value of str by letters hence "" 
//then reverse the array and join the letters together again
    return str.split("").reverse().join("")
    
}

function check() {
    const value = "the value is " + input.value
    const reverse = reverseString(value)
    alert(reverse)


}