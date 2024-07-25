// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: [
        { food: "Garlic Bread", price: 60.00 },
        { food: "Bruschetta", price: 60.00 }
    ],
    MainCourses: [
        { food: "Margherita Pizza", price: 60.00 },
        { food: "Spaghetti Carbonara", price: 60.00 }
    ],
    Desserts: [
        { food: "Tiramisu", price: 60.00 },
        { food: "Cheesecake", price: 60.00 }
    ]
};

console.log(menu);

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById('menu');
    menuContainer.innerHTML = "";

    /*const heading = document.createElement("h3"); // creates h2 for guardian playlist
    heading.textContent = "Banana";
    menuContainer.appendChild(heading); i was thinking along this logic*/

    // Loop through each category in the menu object
    for (const category in menu) {
        if (menu.hasOwnProperty(category)) {
            // Creates a heading for the category
            const heading = document.createElement("h2");
            heading.textContent = category; // Set the text to the category name
            menuContainer.appendChild(heading); // Append the heading to the menu container

            // Create an unordered list for the items
            const itemList = document.createElement("ul");

            // Loop through each item in the category
            for (let i = 0; i < menu[category].length; i++) {
                // Create a list item for each item
                const item = menu[category][i];
                const listItem = document.createElement("li");
                listItem.textContent = `${item.food} - R${item.price.toFixed(2)}`;
                listItem.addEventListener('click', () => addToOrder(item)); // Attach event listener
                itemList.appendChild(listItem); // Append the list item to the unordered list
            }

            // Append the unordered list to the menu container
            menuContainer.appendChild(itemList);
        }
    }
}

// Call the function to display menu items
displayMenuItems(menu);

// Callback function for adding an item to the order
function addToOrder(item) {
    const orderList = document.getElementById('order-items');
    const orderItem = document.createElement("li");
    orderItem.textContent = `${item.food} - R${item.price.toFixed(2)}`;
    orderList.appendChild(orderItem);

    // Calculate and update the total price
    updateTotal(item.price);
}

// Function to update the total price
function updateTotal(price) {
    const orderTotal = document.getElementById('order-total');
    let currentTotal = parseFloat(orderTotal.textContent) || 0; // Default to 0 if empty
    currentTotal += price;
    orderTotal.textContent = currentTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
