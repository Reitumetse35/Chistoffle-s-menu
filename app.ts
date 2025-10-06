type Dish = {
    description: string;
    price: number;
};

const menu: Record<string, Dish> = {
    "Pasta Primavera": {
        description: "Fresh vegetables with pasta in a light cream sauce",
        price: 15.99,
    },
    "Grilled Salmon": {
        description: "Salmon filet with lemon butter sauce",
        price: 22.50,
    }
};

const CHEF_PASSWORD = "secret123";

// Show the current menu
function showMenu(): void {
    console.log("\n--- Current Menu ---");
    if (Object.keys(menu).length === 0) {
        console.log("No dishes available.");
        return;
    }

    for (const [dishName, details] of Object.entries(menu)) {
        console.log(`\nDish: ${dishName}`);
        console.log(`  Description: ${details.description}`);
        console.log(`  Price: $${details.price.toFixed(2)}`);
    }
}

// Add a new dish (simulated)
function addDish(): void {
    const name = "Chicken Alfredo";
    if (menu[name]) {
        console.log("Dish already exists.");
        return;
    }

    const description = "Creamy alfredo sauce with grilled chicken and pasta";
    const price = 18.75;

    menu[name] = { description, price };
    console.log(`${name} added successfully.`);
}

// Edit an existing dish (simulated)
function editDish(): void {
    const name = "Grilled Salmon";

    if (!menu[name]) {
        console.log("Dish not found.");
        return;
    }

    const newName = "Herb Grilled Salmon";
    const newDescription = "Salmon filet grilled with fresh herbs";
    const newPrice = 24.00;

    // Rename the dish
    menu[newName] = { ...menu[name] };
    delete menu[name];

    // Update description and price
    menu[newName].description = newDescription;
    menu[newName].price = newPrice;

    console.log("Dish updated successfully.");
}

// Remove a dish (simulated)
function removeDish(): void {
    const name = "Pasta Primavera";
    if (!menu[name]) {
        console.log("Dish not found.");
        return;
    }

    delete menu[name];
    console.log(`${name} removed from the menu.`);
}

// Simulated chef panel
function chefPanel(): void {
    console.log("\n--- Chef Panel Simulation ---");

    showMenu();
    addDish();
    editDish();
    removeDish();

    console.log("\n--- Updated Menu ---");
    showMenu();
}

// Simulated login
function login(): void {
    console.log("=== Private Chef Menu System ===");
    const password = "secret123"; // hardcoded, not from user
    if (password === CHEF_PASSWORD) {
        chefPanel();
    } else {
        console.log("Access denied.");
    }
}

login();
