// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};
console.log(menu);

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById('menu');
    menuContainer.innerHTML="";
    /*const heading = document.createElement("h3"); // creates h2 for guardian playlist
    heading.textContent = "Banana";
    menuContainer.appendChild(heading);*/
    
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
            const listItem = document.createElement("li");
            listItem.textContent = menu[category][i]; // Set the text to the item name
            listItem.addEventListener('click', () => addToOrder(menu[category][i])); // Attach event listener
            itemList.appendChild(listItem); // Append the list item to the unordered list
        }

        // Append the unordered list to the menu container
        menuContainer.appendChild(itemList);
    }
}
}
//almost forgot to call the function         

displayMenuItems(menu)

// Callback function for adding an item to the order
function addToOrder(itemName) {

    
        const orderList = document.getElementById('order-items');
        const orderItem = document.createElement("li");
        orderItem.textContent = `${itemName.name}`;
        orderList.appendChild(orderItem);



    // Get the order items list and the order total element from the HTML

    // Create a list item for the order

    // Set the text content of the list item to the item name

    // Append the list item to the order items list

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);

