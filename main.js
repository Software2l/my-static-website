const groceryItems = ["Milk", "Bread", "Eggs", "Apples"];

function displayItems() {
    const ul = document.getElementById("shopping-list");
    ul.innerHTML = ""; // Clear previous items
    groceryItems.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item;
        li.id = `item-${index}`;
        ul.appendChild(li);
    });
}

function setDefaultChecked() {
    // Mark first two items as bought
    for (let i = 0; i < 2; i++) {
        const li = document.getElementById(`item-${i}`);
        if (li) {
            li.style.textDecoration = "line-through";
            li.style.color = "gray";
        }
    }
}

// Call functions after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    displayItems();
    setDefaultChecked();
});