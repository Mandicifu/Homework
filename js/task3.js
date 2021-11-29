// Prompt with input
let value = prompt("Give me a number:")
console.log(value)

// If statement
if (value < 10) {
    // Alert the result
    alert("I'm inside the IF")
    // Print to the DOM
    document.getElementById("output").innerHTML = "I'm inside the IF"
}
