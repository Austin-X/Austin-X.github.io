// Select the item counter fields and fill item counter fields with 0
const totalCounts = document.getElementsByClassName("total-count");
const numberOfItems = totalCounts.length;
function fillCounterArrayWithZeroes() { for (let i = 0; i < numberOfItems; i++) totalCounts[i].innerHTML = 0; }
function comparator(a, b) { return a.textContent < b.textContent ? -1 : 1; }
fillCounterArrayWithZeroes();

// Select increment and decrement buttons
const incrementCounts = document.getElementsByClassName("increment-count");
const decrementCounts = document.getElementsByClassName("decrement-count");

// Add click event to increment and decrement buttons
for (let i = 0; i < numberOfItems; i++) {
    const counter = incrementCounts[i].parentElement.getElementsByTagName("span")[2];
    incrementCounts[i].addEventListener("click", () => {
        counter.innerHTML = Math.max(Number(counter.innerHTML) + 1, 0);
    });
    decrementCounts[i].addEventListener("click", () => {
        counter.innerHTML = Math.max(Number(counter.innerHTML) - 1, 0);
    });
}

// Select the "sorting alphabetically" button and "reset" button
const sortAlphabeticallyButton = document.getElementById("sort-alphabetically-button");
const resetButton = document.getElementById("reset-button");

// Add click event to "sorting alphabetically" button and "reset" button
sortAlphabeticallyButton.addEventListener("click", () => {
    $('.sort').sort(comparator).appendTo("#shopping-list");
});
resetButton.addEventListener("click", () => { fillCounterArrayWithZeroes(); });

// Setting up the text for the "Sort By" button when the user changes the recipe sorting option
const recipeSortByButton = document.getElementById("recipe-sort-by-button");
const recipeSortOptions = document.getElementById("recipe-sort-options").getElementsByTagName("li");
for (const sortOption of recipeSortOptions) {
    sortOption.addEventListener("click", () => { recipeSortByButton.innerHTML = "Sort By: " + sortOption.children[0].textContent});
    console.log(sortOption.children[0]);
}