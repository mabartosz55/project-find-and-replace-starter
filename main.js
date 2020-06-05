const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")

// When you call the function belwo, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements(currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}

// YOUR CODE GOES HERE

replaceAllButton.addEventListener("click", function () {
    let findUserInput = findInput.value
    let replaceUserInput = replaceInput.value
    for (let counter = 0; counter < rowElements.length; counter = counter + 1) {
        let currentRowElement = rowElements[counter]
        let currentRowElementCells = getCellElements(currentRowElement)
        
        for (let counter2 = 0; counter2 < currentRowElementCells.length; counter2 = counter2 + 1) {
            let currentRowCellElement = currentRowElementCells[counter2]
            console.log(currentRowCellElement)

            if (currentRowCellElement.innerHTML.includes(findUserInput)) {
                let NewString = currentRowCellElement.innerHTML.replace(findUserInput, replaceUserInput)
                currentRowCellElement.innerHTML = NewString

            }
        }
    }
})

// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
