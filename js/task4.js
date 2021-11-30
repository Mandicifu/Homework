// Create an array
let elements = [ 'Earth', 'Mars', 'Jupiter', 'Saturn' ]

document.getElementById("output").innerHTML = "Planets"

// document.getElementById("")
let body = document.getElementById("body")

// Iterate through the array with a loop
let i = 0
while (i < 4) {
    // <tr><td> text </td></tr>
    let row = document.createElement("tr")
    let cell = document.createElement("td")
    let text = document.createTextNode(elements[i])
    cell.appendChild(text)
    row.appendChild(cell)
    body.appendChild(row)

    i = i + 1
}
